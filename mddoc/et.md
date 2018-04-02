
ET目录结构
=======




## 服务器目录结构

### ETServer
    |__ Bin                             	---- 所有项目编译后，将编译好的dll等文件拷贝一份到这
    |__ Logs                                ---- 日志文件夹
    |__ Server                              ---- 项目目录
    |__ Config                             	---- 配置文件
    	|__ StartConfig                     ---- 程序启动读取的配置文件, 可以动态配置服务器（目前好像不能动态配置组件）。读取类StartConfigComponent，保存结构体StartConfig




### ETServer/Server ---- 项目目录
    |__ App                             	---- 项目--启动控制台应用
    |__ Hotfix                              ---- 项目--热更新项目，好像消息逻辑处理放这里MessageHandler、IEntityActorHandler、HttpHandler等
    |__ Model                             	---- 项目--ET核心框架,默认也是服务开发项目。理论可以自己再创建一个开发项目，启动时调 Game.EventSystem.Add(DLLType.Model, typeof(Game).Assembly);
    |__ ThirdParty                          ---- 第三方库。默认放了 MongodbDriver,Mongo数据库相关库
    |__ Server.sln                          ---- 服务器的解决方案文件





### ETServer/Server/Model ---- 项目目录/核心框架项目
    |__ Base                             	---- 引擎的基本类，ECS的组件开发模式就放在该目录下面
    |__ Component                           ---- 启动服务程序的几个基本组件，一般添加到Game.Scene实体。包括读取启动配置组件、解析启动参数组件、对各个服务进程管理组件等
    |__ Entity                           	---- 实体组件，主要放了Scene，Game全局API
    |__ Module                           	---- 功能模块目录。相当于ET的插件目录
    |__ Other                           	---- 这个估计熊猫也不好启名字，启动程序要用的App配置两个类AppType、Options



## ETServer/Server/Model/Base 介绍
* 首先最核心的, 非“Object”莫属，组件驱动设计都在这里面，对象池等
* 自定义了一些数据容器结构体，方便开发
* Event 也是一个很不错的设计。事件绑定属性，事件ID定义，事件处理接口
* Helper里定义了一些快捷辅助工具类
* Logger是对日志装饰类，NLog的封装也再这里。还有一个是StackInfoDecorater输出栈的装饰



### ETServer/Server/Model/Base ---- 项目目录/核心框架项目/ECS核心



