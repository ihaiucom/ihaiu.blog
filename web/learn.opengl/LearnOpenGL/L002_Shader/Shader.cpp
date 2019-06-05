#include "Shader.h"



/**
* ���캯��
* vertexPath ������ɫ���ļ�·��
* fragmentPath Ƭ����ɫ���ļ�·��
*/
Shader::Shader(const char* vertexPath, const char* fragmentPath)
{
	// shader ����
	std::string vertexCode;
	std::string fragmentCode;

	std::ifstream vsFile;
	std::ifstream fsFile;

	// ��֤ifstream��������׳��쳣��
	vsFile.exceptions(std::ifstream::failbit | std::ifstream::badbit);
	fsFile.exceptions(std::ifstream::failbit | std::ifstream::badbit);

	try
	{
		// ���ļ�
		vsFile.open(vertexPath);
		fsFile.open(fragmentPath);

		std::stringstream vsStream;
		std::stringstream fsStream;

		vsStream << vsFile.rdbuf();
		fsStream << fsFile.rdbuf();

		vsFile.close();
		fsFile.close();

		vertexCode = vsStream.str();
		fragmentCode = fsStream.str();

	}
	catch (std::ifstream::failure e)
	{
		std::cout << "��ȡShader�ļ�����:" << std::endl;
	}

	const char* vsCode = vertexCode.c_str();
	const char* fsCode = fragmentCode.c_str();

	GLuint vsShader;
	GLuint fsShader;

	vsShader = glCreateShader(GL_VERTEX_SHADER);
	glShaderSource(vsShader, 1, &vsCode, NULL);
	glCompileShader(vsShader);
	checkComplieError(vsShader, "VertexShader");


	fsShader = glCreateShader(GL_FRAGMENT_SHADER);
	glShaderSource(fsShader, 1, &fsCode, NULL);
	glCompileShader(fsShader);
	checkComplieError(fsShader, "FragmentShader");

	id = glCreateProgram();
	glAttachShader(id, vsShader);
	glAttachShader(id, fsShader);
	glLinkProgram(id);
	checkLinkError();

	glDeleteShader(vsShader);
	glDeleteShader(fsShader);


}


Shader::~Shader()
{
}


/**
* ������shader����
*/
void Shader::checkComplieError(GLuint shaderId, std::string type)
{
	int success;
	char infolog[1024];
	glGetShaderiv(shaderId, GL_COMPILE_STATUS, &success);
	if (!success)
	{
		glGetShaderInfoLog(shaderId, 1024, NULL, infolog);
		std::cout << "����Shader����:" << type << infolog << std::endl;
	}
}

/**
* ��� shader ���� ���Ӵ���
*/
void Shader::checkLinkError()
{
	int success;
	char infolog[1024];
	glGetProgramiv(id, GL_LINK_STATUS, &success);
	if (!success)
	{
		glGetProgramInfoLog(id, 1024, NULL, infolog);
		std::cout << "����Shader�������:" << infolog << std::endl;
	}
}

void Shader::use()
{
	glUseProgram(id);
}


void Shader::setBool(const std::string &name, bool value)
{
	glUniform1i(glGetUniformLocation(id, name.c_str()), (int) value);
}

void Shader::setInt(const std::string &name, int value)
{
	glUniform1i(glGetUniformLocation(id, name.c_str()), value);
}

void Shader::setFloat(const std::string &name, float value)
{
	glUniform1f(glGetUniformLocation(id, name.c_str()), value);
}


void Shader::set4f(const std::string &name, float r, float g, float b, float a)
{
	glUniform4f(glGetUniformLocation(id, name.c_str()), r, g, b, a);
}
