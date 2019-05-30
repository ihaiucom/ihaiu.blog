#ifndef SHADER_HEADER
#define SHADER_HEADER

#include <iostream>
#include <fstream>
#include <sstream>
#include <glad/glad.h>

class Shader
{
public:
	/* Shader Program ID */
	GLuint id;

	/**
	* 构造函数
	* vertexPath 顶点着色器文件路径
	* fragmentPath 片段着色器文件路径
	*/
	Shader(const char* vertexPath, const char* fragmentPath);
	~Shader();

	/** 使用Shader */
	void use();

	//============================
	// 设置Shader unform值
	//----------------------------
	void setBool(const std::string &name, bool value);
	void setInt(const std::string & name, int value);
	void setFloat(const std::string &name, float value);

protected:
	/** 
	* 检查编译shader错误
	*/
	void checkComplieError(GLuint shaderId, std::string type );

	/**
	* 检测 shader 程序 链接错误
	*/
	void checkLinkError();
};


#endif // !SHADER_HEADER