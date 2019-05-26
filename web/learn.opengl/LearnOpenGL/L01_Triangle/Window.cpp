#include "Window.h"
#include "Triangle.h"


Window::Window()
{
}


Window::~Window()
{
}

// 初始化
bool Window::init(int width, int height, Triangle* triangle)
{
	this->triangle = triangle;

	// 初始化GLFW
	glfwInit();


	/// 配置
	// 主版本号
	glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
	// 次版本号
	glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
	// 告诉GLFW我们使用的是核心模式(Core-profile)
	glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);



#ifdef __APPLE__
	// 如果使用的是Mac OS X系统，你还需要加下面这行代码到你的初始化代码中这些配置才能起作用（将上面的代码解除注释）
	glfwWindowHint(GLFW_OPENGL_FORWARD_COMPAT, GL_TRUE);
#endif


	/// 创建一个窗口对象，这个窗口对象存放了所有和窗口相关的数据，而且会被GLFW的其他函数频繁地用到。
	window = glfwCreateWindow(width, height, "L01_Triangle", NULL, NULL);
	if (window == NULL)
	{
		std::cout << "创建 FLFWWindow 失败" << std::endl;
		glfwTerminate();
		return false;
	}
	glfwMakeContextCurrent(window);



	// GLAD是用来管理OpenGL的函数指针的，所以在调用任何OpenGL的函数之前我们需要初始化GLAD。
	// 我们给GLAD传入了用来加载系统相关的OpenGL函数指针地址的函数。GLFW给我们的是glfwGetProcAddress，它根据我们编译的系统定义了正确的函数。
	if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress))
	{
		std::cout << "初始化化 GLAD 失败" << std::endl;
		return false;
	}



	// 视口 
	// 前两个参数控制窗口左下角的位置。第三个和第四个参数控制渲染窗口的宽度和高度（像素）。
	// OpenGL坐标范围只为-1到1，因此我们事实上将(-1到1)范围内的坐标映射到(0, 800)和(0, 600)。
	glViewport(0, 0, width, height);
	// 告诉GLFW我们希望每当窗口调整大小的时候调用这个函数
	glfwSetFramebufferSizeCallback(window, Window::onGlfwFramebuffSizeChange);

	return true;
}



// 启动
void Window::start()
{
	triangle->init();

	isRuning = true;
	/// 渲染循环
	// glfwWindowShouldClose 在我们每次循环的开始前检查一次GLFW是否被要求退出，如果是的话该函数返回true然后渲染循环便结束了，之后为我们就可以关闭应用程序了。
	while (!glfwWindowShouldClose(window) && isRuning)
	{
		// 输入
		processInput(window);

		// 渲染
		render();


		// glfwSwapBuffers函数会交换颜色缓冲（它是一个储存着GLFW窗口每一个像素颜色值的大缓冲），它在这一迭代中被用来绘制，并且将会作为输出显示在屏幕上。
		glfwSwapBuffers(window);
		// glfwPollEvents函数检查有没有触发什么事件（比如键盘输入、鼠标移动等）、更新窗口状态，并调用对应的回调函数（可以通过回调方法手动设置）。
		glfwPollEvents();
	}

	triangle->release();
}


// 退出
void Window::exit()
{
	glfwTerminate();
	isRuning = false;
}




// 当用户改变窗口的大小的时候，视口也应该被调整
// 它会在每次窗口大小被调整的时候被调用
void Window::onGlfwFramebuffSizeChange(GLFWwindow * window, int width, int height)
{
	glViewport(0, 0, width, height);
}


// 输入
// 这可以通过使用GLFW的几个输入函数来完成。我们将会使用GLFW的glfwGetKey函数，它需要一个窗口以及一个按键作为输入。这个函数将会返回这个按键是否正在被按下。
void Window::processInput(GLFWwindow* window)
{
	if (glfwGetKey(window, GLFW_KEY_ESCAPE) == GLFW_PRESS)
	{
		glfwSetWindowShouldClose(window, GLFW_TRUE);
		exit();
	}
}

// 渲染
void Window::render()
{
	triangle->render();
}

