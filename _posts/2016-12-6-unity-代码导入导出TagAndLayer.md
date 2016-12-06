---
layout: post
title: unity 代码导入导出Tag And Layer
date: 2016-12-5 16:45:00
categories: Unity
tags: Unity
excerpt: 代码导入导出Tag And Layer
shareexcerpt: 代码导入导出Tag And Layer
thread: 201612061630
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: 

sh: true
sh_csharp: true
---

<h2 class="nav1">文件描述</h2>
<p>数据代码</p>
<table>
	<tr>
		<td>GameLayer</td>
		<td>存储LayersSettingPanel一致的常量，方便其他代码调用</td>
	</tr>

	<tr>
		<td>GameTag</td>
		<td>存储TagsSettingPanel一致的常量，方便其他代码调用</td>
	</tr>

	<tr>
		<td>GameSortingLayer</td>
		<td>存储SortingLayerSettingPanel一致的枚举，方便其他代码调用</td>
	</tr>
</table>



<p>编辑器代码</p>
<table>
	<tr>
		<td>GameLayer_Editor</td>
		<td>导入，导出Layer Setting</td>
	</tr>

	<tr>
		<td>GameTag_Editor</td>
		<td>导入，导出Tag Setting</td>
	</tr>

	<tr>
		<td>GameSortingLayer_Editor</td>
		<td>导入，导出SortingLayer Setting</td>
	</tr>
</table>


<h2 class="nav1">Assets/Game/Script/Unity/GameLayer.cs</h2>


<pre class="brush: csharp; ">
namespace Games
{
	public partial class GameLayer
	{
		#region Unity Default Lock
		public const int Default			=	1 &lt;&lt; 0;
		public const int TransparentFX			=	1 &lt;&lt; 1;
		public const int Ignore_Raycast			=	1 &lt;&lt; 2;
		public const int Layer3			=	1 &lt;&lt; 3;
		public const int Water			=	1 &lt;&lt; 4;
		public const int UI			=	1 &lt;&lt; 5;
		public const int Layer6			=	1 &lt;&lt; 6;
		public const int Layer7			=	1 &lt;&lt; 7;
		#endregion


		public const int War_Terrain			=	1 &lt;&lt; 8;
		public const int War_Unit			=	1 &lt;&lt; 9;
		public const int War_Obstacle			=	1 &lt;&lt; 10;
		public const int Layer11			=	1 &lt;&lt; 11;
		public const int Layer12			=	1 &lt;&lt; 12;
		public const int Layer13			=	1 &lt;&lt; 13;
		public const int Layer14			=	1 &lt;&lt; 14;
		public const int Layer15			=	1 &lt;&lt; 15;
		public const int Layer16			=	1 &lt;&lt; 16;
		public const int Layer17			=	1 &lt;&lt; 17;
		public const int Layer18			=	1 &lt;&lt; 18;
		public const int Layer19			=	1 &lt;&lt; 19;
		public const int Layer20			=	1 &lt;&lt; 20;
		public const int Layer21			=	1 &lt;&lt; 21;
		public const int Layer22			=	1 &lt;&lt; 22;
		public const int Layer23			=	1 &lt;&lt; 23;
		public const int Layer24			=	1 &lt;&lt; 24;
		public const int Layer25			=	1 &lt;&lt; 25;
		public const int Layer26			=	1 &lt;&lt; 26;
		public const int Layer27			=	1 &lt;&lt; 27;
		public const int Layer28			=	1 &lt;&lt; 28;
		public const int Layer29			=	1 &lt;&lt; 29;
		public const int Layer30			=	1 &lt;&lt; 30;
		public const int Layer31			=	1 &lt;&lt; 31;


