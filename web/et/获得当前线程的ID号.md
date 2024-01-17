## [C# 获得当前 进程 或 线程的ID](http://www.cnblogs.com/comsky/p/6020327.html)

如果获得当前进程的Id用：

```cobol
Process[] processes = Process.GetProcesses(); 



foreach(Process process in processes) 



{ 



    if(process.ProcessName == "进程名" 



    { 



        MessageBox.Show(process.Id); 



    } 



}



 



Process processes   =Process.GetCurrentProcess
```

processes.id获得当前进程的ID

如果获得当前线程的ID用：

Thread.CurrentThread.ManagedThreadId.ToString() （推荐）

或

AppDomain.GetCurrentThreadId().ToString()