---
layout: post
title: [转]性能优化-C#-tips
date: 2017-03-29 00:00:00
categories: Tool
tags: Tool
excerpt: 性能优化-C#-tips
thread: 20160610
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: 

sh: true
sh_csharp: true
---

1. Mono脚本中存在OnGUI()函数，只要挂载在场景运行，就会有repaint的GC
2. 检查Mesh的Read/Write Enabled是否开启

开启Read/Write Enabled一般是用于运行时修改Mesh的顶点数据，开启这个选项会导致Mesh的内存占用翻倍。因此如果项目中不需要在运行时修改这些Mesh数据的话，建议把这个选项关闭。除了需要脚本中访问的网格，作为网格碰撞器中的网格，脚本中用StaticBatchingUtility.Combine静态合批的网格，以及粒子系统发射的网格之外，其它模型建议不要勾选此项 ，否则会在内存也保留一份网格实例占用内存。

开启纹理导入设置中 Read/Write Enabled，纹理在传到GPU之后，CPU端的数据也会一直保留在内存中。因为在移动端显存共享内存，会导致内存占用加倍。因此需要注意是否有需要在CPU端访问的纹理，比如：需要通过脚本获取纹理像素的情况下，就要开启纹理导入设置中的 Read/Write Enabled。

1. 检查Animation Type有没有设置成None

Unity默认的Animation Type是Generic，对包含动画数据的FBX文件是适用这个选项的。但是如果FBX文件中没有包含动画数据，而只是普通静态Mesh的话，设置为Generic会导致引擎自动为这个Mesh的GameObject添加一个Animator组件，导致不必要的消耗。因此对于不包含动画数据的模型文件，建议把这个选项设置为None。

1. 检查Generate Mipmaps选项有没有开启

对3D物体，关闭Mipmap会导致远处的纹理有闪烁感，而且渲染性能较低，因此建议开启3D物体上纹理的Mipmap。开启Mipmap的缺点是会导致纹理的内存占用更大。对2D物体，Mipmap并不会导致闪烁和性能问题，所以建议关闭2D以及UI纹理上的Mipmap选项。

1. 在Animation页面检查动画的帧率，一般30FPS足够满足大部分游戏的效果，如果发现有制作成60FPS的，建议美术重新制作成30FPS
2. 模型导入设置［Rig］选项页中Optimize GameObject没有勾选

建议开启Optimize GameObject，这个选项可以把SceneManager中用于skinning的节点都去除，节省了场景节点树更新以及查询的CPU消耗，对于需要做挂点的节点可以添加到例外列表中。

1. 使用第三方音频插件时禁用Unity内置音频

不需要使用Unity内置音频模块的时候，建议Editor中通过勾选Edit->Project Settings->Audio->Disable Unity Audio来完全禁用FMOD模块，避免不必要的CPU消耗。

1. 脚本中大量Object的判等操作

建议改为用InstanceID来判断即Object. GetInstanceID，运行期间保证唯一。 因为Object的判等还有额外的耗时操作，而Int类型的判等就非常快速了。同理，使用Object作为key的数据结构也建议改用InstanceID做key。

