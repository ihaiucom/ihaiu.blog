**v8::Local** 是 V8 中的一个轻量级栈分配对象句柄。它用于引用 JavaScript 对象、函数、字符串等。

**Local API 的常用 API**

以下是 `v8::Local` 类的一些常用 API：

- `New()`：创建一个新的 `Local` 对象。
- `ToLocalChecked()`：将一个 `v8::Value` 对象转换为 `Local` 对象。
- `IsEmpty()`：判断 `Local` 对象是否为空。
- `Release()`：释放 `Local` 对象。

以下是 `v8::Local` 类的完整 API 列表：

C++

```
template <typename T>
class Local {
 public:
  // 创建一个新的 Local 对象。
  static Local<T> New(Isolate* isolate);

  // 将一个 v8::Value 对象转换为 Local 对象。
  static Local<T> ToLocalChecked(v8::Isolate* isolate, v8::Value value);

  // 判断 Local 对象是否为空。
  bool IsEmpty() const;

  // 释放 Local 对象。
  void Release();

  // 获取 Local 对象的值。
  T operator*() const;

  // 获取 Local 对象的值的引用。
  T* operator->() const;
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

  // 创建一个 JavaScript 对象。
  v8::Local<v8::Object> object = v8::Object::New(isolate);

  // 将 JavaScript 对象引用添加到 HandleScope 对象中。
  v8::HandleScope handle_scope(isolate);
  handle_scope.Add(object);

  // 将 JavaScript 对象引用转换为 Local 对象。
  v8::Local<v8::Object> object_in_local = v8::Local<v8::Object>::New(isolate, object);

  // 判断 Local 对象是否为空。
  if (object_in_local.IsEmpty()) {
    printf("Local 对象为空。\n");
  } else {
    printf("Local 对象不为空。\n");
  }

  // 释放 Local 对象。
  object_in_local.Release();

  // 退出 Context 对象。
  context->Exit();

  // 销毁 Isolate 对象。
  isolate->Dispose();

  return 0;
}
```

请谨慎使用代码。[了解详情](https://bard.google.com/faq#coding)

content_copy

这段代码创建了一个 JavaScript 对象，并将其转换为 `Local` 对象。然后，它判断 `Local` 对象是否为空。最后，它释放 `Local` 对象。

**注意事项**

- `Local` 对象是栈分配的，因此在 `Local` 对象的析构函数被调用时，它会自动释放。
- `Local` 对象是线程安全的，因此可以由多个线程同时使用。

**总结**

`v8::Local` 是访问 JavaScript 对象、函数、字符串等的重要工具。它提供了创建、转换、判断是否为空、释放等 API。