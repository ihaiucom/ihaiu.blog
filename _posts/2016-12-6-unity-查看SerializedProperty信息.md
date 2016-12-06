---
layout: post
title: unity 查看SerializedProperty信息
date: 2016-12-5 16:45:00
categories: Unity
tags: Unity
excerpt: 查看SerializedProperty信息
shareexcerpt: 查看SerializedProperty信息
thread: 201612061630
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: 

sh: true
sh_csharp: true
---


<h2 class=".nav">代码</h2>


<pre class="brush: csharp; ">
#if UNITY_EDITOR
using UnityEngine;
using System.Collections;
using System.IO;
using UnityEditor;

public static class SerializedPropertyUtil 
{
	[MenuItem(&quot;Test/PrintTagManager&quot;)]
	public static void PrintTagManager () 
	{
		SerializedObject tagManager = new SerializedObject(AssetDatabase.LoadAllAssetsAtPath(&quot;ProjectSettings/TagManager.asset&quot;)[0]);
		SerializedProperty it = tagManager.GetIterator();
        StringWriter sw = new StringWriter();
        while (it.NextVisible(true))
        {
			ToStr(it, false, sw);
        }

        Debug.Log(sw.ToString());
	}

	public static void Print(this SerializedProperty p, bool enterChild = true)
	{
		Debug.Log(ToStr(p, enterChild).ToString());
	}

	public static StringWriter ToStr(this SerializedProperty p,  bool enterChild = true, StringWriter sw = null, string pre=&quot;&quot;)
	{
		if (sw == null)
		{
			sw = new StringWriter();
		}

		if(p.propertyType == SerializedPropertyType.Generic)
		{
			sw.WriteLine(string.Format(pre + &quot;name={0}, displayName={1}, isAnimated={2}, isArray={3}, isExpanded={4}, isInstantiatedPrefab={5}, propertyType={6}, propertyPath={7}, depth={8}, type={9}, arraySize={10}&quot;, p.name, p.displayName, p.isAnimated, p.isArray, p.isExpanded, p.isInstantiatedPrefab, p.propertyType, p.propertyPath, p.depth, p.type, (p.isArray ? p.arraySize + &quot;&quot; : &quot;NoSize&quot;) ));

		}
		else if (p.isArray && p.propertyType == SerializedPropertyType.ArraySize)
		{
			sw.WriteLine(string.Format(pre + &quot;name={0}, displayName={1}, isAnimated={2}, isArray={3}, isExpanded={4}, isInstantiatedPrefab={5}, propertyType={6}, propertyPath={7}, depth={8}, type={9}, arraySize={10}&quot;, p.name, p.displayName, p.isAnimated, p.isArray, p.isExpanded, p.isInstantiatedPrefab, p.propertyType, p.propertyPath, p.depth, p.type, p.arraySize));

		}
		else
		{
			//            sw.WriteLine(string.Format(pre + &quot;name={0}, displayName={1}, isAnimated={2}, isArray={3}, isExpanded={4}, isInstantiatedPrefab={5}, propertyType={6}, propertyPath={7}, depth={8}, type={9}, val={10}&quot;, p.name, p.displayName, p.isAnimated, p.isArray, p.isExpanded, p.isInstantiatedPrefab, p.propertyType, p.propertyPath, p.depth, p.type, GetVal(p)));
			sw.WriteLine(string.Format(pre + &quot;name={0}, displayName={1}, isArray={2},  propertyType={3}, propertyPath={4}, depth={5}, type={6}, val={7}&quot;, p.name, p.displayName, p.isArray, p.propertyType, p.propertyPath, p.depth, p.type, GetVal(p)));

		}

		if(enterChild)
		{
			if(p.isArray && p.propertyType != SerializedPropertyType.String)
			{
				sw.WriteLine(&quot;&quot;);
				for(int i = 0; i &lt; p.arraySize; i ++)
				{
					SerializedProperty child = p.GetArrayElementAtIndex(i);
					ToStr(child, enterChild, sw, pre + &quot;--&quot;);
				}
				sw.WriteLine(&quot;&quot;);
			}
			else if(p.propertyType == SerializedPropertyType.Generic)
			{
				string propertyPath = p.propertyPath;
				while (p.NextVisible(true))
				{
					if(p.propertyPath.StartsWith(propertyPath))
					{
						ToStr(p, enterChild, sw, pre + &quot;--&quot;);
					}
					else
					{
						break;
					}
				}
			}
		}





		return sw;
	}

