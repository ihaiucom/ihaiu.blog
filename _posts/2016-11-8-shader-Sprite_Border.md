---
layout: post
title: Unity Sprite Border Shader (Sprite描边)
date: 2016-08-15 16:37:00
categories: Shader
tags: Unity Shader
excerpt: Unity Sprite Border Shader (Sprite描边)
thread: 20161108193600
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: /assets/docpic/unity-sprite_border_shader.png

sh: true
sh_csharp: true
---

<p>
	<img src="/assets/docpic/unity-sprite_border_shader.png"> </img>
</p>

<p>
	<img src="/assets/docpic/unity-sprite_border_shader2.png"> </img>
</p>

<pre class="brush: csharp; ">
Shader "Sprites/Border"
{
	Properties
	{
		[PerRendererData] _MainTex ("Sprite Texture", 2D) = "white" {}
		_Color ("Tint", Color) = (1,1,1,1)
		[MaterialToggle] PixelSnap ("Pixel snap", Float) = 0

		_LineColor ("Line Color", Color) = (1,1,1,1)
		_OutLineWidth ("_OutLineWidth", float) = 0.01
		_BlurPower("_BlurPower", float) = 3
		[MaterialToggle] NeedPic ("Need Pic", Float) = 1
		_BlurColorMix("_BlurColorMix", float) = 1
		_StepX ("_StepX", float) = 1
		_StepY ("_StepY", float) = 1
	}

	SubShader
	{
		Tags
		{ 
			"Queue"="Transparent" 
			"IgnoreProjector"="True" 
			"RenderType"="Transparent" 
			"PreviewType"="Plane"
			"CanUseSpriteAtlas"="True"
		}

		Cull Off
		Lighting Off
		ZWrite Off
		Blend One OneMinusSrcAlpha

		Pass
		{
		CGPROGRAM
			#pragma vertex vert
			#pragma fragment frag
			#pragma multi_compile _ PIXELSNAP_ON
			#pragma multi_compile _ NEEDPIC_ON
			#pragma shader_feature ETC1_EXTERNAL_ALPHA
			#include "UnityCG.cginc"
			
			struct appdata_t
			{
				float4 vertex   : POSITION;
				float4 color    : COLOR;
				float2 texcoord : TEXCOORD0;
			};

			struct v2f
			{
				float4 vertex   : SV_POSITION;
				fixed4 color    : COLOR;
				float2 texcoord  : TEXCOORD0;
			};
			
			fixed4 _Color;

			fixed4 _LineColor;
			half _OutLineWidth;
			half _BlurPower;
			half _BlurColorMix;
			half _StepX;
			half _StepY;

			v2f vert(appdata_t IN)
			{
				v2f OUT;
				OUT.vertex = mul(UNITY_MATRIX_MVP, IN.vertex);
				OUT.texcoord = IN.texcoord;
				OUT.color = IN.color * _Color;
				#ifdef PIXELSNAP_ON
				OUT.vertex = UnityPixelSnap (OUT.vertex);
				#endif

				return OUT;
			}

			sampler2D _MainTex;
			sampler2D _AlphaTex;

			fixed4 SampleSpriteTexture (float2 uv)
			{
				fixed4 color = tex2D (_MainTex, uv);

#if ETC1_EXTERNAL_ALPHA
				// get the color from an external texture (usecase: Alpha support for ETC1 on android)
				color.a = tex2D (_AlphaTex, uv).r;
#endif //ETC1_EXTERNAL_ALPHA




				half xLength = _StepX * _OutLineWidth;
				half yLength = _StepY * _OutLineWidth;

				half weight = 0.1;
				half alpha 	 = tex2D(_MainTex, uv + float2(xLength , 0)).a 				* weight;
				alpha 		+= tex2D(_MainTex, uv + float2(-xLength , 0)).a 			* weight;
				alpha 		+= tex2D(_MainTex, uv + float2( 0, yLength)).a 				* weight;
				alpha 		+= tex2D(_MainTex, uv + float2( 0, -yLength)).a 			* weight;
				alpha 		+= tex2D(_MainTex, uv + float2(xLength , yLength)).a 		* weight;
				alpha 		+= tex2D(_MainTex, uv + float2(xLength , -yLength)).a 		* weight;
				alpha 		+= tex2D(_MainTex, uv + float2(-xLength , yLength)).a 		* weight;
				alpha 		+= tex2D(_MainTex, uv + float2(-xLength , -yLength)).a 		* weight;



				half4 outCol = _LineColor ;

				outCol.a = max(0,(alpha - color.a));//外侵蚀 
				outCol.a *= _BlurPower;

				fixed4 finalCol;
				finalCol.rgb = outCol.rgb * outCol.a;
				finalCol.a = outCol.a;



				#ifdef NEEDPIC_ON
				finalCol.rgb += color.rgb * step(outCol.a, 0);
				finalCol.a += lerp( outCol.a, color.a, _BlurColorMix);
				#endif



				return finalCol;
			}

			fixed4 frag(v2f IN) : SV_Target
			{
				fixed4 c = SampleSpriteTexture (IN.texcoord) * IN.color;
				c.rgb *= c.a;
				return c;
			}
		ENDCG
		}
	}
}
</pre>
