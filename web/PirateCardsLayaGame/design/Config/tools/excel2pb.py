#!/usr/bin/python
#_*_coding:utf-8_*_
# add by wuqiusheng change excel to json 2018/12/18
#默认值0都不写入json文件中
#解析字段1 服务器 2 客户端 3客户端和服务器公用
import xlrd
import os
import sys
import re
import getopt
import google.protobuf.json_format as pb_json_format

json_str_type = ("string" )
json_int_type = ( "int32", "int64", "uint32", "uint64")
json_num_type = ( "float64", "float32", "int32", "int64", "uint32", "uint64")
baseTypeList = ("bool","int","int32","uint32","int64","uint64","float","float32","float64","string") #语言基础类型
type_map = {"long":"int64","float":"double","double":"double","boolean":"bool","int":"int32"} #替换类型
rowDef = {'type':0,"commit":1,'key':2,'ParseType':3} #excel表头定义


def IsBoolType(typename):
	return typename == "bool"
def IsStringType(typename):
	return (typename in json_str_type)
def IsNumberType(typename):
	return (typename in json_num_type)
def IsIntType(typename):
	return (typename in json_int_type)
def IsBoolType(typename):
	return typename == "bool"

#解析字段1 服务器 2 客户端 3客户端和服务器公用
def canParseData(isserver,outtype):
	outtype = int(outtype)
	if (isserver == True and (outtype== 1 or outtype == 3)):
		return True
	elif (isserver == False and (outtype== 2 or outtype == 3)):
		return True
	return False


def getPbFieldType(jsontype):
	if IsStringType(jsontype):
		return "string"
	return str(jsontype)

def getPbFieldString(field,jsontype,index):
	if IsStringType(jsontype):
		return "string {0}  = {1};".format(field,index)
	elif IsNumberType(jsontype):
		return "public {0} : number = 0;".format(field)
	elif IsBoolType(jsontype):
		return "public {0} : boolean = false;".format(field)
	return "public {0} : {1} = null;".format(field,jsontype)


#读取ExportSetting自定义数据类型
#ret selfDefInfoStr
#ret selfDefInfo{结构体名}
def genSelfDefSetting(fname):
	selfDefInfoStr = ""
	selfDefInfo = []
	workbook = xlrd.open_workbook(fname)
	for sheetname in workbook.sheet_names():
		if(sheetname !="StructSheet"):
			continue
		sheet = workbook.sheet_by_name(sheetname)
		nrows = sheet.nrows
		ncols = sheet.ncols
		if(nrows < 4):
			continue
		for rownum in range(4, nrows):
			structName = sheet.cell_value(rownum,0)
			fields = sheet.cell_value(rownum,2).split(";")
			fieldTypes = sheet.cell_value(rownum,3).split(";")
			if len(fields) != len(fieldTypes):
				print("parse ExportSetting error struct:{0},fiels length is not equal to types length".format(structName))
				os.system("pause")
				return selfDefInfoStr,selfDefInfo
			newFields = []
			newTypes = []
			fieldStr = ""
			selfDefStructStr = '''
message %s 
{'''%(structName)
			for index, field in enumerate(fields):
				field = field[0].upper() + field[1:]
				fieldType = fieldTypes[index]
				if fieldType in type_map:
					fieldType = type_map[fieldType]
				selfDefStructStr += '''
	%s %s = %d;'''%(fieldType, field,index+1)
			selfDefStructStr += "\n}\n"
			selfDefInfoStr += selfDefStructStr
			selfDefInfo.append(structName)
	return selfDefInfoStr,selfDefInfo


