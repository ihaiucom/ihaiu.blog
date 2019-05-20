#include "Window.h"
#include "Triangle.h"

// ´°¿Ú´óĞ¡
const unsigned int SRC_WIDTH = 800;
const unsigned int SRC_HEIGHT = 600;


int main()
{
	Triangle* triangle = new Triangle();

	Window* window = new Window();
	window->init(SRC_WIDTH, SRC_HEIGHT, triangle);
	window->start();

	return 0;
}
