`v8::Context` 类表示一个 JavaScript 执行上下文。它提供了访问 JavaScript 全局对象、调用 JavaScript 函数等 API。

**Context 类的常用 API**

以下是 `Context` 类的一些常用 API：

- `New()`：创建一个新的 `Context` 对象。
- `Enter()`：进入一个 `Context` 对象。
- `Exit()`：退出一个 `Context` 对象。
- `Global()`：获取 `Context` 对象的全局对象。
- `Call()`：调用 JavaScript 函数。

以下是 `Context` 类的完整 API 列表：

C++

```
class Context {
 public:
  // 创建一个新的 Context 对象。
  static Local<Context> New(Isolate* isolate);

  // 进入一个 Context 对象。
  void Enter();

  // 退出一个 Context 对象。
  void Exit();

  // 获取 Context 对象的全局对象。
  Local<Object> Global() const;

  // 调用 JavaScript 函数。
  Local<Value> Call(const FunctionCallbackInfo<v8::Value>& args);

  // 获取 Context 对象的名称。
  const char* Name() const;

  // 获取 Context 对象的安全级别。
  int SecurityToken() const;

  // 设置 Context 对象的名称。
  void SetName(const char* name);

  // 设置 Context 对象的安全级别。
  void SetSecurityToken(int security_token);
};
```

请谨慎使用代码。[了解详情](https://bard.google.com/faq#coding)

content_copy

**示例代码**

C++

```
#include <v8.h>

int main(int argc, char* argv[]) {
  // 创建一个 V8 引擎。
  v8::Isolate* isolate = v8::Isolate::New();

  // 创建一个 Context 对象。
  v8::Local<v8::Context> context = v8::Context::New(isolate);

  // 进入 Context 对象。
  context->Enter();

  // 获取 Context 对象的全局对象。
  v8::Local<v8::Object> global = context->Global();

  // 定义一个 JavaScript 函数。
  v8::Local<v8::Function> function =
      v8::Function::New(isolate, [](const v8::FunctionCallbackInfo<v8::Value>& args) {
        printf("hello, world\n");
        return v8::Undefined();
      });

  // 调用 JavaScript 函数。
  context->Call(function);

  // 退出 Context 对象。
  context->Exit();

  // 释放 V8 引擎。
  isolate->Dispose();

  return 0;
}
```

请谨慎使用代码。[了解详情](https://bard.google.com/faq#coding)

content_copy

这段代码创建了一个 JavaScript 函数，并在一个 `Context` 对象中调用了它。

**注意事项**

- `Context` 对象是智能指针，因此在不再需要时需要手动释放。
- `Context` 对象是线程安全的，因此可以由多个线程同时使用。

**总结**

`v8::Context` 类是访问 JavaScript 全局对象、调用 JavaScript 函数等的一种方便方法。它提供了一系列 API，可以用于创建 `Context` 对象、进入和退出 `Context` 对象等。