1. 通过设置camera的cullingMask做层级距离剔除，减少gpu压力
2. 
3. Mesh减少顶点数，Mesh如果不需要tagent，uv2，uv3等等记得删掉
4. 带A通道的图与不带A通道的图分开，不然利用率太低
5. 删除不必要的UI节点、动画组件及资源
6. 减少Rebuild的频率，将动态UI元素（频繁改变例如顶点、alpha、坐标和大小等的元素）与静态UI元素分离出来，放到特定的Canvas中
7. 谨慎使用UI元素的enable与disable,因为它们会触发耗时较高的rebuild，替代方案之一是enable和disableUI元素的canvasrender或者Canvas
8. 谨慎使用Text的Best Fit选项，Unity会为用到的该元素所用到的所有字号生成图元保存在atlas里，不但增加额外的生成时间，还会使得字体对应的atlas变大
9. 慎使用Canvas的Pixel Perfect选项，该选项会使得ui元素在发生位置变化时，造成layout Rebuild。（比如ScrollRect滚动时，如果开启了Canvas的pixel Perfect，会使得SendWillRenderCanvas消耗较高）
10. 对于不需要接收touch事件的grahic，要禁用raycast
11. 要使用空的Image，通过如下类NoDrawingRayCast来接收事件可以避免不必要的overdraw
12. 避免频繁NewClass，使用内存池
13. 字符串拼接，高频使用StringBuilder代替string减少GC开销，低频使用format，不要使用操作符“+”
14. delegate因为内部的链表和装箱拆箱操作，使用频率较高时GC也很高
15. OnGUI，FixedUpdate，Update等空函数也会有gc开销，因为会产生从C++到C#层调用的开销
16. MainCamera变量是一个遍历操作，Camera比较多的时候不要频繁调用
17. 尽量少使用GetComponent，AddComponent（还会产生GC），Find等操作
18. SetPositionAndRotation。因为Transform的Position每次脏了会有一次消息，Rotation也会有，并且会开一个线程来做这个操作极大提升性能。所以最好每帧只设置一次，并且使用SetPositionAndRotation一次性设置可以提升一倍的性能开销。
19. 泛型Find()会有GC
20. 使用ObjectPool对象池来管理对象，避免频繁的Instance，Destroy
21. tag 会在内部循环调用对象分配的标签属性以及拷贝额外的内存，推荐使用gameObject.CompareTag("XXX")来代替.tag
22. 应尽量为类或函数声明为sealed

IL2CPP就sealed的类或函数会有优化，变虚函数调用为直接函数调用。详见[《IL2CPP OPTIMIZATIONS: DEVIRTUALIZATION》](https://blogs.unity3d.com/cn/2016/07/26/il2cpp-optimizations-devirtualization/)。

1. 减少Object的null比较。[CUSTOM == OPERATOR, SHOULD WE KEEP IT?](https://blogs.unity3d.com/cn/2014/05/16/custom-operator-should-we-keep-it/)
2. C#/CPP interop时，不需为blittable的变量声明为MarshalAs。[IL2CPP INTERNALS: P/INVOKE WRAPPERS](https://blogs.unity3d.com/cn/2015/07/02/il2cpp-internals-pinvoke-wrappers/)
3. **减少Dictionary的冗余访问**

if(myDictionary.Contains(oneKey))

{

  MyValue myValue = myDictionary[oneKey];

  // todo

}

但其可减少冗余的哈希次数，优化为：

MyValue myValue;

if(myDictionary.TryGetValue(oneKey, out myValue))

{

  // todo

}

1. 不要使用富文本改变Text组件的颜色，直接通过修改Text组件颜色来修改
2. 能使用Array的固定长度数据不要使用List，内存差2倍以上，可以减少运行时cacheMiss，例如表格等
3. 遍历List的时候，尽量缓存List的长度
4. 降低动画精度，减小内存
5. 特效限制最大粒子数量
6. 禁用资源池 aimator组件，不然会有Update开销
7. 

 

1. “动态”元素尽量少用Outline（顶点偏移重复4遍，用textmesh pro优化）、tiled Sprite
2. 尽量减少“动态”长文本（1个字 = 1张图片 = 2个三角形 =4 个顶点）
3. alpha=0还是会渲染
4. 低更新频率,如设定移动阈值,更新频率等

 

1. 场景切换时避开峰值

场景切换时避开峰值

问题：当前一个场景还未释放的时候，切换到新的场景。这时候由于两个内存叠加很容易达到内存峰值。

解决方案：在屏幕中间遮盖一个Loading场景。在旧的释放完，并且新的初始化结束后，隐藏Loading场景，使之有效的避开内存大量叠加超过峰值。

 

1. 使用struct或者enum作为dictionary key会分配内存

使用struct或enum做key的dictionary，在使用TryGetValue()或者键值访问时，会分配内存。 以下方法可以避免这种情况：

1) 自定义的struct作key，struct需要实现 IEquatable接口

2) enum 作key麻烦一些 申明一个Comparer的struct

 

public struct BuffStatusComparer : IEqualityComparer<BuffStatus>

{

  public bool Equals(BuffStatus x, BuffStatus y)

  {

​    return x == y;

  }

 

  public int GetHashCode(BuffStatus obj)

  {

​    // you need to do some thinking here,

​    return (int)obj;

  }

}

 

47、初始化字典，枚举类型必须添加比较函数

HitShipBuffDict = new Dictionary<BuffStatus,List<BuffStatusInfo>>(new BuffStatusComparer());