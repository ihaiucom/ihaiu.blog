#include <glad/glad.h>
#include <GLFW/glfw3.h>
#include <iostream>
#include <iostream>
#include "Triangle.h"

#pragma once
class Window
{

public:
	Window();
	~Window();


	// ��ʼ��
	bool init(int width, int height, Triangle* triangle);

	// ����
	void start();

	// �˳�
	void exit();



protected:

	GLFWwindow* window;
	Triangle* triangle;

	// �Ƿ�������
	bool isRuning;

	// ѭ��
	void loop();

	// ���ڴ�С�ı�ص�
	static void onGlfwFramebuffSizeChange(GLFWwindow* window, int width, int height);

	// ����
	void processInput(GLFWwindow* window);

	// ��Ⱦ
	void render();
};

