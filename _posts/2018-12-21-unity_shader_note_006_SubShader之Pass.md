---
layout: post
title: Unity Shader 学习笔记（006）SubShader之Pass
date: 2018-12-21 9:50:00
categories: Shader
tags: Shader
excerpt: Unity Shader 学习笔记（006）SubShader之Pass
shareexcerpt: Unity Shader 学习笔记（006）SubShader之Pass
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
<p> <a href="https://docs.unity3d.com/Manual/SL-SubShader.html" target="_blank"> ShaderLab: SubShader</a> </p>
<p> <a href="https://docs.unity3d.com/Manual/SL-Pass.html" target="_blank"> ShaderLab: Pass </a> </p>
<p> <a href="https://docs.unity3d.com/Manual/SL-UsePass.html" target="_blank"> ShaderLab: UsePass </a> </p>
<p> <a href="https://docs.unity3d.com/Manual/SL-GrabPass.html" target="_blank"> ShaderLab: GrabPass </a> </p>


<br>
<h2 class="nav1">SubShader之Pass</h2>

<p> SubShader 有3种方式使用Pass </p>

* Pass : 创建一个新的“渲染通道”

* UsePass : 引用已经存在的“渲染通道”， 直接使用别的Shader的Pass块。在使用时必须使用大写形式如：UsePass "MyShader/MYPASSNAME"

* GrabPass : 抓取屏幕，并将结果存储到一张纹理中，用于后序的Pass处理。


<br>
<h2 class="nav2">UsePass</h2>
Float 类型换成Range(min, max)就可以在材质球上显示滑块

<pre class="brush: csharp; ">
SubShader 
{
        // UsePass : 引用已经存在的“渲染通道”， 直接使用别的Shader的Pass块。在使用时必须使用大写形式如：UsePass "MyShader/MYPASSNAME"
        UsePass "Reflective/Bumped Unlit/BASE"

        Pass 
        {
            Name "MyPassName"
            Blend One One
            SetTexture [_MainTex] { combine texture }
        }
}

</pre>



<br>
<h2 class="nav2">GrabPass</h2>

<pre class="brush: csharp; ">
Shader "GrabPassInvert"
{
    SubShader
    {
        // Draw ourselves after all opaque geometry
        // 画出所有不透明的几何图形
        Tags { "Queue" = "Transparent" }

        // Grab the screen behind the object into _BackgroundTexture
        // 抓住物体后面的屏幕 _BackgroundTexture
        GrabPass
        {
            "_BackgroundTexture"
        }

        // Render the object with the texture generated above, and invert the colors
        // 使用上面生成的纹理渲染对象，并反转颜色
        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"

            struct v2f
            {
                float4 grabPos : TEXCOORD0;
                float4 pos : SV_POSITION;
            };

            v2f vert(appdata_base v) {
                v2f o;
                // use UnityObjectToClipPos from UnityCG.cginc to calculate 
                // the clip-space of the vertex
                o.pos = UnityObjectToClipPos(v.vertex);
                // use ComputeGrabScreenPos function from UnityCG.cginc
                // to get the correct texture coordinate
                o.grabPos = ComputeGrabScreenPos(o.pos);
                return o;
            }

            sampler2D _BackgroundTexture;

            half4 frag(v2f i) : SV_Target
            {
                half4 bgcolor = tex2Dproj(_BackgroundTexture, i.grabPos);
                return 1 - bgcolor;
            }
            ENDCG
        }

    }
}

</pre>

<p><img src="/assets/docpic/unity_shader_note_006_01.gif" style="border: solid 1px #666;" /></p>


