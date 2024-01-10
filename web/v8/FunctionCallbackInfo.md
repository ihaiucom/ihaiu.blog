**v8::FunctionCallbackInfo 类**

`v8::FunctionCallbackInfo` 类表示一个 JavaScript 函数的回调信息。它提供了访问 JavaScript 函数的参数、返回值等信息的 API。

**FunctionCallbackInfo 类的常用 API**

以下是 `v8::FunctionCallbackInfo` 类的一些常用 API：

- `GetIsolate()`：获取 JavaScript 函数所在的 `Isolate` 对象。
- `GetThis()`：获取 JavaScript 函数的 `this` 指针。
- `GetArgument()`：获取 JavaScript 函数的指定参数。
- `GetReturnValue()`：获取 JavaScript 函数的返回值。

以下是 `v8::FunctionCallbackInfo` 类的完整 API 列表：

C++

```
class FunctionCallbackInfo<T> {
 public:
  // 获取 JavaScript 函数所在的 Isolate 对象。
  Isolate* GetIsolate() const;

  // 获取 JavaScript 函数的 this 指针。
  Local<Value> GetThis() const;

  // 获取 JavaScript 函数的指定参数。
  Local<Value> GetArgument(int index) const;

  // 获取 JavaScript 函数的所有参数。
  Local<Value> GetArguments() const;

  // 获取 JavaScript 函数的返回值。
  Local<T> GetReturnValue() const;

  // 设置 JavaScript 函数的返回值。
  void SetReturnValue(Local<T> value);

  // 抛出一个 JavaScript 异常。
  void ThrowException(Local<Value> exception);
};
```

请谨慎使用代码。[了解详情](https://bard.google.com/faq#coding)

content_copy

**示例代码**

C++

```
#include <v8.h>

void MyFunction(const v8::FunctionCallbackInfo<v8::Value>& args) {
  // 获取 JavaScript 函数所在的 Isolate 对象。
  v8::Isolate* isolate = args.GetIsolate();

  // 获取 JavaScript 函数的 this 指针。
  v8::Local<v8::Object> this_ = args.GetThis();

  // 获取 JavaScript 函数的第一个参数。
  v8::Local<v8::Value> arg1 = args.GetArgument(0);

  // 获取 JavaScript 函数的所有参数。
  v8::Local<v8::Array> arguments = args.GetArguments();

  // 获取 JavaScript 函数的返回值。
  v8::Local<v8::Value> return_value = args.GetReturnValue();

  // 设置 JavaScript 函数的返回值。
  args.SetReturnValue(v8::String::NewFromUtf8(isolate, "hello, world"));
}

int main(int argc, char* argv[]) {
  // 创建一个新的 Isolate 对象。
  v8::Isolate* isolate = v8::Isolate::New();

  // 创建一个新的 Context 对象。
  v8::Local<v8::Context> context = v8::Context::New(isolate);

  // 进入 Context 对象。
  context->Enter();

  // 定义一个 JavaScript 函数。
  v8::Local<v8::Function> function =
      v8::Function::New(isolate, MyFunction);

  // 调用 JavaScript 函数。
  context->Call(function);

  // 退出 Context 对象。
  context->Exit();

  // 销毁 Isolate 对象。
  isolate->Dispose();

  return 0;
}
```

请谨慎使用代码。[了解详情](https://bard.google.com/faq#coding)

content_copy

这段代码定义了一个 JavaScript 函数，并调用了该函数。

**注意事项**

- `FunctionCallbackInfo` 对象是线程安全的，因此可以由多个线程同时使用。

**总结**

`v8::FunctionCallbackInfo` 类是访问 JavaScript 函数的参数、返回值等信息的重要工具。它提供了获取 JavaScript 函数所在的 `Isolate` 对象、获取 JavaScript 函数的 `this` 指针、获取 JavaScript 函数的指定参数、获取 JavaScript 函数的所有参数、获取 JavaScript 函数的返回值等 API。