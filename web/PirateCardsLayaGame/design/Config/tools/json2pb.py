#!/usr/bin/python
#_*_coding:utf-8_*_
# add by wuqiusheng parse json to protobuf 2019/12/12
#该脚本处理同一个目录下的json文件
#所有 *.lh 和*.json文件
#要求 json生成的proto同名消息具有相同字段名时，字段类型必须一致，否则解析失败，会报错

#参数 输入目录 indir，输出目录 outdir
#生成文件 
#basedir.json
#basedir.proto
#basedir.bin
#basedir.js
#basedir.d.ts

#TODO 同名问题 待解决（目前引擎生成的json文件都具备规律性，不会出现这个问题。如果是自定义的json可能会出现，同时脚本执行会报错）
#1.不同文件同消息名 字段名相同，类型不一致怎么处理，
#2. 同文件同消息名 字段名相同，类型不一致怎么处理

#特殊符号 转换
# __n__        \
#__a__        @
#__s__        space

import json
import os
import sys
import re
import getopt
import imp
import google.protobuf.json_format as pb_json_format

def Rename(indir,name):
	s = name.replace(indir+"\\","").replace(" ","__s__").replace("\\","__n__").replace("@","__a__")
	return s

def ListDirFile(rootdir,needSubDir):
	fileList = []
	list = os.listdir(rootdir) #列出文件夹下所有的目录与文件
	for i in range(0,len(list)):
		path = os.path.join(rootdir,list[i])
		if os.path.isfile(path):
			fileList.append(path)
		if os.path.isdir(path) and needSubDir:
			files = ListDirFile(path,True)
			for file in files:
				fileList.append(file)
	return fileList


def UpdateProtoFields(commonMessageMap,fieldMap):
	for fieldName,fieldType in fieldMap.items():
		tmpFieldType = fieldType
		if fieldType.startswith("repeated"):
			tmpFieldType = fieldType[9:]
		if tmpFieldType != "bool" and tmpFieldType != "int64" and tmpFieldType != "double" and tmpFieldType != "string" and tmpFieldType != "***":
			if commonMessageMap.has_key(tmpFieldType) == False: #未定义的字段类型
				if fieldType.startswith("repeated"):
					fieldMap[fieldName] = "repeated PbNil"
				else:
					fieldMap[fieldName] = "PbNil"
	return fieldMap
	
#判断相同数据类型
def IsSameType(type1,type2):
	if type1 == type2:
		return True,type1
	elif type1 == "int64" and type2 == "double":
		return True,"double"
	elif type2 == "int64" and type1 == "double":
		return True,"double"
	elif type1 == "repeated int64" and type2 == "repeated double":
		return True,"repeated double"
	elif type2 == "repeated int64" and type1 == "repeated double":
		return True,"repeated double"
	elif type1 == "repeated ***" and type2.startswith("repeated"):
		return True,type2
	elif type2 == "repeated ***" and type1.startswith("repeated"):
		return True,type1
	return False,""


#获取数据的protobuf的类型
def GetDataProtoType(k,variate):
	type="string"
	if isinstance(variate,bool):
		type = "bool"
	elif isinstance(variate,int):
		type = "int64"
	elif isinstance(variate,float):
		type = "double"
	elif isinstance(variate,str):
		type = "string"
	elif isinstance(variate,list):
		if len(variate)>0:
			t = GetDataProtoType(k,variate[0])
			if t == "int64":
				t = "double"
			type = "repeated {0}".format(t)
		else:
			type = "repeated ***" ####没有数据无法解析给的是 int64 （模糊匹配，如果有同名的就用同名的 ）
	elif isinstance(variate,dict):
		type = k
	return type