#读取globalSet表格
def genGlobalSetConfig(filename,selfDefInfo):
	workbook = xlrd.open_workbook(filename)
	sheet = workbook.sheet_by_index(0)
	nrows = sheet.nrows
	ncols = sheet.ncols
	structFieldString = ""
	for rownum in range(0, nrows):
		jsonname = sheet.cell_value(rownum,1)
		jsontype = sheet.cell_value(rownum,2)
		jsonvalue = sheet.cell_value(rownum,3)
		jsontype = str(jsontype).strip()
		jsonname = str(jsonname).strip()
		key = jsonname
		if jsontype in type_map:
				jsontype = type_map[jsontype]
		keyType = jsontype
		if jsontype.endswith("[]"):
			tmpType = jsontype[:-2]
			if tmpType in type_map:
					tmpType = type_map[tmpType]
			if tmpType in selfDefInfo:
				keyType = "repeated {0}".format(tmpType)
			elif tmpType in baseTypeList:
				keyType = "repeated {0}".format(tmpType)
			else:
				print("type error:can not find type:{0}".format(jsontype))
				os.system("pause")
		elif jsontype in selfDefInfo:
			keyType = jsontype
		elif jsontype in baseTypeList:
			keyType = jsontype
		else:
			print("type error:can not find type:{0}".format(jsontype))
			os.system("pause")
			return ""
		structFieldString += '''
	%s %s = %d;''' % (keyType, key, rownum + 1)
	configStructStr='''
message Global 
{%s
}\n'''%(structFieldString)

	return configStructStr

