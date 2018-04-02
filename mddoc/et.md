
ET目录结构
=======




## 服务器目录结构

### ETServer
    |__ Bin                             	---- 所有项目编译后，将编译好的dll等文件拷贝一份到这
    |__ Logs                                ---- 日志文件夹
    |__ Tools                               ---- 框架相关外部工具（非Unity代码）
    |__ Server                              ---- 项目目录
    |__ Config                             	---- 配置文件
    	|__ StartConfig                     ---- 程序启动读取的配置文件, 可以动态配置服务器（目前好像不能动态配置组件）。读取类StartConfigComponent，保存结构体StartConfig




### ETServer/Server ---- 项目目录
    |__ App                             	---- 项目--启动控制台应用
    |__ Hotfix                              ---- 项目--热更新项目，好像消息逻辑处理放这里MessageHandler、IEntityActorHandler、HttpHandler等
    |__ Model                             	---- 项目--ET核心框架,默认也是服务开发项目。理论可以自己再创建一个开发项目，启动时调 Game.EventSystem.Add(DLLType.Model, typeof(Game).Assembly);
    |__ ThirdParty                          ---- 第三方库。默认放了 MongodbDriver,Mongo数据库相关库
    |__ Server.sln                          ---- 服务器的解决方案文件
