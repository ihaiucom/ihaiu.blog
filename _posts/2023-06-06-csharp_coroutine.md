---
layout: post
title: C# 实现类似Unity的协程
date: 2023-06-06 13:51:00
categories: C#
tags: C# 协程
excerpt: C# 实现类似Unity的协程
shareexcerpt: C# 实现类似Unity的协程
thread: 10001
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: 

---

### Coroutine.cs

```c#
using System.Collections;
using System.Collections.Generic;

namespace Zeng
{
    public class CoroutineManager {

        private static CoroutineManager i;
        public static CoroutineManager I {
            get {
                if(i == null)
                {
                    i = new CoroutineManager();
                }
                return i;
            }
        }


        private LinkedList<Coroutine> coroutineList= new LinkedList<Coroutine>();
        private LinkedList<Coroutine> coroutineToStop = new LinkedList<Coroutine>();

        public int Count {
            get {
                return coroutineList.Count;
            }
        }

        public Coroutine Start(IEnumerator enumerator, string name = null)
        {
            Coroutine c = new Coroutine(enumerator, name, this);
            coroutineList.AddLast(c);
            return c;
        }

        public void Stop(Coroutine coroutine) {
            if (coroutineList.Contains(coroutine))
            {
                coroutineToStop.AddLast(coroutine);
            }
        }

        public void Update(float deltaTime, int frameIndex)
        {
            LinkedListNode<Coroutine> node = coroutineList.First;
            int i = 0;
            while(node != null)
            {
                Coroutine corutine = node.Value;

                bool ret = false;
                bool toStop = false;
                if (corutine != null) {
                    toStop = coroutineToStop.Contains(corutine);
                    if(!toStop)
                    {
                        ret = corutine.MoveNext(deltaTime, frameIndex);
                    }
                }

                if(!ret)
                {
                    corutine.OnStop();
                    coroutineList.Remove(node);
                    coroutineToStop.Remove(corutine);
                }

                node = node.Next;
                i++;
            }
        }

    }

    public sealed class Coroutine : IWait
    {
        private CoroutineManager manager;
        private IEnumerator routine;
        public string name;

        private Coroutine subCoroutine;
        public Coroutine(IEnumerator routine, string name = null, CoroutineManager manager = null) {
            this.manager = manager;
            this.routine = routine;
            this.name = !string.IsNullOrEmpty(name) ? name : routine.ToString();
        }

        public bool MoveNext(float deltaTime, int frameIndex)
        {
            if(routine == null) {
                return false;
            }

            bool moveNext = true;
            if (subCoroutine == null) {
                IWait wait = routine.Current as IWait;
                if (wait != null)
                {
                    moveNext = wait.Tick(deltaTime, frameIndex);
                }
                else
                {

                    IEnumerator enumerator = routine.Current as IEnumerator;
                    if (enumerator != null)
                    {
                        subCoroutine = new Coroutine(enumerator);
                    }
                }
            }

            if (subCoroutine != null)
            {


                bool subRet = subCoroutine.MoveNext(deltaTime, frameIndex);
                if (!subRet)
                {
                    subCoroutine.OnStop();
                    subCoroutine = null;
                }
                moveNext = !subRet;
            }




            if (!moveNext)
            {
                return true;
            }
            else
            {
                return routine.MoveNext();
            }

        }

        public void Stop()
        {
            if(this.manager != null)
            {
                this.manager.Stop(this);
            }
        }

        internal void OnStop()
        {
            routine = null;
            subCoroutine = null;
            manager = null;
        }


        bool IWait.Tick(float deltaTime, int frameIndex)
        {
            return routine == null;
        }

        public override string ToString()
        {
            return "Coroutine(" + this.name + ")";
        }

    }

    public interface IWait {
        bool Tick(float deltaTime, int frameIndex);
    }

    public class WaitForSeconds : IWait {
        public float waitTime = 0;
        public WaitForSeconds(float time) {
            waitTime = time;
        }

        bool IWait.Tick(float deltaTime, int frameIndex)
        {
            waitTime -= deltaTime;           
            return waitTime <= 0;
        }
    }

    public class WaitForFrame : IWait {
        public int waitFrame = 0;
        public WaitForFrame(int frame)
        {
            waitFrame = frame;
        }

        bool IWait.Tick(float deltaTime, int frameIndex)
        {
            waitFrame--;
            return waitFrame <= 0;
        }
    }
}

```



测试代码

```c#
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class NewBehaviourScript : MonoBehaviour
{
    private Zeng.Coroutine t;
    void Start()
    {
        t = Zeng.CoroutineManager.I.Start(AAAA());
        //Zeng.CoroutineManager.I.Start(TestStop(), "TestStop");
    }

    IEnumerator TestStop()
    {
        yield return new Zeng.WaitForSeconds(1);
        Zeng.CoroutineManager.I.Stop(t);
    }

    void Update()
    {
        if(Zeng.CoroutineManager.I.Count > 0)
        {
            Zeng.CoroutineManager.I.Update(Time.deltaTime, Time.frameCount);
        }


    }

    IEnumerator AAAA()
    {
        UnityEngine.Debug.Log(Time.time +", "+  Time.frameCount + "[AAAA] 开始");
        yield return null;
        UnityEngine.Debug.Log(Time.time + ", " + Time.frameCount + "[AAAA] null");
        yield return new Zeng.WaitForSeconds(1);

        yield return BBBBB();

        UnityEngine.Debug.Log(Time.time + ", " + Time.frameCount + "[AAAA] 结束");
    }


    IEnumerator BBBBB()
    {
        UnityEngine.Debug.Log(Time.time + ", " + Time.frameCount + "[BBBBB] 开始");
        yield return new Zeng.WaitForSeconds(1);
        UnityEngine.Debug.Log(Time.time + ", " + Time.frameCount + "[BBBBB] 等待 1");
        yield return new Zeng.WaitForSeconds(1);
        UnityEngine.Debug.Log(Time.time + ", " + Time.frameCount + "[BBBBB] 结束");
    }
}


```



输出

```
0, 1[AAAA] 开始
0.02, 2[AAAA] null
1.021069, 1053[BBBBB] 开始
2.021327, 2645[BBBBB] 等待 1
3.021888, 4247[BBBBB] 结束
3.021888, 4247[AAAA] 结束
```



支持

```c#
 yield return null; // 相当等等1帧
 yield break; // 支持打断退出
 yield return BBBBB(); // 支持嵌套迭代
 yield return Zeng.CoroutineManager.I.Start(BBBBB()); // 支持嵌套协程
```

