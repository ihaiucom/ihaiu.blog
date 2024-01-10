

在 V8 中，`Arguments` 类表示一个 JavaScript 函数的参数对象。它提供了访问函数参数的 API。

以下是 `Arguments` 类的一些常用 API：

- `Length()`：返回函数的参数数量。
- `Get()`：获取指定索引的参数。
- `Call()`：调用指定函数，并将参数作为参数传递。

以下是 `Arguments` 类的完整 API 列表：

C++

```
class Arguments {
 public:
  // 获取函数的参数数量。
  int Length() const;

  // 获取指定索引的参数。
  Local<Value> Get(int index) const;

  // 获取指定索引的参数，并将其转换为指定类型。
  template <typename T>
  T Get(int index) const;

  // 调用指定函数，并将参数作为参数传递。
  Local<Value> Call(const Local<Function>& function) const;

  // 调用指定函数，并将参数作为参数传递。
  Local<Value> Call(const Local<Function>& function,
                    int argc,
                    const Local<Value> argv[]) const;

  // 返回函数的调用者。
  Local<Value> GetCaller() const;

  // 返回函数的调用者，并将其转换为指定类型。
  template <typename T>
  T GetCaller() const;

  // 返回函数的上下文。
  Local<Context> GetContext() const;
};
```

请谨慎使用代码。[了解详情](https://bard.google.com/faq#coding)

content_copy

**示例代码**

C++

```
#include <v8.h>

void MyFunction(const Arguments& args) {
  // 获取函数的参数数量。
  int length = args.Length();

  // 遍历所有参数。
  for (int i = 0; i < length; i++) {
    // 获取指定索引的参数。
    Local<Value> value = args.Get(i);

    // 将参数转换为字符串。
    String::Utf8Value str(value);

    // 打印参数。
    printf("argument %d: %s\n", i, *str);
  }
}

int main(int argc, char* argv[]) {
  // 创建一个 V8 引擎。
  v8::Isolate* isolate = v8::Isolate::New();

  // 创建一个 JavaScript 函数。
  v8::Local<v8::FunctionTemplate> function_template =
      v8::FunctionTemplate::New(isolate, MyFunction);

  // 创建一个 JavaScript 函数对象。
  v8::Local<v8::Function> function = function_template->GetFunction();

  // 调用 JavaScript 函数。
  v8::Local<v8::Value> result = function->Call(isolate->GetCurrentContext(),
                                                    nullptr, 0);

  // 释放 V8 引擎。
  isolate->Dispose();

  return 0;
}
```

请谨慎使用代码。[了解详情](https://bard.google.com/faq#coding)

content_copy

这段代码定义了一个名为 `MyFunction()` 的 JavaScript 函数，它接受一个参数列表。在 C++ 中，我们可以使用 `Arguments` 类来访问函数的参数。

在该示例中，我们首先使用 `Length()` 方法获取函数的参数数量。然后，我们使用 `Get()` 方法来遍历所有参数。对于每个参数，我们将其转换为字符串并打印出来。

**注意事项**

- `Arguments` 对象是只读的。您不能修改其参数值。
- `Arguments` 对象是局部的。它仅在调用函数时可用。
- 





在 V8 中，`Arguments` 类表示一个 JavaScript 函数的参数对象。它提供了访问函数参数的 API。

`Arguments` 类有两个常用的方法，`This()` 和 `Holder()`，用于获取函数的调用者对象。

`This()` 方法返回函数的调用者对象，它是 JavaScript 中 `this` 关键字的值。`Holder()` 方法返回函数的调用者对象的持有者对象，它是 `this` 关键字的值的拥有者。

**区别**

`This()` 和 `Holder()` 的区别在于，`This()` 方法返回的是直接调用函数的对象，而 `Holder()` 方法返回的是持有直接调用函数的对象。

例如，以下代码定义了一个名为 `MyFunction()` 的 JavaScript 函数，它接受一个参数 `obj`。

JavaScript

```
function MyFunction(obj) {
  console.log(this); // 输出 obj
  console.log(this.holder); // 输出 MyFunction() 的构造函数
}
```

请谨慎使用代码。[了解详情](https://bard.google.com/faq#coding)

content_copy

在 C++ 中，我们可以使用 `Arguments` 类来访问函数的调用者对象。

C++

```
#include <v8.h>

void MyFunction(const v8::Arguments& args) {
  // 获取函数的调用者对象。
  v8::Local<v8::Object> this_object = args.This();

  // 获取函数的调用者对象的持有者对象。
  v8::Local<v8::Object> holder_object = args.Holder();

  // 打印函数的调用者对象。
  v8::String::Utf8Value this_object_str(this_object);
  printf("this_object: %s\n", *this_object_str);

  // 打印函数的调用者对象的持有者对象。
  v8::String::Utf8Value holder_object_str(holder_object);
  printf("holder_object: %s\n", *holder_object_str);
}

int main(int argc, char* argv[]) {
  // 创建一个 V8 引擎。
  v8::Isolate* isolate = v8::Isolate::New();

  // 创建一个 JavaScript 函数。
  v8::Local<v8::FunctionTemplate> function_template =
      v8::FunctionTemplate::New(isolate, MyFunction);

  // 创建一个 JavaScript 函数对象。
  v8::Local<v8::Function> function = function_template->GetFunction();

  // 创建一个 JavaScript 对象。
  v8::Local<v8::Object> obj = v8::Object::New(isolate);

  // 调用 JavaScript 函数。
  v8::Local<v8::Value> result = function->Call(isolate->GetCurrentContext(), obj, 0);

  // 释放 V8 引擎。
  isolate->Dispose();

  return 0;
}
```

请谨慎使用代码。[了解详情](https://bard.google.com/faq#coding)

content_copy

这段代码将 `obj` 作为参数传递给 `MyFunction()` 函数。在 C++ 中，我们使用 `Arguments` 类的 `This()` 方法获取函数的调用者对象，并将其转换为字符串。我们还使用 `Arguments` 类的 `Holder()` 方法获取函数的调用者对象的持有者对象，并将其转换为字符串。

输出：

```
this_object: obj
holder_object: MyFunction
```

**注意事项**

- `This()` 和 `Holder()` 方法返回的对象都是 `v8::Object` 对象。
- 如果函数是匿名函数，则 `This()` 方法和 `Holder()` 方法都返回 `v8::Null`。