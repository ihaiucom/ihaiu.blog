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
	initShader();
	initVertices();
}

// ��ʼ��Shader
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
	// ����Shader
	//----------------------------


	// ���״̬
	int success;
	char infoLog[512];


	// ��������shader
	int vertexShader = glCreateShader(GL_VERTEX_SHADER);
	// ��Shader����
	glShaderSource(vertexShader, 1, &vertexShaderSource, NULL);
	// ����
	glCompileShader(vertexShader);
	// ��ȡ����״̬
	glGetShaderiv(vertexShader, GL_COMPILE_STATUS, &success);
	if (!success)
	{
		glGetShaderInfoLog(vertexShader, 512, NULL, infoLog);
		std::cout << "���� ���� vertex Shader����:\n" << infoLog << std::endl;
	}


	//============================
	// Ƭ��Shader
	//----------------------------

	int fragmentShader = glCreateShader(GL_FRAGMENT_SHADER);
	glShaderSource(fragmentShader, 1, &fragmentShaderSource, NULL);
	glCompileShader(fragmentShader);
	glGetShaderiv(fragmentShader, GL_COMPILE_STATUS, &success);
	if (!success)
	{
		glGetShaderInfoLog(fragmentShader, 512, NULL, infoLog);

		std::cout << "���� Ƭ�� fragment Shader����:\n" << infoLog << std::endl;
	}



	//============================
	// ��ɫ������
	//----------------------------

	// ������ɫ������
	shaderProgrm = glCreateProgram();
	// ������ɫ��
	glAttachShader(shaderProgrm, vertexShader);
	glAttachShader(shaderProgrm, fragmentShader);
	// ��������
	glLinkProgram(shaderProgrm);

	// �������״̬
	glGetProgramiv(shaderProgrm, GL_LINK_STATUS, &success);
	if (!success)
	{
		glGetProgramInfoLog(shaderProgrm, 512, NULL, infoLog);
		std::cout << "���� ��ɫ�� ShaderProgrm ����:\n" << infoLog << std::endl;
	}

	// �ڰ���ɫ���������ӵ���������Ժ󣬼ǵ�ɾ����ɫ���������ǲ�����Ҫ������
	glDeleteShader(vertexShader);
	glDeleteShader(fragmentShader);




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