#structName 结构体名
#jsonObj 数据
#floor 层级
def GetFloorMessageData(structName,jsonObj,floor,floorMessageMap):
	fieldMap = {}
	for k,v in jsonObj.items():
		#嵌套
		if isinstance(v,list) and len(v)>0:
			for tempV in v:
				if isinstance(tempV,dict):
					floorMessageMap = GetFloorMessageData(k,tempV,floor+1,floorMessageMap)
		elif isinstance(v,dict):
			floorMessageMap = GetFloorMessageData(k,v,floor+1,floorMessageMap)
	for k,v in jsonObj.items():
		#本结构体
		t = GetDataProtoType(k,v)
		fieldMap[k] = t
	messageData = (structName,fieldMap)
	if floor in floorMessageMap:
		floorMessageMap[floor].append(messageData)
	else:
		floorMessageMap[floor] = [messageData]
	return floorMessageMap

def GetFileStructData(file,structName,outdir):
	with open(file,"r")as f:
		fileData = f.read()
	if fileData == "":
		return {},fileData
	jsonObj = json.loads(fileData)
	floorMessageMap = {} #map[floor][]message{messageName,map[fieldName]fieldType}
	floorMessageMap = GetFloorMessageData(structName,jsonObj,1,floorMessageMap)
	#print("parse {0} success".format(file))
	return floorMessageMap,fileData

#生成proto结构体
#dirName 		indir目录名，生成每个文件根节点公共类型
#fileNameMap 	所有文件字段数据
#maxFloor 		最大层级
def GenProtoStruct(dirName,fileNameMap,maxFloor):
	commonMessageMap = {}
	commonMessageMap["PbNil"] = {} #空消息 没有实习的自定义类型
	for num in range(0,maxFloor+1):
		for fileName,floorMessageMap in fileNameMap.items():
			length = len(floorMessageMap)
			if length <= num:
				continue
			floor = length-num
			if floor == 1 and commonMessageMap.has_key(dirName) == False: #根节点
				rootMessage = floorMessageMap[floor][0]
				commonMessageMap[dirName] = rootMessage[1]
			messageList = floorMessageMap[floor]
			for message in messageList:
				messageName = message[0]
				fieldMap = message[1]
				if floor == 1:
					baseFieldMap = commonMessageMap[dirName]
					realFieldMap = baseFieldMap #实际字段
					isSameMessage = True #相同消息
					for fieldName,fieldType in fieldMap.items(): 
						if baseFieldMap.has_key(fieldName):
							baseFieldType = baseFieldMap[fieldName]
							isSameType,realType = IsSameType(fieldType,baseFieldType) 
							if isSameType== False: #不是同一个消息处理
								print("isNotSameMessage message Name:{0},fieldName:{1},type1:{2},type2:{3}".format(messageName,fieldName,fieldType,baseFieldType))
								isSameMessage = False
								break
								#fileNameMessageMap[fileName] = {floor:{}}
							realFieldMap[fieldName]=realType #找出实际消息类型
						else:
							realFieldMap[fieldName]=fieldType #消息字段合并
					if isSameMessage == True:
						commonMessageMap[dirName] = realFieldMap
						continue
				#fieldMap = UpdateProtoFields(commonMessageMap,fieldMap)
				if commonMessageMap.has_key(messageName) == False:
					commonMessageMap[messageName] = fieldMap
					continue
				baseFieldMap = commonMessageMap[messageName]
				realFieldMap = baseFieldMap #实际字段
				isSameMessage = True #相同消息
				for fieldName,fieldType in fieldMap.items(): 
					if baseFieldMap.has_key(fieldName):
						baseFieldType = baseFieldMap[fieldName]
						isSameType,realType = IsSameType(fieldType,baseFieldType) 
						if isSameType== False: #不是同一个消息处理
							print("isNotSameMessage message Name:{0},fieldName:{1},type1:{2},type2:{3}".format(messageName,fieldName,fieldType,baseFieldType))
							isSameMessage = False
							break
							#fileNameMessageMap[fileName] = {floor:{}}
						realFieldMap[fieldName]=realType #找出实际消息类型
					else:
						realFieldMap[fieldName]=fieldType #消息字段合并
				if isSameMessage == True:
					commonMessageMap[messageName] = realFieldMap
				else:#不是同一个消息处理 同名消息字段的类型不一样 需要重命名
					#fileNameMessageMap[fileName] = (messageName,())
					print("error:can not process right protobuf message messageName:{0},floor:{1}".format(messageName,floor))
					os.system("pause")
	commonFileStr = "syntax = \"proto3\";\n"
	for messageName in commonMessageMap.keys():
		fieldMap = commonMessageMap[messageName]
		i = 0
		fieldStr = ""
		fieldMap = UpdateProtoFields(commonMessageMap,fieldMap)
		for fieldName,fieldType in fieldMap.items():
			i+=1
			if fieldType == "repeated ***":
				#print("nil message field. message Name:{0},fieldName:{1},type1:repeated ***,type2:repeated int64".format(messageName,fieldName))
				fieldType = "repeated string"
			fieldStr += "\n\t{0} {1} = {2};".format(fieldType,fieldName,i)
		messageDefine = '''
message %s 
{%s
}
'''%(messageName, fieldStr)
		commonFileStr += messageDefine
	fieldStr = ""
	i = 0
	for fileName,floorMessageMap in fileNameMap.items():
		length = len(floorMessageMap)
		if length < 1:
			continue
		message = floorMessageMap[1][0]
		i+=1
		messageName = message[0]
		if commonMessageMap.has_key(messageName) == False:
			fieldStr += "\n\t{0} {1} = {2};".format(dirName,messageName,i)
		else:
			fieldStr += "\n\t{0} {1} = {2};".format(messageName,messageName,i)
	messageDefine = '''
message %s 
{%s
}
'''%("{0}Manager".format(dirName), fieldStr)
	commonFileStr += messageDefine
	return commonFileStr

