**ToLocalChecked() 方法**

`ToLocalChecked()` 方法将 JavaScript 值转换为一个 `v8::Local` 对象，并抛出异常，如果转换失败。

C++

```
v8::Local<v8::Value> ToLocalChecked(v8::Isolate* isolate, v8::Local<v8::Value> value);
```

请谨慎使用代码。[了解详情](https://bard.google.com/faq#coding)

content_copy

**参数**

- `isolate`：`v8::Isolate` 对象。
- `value`：JavaScript 值。

**返回值**

如果转换成功，则返回转换后的 `v8::Local` 对象。如果转换失败，则抛出异常。

**示例代码**

C++

```
#include <v8.h>

int main(int argc, char* argv[]) {
  // 创建一个新的 Isolate 对象。
  v8::Isolate* isolate = v8::Isolate::New();

  // 创建一个新的 JavaScript 数字。
  v8::Local<v8::Number> number = v8::Number::New(isolate, 123);

  // 将 JavaScript 数字转换为一个 v8::Local<v8::Value> 对象。
  v8::Local<v8::Value> value = number->ToLocalChecked();

  // 获取 JavaScript 数字的值。
  double number_value = value->As<v8::Number>()->Value();

  // 销毁 Isolate 对象。
  isolate->Dispose();

  return 0;
}
```

请谨慎使用代码。[了解详情](https://bard.google.com/faq#coding)

content_copy

这段代码创建了一个新的 `Isolate` 对象，并创建了一个 `v8::Number` 对象。然后，它将 JavaScript 数字转换为一个 `v8::Local` 对象，并获取数字的值。

**区别**

`ToChecked()` 和 `ToLocalChecked()` 方法的区别在于，`ToLocalChecked()` 方法返回一个 `v8::Local` 对象，而 `ToChecked()` 方法返回一个普通的 `v8::Value` 对象。

`v8::Local` 对象是 `v8::Value` 对象的智能指针，它提供了一些额外的功能，例如：

- 可以检查是否为空。
- 可以转换为其他 `v8::Local` 对象。
- 可以从 `v8::Context` 对象中获取。

因此，在大多数