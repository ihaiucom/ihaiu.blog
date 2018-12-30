---
layout: post
title: Unity Shader 学习笔记（004）语言形式
date: 2018-12-21 9:50:00
categories: Shader
tags: Shader
excerpt: Unity Shader 语言形式
shareexcerpt: Unity Shader  语言形式
thread: 20181018160000
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: 

sh: true
sh_csharp: true
---




<br>
<br>
<h2 class="nav1">相关文档</h2>

<p> <a href="http://gad.qq.com/article/detail/38320" target="_blank"> Unity Shader学习笔记（3）Unity Shader模板、结构、形式 </a> </p>
<p> <a href="https://docs.unity3d.com/Manual/SL-Shader.html" target="_blank"> Unity用户手册（2018.3）/ 图像图形参考 / 着色器参考ShaderLab语法 </a> </p>
<p> <a href="https://docs.unity3d.com/Manual/ShaderTut1.html" target="_blank"> Unity用户手册（2018.3）/ 图像图形教程 / 着色器：ShaderLab和固定功能着色器 </a> </p>
<p> <a href="https://docs.unity3d.com/Manual/ShaderTut2.html" target="_blank"> Unity用户手册（2018.3）/ 图像图形教程 / 着色器：顶点和片段程序 </a> </p>


<br>
<h2 class="nav1">Unity Sahder语言形式</h2>



#### Unity Sahder的语言形式有3种：


* 表面着色器（Surface Shader）
* 顶点/片元着色器（Vertex/Fragment Shader）
* 固定函数着色器（Fixed Function Shader）

<br>
<h2 class="nav2">表面着色器（Surface Shader）</h2>
这是Unity自己创造的一种着色器代码类型，在背后会转换成对应的顶点/片元着色器，相当于再对顶点/片元着色器的抽象。定义在CGPROGRAM和ENDCG之间，而不是在Pass中。

<pre class="brush: csharp; ">
#pragma surface surf Lambert        //  使用surf函数作为表面着色器，用Lambert光照模型
struct Input ｛
    float4 color : COLOR;
｝;
void surf (Input IN, inout SurfaceOutput o)｛
    o.Albedo = 1;
｝


</pre>


<br>
<h2 class="nav2">顶点/片元着色器（Vertex/Fragment Shader）</h2>
相比表面着色器更复杂，但更灵活。可以控制渲染的实现细节。同样定义在CGPROGRAM和ENDCG之间。 <br><br>

<pre>
#pragma vertex vert             // 使用vert函数作为顶点着色器 
#pragma fragment frag           // 使用frag函数作为片元着色器 
</pre>

<pre class="brush: csharp; ">


        Pass
        {
            Name "Unlit"
            CGPROGRAM
            #pragma vertex vert         // 使用vert函数作为顶点着色器
            #pragma fragment frag       // 使用frag函数作为片元着色器
            #include "UnityCG.cginc"
            

            struct appdata
            {
                float4 vertex : POSITION;
                UNITY_VERTEX_INPUT_INSTANCE_ID
                
            };
            
            struct v2f
            {
                float4 vertex : SV_POSITION;
                UNITY_VERTEX_OUTPUT_STEREO
                
            };

                        
            v2f vert ( appdata v )
            {
                v2f o;
                UNITY_SETUP_INSTANCE_ID(v);
                UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO(o);
                
                
                v.vertex.xyz +=  float3(0,0,0) ;
                o.vertex = UnityObjectToClipPos(v.vertex);
                return o;
            }
            
            fixed4 frag (v2f i ) : SV_Target
            {
                fixed4 finalColor;
                
                
                finalColor = fixed4(1,1,1,1);
                return finalColor;
            }
            ENDCG
        }

</pre>


<br>
<h2 class="nav2">固定函数着色器（Fixed Function Shader）</h2>
以上两种都是可编程管线，而对于一些旧设备，就不支持了，这时就要用固定函数着色器完成渲染，也只能完成一些简单的效果。定义在Pass块中。 <br>


<pre class="brush: csharp; ">
Pass ｛
    Material ｛
        Diffuse [_Color]
    ｝
    Lighting On
｝

</pre>

