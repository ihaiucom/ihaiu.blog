#pragma once
#include <glad/glad.h>
#include <iostream>
#include "Shader.h"

class Material
{
public:
	Shader* shader;
	Material();
	~Material();

	void setShader(Shader* shader);

	void onRender();

};

