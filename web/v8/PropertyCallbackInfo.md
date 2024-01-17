`PropertyCallbackInfo` 是 V8 中用于处理属性访问事件的回调对象。它提供了以下 API：

- `Get()`：获取属性的值。
- `Set()`：设置属性的值。
- `Delete()`：删除属性。
- `Query()`：查询属性是否存在。
- `Enumerator()`：获取属性枚举器。

**使用说明**

使用 `PropertyCallbackInfo` 时，需要先将其传递给 `DefineProperty()` 或 `DefineOwnProperty()` 等方法。然后，在这些方法的回调函数中，可以使用 `PropertyCallbackInfo` 的 API 来处理属性访问事件。

**示例**

以下是使用 `PropertyCallbackInfo` 的示例：

C++

```c++
// 定义一个新的对象。
v8::Local<v8::Object> object = v8::Object::New(isolate);

// 定义一个属性。
v8::PropertyCallbackInfo<v8::Value> callback_info;
object->DefineProperty(
    isolate->GetCurrentContext(),
    v8_str("name"),
    v8_str("John Doe"),
    &callback_info);

// 处理属性访问事件。
if (callback_info.IsSet()) {
  // 属性已设置。
  v8::Value value = callback_info.GetReturnValue();
  // 处理 value。
} else if (callback_info.IsDelete()) {
  // 属性已删除。
} else if (callback_info.IsQuery()) {
  // 属性是否存在。
  bool exists = callback_info.GetReturnValue().ToBoolean();
  // 处理 exists。
} else if (callback_info.IsEnumerate()) {
  // 获取属性枚举器。
  v8::Local<v8::Array> enumerator = callback_info.GetReturnValue();
  // 处理 enumerator。
}
```

请谨慎使用代码。[了解详情](https://bard.google.com/faq#coding)

content_copy

**和 FunctionCallbackInfo 的区别**

`PropertyCallbackInfo` 和 `FunctionCallbackInfo` 都是 V8 中用于处理事件的回调对象。它们的主要区别在于：

- `PropertyCallbackInfo` 用于处理属性访问事件，而 `FunctionCallbackInfo` 用于处理函数调用事件。
- `PropertyCallbackInfo` 提供了 `Get()`、`Set()`、`Delete()`、`Query()` 和 `Enumerator()` 等 API，用于处理属性访问事件。而 `FunctionCallbackInfo` 提供了 `Call()`、`Return()`、`HasPendingException()` 和 `IsConstructCall()` 等 API，用于处理函数调用事件。

**其他 callbackInfo**

除了 `PropertyCallbackInfo` 和 `FunctionCallbackInfo` 之外，V8 中还有其他 callbackInfo，例如：

- `AccessorInfo`：用于处理属性访问事件，但仅限于访问器属性。
- `IndexedPropertyGetterCallbackInfo`：用于处理索引属性的 getter 事件。
- `IndexedPropertySetterCallbackInfo`：用于处理索引属性的 setter 事件。
- `IndexedPropertyDescriptorCallbackInfo`：用于处理索引属性的 descriptor 事件。
- `PromiseResolveCallbackInfo`：用于处理 Promise 的 resolve 事件。
- `PromiseRejectCallbackInfo`：用于处理 Promise 的 reject 事件。
- `PromiseThenCallbackInfo`：用于处理 Promise 的 then 事件。

这些 callbackInfo 的使用方法与 `PropertyCallbackInfo` 类似，请参阅 V8 的 API 文档。