		public static int           customBeginIndex = 8;
		public static string[]      customLayers = {&quot;War_Terrain&quot;,&quot;War_Unit&quot;,&quot;War_Obstacle&quot;,&quot;Layer11&quot;,&quot;Layer12&quot;,&quot;Layer13&quot;,&quot;Layer14&quot;,&quot;Layer15&quot;,&quot;Layer16&quot;,&quot;Layer17&quot;,&quot;Layer18&quot;,&quot;Layer19&quot;,&quot;Layer20&quot;,&quot;Layer21&quot;,&quot;Layer22&quot;,&quot;Layer23&quot;,&quot;Layer24&quot;,&quot;Layer25&quot;,&quot;Layer26&quot;,&quot;Layer27&quot;,&quot;Layer28&quot;,&quot;Layer29&quot;,&quot;Layer30&quot;,&quot;Layer31&quot;};
	}
}

</pre>

<h2 class="nav2">Assets/Game/Script/Unity/GameLayer_Editor.cs</h2>


<pre class="brush: csharp; ">
#if UNITY_EDITOR
using UnityEngine;
using System.Collections;
using UnityEditor;
using System.IO;
using System.Collections.Generic;


namespace Games
{
	public partial class GameLayer
    {


        [MenuItem(&quot;Edit/Game/SetEditorLayer&quot;)]
        public static void SetEditorTag ()
        {
            SerializedObject tagManager = new SerializedObject(AssetDatabase.LoadAllAssetsAtPath(&quot;ProjectSettings/TagManager.asset&quot;)[0]);
            SerializedProperty it = tagManager.GetIterator();
            while (it.NextVisible(true))
            {
                if(it.name == &quot;layers&quot;)
                {
                    int end = Mathf.Min(customBeginIndex + customLayers.Length, it.arraySize);
                    for (int i = customBeginIndex; i &lt; end; i++) 
                    {
                        SerializedProperty dataPoint = it.GetArrayElementAtIndex(i);
                        dataPoint.stringValue = customLayers[i - customBeginIndex];
                    }

                    tagManager.ApplyModifiedProperties();
                    if (customBeginIndex + customLayers.Length &gt; 32)
                    {
						Debug.LogFormat(&quot;&lt;color=red&gt;Layer不能超过31&lt;/color&gt;&quot;);
                    }
                    break;
                }
            }
        }