#indir 输入目录
#outdir 输出目录
#needSubDir 是否需要处理子目录文件
def Json2Pb(indir,outdir,needSubDir):
	print("parse subdir:{0}".format(needSubDir))
	print("indir:\t{0}".format(indir))
	print("outdir:\t{0}".format(outdir))
	files = ListDirFile(indir,needSubDir)
	jsonData = "{"
	fileNameMap = {} # map[fileName]map[floor][]message(messageName,map[fieldName]fieldType)
	maxFloor = 0
	i = 0
	for file in files:
		fileSplitName = os.path.splitext(file)
		if (fileSplitName[1] != '.lh' and fileSplitName[1] != '.lmat' and fileSplitName[1] != '.json') or fileSplitName[0].startswith("~") == 1 :
			continue
		#解析单个json文件
		structName = Rename(indir,fileSplitName[0])
		#print("parse json--------{0}".format(structName))
		fileStructData,jsonFileData = GetFileStructData(file,structName,outdir)
		floor = len(fileStructData)
		if floor == 0:
			continue
		fileNameMap[structName] = fileStructData
		if i == 0:
			jsonData += """"%s":%s"""%(structName,jsonFileData)
		else:
			jsonData += ""","%s":%s"""%(structName,jsonFileData)
		i+=1
		if floor > maxFloor:
			maxFloor = floor
	jsonData+="}"
	dirName = os.path.basename(indir)
	with open(os.path.join(outdir, "{0}.json".format(dirName)),"w+") as f:
		f.write(jsonData)
	if len(fileNameMap) == 0:
		print("nothing to be done...........".format(file))
		os.system("pause")
		return
		
	#生成proto文件
	commonFileStr = GenProtoStruct(dirName,fileNameMap,maxFloor)
	with open(os.path.join(outdir, "{0}.proto".format(dirName)),"w+") as f:
		f.write(commonFileStr)
	
	#生成proto二进制*.bin文件
	os.system('protoc.exe --python_out=%s -I=%s %s' % (outdir, outdir, os.path.join(outdir, "{0}.proto").format(dirName)))
	pbManagerName = dirName+"Manager()"
	with open(os.path.join(outdir, dirName+"tmp.py"),'w+')as f2:
		f2.write("""
#!/usr/bin/python
#_*_coding:utf-8_*_
import google.protobuf.json_format as pb_json_format
import imp
import os
		
def json2pb():
	outdir = "%s"
	pbModule = imp.load_source("tmpModule", os.path.join(outdir, "%s_pb2.py"))
	sys.path.append(outdir)
	with open(os.path.join(outdir, "%s.json"),"r") as f:
		jsonData = f.read()
	jsonPb = pbModule.%s
	pb_json_format.Parse(jsonData, jsonPb)
	pb = jsonPb.SerializeToString()
	with open(os.path.join(outdir, "%s.bin"), 'wb')as f1:
		f1.write(pb)
		"""%(outdir,dirName,dirName,pbManagerName,dirName))
	pbModule = imp.load_source("tmpModule", os.path.join(outdir, dirName+"tmp.py"))
	pbModule.json2pb()
	#生成js和ts代码
	os.system('pbjs -t static-module -w commonjs -o %s/%s.js %s/%s.proto' %(outdir,dirName,outdir,dirName))
	os.system('pbts -o %s/%s.d.ts %s/%s.js' %(outdir,dirName,outdir,dirName))
	updateProtoTsFile("%s/%s.d.ts"%(outdir,dirName),dirName+"config")
	updateProtoJsFile("%s/%s.js"%(outdir,dirName), True, False,dirName+"config",dirName+"root")
	print("parse json to protobuf success dir:{0} ".format(dirName))
	