	public static object GetVal(SerializedProperty p)
	{
		switch (p.propertyType)
		{
		case SerializedPropertyType.Integer:
			return p.intValue;
			break;
		case SerializedPropertyType.Boolean:
			return p.boolValue;
			break;
		case SerializedPropertyType.Float:
			return p.floatValue;
			break;
		case SerializedPropertyType.String:
			return p.stringValue;
			break;
		case SerializedPropertyType.Color:
			return p.colorValue;
			break;
		case SerializedPropertyType.ObjectReference:
			return p.objectReferenceValue;
			break;
		case SerializedPropertyType.LayerMask:
			return p.intValue;
			break;
		case SerializedPropertyType.Enum:
			return p.enumNames;
			break;
		case SerializedPropertyType.Vector2:
			return p.vector2Value;
			break;
		case SerializedPropertyType.Vector3:
			return p.vector3Value;
			break;
		case SerializedPropertyType.Vector4:
			return p.vector4Value;
			break;
		case SerializedPropertyType.Rect:
			return p.rectValue;
			break;
		case SerializedPropertyType.Character:
			return p.stringValue;
			break;
		case SerializedPropertyType.AnimationCurve:
			return p.animationCurveValue;
			break;
		case SerializedPropertyType.Bounds:
			return p.boundsValue;
			break;
		case SerializedPropertyType.Gradient:
			return p.animationCurveValue;
			break;
		case SerializedPropertyType.Quaternion:
			return p.quaternionValue;
			break;
		}

		return &quot;Dont know&quot;;
	}
}
#endif
</pre>

<br>

<h2 class=".nav">输出</h2>

