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


json_str_type = ("string" )
json_int_type = ( "int32", "int64", "uint32", "uint64")
json_num_type = ( "float64", "float32", "int32", "int64", "uint32", "uint64")
baseTypeList = ("bool","int","int32","uint32","int64","uint64","float","float32","float64","string") #语言基础类型
type_map = {"long":"int64","float":"float32","double":"float64","boolean":"bool","int":"int32"} #替换类型
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


def getTsFieldType(jsontype):
	if IsStringType(jsontype):
		return "string"
	elif IsNumberType(jsontype):
		return "number"
	elif IsBoolType(jsontype):
		return "boolean"
	return str(jsontype)

def getTsFieldString(field,jsontype):
	if IsStringType(jsontype):
		return "public {0} : string = \"\";".format(field)
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
	export class %s {'''%(structName)
			for index, field in enumerate(fields):
				fieldType = fieldTypes[index]
				if fieldType in type_map:
					fieldType = type_map[fieldType]
				selfDefStructStr += '''
		%s'''%(getTsFieldString(field,fieldType))
			selfDefStructStr += "\n\t}"
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
				keyType = " Array < {0} > ".format(tmpType)
			elif tmpType in baseTypeList:
				keyType = " Array < {0} > ".format(getTsFieldType(tmpType))
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
		%s'''%(getTsFieldString(key,keyType))
	configStructStr='''
	export class ConfigGlobal {%s
	}'''%(structFieldString)

	return configStructStr



def GenExcel2Ts(indir):
	selfDefInfoStr = ""
	selfDefInfo = []
	selfDefSettingFile = indir+"/ExportSetting.xlsx"
	if os.path.isfile(selfDefSettingFile) == False:
		print("there is no ExportSetting")
		os.system("pause")
	else:
		selfDefInfoStr,selfDefInfo = genSelfDefSetting(selfDefSettingFile)
	outdir = indir+"/Script"
	indir = indir+"/Common"
	files = os.listdir(indir)
	globalSetStr = ""
	configStructStr = ""
	configStructGetStr = ""
	configFieldStr = ""
	configFieldGetStr = ""

	globalSetFieldStr = ""
	globalSetFieldGetStr = ""
	for file in files:
		if (os.path.splitext(file)[1] == '.xlsx' or os.path.splitext(file)[1] == '.xlsm') and os.path.splitext(file)[0].startswith("~") != 1 :
			filename = os.path.join(indir,file)
			print("parse excel to ts--------{0}".format(filename))
			if filename.find('Global.xlsx') != -1:
				globalSetFieldStr = "private m_Global : ConfigGlobal = null;"
				globalSetFieldGetStr = """
		public get Global(){
			return this.m_Global;
		}
				"""
				globalSetStr = genGlobalSetConfig(filename,selfDefInfo)
				continue
			#解析单个excel文件
			str1,str2,str3,str4 = ParseExcelToTs(filename,os.path.splitext(file)[0],selfDefInfo)
			configStructStr += str1
			configStructGetStr += str2
			configFieldStr += str3
			configFieldGetStr += str4
	with open("%s/ConfigManager.ts" %outdir,"w+") as f2:
		f2.write(
'''namespace configs{%s

	export class ConfigManager {
		%s
		private m_ErrStr : Map<number, string > = null;%s

		public get ErrStr(){
			return this.m_ErrStr;
		}
		%s
		public getErrStr(id: number): string{
			let obj = this.m_ErrStr[id];
			if (obj == null){
				return "";
			}
			return obj;
		}
		%s
		public loadConfig(jsonText : string) {
			let configItem= JSON.parse(jsonText);
			for(let key in configItem)
			{
				if(key == "Global") {
					this.m_Global = configItem[key];
					continue
				}
				for(let key1 in configItem[key])
				{
					this["m_" + key][Number.parseInt(key1)] = configItem[key][key1];
				}
			}
		}
	}
}
'''%(selfDefInfoStr+globalSetStr+configStructStr,globalSetFieldStr,configFieldStr,globalSetFieldGetStr+configFieldGetStr,configStructGetStr)
			)
	print("parse excel to ts success")


def ParseExcelToTs(filename, excelname,selfDefInfo):
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
	if(nrows < 4):
		return "","","",""
	for colnum in range(0, ncols):
		parseType = sheet.cell_value(rowDef['ParseType'],colnum)
		if canParseData(False,parseType) == False:
			continue
		jsonname = sheet.cell_value(rowDef['key'],colnum)
		jsontype = sheet.cell_value(rowDef['type'],colnum)
		jsontype = str(jsontype).strip()
		jsonname = str(jsonname).strip()
		key = jsonname
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
				keyType = " Array < {0} > ".format(tmpType)
			elif tmpType in baseTypeList:
				keyType = " Array < {0} > ".format(getTsFieldType(tmpType))
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
			return "","","",""
		keys.append([key,keyType])
		structFieldString += '''
		%s'''%(getTsFieldString(key,keyType))
	if len(keys) == False:
		return "","","",""

	configStructStr='''
	export class Config%s {%s
	}'''%(structName,structFieldString)

	configStructGetStr='''
		public get%s(id: number): Config%s {
			let obj = this.m_%s[id];
			if (obj == null){
				return null;
			}
			return obj;
		}
	''' %(structName,structName,structName)

	configFieldStr = "\n\t\tprivate m_{0} : Map<number, Config{0} > = null;".format(structName)
	configFieldGetStr = """
		public get %s(){
			return this.m_%s;
		}
	"""%(structName,structName)
	return configStructStr, configStructGetStr,configFieldStr,configFieldGetStr




def readXMLS(xmlsFile, outdir):
	workbook = xlrd.open_workbook(xmlsFile)
	sheet = workbook.sheet_by_index(0) 
	nrows = sheet.nrows
	ncols = sheet.ncols
	if(nrows < 4):
		return "","","",""
	exportPropField(sheet, nrows, outdir)
	exportPropId(sheet, nrows, outdir)
	exportPropUnit(sheet, nrows, outdir)


def exportPropField(sheet, nrows,outdir):

	fieldListStr = ""

	for row in range(4, nrows):
		id = sheet.cell_value(row,0)
		field = sheet.cell_value(row,1)
		name = sheet.cell_value(row,2)
		id = int(id)
		fieldStr = '''
		/** %s */
		static %s = "%s";
		'''%(name, field, field)

		fieldListStr += fieldStr

	outFielPath = "%s/PropField.ts" %outdir
	print(outFielPath)
	with open(outFielPath,"w+") as f2:
		f2.write('''
/** 属性字段 */
export class PropField 
{
	%s
}

	'''%(fieldListStr))



def exportPropId(sheet, nrows,outdir):

	fieldListStr = ""

	for row in range(4, nrows):
		id = sheet.cell_value(row,0)
		field = sheet.cell_value(row,1)
		name = sheet.cell_value(row,2)
		id = int(id)
		fieldStr = '''
		/** %s */
		static %s = %s;
		'''%(name, field, id)

		fieldListStr += fieldStr

	outFielPath = "%s/PropId.ts" %outdir
	print(outFielPath)
	with open(outFielPath,"w+") as f2:
		f2.write('''
/** 属性Id */
export class PropId
{
	%s
}

	'''%(fieldListStr))



def exportPropUnit(sheet, nrows,outdir):

	fieldListStr = ""
	fieldViewListStr = ""
	fieldBaseListStr = ""
	fieldAddListStr = ""
	fieldPerListStr = ""
	fieldStateListStr = ""

	fieldStr = '''

	'''

	for row in range(4, nrows):
		id = sheet.cell_value(row,0)
		field = sheet.cell_value(row,1)
		name = sheet.cell_value(row,2)
		groupType = sheet.cell_value(row,5)
		id = int(id)
		groupType = int(groupType)
		# final
		fieldStr = '''
		/** %s , 当前值 */
		get %s():intwf
        {
            return this.finals.get(PropId.%s);
        }
		'''%(name, field, field)

		# /** %s , 当前值 */
		# set %s(value: intwf)
        # {
        #     this.finals.set(PropId.%s, value);
        # }

		# '''%(name, field, field, field, field, field)

		# if field == 'HP':
		# 	fieldStr = '''
		# /** 当前生命 , 当前值 */
		# get HP():intwf
        # {
        #     return this.finals.get(PropId.HP);
        # }

		# /** HP , 当前值 */
		# set HP(value: intwf)
        # {
        #     value = value < 0? 0: value;
        #     value = value > this.HPMax? this.HPMax: value;
        #     this.finals.set(PropId.HP, value);
        # }'''	


		# if field == 'MP':
		# 	fieldStr = '''
		# /** 当前魔法 , 当前值 */
		# get MP():intwf
        # {
        #     return this.finals.get(PropId.MP);
        # }

		# /** MP , 当前值 */
		# set MP(value: intwf)
        # {
        #     value = value < 0? 0: value;
        #     value = value > this.MPMax? this.MPMax: value;
        #     this.finals.set(PropId.MP, value);
        # }'''	
        
		# if field == 'Fury':
		# 	fieldStr = '''
		# /** 怒气 , 当前值 */
		# get Fury():intwf
        # {
        #     return this.finals.get(PropId.Fury);
        # }

		# /** Fury , 当前值 */
		# set Fury(value: intwf)
        # {
        #     value = value < 0? 0: value;
        #     value = value > EnumSkill.FuryMax? EnumSkill.FuryMax: value;
        #     this.finals.set(PropId.Fury, value);
        # }'''	



		fieldListStr += fieldStr



		# base
		fieldStr = '''
		/** %s, 基础值 */
		get %sBase():intwf
        {
            return this.bases.get(PropId.%s);
        }
		set %sBase(value : int)
        {
            this.bases.get(PropId.%s);
			this.CalculateFinal(PropId.%s);
        }
		'''%(name, field, field, field, field, field)
		fieldBaseListStr += fieldStr

		# add
		fieldStr = '''
		/** %s ， 附加的具体值 */
		get %sAdd():intwf
        {
            return this.adds.get(PropId.%s);
        }
		set %sAdd(value : number)
        {
            this.adds.set(PropId.%s, value);
			this.CalculateFinal(PropId.%s);
        }
		'''%(name, field, field, field, field, field)
		fieldAddListStr += fieldStr

		# per
		fieldStr = '''
		/** %s , 附加的百分比，仅仅包括基础值 */
		get %sPer():intwf
        {
            return this.addpers.get(PropId.%s);
        }
		set %sPer(value : number)
        {
            this.addpers.set(PropId.%s, value);
			this.CalculateFinal(PropId.%s);
        }
		'''%(name, field, field, field, field, field)
		fieldPerListStr += fieldStr

		# per
		fieldStr = '''
		/** %s , 附加的百分比，包括基础值和附加值 */
		get %sPerAll():intwf
        {
            return this.addPersAll.get(PropId.%s);
        }
		set %sPerAll(value : number)
        {
            this.addPersAll.set(PropId.%s, value);
			this.CalculateFinal(PropId.%s);
        }
		'''%(name, field, field, field, field, field)
		fieldPerListStr += fieldStr

		# state
		if(groupType == 2):
			fieldStateStr = '''
			/** %s , 当前状态 */
			get Is%s():boolean
	        {
	            return this.finals.get(PropId.%s) > 0;
	        }
			'''%(name, field, field)
			fieldStateListStr += fieldStateStr

		# view
		if(groupType != 2):
			fieldStateStr = '''
			/** %s , 当前视图值 */
			get %sView():int
	        {
	        	return IntMath.DivideFloor( this.finals.get(PropId.%s), IntMath.BaseCalFactor) ;
	        }
			'''%(name, field, field)
			fieldViewListStr += fieldStateStr

	outFielPath = "%s/ComponentProp.ts" %outdir
	print(outFielPath)
	with open(outFielPath,"w+") as f2:
		f2.write('''
/*
 * @Descripttion: 角色属性组件
 * @version: 
 * @Author: ZengFeng
 * @Date: 2019-10-15 18:39:10
 * @LastEditors: ZengFeng
 * @LastEditTime: 2019-10-15 19:07:00
 */
/**
 * 角色的各种属性组件
 */
import { AbstractComponent } from "../../CoreLib/ECS/AbstractComponent";
import PropHelper from "../../../GameFrame/Props/PropHelper";
import { PropId } from "../../../GameFrame/Props/PropId";
import IntMath from "../../CoreLib/IntMath/IntMath";
import { EnumSkill } from "../Enum/EnumSkill";
import IntFactor from "../../CoreLib/IntMath/IntFactor";

export class ComponentProp extends AbstractComponent
{
 	/** 战斗基础属性 */
    bases:Map<int, intwf> = new Map<int, intwf>();
    /** 附近的具体值 */
    adds:Map<int, intwf> = new Map<int, intwf>();
    /** 附加的百分比,针对基础的 */
    addpers:Map<int, intwf> = new Map<int, intwf>();
    /** 附加的百分比，针对基础和附加的 */
    addPersAll : Map<int, intwf> = new Map<int, intwf>();
    /** 当前值属性 */
    finals:Map<int, intwf> = new Map<int, intwf>();
    
    /** 累计伤害, 数值 万分比 */
    Damage:intwf = 0;

    constructor()
    {
        super();
        this.reset();
    }

    reset()
    {
        this.Damage = 0;
        let idList = PropHelper.PropIdList;
        for(let propId of idList)
        {
            this.bases.set(propId, 0);
            this.adds.set(propId, 0);
            this.addpers.set(propId, 0);
			this.addPersAll.set(propId, 0);
            this.finals.set(propId, 0);
        }
    }

    init(list: int[][])
    {
        for(let item of list)
        {
            let id = item[0];
            let val = item[1];
            this.bases.set(id, val);
            this.finals.set(id, val);
        }
    }

    clone():ComponentProp
    {
        let com = ComponentProp.PoolGet<ComponentProp>();
        // 战斗基础属性
        this.bases.forEach((value, key)=>
        {
            com.bases.set(key, value);
        });

        // 附近的具体值
        this.adds.forEach((value, key)=>
        {
            com.adds.set(key, value);
        });
        
        // 附加的百分比
        this.addpers.forEach((value, key)=>
        {
            com.addpers.set(key, value);
        });

        // 当前值属性
        this.finals.forEach((value, key)=>
        {
            com.finals.set(key, value);
        });

        com.Damage = this.Damage;
        return com;
    }

    
    /**
     * 重置
     */
    onPoolRecover(): void
    {
      this.reset();
    }
	/**
     * 重新计算最终值
     * @param propId 对应的属性id，请去PropId里面查找对应的属性
     */
    CalculateFinal(propId : number)
    {
        let wfRes : intwf = 0;
        let wfPerBase : intwf = IntMath.BaseCalFactor + this.addpers.get(propId) + this.addPersAll.get(propId);
        let wfPerAll : intwf = IntMath.BaseCalFactor + this.addPersAll.get(propId);
        wfRes += (IntFactor.Mul(wfPerBase, this.bases.get(propId)));
        wfRes += (IntFactor.Mul(wfPerAll, this.adds.get(propId)));
        this.finals.set(propId, wfRes);   
    }

    //========================
    // 当前值
    //------------------------
	%s

    //========================
    // 基础值
    //------------------------
	%s

    //========================
    // 附加的具体值
    //------------------------
	%s

    //========================
    // 附加的百分比
    //------------------------
	%s

    //========================
    // 当前状态
    //------------------------
	%s

    //========================
    // 视图值
    //------------------------
	%s

	
}

	'''%(fieldListStr, fieldBaseListStr, fieldAddListStr, fieldPerListStr, fieldStateListStr, fieldViewListStr))



def main():
	reload(sys)
	sys.setdefaultencoding("utf-8")
	try:
		opts, args = getopt.getopt(sys.argv[1:], "h", ["help", "dir="])
	except getopt.GetoptError, err:   
		print str(err)
		sys.exit(-2)
	indir = "../"
	for o, a in opts:
		if o in ['-h',"--help"]:
			usage()
			sys.exit(0)
		elif o == "--dir":
			indir = a
		else:
			assert False, "未处理操作"
	xmlsFile = indir+"/Common/Property.xlsx" 
	outdir = "../Script/ExcelConfigTS/Props"
	readXMLS(xmlsFile, outdir)

def usage():
	print "usage: \n\t--dir=Excel dir\n\t\n"
 
if __name__ == "__main__":
	main()
	sys.exit(0)

	 
