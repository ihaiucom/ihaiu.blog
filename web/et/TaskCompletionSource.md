**在 C# 中，TaskCompletionSource 类用于创建一个可由外部代码控制完成的 Task 对象。** 它通常用于在异步操作中表示待完成的工作，并允许你控制该操作何时完成以及完成的结果。

**TaskCompletionSource 的主要作用是：**

- **创建可以手动完成的 Task 对象** 这对于表示尚未启动或无法使用 async/await 模式表示的异步操作很有用。
- **将现有的非 Task 异步操作转换为 Task 对象** 这可以让你在 Task 上使用 await 语句，并将其集成到 C# 的异步编程模型中。
- **控制 Task 的完成方式** 你可以控制 Task 是成功完成、失败完成，还是取消完成。

**常用方法：**

- **TaskCompletionSource<TResult>()** 构造函数，创建一个 TaskCompletionSource 对象。
- **Task Task** 获取表示待完成工作的 Task 对象。
- **SetResult(TResult result)** 将 Task 设置为成功完成，并指定结果值。
- **SetException(Exception exception)** 将 Task 设置为失败完成，并指定异常。
- **SetCanceled()** 将 Task 设置为取消完成。

**示例：**

C#

```
using System;
using System.Threading.Tasks;

class Program
{
    static void Main()
    {
        TaskCompletionSource<int> tcs = new TaskCompletionSource<int>();

        // 启动异步操作
        Task.Run(() => {
            // 模拟异步操作
            Thread.Sleep(2000);

            // 完成 Task
            tcs.SetResult(42);
        });

        // 等待 Task 完成
        int result = await tcs.Task;

        Console.WriteLine("Result: {0}", result);
    }
}
```

请谨慎使用代码。[了解详情](https://bard.google.com/faq#coding)

content_copy

**总结：**

TaskCompletionSource 是一种强大的工具，可用于创建可控的 Task 对象，并将现有的异步操作集成到 C# 的异步编程模型中。它在异步编程中很有用，尤其是在处理外部异步操作或需要手动控制 Task 完成时。







TaskCompletionSource 是 C# 中一种用于异步编程的类型，它允许我们手动创建一个 Task，以便在某些操作完成时进行标记和返回结果。



通常情况下，我们使用 async/await 关键字来实现异步编程，但有时我们需要在异步操作中手动控制任务的完成和返回结果。这时，TaskCompletionSource 就可以派上用场。



TaskCompletionSource 类包含了两个主要的成员方法：SetResult 和 SetException。SetResult 方法用于标记任务已完成，并将结果传递给等待该任务的代码。SetException 方法则用于标记任务发生了异常，并将异常信息传递给等待该任务的代码。



下面是一个使用 TaskCompletionSource 的示例代码：



```
public Task<int> DoAsyncOperation()
{
    TaskCompletionSource<int> tcs = new TaskCompletionSource<int>();

    // 模拟异步操作
    Task.Run(() =>
    {
        try
        {
            // 异步操作完成，设置结果
            int result = SomeLongRunningOperation();
            tcs.SetResult(result);
        }
        catch (Exception ex)
        {
            // 异常发生，设置异常
            tcs.SetException(ex);
        }
    });

    // 返回任务
    return tcs.Task;
}

// 调用异步方法
public async Task CallAsyncMethod()
{
    int result = await DoAsyncOperation();
    Console.WriteLine("Result: " + result);
}

// 测试代码
public static void Main()
{
    var program = new Program();
    program.CallAsyncMethod().GetAwaiter().GetResult();
}
```



在上面的示例中，DoAsyncOperation 方法使用 TaskCompletionSource 创建了一个任务，并在异步操作完成后调用 SetResult 方法标记任务已完成，并传递结果。在 CallAsyncMethod 方法中，我们使用 await 关键字来等待任务的完成，并获取结果。



总之，TaskCompletionSource 类是 C# 中用于手动控制异步任务完成和返回结果的一种类型。它可以帮助我们在某些特定的情况下实现更灵活的异步编程。