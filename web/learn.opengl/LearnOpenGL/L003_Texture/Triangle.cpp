#include "Triangle.h"



Triangle::Triangle()
{
}


Triangle::~Triangle()
{
}

// ��ʼ��
void Triangle::init()
{
	initVertices();
}


// ��ʼ����������
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

	// ����1�� �����������VAO
	// VAO��������state-object��״̬����,��¼����һ�λ�������Ҫ����Ϣ�������������ģ����ݸ�ʽ֮�����Ϣ
	GLuint VAO;
	glGenVertexArrays(1, &VAO);

	// ��VAO
	glBindVertexArray(VAO);

	// ����1�� ���㻺�����VBO
	GLuint VBO;
	glGenBuffers(1, &VBO);


	// ��VBO ��һ�� GL_ARRAY_BUFFER
	glBindBuffer(GL_ARRAY_BUFFER, VBO);
	// ���������ݴ��ڴ渴�Ƶ�GPU��һ��GL_ARRAY_BUFFER
	glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);


	// ����Shader��������
	glVertexAttribPointer(attribPos, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void *)0);
	// ���ö�������
	glEnableVertexAttribArray(attribPos);


	// �����㻺��GL_ARRAY_BUFFER����Ϊ����״̬
	glBindBuffer(GL_ARRAY_BUFFER, 0);
	// ��������������Ϊ����״̬
	glBindVertexArray(0);


	this->VAO = VAO;
	this->VBO = VBO;


}

// ��Ⱦ
void Triangle::render()
{
	glUseProgram(shaderProgrm);
	glBindVertexArray(VAO);
	glDrawArrays(GL_TRIANGLES, 0, 6);
}

// �ͷ�
void Triangle::release()
{
	glDeleteVertexArrays(1, &VAO);
	glDeleteBuffers(1, &VBO);
}




/*
�ܽ᣺

http://www.photoneray.com/opengl-vao-vbo/
#VAO �� VBO ��ǰ������


VAO�� ��һ������״̬�����ݽṹ������ָ�롣
VBO�� ��2�ݣ�CPU��GPU��һ�ݣ����͵�GPU�����ɾ��CUP����ݡ�������ʵ�Ķ�������
VertexAttribArray����ʵ��VAOһ����Ҳ�Ǳ���shader������������״̬�����һ����VBO��ָ�����á�

���ԣ�
VAO����VertexAttribArray��EBO
VertexAttribArray����VBO

�൱��VAO������Ҫ���Ƶ�����״̬��Ϣ������ʱֻ�е���GPU�Ϳ����õ���������

*/