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
	* ���캯��
	* vertexPath ������ɫ���ļ�·��
	* fragmentPath Ƭ����ɫ���ļ�·��
	*/
	Shader(const char* vertexPath, const char* fragmentPath);
	~Shader();

	/** ʹ��Shader */
	void use();

	//============================
	// ����Shader unformֵ
	//----------------------------
	void setBool(const std::string &name, bool value);
	void setInt(const std::string & name, int value);
	void setFloat(const std::string &name, float value);

protected:
	/** 
	* ������shader����
	*/
	void checkComplieError(GLuint shaderId, std::string type );

	/**
	* ��� shader ���� ���Ӵ���
	*/
	void checkLinkError();
};


#endif // !SHADER_HEADER