<pre>
name=tags, displayName=Tags, isAnimated=False, isArray=True, isExpanded=False, isInstantiatedPrefab=False, propertyType=Generic, propertyPath=tags, depth=0, type=vector, arraySize=3
name=size, displayName=Size, isArray=False,  propertyType=ArraySize, propertyPath=tags.Array.size, depth=1, type=ArraySize, val=Dont know
name=data, displayName=Element 0, isArray=True,  propertyType=String, propertyPath=tags.Array.data[0], depth=1, type=string, val=UICamera
name=data, displayName=Element 1, isArray=True,  propertyType=String, propertyPath=tags.Array.data[1], depth=1, type=string, val=War_Terrain
name=data, displayName=Element 2, isArray=True,  propertyType=String, propertyPath=tags.Array.data[2], depth=1, type=string, val=War_Unit
name=layers, displayName=Layers, isAnimated=False, isArray=True, isExpanded=True, isInstantiatedPrefab=False, propertyType=Generic, propertyPath=layers, depth=0, type=vector, arraySize=32
name=size, displayName=Size, isArray=False,  propertyType=ArraySize, propertyPath=layers.Array.size, depth=1, type=ArraySize, val=Dont know
name=data, displayName=Element 0, isArray=True,  propertyType=String, propertyPath=layers.Array.data[0], depth=1, type=string, val=Default
name=data, displayName=Element 1, isArray=True,  propertyType=String, propertyPath=layers.Array.data[1], depth=1, type=string, val=TransparentFX
name=data, displayName=Element 2, isArray=True,  propertyType=String, propertyPath=layers.Array.data[2], depth=1, type=string, val=Ignore Raycast
name=data, displayName=Element 3, isArray=True,  propertyType=String, propertyPath=layers.Array.data[3], depth=1, type=string, val=
name=data, displayName=Element 4, isArray=True,  propertyType=String, propertyPath=layers.Array.data[4], depth=1, type=string, val=Water
name=data, displayName=Element 5, isArray=True,  propertyType=String, propertyPath=layers.Array.data[5], depth=1, type=string, val=UI
name=data, displayName=Element 6, isArray=True,  propertyType=String, propertyPath=layers.Array.data[6], depth=1, type=string, val=
name=data, displayName=Element 7, isArray=True,  propertyType=String, propertyPath=layers.Array.data[7], depth=1, type=string, val=
name=data, displayName=Element 8, isArray=True,  propertyType=String, propertyPath=layers.Array.data[8], depth=1, type=string, val=War_Terrain
name=data, displayName=Element 9, isArray=True,  propertyType=String, propertyPath=layers.Array.data[9], depth=1, type=string, val=War_Unit
name=data, displayName=Element 10, isArray=True,  propertyType=String, propertyPath=layers.Array.data[10], depth=1, type=string, val=War_Obstacle
name=data, displayName=Element 11, isArray=True,  propertyType=String, propertyPath=layers.Array.data[11], depth=1, type=string, val=Layer11
name=data, displayName=Element 12, isArray=True,  propertyType=String, propertyPath=layers.Array.data[12], depth=1, type=string, val=Layer12
name=data, displayName=Element 13, isArray=True,  propertyType=String, propertyPath=layers.Array.data[13], depth=1, type=string, val=Layer13
name=data, displayName=Element 14, isArray=True,  propertyType=String, propertyPath=layers.Array.data[14], depth=1, type=string, val=Layer14
name=data, displayName=Element 15, isArray=True,  propertyType=String, propertyPath=layers.Array.data[15], depth=1, type=string, val=Layer15
name=data, displayName=Element 16, isArray=True,  propertyType=String, propertyPath=layers.Array.data[16], depth=1, type=string, val=Layer16
name=data, displayName=Element 17, isArray=True,  propertyType=String, propertyPath=layers.Array.data[17], depth=1, type=string, val=Layer17
name=data, displayName=Element 18, isArray=True,  propertyType=String, propertyPath=layers.Array.data[18], depth=1, type=string, val=Layer18
name=data, displayName=Element 19, isArray=True,  propertyType=String, propertyPath=layers.Array.data[19], depth=1, type=string, val=Layer19
name=data, displayName=Element 20, isArray=True,  propertyType=String, propertyPath=layers.Array.data[20], depth=1, type=string, val=Layer20
name=data, displayName=Element 21, isArray=True,  propertyType=String, propertyPath=layers.Array.data[21], depth=1, type=string, val=Layer21
name=data, displayName=Element 22, isArray=True,  propertyType=String, propertyPath=layers.Array.data[22], depth=1, type=string, val=Layer22
name=data, displayName=Element 23, isArray=True,  propertyType=String, propertyPath=layers.Array.data[23], depth=1, type=string, val=Layer23
name=data, displayName=Element 24, isArray=True,  propertyType=String, propertyPath=layers.Array.data[24], depth=1, type=string, val=Layer24
name=data, displayName=Element 25, isArray=True,  propertyType=String, propertyPath=layers.Array.data[25], depth=1, type=string, val=Layer25
name=data, displayName=Element 26, isArray=True,  propertyType=String, propertyPath=layers.Array.data[26], depth=1, type=string, val=Layer26
name=data, displayName=Element 27, isArray=True,  propertyType=String, propertyPath=layers.Array.data[27], depth=1, type=string, val=Layer27
name=data, displayName=Element 28, isArray=True,  propertyType=String, propertyPath=layers.Array.data[28], depth=1, type=string, val=Layer28
name=data, displayName=Element 29, isArray=True,  propertyType=String, propertyPath=layers.Array.data[29], depth=1, type=string, val=Layer29
name=data, displayName=Element 30, isArray=True,  propertyType=String, propertyPath=layers.Array.data[30], depth=1, type=string, val=Layer30
name=data, displayName=Element 31, isArray=True,  propertyType=String, propertyPath=layers.Array.data[31], depth=1, type=string, val=Layer31
name=m_SortingLayers, displayName=Sorting Layers, isAnimated=False, isArray=True, isExpanded=False, isInstantiatedPrefab=False, propertyType=Generic, propertyPath=m_SortingLayers, depth=0, type=vector, arraySize=4
name=size, displayName=Size, isArray=False,  propertyType=ArraySize, propertyPath=m_SortingLayers.Array.size, depth=1, type=ArraySize, val=Dont know
name=data, displayName=War_Terrain, isAnimated=False, isArray=False, isExpanded=False, isInstantiatedPrefab=False, propertyType=Generic, propertyPath=m_SortingLayers.Array.data[0], depth=1, type=SortingLayerEntry, arraySize=NoSize
name=name, displayName=Name, isArray=True,  propertyType=String, propertyPath=m_SortingLayers.Array.data[0].name, depth=2, type=string, val=War_Terrain
name=uniqueID, displayName=Unique ID, isArray=False,  propertyType=Integer, propertyPath=m_SortingLayers.Array.data[0].uniqueID, depth=2, type=uint, val=2
name=locked, displayName=Locked, isArray=False,  propertyType=Boolean, propertyPath=m_SortingLayers.Array.data[0].locked, depth=2, type=bool, val=False
name=data, displayName=War_Shadow, isAnimated=False, isArray=False, isExpanded=False, isInstantiatedPrefab=False, propertyType=Generic, propertyPath=m_SortingLayers.Array.data[1], depth=1, type=SortingLayerEntry, arraySize=NoSize
name=name, displayName=Name, isArray=True,  propertyType=String, propertyPath=m_SortingLayers.Array.data[1].name, depth=2, type=string, val=War_Shadow
name=uniqueID, displayName=Unique ID, isArray=False,  propertyType=Integer, propertyPath=m_SortingLayers.Array.data[1].uniqueID, depth=2, type=uint, val=1073741824
name=locked, displayName=Locked, isArray=False,  propertyType=Boolean, propertyPath=m_SortingLayers.Array.data[1].locked, depth=2, type=bool, val=False
name=data, displayName=Default, isAnimated=False, isArray=False, isExpanded=False, isInstantiatedPrefab=False, propertyType=Generic, propertyPath=m_SortingLayers.Array.data[2], depth=1, type=SortingLayerEntry, arraySize=NoSize
name=name, displayName=Name, isArray=True,  propertyType=String, propertyPath=m_SortingLayers.Array.data[2].name, depth=2, type=string, val=Default
name=uniqueID, displayName=Unique ID, isArray=False,  propertyType=Integer, propertyPath=m_SortingLayers.Array.data[2].uniqueID, depth=2, type=uint, val=0
name=locked, displayName=Locked, isArray=False,  propertyType=Boolean, propertyPath=m_SortingLayers.Array.data[2].locked, depth=2, type=bool, val=False
name=data, displayName=War_Unit, isAnimated=False, isArray=False, isExpanded=False, isInstantiatedPrefab=False, propertyType=Generic, propertyPath=m_SortingLayers.Array.data[3], depth=1, type=SortingLayerEntry, arraySize=NoSize
name=name, displayName=Name, isArray=True,  propertyType=String, propertyPath=m_SortingLayers.Array.data[3].name, depth=2, type=string, val=War_Unit
name=uniqueID, displayName=Unique ID, isArray=False,  propertyType=Integer, propertyPath=m_SortingLayers.Array.data[3].uniqueID, depth=2, type=uint, val=1
name=locked, displayName=Locked, isArray=False,  propertyType=Boolean, propertyPath=m_SortingLayers.Array.data[3].locked, depth=2, type=bool, val=False

UnityEngine.Debug:Log(Object)
SerializedPropertyUtil:PrintTagManager() (at Assets/ihaiu/Scripts/Utils/SerializedPropertyUtil.cs:20)

</pre>
