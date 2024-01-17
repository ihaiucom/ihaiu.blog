`EscapableHandleScope` 用于管理临时的 handles。它允许开发人员在局部作用域中创建 handles，并在作用域结束时将它们转移到外部作用域。

**API**

`EscapableHandleScope` 提供了以下 API：

- `Escape()`：将 handle 从局部作用域中转移到外部作用域。

**示例**

以下是使用 `EscapableHandleScope` 的示例：

C++

```
// 创建一个新的 EscapableHandleScope。
v8::EscapableHandleScope handle_scope(isolate);

// 创建一个新的 handle。
v8::Local<v8::String> string = v8::String::NewFromUtf8(isolate, "hello, world");

// 将 handle 从局部作用域中转移到外部作用域。
v8::Local<v8::String> escaped_string = handle_scope.Escape(string);

// 使用 escaped_string。
```

请谨慎使用代码。[了解详情](https://bard.google.com/faq#coding)

content_copy

**区别于 HandleScope**

`EscapableHandleScope` 和 `HandleScope` 都是用于管理 handles 的工具。它们的主要区别在于：

- `HandleScope` 会在作用域结束时自动销毁所有 handles。
- `EscapableHandleScope` 不会在作用域结束时自动销毁 handles。开发人员需要自己使用 `Escape()` 方法将 handles 从局部作用域中转移到外部作用域。

**使用建议**

建议在以下情况下使用 `EscapableHandleScope`：

- 需要在局部作用域中创建多个 handles。
- 需要在作用域结束时保留某些 handles。