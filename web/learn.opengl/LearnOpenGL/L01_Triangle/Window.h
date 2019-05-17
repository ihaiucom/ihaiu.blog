#include <glad/glad.h>
#include <GLFW/glfw3.h>
#include <iostream>

#pragma once
class Window
{

public:
	Window();
	~Window();

	// ��ʼ��
	bool init(int width, int height);

	// ����
	void start();

	// �˳�
	void exit();



protected:

	GLFWwindow* window;

	// ѭ��
	void loop();

	// ���ڴ�С�ı�ص�
	static void onGlfwFramebuffSizeChange(GLFWwindow* window, int width, int height);

	// ����
	void processInput(GLFWwindow* window);

	// ��Ⱦ
	void render();
};