def GenExcel2Pb(indir, noPB):
	selfDefInfoStr = ""
	selfDefInfo = []
	selfDefSettingFile = indir+"/ExportSetting.xlsx"
	if os.path.isfile(selfDefSettingFile) == False:
		print("there is no ExportSetting")
		os.system("pause")
	else:
		selfDefInfoStr,selfDefInfo = genSelfDefSetting(selfDefSettingFile)
	outdir = indir+"/Script"
	datadir = indir+"/ExcelJson"
	indir = indir+"/Common"
	files = os.listdir(indir)
	globalSetStr = ""
	configStructStr = ""
	configStructGetStr = ""
	configFieldStr = ""
	configFieldGetStr = ""

	globalSetFieldStr = ""
	globalSetFieldGetStr = ""
	configField = []
	configFieldLangMap = {}
	for file in files:
		if  (os.path.splitext(file)[1] == '.xlsx' or os.path.splitext(file)[1] == '.xlsm') and os.path.splitext(file)[0].startswith("~") != 1 :
			filename = os.path.join(indir,file)
			print("parse excel to pb--------{0}".format(filename))
			if filename.find('Global.xlsx') != -1:
				globalSetStr = genGlobalSetConfig(filename,selfDefInfo)
				continue
			#解析单个excel文件
			str1,str2,langKeys = ParseExcelToPb(filename,os.path.splitext(file)[0],selfDefInfo)
			configStructStr += str1
			if str2 == "":
				continue
			configField.append(str2)
			configFieldLangMap[str2] = langKeys


	excelconfigSources = '''
declare namespace excelconfigSources
{
'''

	configExtendsLang = "import Game from '../Game';\n"
	for v in configField:
		
		# XxxConfigLang
		langKeys = configFieldLangMap[v]
		langFieldList = ""
		for langKey in langKeys:
			langePBFileName = langKey.replace("_", " ")
			langePBFileName = langePBFileName.title().replace(" ", "")
			langePBFileName = langePBFileName[0:1].lower() + langePBFileName[1:]
			langeFileName = langKey.replace("zh_cn_", "")
			langField = """
	get %s():string
	{
		if(!Game.lang.isUseLang)
			return this.%s

		let value = <string> Game.lang.getValue('%s', this.id, '%s');
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.%s
	}
"""%(langeFileName, langePBFileName, v, langePBFileName, langePBFileName)
			langFieldList += langField

		configExtendsLang +=  """

export class %sConfigLang extends excelconfigSources.%s
{
%s
}"""%(v, v, langFieldList)

		
		# XxxConfig
		configExtends =  """
import {%sConfigLang} from "../ExcelConfigLange";
export default class %sConfig extends %sConfigLang
{
}"""%(v, v, v)
		
		with open("%s/ExcelConfigTS/ConfigExtends/%sConfig.ts" %(outdir, v),"w+") as f2:
			f2.write(configExtends)
			

		# XxxConfigRender
		configRenderExtends = """

import ExcelConfigReader from "../ExcelConfigReader";
import %sConfig from "../ConfigExtends/%sConfig";
export default class %sConfigReader extends ExcelConfigReader<%sConfig>
{
}"""%(v, v, v, v)
		
		with open("%s/ExcelConfigTS/ReaderExtends/%sConfigReader.ts" %(outdir, v),"w+") as f2:
			f2.write(configRenderExtends)

		# excelconfigSources
		excelconfigSources +='''
	class %s extends excelconfig.%s 
    {

    }
'''%(v, v)



	excelconfigSources += '''
}
'''

	# excelconfig-sources.d.ts
	with open("%s/ExcelConfigTS/excelconfig-sources.d.ts" %(outdir),"w+") as f2:
		f2.write(excelconfigSources)

	# ExcelConfigLange
	with open("%s/ExcelConfigTS/ExcelConfigLange.ts" %(outdir),"w+") as f2:
		f2.write(configExtendsLang)






	configFileReplace = ""
	configStructImport = ""

	configReader = ""
	configReaderField = ""
	configFieldTmp = ""
	configFieldTmp += "\tGlobal Global = 1;\n"
	i= 2
	for v in configField:
		configFieldTmp += "\tmap<int32,{0}> {1} = {2};\n".format(v,v,i)
		configReader += "import {0}ConfigReader from './ReaderExtends/{1}ConfigReader';\n".format(v,v)
		fieldName = v[0:1].lower() + v[1:]
		configReaderField +=  "\t{0} = new {1}ConfigReader('{1}', {1}Config);\n".format(fieldName,v)
		configFileReplace += "\t\texcelconfig.{0} = {0}Config;\n".format(v)
		configStructImport += "import {0}Config from './ConfigExtends/{0}Config';\n".format(v)
		i += 1

	


	configManager = """
export class ExcelConfigManager
{
	static pbconfig:excelconfig.ConfigMng;
%s
	static Init()
	{
%s
	}
}"""%(configReaderField, configFileReplace)

	with open("%s/ExcelConfigTS/ExcelConfigManager.ts" %outdir,"w+") as f2:
		f2.write(
'''
import ExcelConfigReader from "./ExcelConfigReader";
%s
%s
%s
'''%(configStructImport, configReader, configManager)
			)


	configMng = """
message ConfigMng
{
%s
}"""%(configFieldTmp)

	with open("%s/excelconfig.proto" %outdir,"w+") as f2:
		f2.write(
'''syntax = "proto3";
%s
%s
'''%(selfDefInfoStr+globalSetStr+configStructStr,configMng)
			)



	os.system('pbjs -t static-module -w commonjs -o %s/ExcelConfigTS/excelconfig.js %s/excelconfig.proto' %(outdir, outdir))
	os.system('pbts -o %s/ExcelConfigTS/excelconfig.d.ts %s/ExcelConfigTS/excelconfig.js' %(outdir, outdir))
	updateProtoTsFile("%s/ExcelConfigTS/excelconfig.d.ts"%(outdir))
	updateProtoJsFile("%s/ExcelConfigTS/excelconfig.js"%(outdir), True, False)
	
	if noPB == False :
		print("begin export pb")
		os.system('protoc.exe --python_out=%s -I=%s %s' % (outdir, outdir, "excelconfig.proto"))
		sys.path.append(outdir)
		import excelconfig_pb2 
		config = excelconfig_pb2.ConfigMng()
		
		with open(datadir + "/clientConfig.json", 'r')as f:
			data = f.read()
		pb_json_format.Parse(data, config)

		pb = config.SerializeToString()

		with open(datadir +"/excelconfig.bin", 'wb')as f1:
			f1.write(pb)
	else:
		print("no export pb")
	
	print("parse excel to pb success")