		[MenuItem(&quot;Edit/Game/Generate GameLayer.cs&quot;)]
		public static void GenerateGameLayer ()
		{
			SerializedObject tagManager = new SerializedObject(AssetDatabase.LoadAllAssetsAtPath(&quot;ProjectSettings/TagManager.asset&quot;)[0]);
			SerializedProperty it = tagManager.GetIterator();
			while (it.NextVisible(true))
			{
				if(it.name == &quot;layers&quot;)
				{
					StringWriter sw = new StringWriter();
					sw.WriteLine(&quot;namespace Games&quot;);
					sw.WriteLine(&quot;{&quot;);
					sw.WriteLine(&quot;\tpublic partial class GameLayer&quot;);
					sw.WriteLine(&quot;\t{&quot;);

					sw.WriteLine(&quot;\t\t#region Unity Default Lock&quot;);
					for (int i = 0; i &lt; 8; i++) 
					{
						SerializedProperty dataPoint = it.GetArrayElementAtIndex(i);
						string fieldname = string.IsNullOrEmpty(dataPoint.stringValue) ? &quot;Layer&quot; + i : dataPoint.stringValue.Replace(&quot; &quot;, &quot;_&quot;);
						sw.WriteLine(string.Format(&quot;\t\tpublic const int {0}\t\t\t=\t1 &lt;&lt; {1};&quot;, fieldname , i ));

					}
					sw.WriteLine(&quot;\t\t#endregion&quot;);
					sw.WriteLine(&quot;\n&quot;);

					List&lt;string&gt; fieldnames = new List&lt;string&gt;();
					for (int i = 8; i &lt; it.arraySize; i++) 
					{
						SerializedProperty dataPoint = it.GetArrayElementAtIndex(i);
						string fieldname = string.IsNullOrEmpty(dataPoint.stringValue) ? &quot;Layer&quot; + i : dataPoint.stringValue.Replace(&quot; &quot;, &quot;_&quot;);
						sw.WriteLine(string.Format(&quot;\t\tpublic const int {0}\t\t\t=\t1 &lt;&lt; {1};&quot;, fieldname , i ));
						fieldnames.Add(string.Format(&quot;\&quot;{0}\&quot;&quot;, fieldname));
					}

					string fieldnameStr = &quot;&quot;;
					string gap = &quot;&quot;;
					for(int i = 0; i &lt; fieldnames.Count; i ++)
					{
						fieldnameStr += gap;
						fieldnameStr += fieldnames[i];
						gap = &quot;,&quot;;
					}


					sw.WriteLine(&quot;\n&quot;);
					sw.WriteLine(&quot;\t\tpublic static int           customBeginIndex = 8;&quot;);
					sw.WriteLine(&quot;\t\tpublic static string[]      customLayers = {&quot;+fieldnameStr+&quot;};&quot;);

					sw.WriteLine(&quot;\t}&quot;);
					sw.WriteLine(&quot;}&quot;);
					File.WriteAllText(Application.dataPath + &quot;/Game/Scripts/Unity/GameLayer.cs&quot;, sw.ToString(), System.Text.Encoding.UTF8);
					AssetDatabase.Refresh();
					break;
				}
			}
		}
    }
}

#endif
</pre>
<br>
<br>



<h2 class="nav1">Assets/Game/Script/Unity/GameTag.cs</h2>
<pre class="brush: csharp; ">
namespace Games
{
	public partial class GameTag
	{
		#region Unity Default Lock
		public const string Untagged        = &quot;Untagged&quot;;
		public const string Respawn         = &quot;Respawn&quot;;
		public const string Finish          = &quot;Finish&quot;;
		public const string EditorOnly      = &quot;EditorOnly&quot;;
		public const string MainCamera      = &quot;MainCamera&quot;;
		public const string Player          = &quot;Player&quot;;
		public const string GameController  = &quot;GameController&quot;;
		#endregion


		public const string UICamera  = &quot;UICamera&quot;;
		public const string War_Terrain  = &quot;War_Terrain&quot;;
		public const string War_Unit  = &quot;War_Unit&quot;;


		public static int           customBeginIndex = 0;
		public static string[]      customTags = {&quot;UICamera&quot;,&quot;War_Terrain&quot;,&quot;War_Unit&quot;};
	}
}

</pre>
<br>



<h2 class="nav2">Assets/Game/Script/Unity/GameTag_Editor.cs</h2>
<pre class="brush: csharp; ">
#if UNITY_EDITOR
using UnityEngine;
using System.Collections;
using UnityEditor;
using System.IO;
using System.Collections.Generic;

namespace Games
{
	public partial class GameTag 
    {


        [MenuItem(&quot;Edit/Game/SetEditorTag&quot;)]
        public static void SetEditorTag ()
        {
            SerializedObject tagManager = new SerializedObject(AssetDatabase.LoadAllAssetsAtPath(&quot;ProjectSettings/TagManager.asset&quot;)[0]);
            SerializedProperty it = tagManager.GetIterator();
            while (it.NextVisible(true))
            {
                if(it.name == &quot;tags&quot;)
                {

					it.ClearArray();
					int end = customBeginIndex + customTags.Length;
					if(it.arraySize &lt; end)
					{
						it.arraySize = end;
					}

                    for (int i = customBeginIndex; i &lt; end; i++) 
                    {
                        SerializedProperty dataPoint = it.GetArrayElementAtIndex(i);
                        dataPoint.stringValue = customTags[i - customBeginIndex];
                    }

                    tagManager.ApplyModifiedProperties();
                    
                    break;
                }
            }
        }

