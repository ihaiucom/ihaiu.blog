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
	initVertices();
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