#laya使用
def updateProtoTsFile(file,moduleName):
	if os.path.exists(file) == False:
		return
	type_map = {"Long":"any"}
	buf = []
	fp = open(file,"r+")
	flag = False
	buf.append("declare module "+moduleName+" {\n")
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


def updateProtoJsFile(file,islaya,iscocos,moduleName,rootName):
	if os.path.exists(file) == False:
		return False
	buf = []
	with open(file,"r") as f:
		old=f.readlines()
	for line in old:
		tmp = line.strip()
		if tmp == "" or tmp.startswith("/*") or tmp.startswith("*") or tmp.startswith("//"):
			continue
		num=line.count("$root")
		if num > 0:
			line = line.replace("$root", "${0}".format(rootName))
		buf.append(line)
	if islaya :
		buf[1] = "var $protobuf = protobuf;\n"
	if iscocos:
		buf[1] = "var $protobuf = require(\"protobuf\");\n"
	buf.insert(4,"var "+moduleName+" = $"+rootName+";\nvar module = {}\n")
	buf.append("window."+moduleName+" = $"+rootName+";")

	with open(file,"w") as f:
		f.writelines(buf)
	return True

def main():
	reload(sys)
	sys.setdefaultencoding("utf-8")
	try:
		opts, args = getopt.getopt(sys.argv[1:], "h", ["help", "indir=","outdir=","subdir="])
	except getopt.GetoptError, err:   
		print str(err)
		sys.exit(-2)
	indir = "."
	outdir = "."
	needSubDir = True
	for o, a in opts:
		if o in ['-h',"--help"]:
			usage()
			sys.exit(0)
		elif o == "--indir":
			indir = a
		elif o == "--outdir":
			outdir = a
		elif o == "--subdir":
			if a == "false" or a == "False" or a == "0":
				needSubDir = False
		else:
			assert False, "未处理操作"
	Json2Pb(indir,outdir,needSubDir)

def usage():
	print "usage: \n\t--indir=json dir\n\t--outdir=parse json to *proto,*.bin and coder dir\n\t--subdir=false or False or 0 not parse subdir file otherwise parse subdir\n"
 
if __name__ == "__main__":
	main()
	sys.exit(0)

	 
