在 V8 中，`v8::Uint32Value` 类表示一个 32 位无符号整数值。它是 `v8::Value` 类的子类。

**Uint32Value API 的常用 API**

以下是 `v8::Uint32Value` 类的一些常用 API：

- `Value()`：获取值。
- `ToLocalChecked()`：将值转换为一个 `Local` 对象。
- `ToInt32()`：将值转换为一个 32 位整数。
- `ToUint32()`：将值转换为一个 32 位无符号整数。
- `ToNumber()`：将值转换为一个数字。
- `ToBoolean()`：将值转换为一个布尔值。

以下是 `v8::Uint32Value` 类的完整 API 列表：

C++

```
class Uint32Value : public v8::Value {
 public:
  // 创建一个新的 Uint32Value 对象。
  static Local<Uint32Value> New(Isolate* isolate, uint32_t value);

  // 获取值。
  uint32_t Value() const;

  // 将值转换为一个 Local<v8::Value> 对象。
  Local<v8::Value> ToLocalChecked() const;

  // 将值转换为一个 32 位整数。
  int32_t ToInt32() const;

  // 将值转换为一个 32 位无符号整数。
  uint32_t ToUint32() const;

  // 将值转换为一个数字。
  double ToNumber() const;

  // 将值转换为一个布尔值。
  bool ToBoolean() const;

 private:
  // 值。
  uint32_t value_;
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

  // 创建一个新的 Uint32Value 对象。
  v8::Local<v8::Uint32Value> value = v8::Uint32Value::New(isolate, 123);

  // 获取值。
  uint32_t uint32_value = value->Value();

  // 将值转换为一个 Local<v8::Value> 对象。
  v8::Local<v8::Value> local_value = value->ToLocalChecked();

  // 将值转换为一个 32 位整数。
  int32_t int32_value = value->ToInt32();

  // 将值转换为一个 32 位无符号整数。
  uint32_t uint32_value_2 = value->ToUint32();

  // 将值转换为一个数字。
  double number_value = value->ToNumber();

  // 将值转换为一个布尔值。
  bool boolean_value = value->ToBoolean();

  // 销毁 Isolate 对象。
  isolate->Dispose();

  return 0;
}
```

请谨慎使用代码。[了解详情](https://bard.google.com/faq#coding)

content_copy

这段代码创建了一个新的 `Isolate` 对象，并创建了一个 `v8::Uint32Value` 对象。然后，它获取了值、将值转换为一个 `Local` 对象、将值转换为一个 32 位整数、将值转换为一个 32 位无符号整数、将值转换为一个数字、将值转换为一个布尔值。