		[MenuItem(&quot;Edit/Game/Generate GameTag.cs&quot;)]
		public static void GenerateGameTag ()
		{
			SerializedObject tagManager = new SerializedObject(AssetDatabase.LoadAllAssetsAtPath(&quot;ProjectSettings/TagManager.asset&quot;)[0]);
			SerializedProperty it = tagManager.GetIterator();
			while (it.NextVisible(true))
			{
				if(it.name == &quot;tags&quot;)
				{
					StringWriter sw = new StringWriter();
					sw.WriteLine(&quot;namespace Games&quot;);
					sw.WriteLine(&quot;{&quot;);
					sw.WriteLine(&quot;\tpublic partial class GameTag&quot;);
					sw.WriteLine(&quot;\t{&quot;);

					sw.WriteLine(&quot;\t\t#region Unity Default Lock&quot;);
					sw.WriteLine(&quot;\t\tpublic const string Untagged        = \&quot;Untagged\&quot;;&quot;);
					sw.WriteLine(&quot;\t\tpublic const string Respawn         = \&quot;Respawn\&quot;;&quot;);
					sw.WriteLine(&quot;\t\tpublic const string Finish          = \&quot;Finish\&quot;;&quot;);
					sw.WriteLine(&quot;\t\tpublic const string EditorOnly      = \&quot;EditorOnly\&quot;;&quot;);
					sw.WriteLine(&quot;\t\tpublic const string MainCamera      = \&quot;MainCamera\&quot;;&quot;);
					sw.WriteLine(&quot;\t\tpublic const string Player          = \&quot;Player\&quot;;&quot;);
					sw.WriteLine(&quot;\t\tpublic const string GameController  = \&quot;GameController\&quot;;&quot;);

					sw.WriteLine(&quot;\t\t#endregion&quot;);
					sw.WriteLine(&quot;\n&quot;);


					string fieldnameStr = &quot;&quot;;
					string gap = &quot;&quot;;

					for (int i = 0; i &lt; it.arraySize; i++) 
					{
						SerializedProperty dataPoint = it.GetArrayElementAtIndex(i);
						string fieldname = string.IsNullOrEmpty(dataPoint.stringValue) ? &quot;Tag&quot; + i : dataPoint.stringValue.Replace(&quot; &quot;, &quot;_&quot;);

						sw.WriteLine(string.Format(&quot;\t\tpublic const string {0}  = \&quot;{1}\&quot;;&quot;, fieldname, dataPoint.stringValue));


						fieldnameStr += gap;
						fieldnameStr += string.Format(&quot;\&quot;{0}\&quot;&quot;, dataPoint.stringValue);
						gap = &quot;,&quot;;
					}


					sw.WriteLine(&quot;\n&quot;);
					sw.WriteLine(&quot;\t\tpublic static int           customBeginIndex = 0;&quot;);
					sw.WriteLine(&quot;\t\tpublic static string[]      customTags = {&quot;+fieldnameStr+&quot;};&quot;);

					sw.WriteLine(&quot;\t}&quot;);
					sw.WriteLine(&quot;}&quot;);
					File.WriteAllText(Application.dataPath + &quot;/Game/Scripts/Unity/GameTag.cs&quot;, sw.ToString(), System.Text.Encoding.UTF8);
					AssetDatabase.Refresh();

					break;
				}
			}
		}
    }
}

#endif
</pre>
<br>
<br>




<h2 class="nav1">Assets/Game/Script/Unity/GameSortingLayer.cs</h2>
<pre class="brush: csharp; ">
namespace Games
{
	public enum GameSortingLayer
	{
		War_Terrain			=	-2,
		War_Shadow			=	-1,
		Default				=	0,
		War_Unit			=	1,
	}
}

</pre>
<br>



<h2 class="nav2">Assets/Game/Script/Unity/GameSortingLayer_Editor.cs</h2>
<pre class="brush: csharp; ">
#if UNITY_EDITOR
using UnityEngine;
using System.Collections;
using System;
using UnityEditor;
using System.IO;

namespace Games
{
	public class GameSortingLayerEditor
	{
		public static bool IsUseBitIndex = true;

