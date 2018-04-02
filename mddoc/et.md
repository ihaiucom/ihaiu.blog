
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