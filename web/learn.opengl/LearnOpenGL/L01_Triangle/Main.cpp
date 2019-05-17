#include "Window.h"

// ´°¿Ú´óĞ¡
const unsigned int SRC_WIDTH = 800;
const unsigned int SRC_HEIGHT = 600;


int main()
{

	Window* window = new Window();
	window->init(SRC_WIDTH, SRC_HEIGHT);
	window->start();

	return 0;
}