		[MenuItem(&quot;Edit/Game/SetEditorSortingLayer&quot;)]
		public static void SetEditorTag ()
		{
			SerializedObject tagManager = new SerializedObject(AssetDatabase.LoadAllAssetsAtPath(&quot;ProjectSettings/TagManager.asset&quot;)[0]);
			SerializedProperty it = tagManager.GetIterator();
			while (it.NextVisible(true))
			{
				if(it.name == &quot;m_SortingLayers&quot;)
				{
					int[] 		ids 	;
					string[] 	names 	;

					EnumUtil.GetValuesAndFieldNames&lt;GameSortingLayer&gt;(out ids, out names);
					it.ClearArray();

					int length = ids.Length;
					if(it.arraySize &lt; length)
					{
						it.arraySize = length;
					}


					for (int i = 0; i &lt; length; i++) 
					{
						SerializedProperty dataPoint = it.GetArrayElementAtIndex(i);
						SerializedProperty namePoint = dataPoint.FindPropertyRelative(&quot;name&quot;);
						SerializedProperty uniqueIDPoint = dataPoint.FindPropertyRelative(&quot;uniqueID&quot;);
						namePoint.stringValue = names[i];
						uniqueIDPoint.intValue = IsUseBitIndex ? 1 &lt;&lt; (ids[i] - 1) : ids[i];
					}

					tagManager.ApplyModifiedProperties();
					break;
				}
			}
		}

		[MenuItem(&quot;Edit/Game/Generate GameSortingLayer.cs&quot;)]
		public static void GameSortingLayer ()
		{
			SerializedObject tagManager = new SerializedObject(AssetDatabase.LoadAllAssetsAtPath(&quot;ProjectSettings/TagManager.asset&quot;)[0]);
			SerializedProperty it = tagManager.GetIterator();
			while (it.NextVisible(true))
			{
				if(it.name == &quot;m_SortingLayers&quot;)
				{
					StringWriter sw = new StringWriter();
					sw.WriteLine(&quot;namespace Games&quot;);
					sw.WriteLine(&quot;{&quot;);
					sw.WriteLine(&quot;\tpublic enum GameSortingLayer&quot;);
					sw.WriteLine(&quot;\t{&quot;);

					int bitIndex = 0;
					for (int i = 0; i &lt; it.arraySize; i++) 
					{
						SerializedProperty dataPoint = it.GetArrayElementAtIndex(i);
						SerializedProperty namePoint = dataPoint.FindPropertyRelative(&quot;name&quot;);
						SerializedProperty uniqueIDPoint = dataPoint.FindPropertyRelative(&quot;uniqueID&quot;);
						Debug.Log(namePoint.stringValue + &quot; = &quot; + uniqueIDPoint.intValue);
						if(uniqueIDPoint.intValue == 0)
						{
							bitIndex = i;
							break;
						}
					}

					Debug.Log(bitIndex);

					for (int i = 0; i &lt; it.arraySize; i++) 
					{
						SerializedProperty dataPoint = it.GetArrayElementAtIndex(i);
						SerializedProperty namePoint = dataPoint.FindPropertyRelative(&quot;name&quot;);
						SerializedProperty uniqueIDPoint = dataPoint.FindPropertyRelative(&quot;uniqueID&quot;);
						sw.WriteLine(string.Format(&quot;\t\t{0}\t\t\t=\t{1},&quot;, namePoint.stringValue.Replace(&quot; &quot;, &quot;_&quot;), IsUseBitIndex ? i - bitIndex : uniqueIDPoint.intValue ));
					}

					sw.WriteLine(&quot;\t}&quot;);
					sw.WriteLine(&quot;}&quot;);


					File.WriteAllText(Application.dataPath + &quot;/Game/Scripts/Unity/GameSortingLayer.cs&quot;, sw.ToString(), System.Text.Encoding.UTF8);
					AssetDatabase.Refresh();
					break;
				}
			}
		}
	}

}

#endif
</pre>