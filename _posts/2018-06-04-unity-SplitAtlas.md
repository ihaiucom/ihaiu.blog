---
layout: post
title: Unity 图集分割
date: 2018-06-04 20:50:00
categories: Unity
tags: Unity
excerpt: Unity 图集分割
shareexcerpt: Unity 图集分割
thread: 20180105205000
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: 

sh: true
sh_csharp: true
---


<br>
<p>原文: <a href="https://blog.csdn.net/u013746357/article/details/76691162" target="_blank" >Unity编辑器扩展：如何把图集(Atlas)拆分成单个图片</a></p>

<br>
<p>
游戏开发中可能会用到商店下载的图集，但是如果只是用到一部分，却把整个图集打包到项目则明显是不划算的。可以让美术同事单独把需要的图片切出来，但是图源比较多的话也是一个不小的工作。既然能够拿到切好的图集数据，是不是可以通过代码自动生成切好的小图呢，答案当然是肯定的。这里提供一个小工具，操作很简单，在Project下选择要切出小图的Sprite，然后菜单<b>Tools/SpriteAtlas</b>就会在<b>Assets/SpriteOut</b>下生成想要的图了。
</p>


<br>
<p><b>P.S.注意你要操作的图片一定要是可读写的 </b></p>

<p><img src="/assets/docpic/unity_splitatlas_1.png" style="border: solid 1px #666;" /></p>


<pre class="brush: csharp; ">
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;
using System.IO;
namespace com.bt.editor
{
    [ExecuteInEditMode]
    public class SplitAtlas : MonoBehaviour
    {

        [MenuItem("Tools/SplitAtlas")]

        public static void Split()
        {
            Sprite[] sprites = Selection.GetFiltered<Sprite>(SelectionMode.Deep);

            Texture2D oldTexture = null;
            int width = 0;
            int height = 0;
            Color[] pixels = null;
            string textureName = "";
            TextureFormat oldFormat = 0;

            string parentPath = Application.dataPath + "/SpriteOut/";
            if (!Directory.Exists(parentPath))
            {
                Directory.CreateDirectory(parentPath);
            }
            for (int i = 0; i < sprites.Length; i++)
            {

                Texture2D oldTex = sprites[i].texture;
                if (oldTexture == null || oldTexture != oldTex)
                {
                    oldTexture = oldTex;
                    width = oldTexture.width;
                    height = oldTexture.height;
                    pixels = oldTexture.GetPixels();
                    textureName = oldTexture.name;
                    oldFormat = oldTexture.format;
                }
                Rect rect = sprites[i].rect;
                string name = textureName + "_" + sprites[i].name;

                Debug.Log(name + ":" + rect);
                int spritew = Mathf.FloorToInt(rect.width);
                int spriteh = Mathf.FloorToInt(rect.height);
                int left = Mathf.FloorToInt(rect.x);
                int up = Mathf.FloorToInt(rect.y);
                Texture2D newTex = new Texture2D(spritew, spriteh, oldFormat, false, false);
                Color[] newColors = new Color[spritew * spriteh];
                for (int x = 0; x < spritew; x++)
                {
                    for (int y = 0; y < spriteh; y++)
                    {

                        newColors[y * spritew + x] = pixels[(up + y) * width + left + x];
                    }
                }
                newTex.SetPixels(newColors);
                byte[] data = newTex.EncodeToPNG();
                string filePath = Application.dataPath + "/SpriteOut/" + name + ".png";
                if (File.Exists(filePath))
                {
                    File.Delete(filePath);
                }
                FileStream file = File.Create(filePath);
                file.Write(data, 0, data.Length);
                file.Close();

            }
        }
    }

}
</pre>


<br>
<br>

<p>这里是我的测试案例截图： </p>

<p><img src="/assets/docpic/unity_splitatlas_2.png" style="border: solid 1px #666;" /></p>
