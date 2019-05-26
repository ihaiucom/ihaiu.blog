#pragma once
#include <glad/glad.h>
#include <GLFW/glfw3.h>
#include <iostream>

class Triangle
{
public:
	Triangle();
	~Triangle();


	// ��ʼ��
	void init();
	// ��Ⱦ
	void render();
	// �ͷ�
	void release();

protected:
	// ��ʼ����ɫ��
	void initShader();

	// ��ʼ����������
	void initVertices();

	// ��������, λ��
	unsigned int attribPos = 0;

	// �����������VAO�� λ��
	unsigned int VAO;

	// ��ɫ������
	unsigned int shaderProgrm;
};

