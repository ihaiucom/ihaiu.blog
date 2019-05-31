#version 330 core
out vec4 FragColor;
in vec3 varyingColor;
void main()
{
    FragColor = vec4(varyingColor, 1.0);
}