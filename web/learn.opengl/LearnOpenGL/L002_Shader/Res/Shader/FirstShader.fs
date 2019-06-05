#version 330 core
out vec4 FragColor;
in vec3 varyingColor;
uniform vec4 uColor;
void main()
{
    FragColor = vec4(varyingColor, 1.0) * uColor;
}