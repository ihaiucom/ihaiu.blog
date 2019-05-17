#include <glad/glad.h>
#include <GLFW/glfw3.h>
#include <iostream>

#pragma once
class Window
{

public:
	Window();
	~Window();

	// 初始化
	bool init(int width, int height);

	// 启动
	void start();

	// 退出
	void exit();



protected:

	GLFWwindow* window;

	// 循环
	void loop();

	// 窗口大小改变回调
	static void onGlfwFramebuffSizeChange(GLFWwindow* window, int width, int height);

	// 输入
	void processInput(GLFWwindow* window);

	// 渲染
	void render();
};

