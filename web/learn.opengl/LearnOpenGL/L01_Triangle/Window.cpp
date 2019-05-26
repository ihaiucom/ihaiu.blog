#include "Window.h"
#include "Triangle.h"


Window::Window()
{
}


Window::~Window()
{
}

// ��ʼ��
bool Window::init(int width, int height, Triangle* triangle)
{
	this->triangle = triangle;

	// ��ʼ��GLFW
	glfwInit();


	/// ����
	// ���汾��
	glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
	// �ΰ汾��
	glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
	// ����GLFW����ʹ�õ��Ǻ���ģʽ(Core-profile)
	glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);



#ifdef __APPLE__
	// ���ʹ�õ���Mac OS Xϵͳ���㻹��Ҫ���������д��뵽��ĳ�ʼ����������Щ���ò��������ã�������Ĵ�����ע�ͣ�
	glfwWindowHint(GLFW_OPENGL_FORWARD_COMPAT, GL_TRUE);
#endif


	/// ����һ�����ڶ���������ڶ����������кʹ�����ص����ݣ����һᱻGLFW����������Ƶ�����õ���
	window = glfwCreateWindow(width, height, "L01_Triangle", NULL, NULL);
	if (window == NULL)
	{
		std::cout << "���� FLFWWindow ʧ��" << std::endl;
		glfwTerminate();
		return false;
	}
	glfwMakeContextCurrent(window);



	// GLAD����������OpenGL�ĺ���ָ��ģ������ڵ����κ�OpenGL�ĺ���֮ǰ������Ҫ��ʼ��GLAD��
	// ���Ǹ�GLAD��������������ϵͳ��ص�OpenGL����ָ���ַ�ĺ�����GLFW�����ǵ���glfwGetProcAddress�����������Ǳ����ϵͳ��������ȷ�ĺ�����
	if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress))
	{
		std::cout << "��ʼ���� GLAD ʧ��" << std::endl;
		return false;
	}



	// �ӿ� 
	// ǰ�����������ƴ������½ǵ�λ�á��������͵��ĸ�����������Ⱦ���ڵĿ�Ⱥ͸߶ȣ����أ���
	// OpenGL���귶ΧֻΪ-1��1�����������ʵ�Ͻ�(-1��1)��Χ�ڵ�����ӳ�䵽(0, 800)��(0, 600)��
	glViewport(0, 0, width, height);
	// ����GLFW����ϣ��ÿ�����ڵ�����С��ʱ������������
	glfwSetFramebufferSizeCallback(window, Window::onGlfwFramebuffSizeChange);

	return true;
}



// ����
void Window::start()
{
	triangle->init();

	isRuning = true;
	/// ��Ⱦѭ��
	// glfwWindowShouldClose ������ÿ��ѭ���Ŀ�ʼǰ���һ��GLFW�Ƿ�Ҫ���˳�������ǵĻ��ú�������trueȻ����Ⱦѭ��������ˣ�֮��Ϊ���ǾͿ��Թر�Ӧ�ó����ˡ�
	while (!glfwWindowShouldClose(window) && isRuning)
	{
		// ����
		processInput(window);

		// ��Ⱦ
		render();


		// glfwSwapBuffers�����ύ����ɫ���壨����һ��������GLFW����ÿһ��������ɫֵ�Ĵ󻺳壩��������һ�����б��������ƣ����ҽ�����Ϊ�����ʾ����Ļ�ϡ�
		glfwSwapBuffers(window);
		// glfwPollEvents���������û�д���ʲô�¼�������������롢����ƶ��ȣ������´���״̬�������ö�Ӧ�Ļص�����������ͨ���ص������ֶ����ã���
		glfwPollEvents();
	}

	triangle->release();
}


// �˳�
void Window::exit()
{
	glfwTerminate();
	isRuning = false;
}




// ���û��ı䴰�ڵĴ�С��ʱ���ӿ�ҲӦ�ñ�����
// ������ÿ�δ��ڴ�С��������ʱ�򱻵���
void Window::onGlfwFramebuffSizeChange(GLFWwindow * window, int width, int height)
{
	glViewport(0, 0, width, height);
}


// ����
// �����ͨ��ʹ��GLFW�ļ������뺯������ɡ����ǽ���ʹ��GLFW��glfwGetKey����������Ҫһ�������Լ�һ��������Ϊ���롣����������᷵����������Ƿ����ڱ����¡�
void Window::processInput(GLFWwindow* window)
{
	if (glfwGetKey(window, GLFW_KEY_ESCAPE) == GLFW_PRESS)
	{
		glfwSetWindowShouldClose(window, GLFW_TRUE);
		exit();
	}
}

// ��Ⱦ
void Window::render()
{
	triangle->render();
}

