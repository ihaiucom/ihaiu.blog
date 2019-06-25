#include "Material.h"



Material::Material()
{
}


Material::~Material()
{
}

void Material::setShader(Shader* shader)
{
	this->shader = shader;
}


void Material::onRender()
{
	this->shader->use();
}
