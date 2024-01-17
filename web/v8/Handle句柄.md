
V8 中的 `Local`、`UniquePersistent` 和 `Persistent` 对象是用于管理 JavaScript 对象的内存引用的。它们都提供了一些相同的 API，但也有一些关键的区别。

**Local 对象**

`Local` 对象是 `v8::Value` 对象的智能指针。它提供了一种安全地管理 JavaScript 对象内存引用的方法。

`Local` 对象的使用方法如下：

C++

```
// 创建一个新的 Local 对象。
v8::Local<v8::String> string = v8::String::NewFromUtf8(
    isolate, "hello, world");

// 获取 Local 对象的值。
v8::Value value = string.Get();

// 释放 Local 对象。
string.Dispose();
```

请谨慎使用代码。[了解详情](https://bard.google.com/faq#coding)

content_copy

`Local` 对象提供了以下 API：

- `Get()`：获取 Local 对象的值。
- `Dispose()`：释放 Local 对象。

**UniquePersistent 对象**

`UniquePersistent` 对象是 `v8::Value` 对象的智能指针。它提供了一种唯一地管理 JavaScript 对象内存引用的方法。

`UniquePersistent` 对象的使用方法如下：

C++

```
// 创建一个新的 UniquePersistent 对象。
v8::UniquePersistent<v8::String> string(
    isolate, v8::String::NewFromUtf8(isolate, "hello, world"));

// 获取 UniquePersistent 对象的值。
v8::Value value = string.Get();

// 销毁 UniquePersistent 对象。
string.Reset();
```

请谨慎使用代码。[了解详情](https://bard.google.com/faq#coding)

content_copy

`UniquePersistent` 对象提供了以下 API：

- `Get()`：获取 UniquePersistent 对象的值。
- `Reset()`：销毁 UniquePersistent 对象。

**Persistent 对象**

`Persistent` 对象是 `v8::Value` 对象的智能指针。它提供了一种灵活地管理 JavaScript 对象内存引用的方法。

`Persistent` 对象的使用方法如下：

C++

```
// 创建一个新的 Persistent 对象。
v8::Persistent<v8::String> string(
    isolate, v8::String::NewFromUtf8(isolate, "hello, world"));

// 获取 Persistent 对象的值。
v8::Value value = string.Get();

// 将 Persistent 对象的值设置为另一个值。
string.Set(v8::String::NewFromUtf8(isolate, "bye, world"));

// 销毁 Persistent 对象。
string.Clear();
```

请谨慎使用代码。[了解详情](https://bard.google.com/faq#coding)

content_copy

`Persistent` 对象提供了以下 API：

- `Get()`：获取 Persistent 对象的值。
- `Set()`：设置 Persistent 对象的值。
- `Clear()`：销毁 Persistent 对象。

**用法和区别**

`Local` 对象是管理 JavaScript 对象内存引用的最安全的方法。它会在对象被销毁时自动释放内存引用。

`UniquePersistent` 对象是管理 JavaScript 对象内存引用的唯一方法。它会在对象被销毁或 `Reset()` 方法被调用时自动释放内存引用。

`Persistent` 对象是管理 JavaScript 对象内存引用的最灵活的方法。它允许开发人员在需要时手动释放内存引用。

以下是 `Local`、`UniquePersistent` 和 `Persistent` 对象的用法和区别的总结：

| 属性   | Local | UniquePersistent | Persistent |
| :----- | :---- | :--------------- | :--------- |
| 安全性 | 安全  | 安全             | 不安全     |
| 唯一性 | 否    | 是               | 否         |
| 灵活性 | 中等  | 低               | 高         |
| 用法   | 常用  | 特殊用途         | 特殊用途   |

drive_spreadsheet导出到 Google 表格

例如，如果需要在 JavaScript 对象被销毁时自动释放内存引用，则应使用 `Local` 对象。如果需要保证 JavaScript 对象在 `Reset()` 方法被调用之前不会被销毁，则应使用 `UniquePersistent` 对象。如果需要在需要时手动释放内存引用，则应使用 `Persistent` 对象。

**Eternal 对象**

`Eternal` 对象是 `v8::Value` 对象的智能指针。它提供了一种永久地管理 JavaScript 对象内存引用的方法。

`Eternal` 对象的使用方法如下：

C++

```
// 创建一个新的 Eternal 对象。
v8::Eternal<v8::String> string(
    isolate, v8::String::NewFromUtf8(isolate, "hello, world"));

// 获取 Eternal 对象的值。
v8::Value value = string.Get();

// 永远不会销毁 Eternal 对象。
```

请谨慎使用代码。[了解详情](https://bard.google.com/faq#coding)

content_copy

`Eternal` 对象提供了以下 API：

- `Get()`：获取 Eternal 对象的值。

**PersistentValueMap 对象**

`PersistentValueMap` 对象是一个 `v8::Value` 对象的映射。它提供了一种安全地管理 JavaScript 对象内存引用的方法。

`PersistentValueMap` 对象的使用方法如下：

C++

```
// 创建一个新的 PersistentValueMap 对象。
v8::PersistentValueMap<v8::String, int> map(isolate);

// 添加一个键值对。
map.Set(v8::String::NewFromUtf8(isolate, "key1"), 1);

// 获取一个键的值。
int value = map.Get(v8::String::NewFromUtf8(isolate, "key1"));

// 删除一个键值对。
map.Remove(v
```

请谨慎使用代码。[了解详情](https://bard.google.com/faq#coding)