def ParseExcelToPb(filename, excelname,selfDefInfo):
	configStructStr=""
	configStructGetStr=""
	configFieldStr=""

	structName = excelname[0].upper() + excelname[1:]
	keys = []
	Id= "Id"
	idType = 'int32'
	structFieldString = ""

	workbook = xlrd.open_workbook(filename)
	sheet = workbook.sheet_by_index(0)
	nrows = sheet.nrows
	ncols = sheet.ncols

	langKeys = []
	if(nrows < 4):
		return "","", langKeys
	for colnum in range(0, ncols):
		parseType = sheet.cell_value(rowDef['ParseType'],colnum)
		if canParseData(False,parseType) == False:
			continue
		jsonname = sheet.cell_value(rowDef['key'],colnum)
		jsontype = sheet.cell_value(rowDef['type'],colnum)
		jsontype = str(jsontype).strip()
		jsonname = str(jsonname).strip()
		key = jsonname

		if key.startswith("zh_cn_"):
			langKeys.append(key)



		if jsontype in type_map:
				jsontype = type_map[jsontype]
		if key == 'Id':
			idType = jsontype
		keyType = jsontype
		if jsontype.endswith("[]"):
			tmpType = jsontype[:-2]
			if tmpType in type_map:
					tmpType = type_map[tmpType]
			if tmpType in selfDefInfo:
				keyType = "repeated {0}".format(tmpType)
			elif tmpType in baseTypeList:
				keyType = "repeated {0}".format(tmpType)
			else:
				print("type error:can not find type:{0}".format(jsontype))
				os.system("pause")
		elif jsontype in selfDefInfo:
			keyType = jsontype
		elif jsontype in baseTypeList:
			keyType = jsontype
		else:
			print("type error:can not find type:{0}".format(jsontype))
			os.system("pause")
			return "","", langKeys
		keys.append([key,keyType])
		structFieldString += '''
	%s %s = %d;''' % (keyType, key, colnum + 1)
	if len(keys) == False:
		return "","", langKeys

	configStructStr='''
message %s 
{%s
}\n'''%(structName,structFieldString)
	configFieldStr = structName
	return configStructStr,configFieldStr, langKeys

#laya使用
def updateProtoTsFile(file):
	if os.path.exists(file) == False:
		return
	type_map = {"Long":"any"}
	buf = []
	fp = open(file,"r+")
	flag = False
	buf.append("declare module excelconfig {\n")
	for line in fp:
		tmp = line
		if line.find("*")> 0 or line.strip() == "":
			continue
		if flag == False:
			index = line.find("Long")
			if index != -1:
				tmp = line[:index]+"any"+line[index+4:]
			#line.replace("Long","any")
			if tmp.startswith("export"):
				tmp = tmp[6:]
			tmp = "\t"+tmp
			buf.append(tmp)
	buf.append("}\n")
	fp.seek(0,0)
	fp.truncate()
	for i in buf:
		fp.write(i)
	fp.close()

def updateProtoJsFile(file,islaya,iscocos):
	if os.path.exists(file) == False:
		return False
	buf = []
	with open(file,"r") as f:
		old=f.readlines()
	for line in old:
		tmp = line.strip()
		if tmp == "" or tmp.startswith("/*") or tmp.startswith("*") or tmp.startswith("//"):
			continue
		
		num=line.count('var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});')
		if num > 0:
			line = line.replace('var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});', 'var $excelRoot = $protobuf.roots["excelconfig"] || ($protobuf.roots["excelconfig"] = {});')

		num=line.count("$root")
		if num > 0:
			line = line.replace("$root", "$excelRoot")
		
		
		buf.append(line)
	if islaya :
		buf[1] = "var $protobuf = protobuf;\n"
	if iscocos:
		buf[1] = "var $protobuf = require(\"protobuf\");\n"
	
	buf.insert(4,"var excelconfig = $excelRoot;\nvar module = {}\n")	
	buf.append("window.excelconfig = $excelRoot;")
	buf.append("""
	
var excelconfigSources = {};
window.excelconfigSources = excelconfigSources;
for(var key in excelconfig)
{
    excelconfigSources[key] = excelconfig[key];
}
""")
	

	with open(file,"w") as f:
		f.writelines(buf)
	return True

def main():
	reload(sys)
	sys.setdefaultencoding("utf-8")
	try:
		opts, args = getopt.getopt(sys.argv[1:], "h", ["help", "noPB", "dir="])
	except getopt.GetoptError, err:   
		print str(err)
		sys.exit(-2)
	indir = "."
	noPB = False
	for o, a in opts:
		if o in ['-h',"--help"]:
			usage()
			sys.exit(0)
		elif o == "--dir":
			indir = a
		elif o in ["--noPB"]:
			noPB = True
		else:
			assert False, "未处理操作"
	GenExcel2Pb(indir, noPB)

def usage():
	print "usage: \n\t--dir=Excel dir\n\t\n"
 
if __name__ == "__main__":
	main()
	sys.exit(0)

	 