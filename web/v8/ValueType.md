
在 V8 中，`v8::ValueType` 枚举类型表示 JavaScript 值的类型。它定义了以下值：

- **v8::kUndefined**：表示 undefined 值。
- **v8::kNull**：表示 null 值。
- **v8::kBoolean**：表示布尔值。
- **v8::kNumber**：表示数字值。
- **v8::kString**：表示字符串值。
- **v8::kObject**：表示对象值。
- **v8::kFunction**：表示函数值。
- **v8::kExternal**：表示外部值。
- **v8::kDate**：表示日期值。
- **v8::kArray**：表示数组值。
- **v8::kArrayBuffer**：表示缓冲区值。
- **v8::kDataView**：表示数据视图值。
- **v8::kTypedArray**：表示类型化数组值。
- **v8::kMap**：表示映射值。
- **v8::kSet**：表示集合值。
- **v8::kWeakMap**：表示弱映射值。
- **v8::kWeakSet**：表示弱集合值。
- **v8::kGenerator**：表示生成器值。
- **v8::kPromise**：表示 promise 值。
- **v8::kAsyncFunction**：表示异步函数值。
- **v8::kBigInt**：表示大整数值。

**示例代码**

C++

```
#include <v8.h>

int main(int argc, char* argv[]) {
  // 创建一个 JavaScript 数字。
  v8::Local<v8::Number> number = v8::Number::New(isolate, 123);

  // 获取 JavaScript 数字的类型。
  v8::ValueType type = number->TypeOf();

  // 判断 JavaScript 数字的类型。
  bool is_number = type == v8::kNumber;

  return 0;
}
```

请谨慎使用代码。[了解详情](https://bard.google.com/faq#coding)

content_copy

这段代码创建了一个 JavaScript 数字，并获取了它的类型。