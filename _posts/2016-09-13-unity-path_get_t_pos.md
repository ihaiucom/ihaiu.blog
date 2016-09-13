---
layout: post
title: 获取路径中的位置
date: 2016-08-02 14:36:13
categories: 算法
tags: Unity Path
excerpt: 已知一条路径，已知路径点。假设s点到e点的距离用百分比t (0–1)。求t在指定值位置的坐标?
shareexcerpt: 已知一条路径，已知路径点。假设s点到e点的距离用百分比t (0–1)。求t在指定值位置的坐标?
thread: 201609131738
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: /assets/docpic/path_get_t_pos.png
sh: true
sh_csharp: true
---


<h2 class="nav1">需求</h2>

<img src="/assets/docpic/path_get_t_pos2.png">


<h2 class="nav1">PathData 代码</h2>
<pre class="brush: csharp; ">
using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class PathData
{

    public List&lt;Vector3&gt; points;

    private int count;
    public float length;
    private float[] lengths;
    private float[] rates;
    private float[] sumrates;

    public void reset()
    {
        isInit = false;
        init();
    }

    private bool isInit;
    private void init()
    {
        if(isInit) return;
        isInit = true;
        count = points.Count;
        if(count &lt; 2) return;

        length = 0;

        lengths = new float[count];
        lengths[0] = 0;

        if(count == 2)
        {
            lengths[1] = Vector3.Distance(points[0], points[1]);
            length = lengths[1];
        }
        else
        {
            for(int i = 1; i &lt; count; i ++)
            {
                Vector3 p1 = points[i - 1];
                Vector3 p2 = points[i];

                float distance = Vector3.Distance(p1, p2);
                lengths[i] = distance;
                length += distance;
            }
        }

        rates = new float[count];
        sumrates = new float[count];
        float r = 0;
        for(int i = 0; i &lt; count; i ++)
        {
            rates[i] = lengths[i] / length;
            r += rates[i];
            sumrates[i] = r;
        }
    }

    private int getBeginIndex(float t)
    {
        for(int i = 0; i &lt; count - 1; i ++)
        {
            if(t &lt; sumrates[i + 1])
            {
                return i;
            }
        }
        return count - 1;
    }


    public Vector3 getPos(float t)
    {
        init();

        if(t &lt;= 0) return points[0];
        if(t &gt;= 1) return points[count - 1];
        int begionIndex = getBeginIndex(t);
        Vector3 p0 = points[begionIndex];
        Vector3 p1 = points[begionIndex + 1];

        float rate = (t - sumrates[begionIndex]) / rates[begionIndex + 1];
        return p0 + (p1 - p0) * rate;
    }
}

</pre>


<br><br>

<h2 class="nav1">测试 代码</h2>


<pre class="brush: csharp; ">
using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class TestPath : MonoBehaviour 
{
    public PathData pathData = new PathData();

    public Transform[] points;
    public Transform tpoint;
    [Range(0F, 1F)]
    public float t = 0.2f;

    void Start () 
    {
        pathData.points = new List&lt;Vector3&gt;();
    }
    
    void Update () 
    {
        for(int i = 0; i &lt; points.Length; i ++)
        {

            if (pathData.points.Count &gt; i)
            {
                pathData.points[i] = points[i].position;
            }
            else
            {
                pathData.points.Add(points[i].position);
            }
        }

        for(int i = pathData.points.Count - 1; i &gt;= points.Length; i --)
        {
            pathData.points.RemoveAt(i);
        }


        pathData.reset();
        tpoint.position = pathData.getPos(t);
    }

    void OnDrawGizmos()
    {
        if (points.Length &lt; 2)
            return;
        
        Gizmos.color = Color.yellow;
        if (points.Length &gt; 2)
        {
            for (int i = 0; i &lt; points.Length - 1; i++)
            {
                Gizmos.DrawLine(points[i].position, points[i + 1].position);
            }
        }
        else
        {
            Gizmos.DrawLine(points[0].position, points[1].position);
        }
    }
}

</pre>


<h2 class="nav1">效果截图</h2>

<img src="/assets/docpic/path_get_t_pos.png">