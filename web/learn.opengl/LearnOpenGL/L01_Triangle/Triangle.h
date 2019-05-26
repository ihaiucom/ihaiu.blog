#pragma once
#include <glad/glad.h>
#include <GLFW/glfw3.h>
#include <iostream>

class Triangle
{
public:
	Triangle();
	~Triangle();


	// 初始化
	void init();
	// 渲染
	void render();
	// 释放
	void release();

protected:
	// 初始化着色器
	void initShader();

	// 初始化顶点数据
	void initVertices();

	// 顶点属性, 位置
	unsigned int attribPos = 0;

	// 顶点数组对象VAO， 位置
	unsigned int VAO;

	// 着色器程序
	unsigned int shaderProgrm;
};

