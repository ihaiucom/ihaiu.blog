#include "Shader.h"



/**
* 构造函数
* vertexPath 顶点着色器文件路径
* fragmentPath 片段着色器文件路径
*/
Shader::Shader(const char* vertexPath, const char* fragmentPath)
{
	// shader 代码
	std::string vertexCode;
	std::string fragmentCode;

	std::ifstream vsFile;
	std::ifstream fsFile;

	// 保证ifstream对象可以抛出异常：
	vsFile.exceptions(std::ifstream::failbit | std::ifstream::badbit);
	fsFile.exceptions(std::ifstream::failbit | std::ifstream::badbit);

	try
	{
		// 打开文件
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
		std::cout << "读取Shader文件出错:" << e.code << std::endl;
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
* 检查编译shader错误
*/
void Shader::checkComplieError(GLuint shaderId, std::string type)
{
	int success;
	char infolog[1024];
	glGetShaderiv(shaderId, GL_COMPILE_STATUS, &success);
	if (!success)
	{
		glGetShaderInfoLog(shaderId, 1024, NULL, infolog);
		std::cout << "编译Shader出错:" << type << infolog << std::endl;
	}
}

/**
* 检测 shader 程序 链接错误
*/
void Shader::checkLinkError()
{
	int success;
	char infolog[1024];
	glGetProgramiv(id, GL_LINK_STATUS, &success);
	if (!success)
	{
		glGetProgramInfoLog(id, 1024, NULL, infolog);
		std::cout << "链接Shader程序出错:" << infolog << std::endl;
	}
}

