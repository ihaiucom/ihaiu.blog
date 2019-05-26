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

}

// ��Ⱦ
void Triangle::render()
{

}

// �ͷ�
void Triangle::release()
{

}