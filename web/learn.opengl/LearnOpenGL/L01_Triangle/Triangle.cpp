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
	initShader();
	initVertices();
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
	float vertices[] = {
		//x			y			z
		-0.5f,		-0.5f,		0.0f,	//left
		0.5f,		-0.5f,		0.0f,	//right
		0.0f,		0.5f,		0.0f,	//top
		1.0f,		1.0f,		0.0f,
		1.0f,		0.0f,		0.0f,
		0.5,		0.5f,		0.0f,
	};

	// 创建1个 顶点数组对象VAO
	// VAO本质上是state-object（状态对象）,记录的是一次绘制所需要的信息，包括数据在哪，数据格式之类的信息
	GLuint VAO;
	glGenVertexArrays(1, &VAO);

	// 绑定VAO
	glBindVertexArray(VAO);

	// 创建1个 顶点缓存对象VBO
	GLuint VBO;
	glGenBuffers(1, &VBO);


	// 绑定VBO 到一个 GL_ARRAY_BUFFER
	glBindBuffer(GL_ARRAY_BUFFER, VBO);
	// 将顶点数据从内存复制到GPU的一个GL_ARRAY_BUFFER
	glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);


	// 设置Shader顶点属性
	glVertexAttribPointer(attribPos, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void *)0);
	// 启用顶点属性
	glEnableVertexAttribArray(attribPos);


	// 将顶点缓存GL_ARRAY_BUFFER设置为闲置状态
	glBindBuffer(GL_ARRAY_BUFFER, 0);
	// 将顶点数据设置为闲置状态
	glBindVertexArray(0);


	this->VAO = VAO;
	this->VBO = VBO;


}

// 渲染
void Triangle::render()
{
	glUseProgram(shaderProgrm);
	glBindVertexArray(VAO);
	glDrawArrays(GL_TRIANGLES, 0, 6);
}

// 释放
void Triangle::release()
{
	glDeleteVertexArrays(1, &VAO);
	glDeleteBuffers(1, &VBO);
}


/*
总结：

http://www.photoneray.com/opengl-vao-vbo/
#VAO 与 VBO 的前世今生


VAO： 是一个包含状态的数据结构，保存指针。
VBO： 有2份，CPU和GPU各一份，传送的GPU后可以删除CUP的这份。他是真实的顶点数据
VertexAttribArray：其实和VAO一样，也是保存shader顶点属性设置状态，并且会持有VBO的指针引用。

所以：
VAO引用VertexAttribArray和EBO
VertexAttribArray引用VBO

相当于VAO保存了要绘制的所有状态信息。绘制时只有调他GPU就可以拿到所有数据

*/