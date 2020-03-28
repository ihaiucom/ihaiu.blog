---
layout: post
title: [转]Unity 之 C#效率篇
date: 2017-03-29 00:01:01
categories: unity
tags: unity
excerpt: Unity 之 C#效率篇
thread: 20160610
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: 

sh: true
sh_csharp: true
---



**一、简介**
效率包括了代码的 GC 大小与内存大小，执行速度等等。其中执行速度不是关注的重点。

**Mono**
项目主页：http://www.mono-project.com/

**ILSPY**
反编译工具，功能比 NET.Reflector 好用多了。具体的使用方法可以百度。
简单的过程：
把编译的 dll（\Library\ScriptAssemblies 目录下的 Assembly-CSharp.dll）拖入左边窗口，选择需要查看的类以及函数，然后选择翻译的语言，具体如下

![img](https://image.lexiang-asset.com/company_6034821ca2e011e8b8b55254002f1020/assets/2018/11/a19c2420-ecbf-11e8-965f-525400b4d70f.png-resize1920?sign=wmR0qKLBS91q4FcaYgNQX9+rmJphPTEwMDI5MTYyJms9QUtJRE4yMmgydDZqV0pscEtMYWdsVVRSaWx6czFycjZvYWZ2JmU9MTU4NjAzMjg2MCZ0PTE1ODU0MjgwNjAmcj0xMzE4MTE5ODczJmY9L2NvbXBhbnlfNjAzNDgyMWNhMmUwMTFlOGI4YjU1MjU0MDAyZjEwMjAvYXNzZXRzLzIwMTgvMTEvYTE5YzI0MjAtZWNiZi0xMWU4LTk2NWYtNTI1NDAwYjRkNzBmLnBuZyZiPWxleGlhbmctMTAwMjkxNjI=)









IL 代码
举个简单的例子，来说明 IL 代码把，具体可查阅 msdn 文档。
C#代码：

```
object objValue = 4;
int value = (int)objValue;
```

 生成的 IL 代码如下：（注释有详细的说明）

![img](https://image.lexiang-asset.com/company_6034821ca2e011e8b8b55254002f1020/assets/2018/11/e4c53916-ecc0-11e8-a917-525400b4d70f.png-resize1920?sign=hrnbUpttWsmh7tQTdZIP4TbWmvRhPTEwMDI5MTYyJms9QUtJRE4yMmgydDZqV0pscEtMYWdsVVRSaWx6czFycjZvYWZ2JmU9MTU4NjAzMjg2MCZ0PTE1ODU0MjgwNjAmcj0yMDcxNDE3NDI2JmY9L2NvbXBhbnlfNjAzNDgyMWNhMmUwMTFlOGI4YjU1MjU0MDAyZjEwMjAvYXNzZXRzLzIwMTgvMTEvZTRjNTM5MTYtZWNjMC0xMWU4LWE5MTctNTI1NDAwYjRkNzBmLnBuZyZiPWxleGlhbmctMTAwMjkxNjI=)



 

**二、GC 与内存篇**
**for 与 foreach 真相**
目的
在 Mono 下，研究两种不同方式的 GC 情况。
环境
同简介中的环境
测试代码

```
using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class TestCodPerfomanceScript : MonoBehaviour
{

    // Use this for initialization List<int> mData = new List<int>();

    void Start()
    {
        mData.Add(1);   //可有 n 个元素，n 也可以为 0
    }

    void testForForeach_foreach()
    {
        foreach (var e in mData)
        {
            //Debug.Log(e);


        }
    }

    void testForForeach_for()
    {
        int len = mData.Count;
        for (int i = 0; i < len; i++)
        {
        }
    }

    void testForForeach_nonforeach()
    {
        var e = mData.GetEnumerator();
        while (e.MoveNext())
        {

        }
    }

    // Update is called once per frame
    void Update()
    {
        //testForForeach_foreach();
        //testForForeach_for(); testForForeach_nonforeach();
    }
}
```

**测试结果**

![img](https://image.lexiang-asset.com/company_6034821ca2e011e8b8b55254002f1020/assets/2018/11/8d0910de-ecc1-11e8-a0a5-5254004f9daa.png-resize1920?sign=33yd2eGL5Au4sBXRRdazij4hej9hPTEwMDI5MTYyJms9QUtJRE4yMmgydDZqV0pscEtMYWdsVVRSaWx6czFycjZvYWZ2JmU9MTU4NjAzMjg2MCZ0PTE1ODU0MjgwNjAmcj01NDMwNzEyMDAmZj0vY29tcGFueV82MDM0ODIxY2EyZTAxMWU4YjhiNTUyNTQwMDJmMTAyMC9hc3NldHMvMjAxOC8xMS84ZDA5MTBkZS1lY2MxLTExZTgtYTBhNS01MjU0MDA0ZjlkYWEucG5nJmI9bGV4aWFuZy0xMDAyOTE2Mg==)



 

**数据分析**
**反编译->C#代码**

![img](https://image.lexiang-asset.com/company_6034821ca2e011e8b8b55254002f1020/assets/2018/11/c092f3b6-ecc1-11e8-9795-5254007b2a54.png-resize1920?sign=6qsSM3q7CFKL45Z5cKBodkhBLwxhPTEwMDI5MTYyJms9QUtJRE4yMmgydDZqV0pscEtMYWdsVVRSaWx6czFycjZvYWZ2JmU9MTU4NjAzMjg2MCZ0PTE1ODU0MjgwNjAmcj01MDU2MTUxMDkmZj0vY29tcGFueV82MDM0ODIxY2EyZTAxMWU4YjhiNTUyNTQwMDJmMTAyMC9hc3NldHMvMjAxOC8xMS9jMDkyZjNiNi1lY2MxLTExZTgtOTc5NS01MjU0MDA3YjJhNTQucG5nJmI9bGV4aWFuZy0xMDAyOTE2Mg==)

从代码中，我们可知 foreach 中，编译器加了不少代码。从这里应该是有发生过装箱的操作。从对 testForForeach_nonforeach 函数的反编译 C#代码来看，应该是 using 那块产生装箱操作。继续查看反编译的 IL 代码。

 

**反编译->IL 代码**
testForForeach_foreach 的 IL 代码

![img](https://image.lexiang-asset.com/company_6034821ca2e011e8b8b55254002f1020/assets/2018/11/fb2a3afc-ecc1-11e8-9712-52540089e328.png-resize1920?sign=UfgPyhTLvx43X1NJHyEg9y+bipxhPTEwMDI5MTYyJms9QUtJRE4yMmgydDZqV0pscEtMYWdsVVRSaWx6czFycjZvYWZ2JmU9MTU4NjAzMjg2MCZ0PTE1ODU0MjgwNjAmcj0yMDI4MDExMjUwJmY9L2NvbXBhbnlfNjAzNDgyMWNhMmUwMTFlOGI4YjU1MjU0MDAyZjEwMjAvYXNzZXRzLzIwMTgvMTEvZmIyYTNhZmMtZWNjMS0xMWU4LTk3MTItNTI1NDAwODllMzI4LnBuZyZiPWxleGlhbmctMTAwMjkxNjI=)
从图中可以清楚中的看到有一次装箱过程。

**数据结论**
可以显然可知，foreach 每次有 40B 的 GC 产生（这个是 Mono 的一个 bug）。其余两种方式不产生 GC。
产生 GC 的根本原因是使用了 using 语句。（GetEnumerator()返回值类型，在
using 中装箱了）
那么，我们写一段测试代码，在去验证一下：

```
void testForForeach_nonforeachUsing()
{
    using (var e = mData.GetEnumerator())
    {
        while (e.MoveNext())
        {

        }
    }
}
```

 得到的数据是

![4dafce5eecc211e8b464525400177fdc](https://file.lexiang-asset.com/company_6034821ca2e011e8b8b55254002f1020/assets/2018/11/4d4bb6da-ecc2-11e8-a3b1-52540089e328.png?sign=8IZiQvD1a+GU1lpK3WCVImcH1u5hPTEwMDI5MTYyJms9QUtJRE4yMmgydDZqV0pscEtMYWdsVVRSaWx6czFycjZvYWZ2JmU9MTU4NjAzMjg2MCZ0PTE1ODU0MjgwNjAmcj0yMDQzMDczMTg4JmY9L2NvbXBhbnlfNjAzNDgyMWNhMmUwMTFlOGI4YjU1MjU0MDAyZjEwMjAvYXNzZXRzLzIwMTgvMTEvNGQ0YmI2ZGEtZWNjMi0xMWU4LWEzYjEtNTI1NDAwODllMzI4LnBuZyZiPWxleGlhbmctMTAwMjkxNjI=)

**意义**
所以，在目前的项目中，foreach 还是有 GC 的。（不管是 IList 还是 ArrayList
都会有 GC）
具体见测试数据

![65593b58ecc211e881595254007b2a54](https://file.lexiang-asset.com/company_6034821ca2e011e8b8b55254002f1020/assets/2018/11/650ba9ce-ecc2-11e8-b544-525400a20cd4.png?sign=3paWQD43f/ppDfYEPORZOG8ZXjxhPTEwMDI5MTYyJms9QUtJRE4yMmgydDZqV0pscEtMYWdsVVRSaWx6czFycjZvYWZ2JmU9MTU4NjAzMjg2MCZ0PTE1ODU0MjgwNjAmcj0zODE4MzMxNTQmZj0vY29tcGFueV82MDM0ODIxY2EyZTAxMWU4YjhiNTUyNTQwMDJmMTAyMC9hc3NldHMvMjAxOC8xMS82NTBiYTljZS1lY2MyLTExZTgtYjU0NC01MjU0MDBhMjBjZDQucG5nJmI9bGV4aWFuZy0xMDAyOTE2Mg==)



建议项目中采用testForForeach_for()和testForForeach_nonforeach()的写法。尤其是在 update 或 LateUpdate 中。

在处理 Dictionary 遍历的时候，我们可以这样：

```
var enumerator = m_Dictionary.GetEnumerator();
while (enumerator.MoveNext())
{
    var element = enumerator.Current; element.Value.UpdateComponent(deltaTime);
}
```

 

**字符串拼接真相**
目的
在 Mono 下，研究两种常用的字符串拼接的内存与 GC 问题。

环境
同简介中的环境
测试代码

```
using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using System.Text;

public class TestCodPerfomanceStringBuilderScript : MonoBehaviour
{

    // Use this for initialization

    void Start()
    {
    }

    void testStringBuilder_plus()
    {
        string test = "abc" + "efg" + "h";
        int index = test.Length;
    }

    void testStringBuilder_StringBuilder()
    {
        StringBuilder testData = new StringBuilder();         testData.Append("abc");         testData.Append("efg");         testData.Append("h");
        string test = testData.ToString();

    }

    // Update is called once per frame 
    void Update ()
    {
        testStringBuilder_plus();
        //testStringBuilder_StringBuilder();
    }
}
```

 **测试结果**

![6808851aecc311e8b4d6525400a20cd4](https://file.lexiang-asset.com/company_6034821ca2e011e8b8b55254002f1020/assets/2018/11/67a9b850-ecc3-11e8-989f-525400a20cd4.png?sign=Nx7dor7y0TujEH4FMqZ8IS7daZxhPTEwMDI5MTYyJms9QUtJRE4yMmgydDZqV0pscEtMYWdsVVRSaWx6czFycjZvYWZ2JmU9MTU4NjAzMjg2MCZ0PTE1ODU0MjgwNjAmcj0xODk3NTAwNTg3JmY9L2NvbXBhbnlfNjAzNDgyMWNhMmUwMTFlOGI4YjU1MjU0MDAyZjEwMjAvYXNzZXRzLzIwMTgvMTEvNjdhOWI4NTAtZWNjMy0xMWU4LTk4OWYtNTI1NDAwYTIwY2Q0LnBuZyZiPWxleGlhbmctMTAwMjkxNjI=)

 

**数据分析**
**反编译->C#代码**
![0ecdcc20ecc411e887af5254007b2a54](https://file.lexiang-asset.com/company_6034821ca2e011e8b8b55254002f1020/assets/2018/11/0e62db68-ecc4-11e8-a9f7-5254002ec14d.png?sign=gBcmA6ubcsT9T6LyOX+48ZO/AG5hPTEwMDI5MTYyJms9QUtJRE4yMmgydDZqV0pscEtMYWdsVVRSaWx6czFycjZvYWZ2JmU9MTU4NjAzMjg2MCZ0PTE1ODU0MjgwNjAmcj0xMzUwNDg5Mjk3JmY9L2NvbXBhbnlfNjAzNDgyMWNhMmUwMTFlOGI4YjU1MjU0MDAyZjEwMjAvYXNzZXRzLzIwMTgvMTEvMGU2MmRiNjgtZWNjNC0xMWU4LWE5ZjctNTI1NDAwMmVjMTRkLnBuZyZiPWxleGlhbmctMTAwMjkxNjI=)

**反编译->IL 代码**
![9a013188ecc411e8ad03525400b4d70f](https://file.lexiang-asset.com/company_6034821ca2e011e8b8b55254002f1020/assets/2018/11/999090a4-ecc4-11e8-be83-5254004f9daa.png?sign=ArY7+gPzPKOyaQINIppt58JGlTphPTEwMDI5MTYyJms9QUtJRE4yMmgydDZqV0pscEtMYWdsVVRSaWx6czFycjZvYWZ2JmU9MTU4NjAzMjg2MCZ0PTE1ODU0MjgwNjAmcj0xMzIxODY3MDIwJmY9L2NvbXBhbnlfNjAzNDgyMWNhMmUwMTFlOGI4YjU1MjU0MDAyZjEwMjAvYXNzZXRzLzIwMTgvMTEvOTk5MDkwYTQtZWNjNC0xMWU4LWJlODMtNTI1NDAwNGY5ZGFhLnBuZyZiPWxleGlhbmctMTAwMjkxNjI=)

**分析**
从上面的测试用例得出， testStringBuilder_plus () 不产生 GC ，而
testStringBuilder_StringBuilder()产生 GC，和我们之前的理解有些偏差。是不是我们的测试用例还不够全，我们把 3 次相加变成 300 次试试。
代码如下：

```
void testStringBuilder_plus_More()
{
    string test = "abc" + "efg" + "h";
    for (int i = 0; i < 300; i++)
    {

        test += "testStringBuilder_plus_testStringBuilder_plus_More";
    }
    int index = test.Length;
}

void testStringBuilder_StringBuilder_More()
{
    StringBuilder testData = new StringBuilder();
    for (int i = 0; i < 300; i++)
    {
        testData.Append("testStringBuilder_plus_testString Builder_plus_More");
    }
    string test = testData.ToString();
}
```

 **测试结果如下：**

![1cdb749cecc511e8acb9525400ac2e73](https://file.lexiang-asset.com/company_6034821ca2e011e8b8b55254002f1020/assets/2018/11/1c76254c-ecc5-11e8-850b-525400ac2e73.png?sign=yq3FT87+AVNWbBtv9Y8D7E1HEBRhPTEwMDI5MTYyJms9QUtJRE4yMmgydDZqV0pscEtMYWdsVVRSaWx6czFycjZvYWZ2JmU9MTU4NjAzMjg2MCZ0PTE1ODU0MjgwNjAmcj0xMDI2NjY4NDE2JmY9L2NvbXBhbnlfNjAzNDgyMWNhMmUwMTFlOGI4YjU1MjU0MDAyZjEwMjAvYXNzZXRzLzIwMTgvMTEvMWM3NjI1NGMtZWNjNS0xMWU4LTg1MGItNTI1NDAwYWMyZTczLnBuZyZiPWxleGlhbmctMTAwMjkxNjI=)

**反编译代码分别如下:**

**testStringBuilder_plus_More()**

![ba9e8cdcecc511e89bd4525400b4d70f](https://file.lexiang-asset.com/company_6034821ca2e011e8b8b55254002f1020/assets/2018/11/ba216a22-ecc5-11e8-8d19-5254004f9daa.png?sign=tbz8iOYPmRy450jaskXgSDybhV9hPTEwMDI5MTYyJms9QUtJRE4yMmgydDZqV0pscEtMYWdsVVRSaWx6czFycjZvYWZ2JmU9MTU4NjAzMjg2MCZ0PTE1ODU0MjgwNjAmcj0xNzQxNDk2MTA5JmY9L2NvbXBhbnlfNjAzNDgyMWNhMmUwMTFlOGI4YjU1MjU0MDAyZjEwMjAvYXNzZXRzLzIwMTgvMTEvYmEyMTZhMjItZWNjNS0xMWU4LThkMTktNTI1NDAwNGY5ZGFhLnBuZyZiPWxleGlhbmctMTAwMjkxNjI=)

**testStringBuilder_StringBuilder_More()**

![1b812546ecc611e888af525400a20cd4](https://file.lexiang-asset.com/company_6034821ca2e011e8b8b55254002f1020/assets/2018/11/1b394f8c-ecc6-11e8-bea1-525400a20cd4.png?sign=8XNvjqc1lVe29G044nqXTS8a6DhhPTEwMDI5MTYyJms9QUtJRE4yMmgydDZqV0pscEtMYWdsVVRSaWx6czFycjZvYWZ2JmU9MTU4NjAzMjg2MCZ0PTE1ODU0MjgwNjAmcj01NjI0NDkwMTYmZj0vY29tcGFueV82MDM0ODIxY2EyZTAxMWU4YjhiNTUyNTQwMDJmMTAyMC9hc3NldHMvMjAxOC8xMS8xYjM5NGY4Yy1lY2M2LTExZTgtYmVhMS01MjU0MDBhMjBjZDQucG5nJmI9bGV4aWFuZy0xMDAyOTE2Mg==)

在 300 次的数量下面，结果很明显。

**数据结论**
不同的使用场景结果是不同的，+ 号在几次连接中没有产生 GC。而在大量的连接过程中，产生大量的 GC。
**意义**
连接次数只有几次（10 以内），此时应该直接用 + 号连接，不产生 GC。实际上，编译器已经做了优化。
其余的使用 StringBuilder ， StringBuilder 内部 Buffer 的缺省值为 16 ，按 StringBuilder 的使用场景，Buffer 肯定得重新分配。经验值一般用 256 作
为 Buffer 的初值。当然，如果能计算出最终生成字符串长度的话，则应该按这个值来设定 Buffer 的初值。使用 new StringBuilder(256) 就将 Buffer 的初始
长度设为了 256。