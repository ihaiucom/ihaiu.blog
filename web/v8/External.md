
在 V8 中，`v8::External::New` 是一个静态方法，用于创建一个新的 `v8::External` 对象。这个对象可以用来包装一个 C++ 的 `void*` 指针，使其能够与 JavaScript 对象关联起来。

**参数**

- `isolate`: 一个 `v8::Isolate` 对象，用于管理内存分配和垃圾回收。
- `value`: 一个指向 C++ 对象的 `void*` 指针。

**返回值**

一个新的 `v8::Local` 对象，它封装了提供的 `void*` 指针。

**使用场景**

`v8::External` 对象常用于以下场景：

- 将 C++ 对象与 JavaScript 对象关联起来，以便于在 JavaScript 中访问 C++ 对象的方法和属性。
- 在 JavaScript 对象中存储 C++ 对象的引用，以便于在 C++ 代码中访问 JavaScript 对象。
- 传递 C++ 对象作为 JavaScript 函数的参数。

**重要注意事项**

- `v8::External` 对象本身不包含对 C++ 对象的任何引用。它只是存储了一个 `void*` 指针，您需要负责管理 C++ 对象的内存。
- 您不能直接在 JavaScript 中访问 `v8::External` 对象的成员变量或方法。您需要使用 C++ 代码来访问这些成员变量或方法，然后再将结果传递给 JavaScript。
- 当您不再需要 `v8::External` 对象时，您需要释放它的内存。您可以使用 `v8::Local::Clear()` 方法来释放它。

**示例代码**

C++

```
#include <v8.h>

class MyCppObject {
public:
  int value;
};

v8::Local<v8::Object> CreateJsObject(v8::Isolate* isolate, MyCppObject* obj) {
  // 创建一个 JavaScript 对象
  v8::Local<v8::Object> jsObject = v8::Object::New(isolate);

  // 创建一个 v8::External 对象并将其存储在 JavaScript 对象的内部属性中
  v8::Local<v8::External> external = v8::External::New(isolate, obj);
  jsObject->SetInternalField(0, external);

  // 返回 JavaScript 对象
  return jsObject;
}

int main(int argc, char* argv[]) {
  v8::Isolate* isolate = v8::Isolate::New();

  // 创建一个 C++ 对象
  MyCppObject* obj = new MyCppObject;
  obj->value = 10;

  // 创建一个 JavaScript 对象并将其存储在变量中
  v8::Local<v8::Object> jsObject = CreateJsObject(isolate, obj);

  // ...

  // 释放 C++ 对象的内存
  delete obj;

  // 释放 v8::Local 对象的内存
  isolate->Dispose();

  return 0;
}
```

请谨慎使用代码。[了解详情](https://bard.google.com/faq#coding)

content_copy

这只是一个简单的示例，希望能帮助您理解 `v8::External` 的用法。如果您有任何其他问题，请随时提问！