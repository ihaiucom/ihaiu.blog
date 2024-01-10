**v8::ContextScope** 类表示一个 JavaScript 上下文的生命周期范围。它提供了在指定上下文中执行 JavaScript 代码的功能。

**ContextScope 类的常用 API**

以下是 `v8::ContextScope` 类的一些常用 API：

- `New()`：创建一个新的 `ContextScope` 对象。
- `Enter()`：进入指定上下文。
- `Exit()`：退出指定上下文。

以下是 `v8::ContextScope` 类的完整 API 列表：

C++

```
class ContextScope {
 public:
  // 创建一个新的 ContextScope 对象。
  static ContextScope* New(Isolate* isolate, Local<Context> context);

  // 进入指定上下文。
  void Enter();

  // 退出指定上下文。
  void Exit();

 private:
  // Isolate 对象。
  Isolate* isolate_;

  // 上下文对象。
  Local<Context> context_;
};
```

请谨慎使用代码。[了解详情](https://bard.google.com/faq#coding)

content_copy

**示例代码**

C++

```
#include <v8.h>

int main(int argc, char* argv[]) {
  // 创建一个新的 Isolate 对象。
  v8::Isolate* isolate = v8::Isolate::New();

  // 创建一个新的 Context 对象。
  v8::Local<v8::Context> context = v8::Context::New(isolate);

  // 进入 Context 对象。
  v8::ContextScope context_scope(isolate, context);

  // 在指定上下文中执行 JavaScript 代码。
  v8::Local<v8::String> source = v8::String::NewFromUtf8(isolate, "console.log('hello, world');");
  v8::Local<v8::Script> script = v8::Script::Compile(context, source).ToLocalChecked();
  v8::Local<v8::Value> result = script->Run(context).ToLocalChecked();

  // 退出 Context 对象。
  context_scope.Exit();

  // 销毁 Isolate 对象。
  isolate->Dispose();

  return 0;
}
```

请谨慎使用代码。[了解详情](https://bard.google.com/faq#coding)

content_copy

这段代码创建了一个新的 `Isolate` 对象和 `Context` 对象，并在指定上下文中执行了 JavaScript 代码。

**注意事项**

- `ContextScope` 对象是栈分配的，因此在 `ContextScope` 对象的析构函数被调用时，它会自动退出上下文。
- `ContextScope` 对象是线程安全的，因此可以由多个线程同时使用。

**总结**

`v8::ContextScope` 是执行 JavaScript 代码的重要工具。它提供了进入指定上下文、执行 JavaScript 代码、退出上下文等 API。

#### 信息来源

[info](https://bard.google.com/faq#citation)

1. [stackoverflow.com/questions/68120375/v8pp-v8-crashing-when-adding-a-new-module-instance](https://stackoverflow.com/questions/68120375/v8pp-v8-crashing-when-adding-a-new-module-instance)