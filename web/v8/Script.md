V8 中的 `v8::Script` 类表示一个 JavaScript 脚本。它提供了编译、执行、获取错误等功能。

**Script API 的常用 API**

以下是 `v8::Script` 类的一些常用 API：

- `Compile()`：编译 JavaScript 脚本。
- `Run()`：执行 JavaScript 脚本。
- `GetSource()`：获取 JavaScript 脚本的源代码。
- `GetCachedData()`：获取 JavaScript 脚本的缓存数据。
- `GetLineOffset()`：获取 JavaScript 脚本中指定行号的偏移量。

以下是 `v8::Script` 类的完整 API 列表：

C++

```
class Script {
 public:
  // 创建一个新的 Script 对象。
  static Local<Script> New(Isolate* isolate, const char* source);

  // 创建一个新的 Script 对象。
  static Local<Script> New(Isolate* isolate, const uint16_t* source);

  // 创建一个新的 Script 对象。
  static Local<Script> New(Isolate* isolate, const String::Utf8Value& source);

  // 创建一个新的 Script 对象。
  static Local<Script> New(Isolate* isolate, const String::Value& source);

  // 编译 JavaScript 脚本。
  static Local<Script> Compile(Isolate* isolate, Local<String> source);

  // 编译 JavaScript 脚本。
  static Local<Script> Compile(Isolate* isolate, Local<String> source,
                                ScriptOrigin origin);

  // 执行 JavaScript 脚本。
  Local<Value> Run(Isolate* isolate);

  // 执行 JavaScript 脚本。
  Local<Value> Run(Isolate* isolate, Local<Context> context);

  // 获取 JavaScript 脚本的源代码。
  const char* GetSource() const;

  // 获取 JavaScript 脚本的缓存数据。
  const uint8_t* GetCachedData() const;

  // 获取 JavaScript 脚本中指定行号的偏移量。
  int GetLineOffset(int line_number) const;

 private:
  // Isolate 对象。
  Isolate* isolate_;

  // 脚本的源代码。
  const char* source_;

  // 脚本的缓存数据。
  const uint8_t* cached_data_;

  // 脚本的偏移量表。
  std::vector<int> line_offsets_;
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
  context->Enter();

  // 编译 JavaScript 脚本。
  v8::Local<v8::Script> script = v8::Script::Compile(isolate,
                                                    v8::String::NewFromUtf8(isolate,
                                                                          "console.log('hello, world');"));

  // 执行 JavaScript 脚本。
  script->Run(isolate);

  // 退出 Context 对象。
  context->Exit();

  // 销毁 Isolate 对象。
  isolate->Dispose();

  return 0;
}
```

请谨慎使用代码。[了解详情](https://bard.google.com/faq#coding)

content_copy

这段代码创建了一个新的 `Isolate` 对象和 `Context` 对象，并编译、执行了 JavaScript 脚本。