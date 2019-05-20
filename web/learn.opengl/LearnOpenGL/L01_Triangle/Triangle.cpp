#include "Triangle.h"



Triangle::Triangle()
{
}


Triangle::~Triangle()
{
}

// 初始化
void Triangle::init()
{

}

// 初始化Shader
void Triangle::initShader()
{
	//============================
	// Shader Code
	//----------------------------
	const char *vertexShaderSource = "#version 330 core\n"
		"layout (location = 0) in vec3 aPos;\n"
		"void main()\n"
		"{\n"
		"   gl_Position = vec4(aPos.x, aPos.y, aPos.z, 1.0);\n"
		"}\0";
	const char *fragmentShaderSource = "#version 330 core\n"
		"out vec4 FragColor;\n"
		"void main()\n"
		"{\n"
		"   FragColor = vec4(1.0f, 0.5f, 0.2f, 1.0f);\n"
		"}\n\0";


	//============================
	// 顶点Shader
	//----------------------------


	// 检测状态
	int success;
	char infoLog[512];


	// 创建顶点shader
	int vertexShader = glCreateShader(GL_VERTEX_SHADER);
	// 绑定Shader代码
	glShaderSource(vertexShader, 1, &vertexShaderSource, NULL);
	// 编译
	glCompileShader(vertexShader);
	// 获取编译状态
	glGetShaderiv(vertexShader, GL_COMPILE_STATUS, &success);
	if (!success)
	{
		glGetShaderInfoLog(vertexShader, 512, NULL, infoLog);
		std::cout << "编译 顶点 vertex Shader出错:\n" << infoLog << std::endl;
	}


	//============================
	// 片段Shader
	//----------------------------

	int fragmentShader = glCreateShader(GL_FRAGMENT_SHADER);
	glShaderSource(fragmentShader, 1, &fragmentShaderSource, NULL);
	glCompileShader(fragmentShader);
	glGetShaderiv(fragmentShader, GL_COMPILE_STATUS, &success);
	if (!success)
	{
		glGetShaderInfoLog(fragmentShader, 512, NULL, infoLog);

		std::cout << "编译 片段 fragment Shader出错:\n" << infoLog << std::endl;
	}



	//============================
	// 着色器程序
	//----------------------------

	// 创建着色器程序
	shaderProgrm = glCreateProgram();
	// 附加着色器
	glAttachShader(shaderProgrm, vertexShader);
	glAttachShader(shaderProgrm, fragmentShader);
	// 链接他们
	glLinkProgram(shaderProgrm);

	// 检测链接状态
	glGetProgramiv(shaderProgrm, GL_LINK_STATUS, &success);
	if (!success)
	{
		glGetProgramInfoLog(shaderProgrm, 512, NULL, infoLog);
		std::cout << "链接 着色器 ShaderProgrm 出错:\n" << infoLog << std::endl;
	}

	// 在把着色器对象链接到程序对象以后，记得删除着色器对象，我们不再需要它们了
	glDeleteShader(vertexShader);
	glDeleteShader(fragmentShader);




}

// 初始化顶点数据
void Triangle::initVertices()
{

}

// 渲染
void Triangle::render()
{

}

// 释放
void Triangle::release()
{

}