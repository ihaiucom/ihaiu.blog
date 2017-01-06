---
layout: post
title: C#实现Zip压缩解压实例
date: 2017-01-04 20:50:00
categories: C#
tags: C# Zip
excerpt: C#使用SharpZipLib实现zip压缩
shareexcerpt: C#使用SharpZipLib实现zip压缩
thread: 20170103205000
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: 

sh: true
sh_csharp: true
---


<br>
<br>
<h2 class="nav1">相关文档 </h2>
<p><a href="http://blog.csdn.net/cleopard/article/details/42156393" target="_blank" >参考文档《C#实现Zip压缩解压实例》他这个有几个Bug</a></p>
<p><a href="https://github.com/icsharpcode/SharpZipLib/tree/master/Documentation" target="_blank" >SharpZipLib.chm</a></p>
<p><a href="http://icsharpcode.github.io/SharpZipLib/" target="_blank" >SharpZipLib 下载</a></p>
<p><a href="https://sourceforge.net/projects/sharpdevelop/files/SharpZipLib/0.86/SharpZipLib_0860_Bin.zip/download" target="_blank" >SharpZipLib Dll 官网下载</a></p>
<p><a href="/assets/down/SharpZipLib_0860_Bin.zip" target="_blank" >SharpZipLib Dll 本地下载</a></p>


<br>
<br>
<h2 class="nav2">中文路径名乱码问题</h2>
<pre class="brush: csharp; ">

    private static void SetCode()
    {
        // 需要注意的是 默认编码如果有中文的文件名或目录将会乱码，甚至解压的数据出错。所以设置一下支持中文的编码
        ZipConstants.DefaultCodePage = Encoding.UTF8.CodePage;
    }

</pre>
<br>
<br>

<h2 class="nav1">ZipHelper.cs</h2>
<pre class="brush: csharp; ">
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;
using ICSharpCode.SharpZipLib;
using ICSharpCode.SharpZipLib.Zip;
using ICSharpCode.SharpZipLib.Checksums;

/// &lt;summary&gt; 
/// 适用与ZIP压缩 
/// &lt;/summary&gt; 
public class ZipHelper
{

    private static void SetCode()
    {
        // 需要注意的是 默认编码如果有中文的文件名或目录将会乱码，甚至解压的数据出错。所以设置一下支持中文的编码
        ZipConstants.DefaultCodePage = Encoding.UTF8.CodePage;
    }


    private static List&lt;string&gt; ignoreExts = new List&lt;string&gt;(new string[]{ &quot;.meta&quot;, &quot;.manifest&quot;});
    private static List&lt;string&gt; ignoreFiles = new List&lt;string&gt;(new string[]{ &quot;.ds_store&quot;});

    #region 压缩

    /// &lt;summary&gt; 
    /// 递归压缩文件夹的内部方法 
    /// &lt;/summary&gt; 
    /// &lt;param name=&quot;folderToZip&quot;&gt;要压缩的文件夹路径&lt;/param&gt; 
    /// &lt;param name=&quot;zipStream&quot;&gt;压缩输出流&lt;/param&gt; 
    /// &lt;param name=&quot;parentFolderName&quot;&gt;此文件夹的上级文件夹&lt;/param&gt; 
    /// &lt;returns&gt;&lt;/returns&gt; 
    private static bool ZipDirectory(string folderToZip, ZipOutputStream zipStream, string parentFolderName)
    {
        SetCode();

        bool result = true;
        string[] folders, files;
        ZipEntry ent = null;
        FileStream fs = null;
        FileInfo fileInfo = null;
        Crc32 crc = new Crc32();

        try
        {
            folders = Directory.GetDirectories(folderToZip, &quot;*&quot;, SearchOption.AllDirectories);
            files = Directory.GetFiles(folderToZip, &quot;*.*&quot;, SearchOption.AllDirectories)
                .Where(s =&gt; !ignoreExts.Contains(Path.GetExtension(s).ToLower()) && !ignoreFiles.Contains(Path.GetFileName(s).ToLower()) ).ToArray();


            parentFolderName = folderToZip;
            if (!parentFolderName.EndsWith(&quot;/&quot;))
                parentFolderName += &quot;/&quot;;

            // 可以不需要压入文件夹。压人后在Mac下用默认的zip工具解压不了
//                foreach(string folder in folders)
//                {
//                    ent = new ZipEntry(folder.Replace(parentFolderName, &quot;&quot;) + &quot;/&quot;);
//                    zipStream.PutNextEntry(ent);
//                    zipStream.Flush();
//                }

            foreach(string file in files)
            {
                fileInfo = new FileInfo(file);
                fs = File.OpenRead(file);

                byte[] buffer = new byte[fs.Length];
                fs.Read(buffer, 0, buffer.Length);
                ent = new ZipEntry(file.Replace(parentFolderName, &quot;&quot;));
                ent.DateTime = fileInfo.LastWriteTime;
                ent.Size = fs.Length;

                fs.Close();
                
                crc.Reset();
                crc.Update(buffer);

                ent.Crc = crc.Value;
                zipStream.PutNextEntry(ent);
                zipStream.Write(buffer, 0, buffer.Length);
            }
            
             
        }
        catch
        {
            result = false;
        }
        finally
        {
            if (fs != null)
            {
                fs.Close();
                fs.Dispose();
            }
            if (ent != null)
            {
                ent = null;
            }
            GC.Collect();
            GC.Collect(1);
        }
        return result;
    }

    /// &lt;summary&gt; 
    /// 压缩文件夹  
    /// &lt;/summary&gt; 
    /// &lt;param name=&quot;folderToZip&quot;&gt;要压缩的文件夹路径&lt;/param&gt; 
    /// &lt;param name=&quot;zipedFile&quot;&gt;压缩文件完整路径&lt;/param&gt; 
    /// &lt;param name=&quot;password&quot;&gt;密码&lt;/param&gt; 
    /// &lt;returns&gt;是否压缩成功&lt;/returns&gt; 
    public static bool ZipDirectory(string folderToZip, string zipedFile, string password)
    {
        bool result = false;
        if (!Directory.Exists(folderToZip))
            return result;

        ZipOutputStream zipStream = new ZipOutputStream(File.Create(zipedFile));
        zipStream.SetLevel(9);
        if (!string.IsNullOrEmpty(password)) zipStream.Password = password;


        string fullPath = Path.GetFullPath(folderToZip);
        string parentPath = Path.GetFullPath(fullPath + &quot;/../&quot;);

        result = ZipDirectory(fullPath, zipStream, parentPath);

        zipStream.Finish();
        zipStream.Close();

        return result;
    }

    /// &lt;summary&gt; 
    /// 压缩文件夹 
    /// &lt;/summary&gt; 
    /// &lt;param name=&quot;folderToZip&quot;&gt;要压缩的文件夹路径&lt;/param&gt; 
    /// &lt;param name=&quot;zipedFile&quot;&gt;压缩文件完整路径&lt;/param&gt; 
    /// &lt;returns&gt;是否压缩成功&lt;/returns&gt; 
    public static bool ZipDirectory(string folderToZip, string zipedFile)
    {
        bool result = ZipDirectory(folderToZip, zipedFile, null);
        return result;
    }

    /// &lt;summary&gt; 
    /// 压缩文件 
    /// &lt;/summary&gt; 
    /// &lt;param name=&quot;fileToZip&quot;&gt;要压缩的文件全名&lt;/param&gt; 
    /// &lt;param name=&quot;zipedFile&quot;&gt;压缩后的文件名&lt;/param&gt; 
    /// &lt;param name=&quot;password&quot;&gt;密码&lt;/param&gt; 
    /// &lt;returns&gt;压缩结果&lt;/returns&gt; 
    public static bool ZipFile(string fileToZip, string zipedFile, string password)
    {
        SetCode();

        bool result = true;
        ZipOutputStream zipStream = null;
        FileStream fs = null;
        ZipEntry ent = null;

        if (!File.Exists(fileToZip))
            return false;

        try
        {
            fs = File.OpenRead(fileToZip);
            byte[] buffer = new byte[fs.Length];
            fs.Read(buffer, 0, buffer.Length);
            fs.Close();

            fs = File.Create(zipedFile);
            zipStream = new ZipOutputStream(fs);
            if (!string.IsNullOrEmpty(password)) zipStream.Password = password;
            ent = new ZipEntry(Path.GetFileName(fileToZip));
            zipStream.PutNextEntry(ent);
            zipStream.SetLevel(6);

            zipStream.Write(buffer, 0, buffer.Length);

        }
        catch
        {
            result = false;
        }
        finally
        {
            if (zipStream != null)
            {
                zipStream.Finish();
                zipStream.Close();
            }
            if (ent != null)
            {
                ent = null;
            }
            if (fs != null)
            {
                fs.Close();
                fs.Dispose();
            }
        }
        GC.Collect();
        GC.Collect(1);

        return result;
    }

    /// &lt;summary&gt; 
    /// 压缩文件 
    /// &lt;/summary&gt; 
    /// &lt;param name=&quot;fileToZip&quot;&gt;要压缩的文件全名&lt;/param&gt; 
    /// &lt;param name=&quot;zipedFile&quot;&gt;压缩后的文件名&lt;/param&gt; 
    /// &lt;returns&gt;压缩结果&lt;/returns&gt; 
    public static bool ZipFile(string fileToZip, string zipedFile)
    {
        bool result = ZipFile(fileToZip, zipedFile, null);
        return result;
    }

    /// &lt;summary&gt; 
    /// 压缩文件或文件夹 
    /// &lt;/summary&gt; 
    /// &lt;param name=&quot;fileToZip&quot;&gt;要压缩的路径&lt;/param&gt; 
    /// &lt;param name=&quot;zipedFile&quot;&gt;压缩后的文件名&lt;/param&gt; 
    /// &lt;param name=&quot;password&quot;&gt;密码&lt;/param&gt; 
    /// &lt;returns&gt;压缩结果&lt;/returns&gt; 
    public static bool Zip(string fileToZip, string zipedFile, string password)
    {
        bool result = false;
        if (Directory.Exists(fileToZip))
            result = ZipDirectory(fileToZip, zipedFile, password);
        else if (File.Exists(fileToZip))
            result = ZipFile(fileToZip, zipedFile, password);

        return result;
    }

    /// &lt;summary&gt; 
    /// 压缩文件或文件夹 
    /// &lt;/summary&gt; 
    /// &lt;param name=&quot;fileToZip&quot;&gt;要压缩的路径&lt;/param&gt; 
    /// &lt;param name=&quot;zipedFile&quot;&gt;压缩后的文件名&lt;/param&gt; 
    /// &lt;returns&gt;压缩结果&lt;/returns&gt; 
    public static bool Zip(string fileToZip, string zipedFile)
    {
        bool result = Zip(fileToZip, zipedFile, null);
        return result;

    }

    #endregion

    #region 解压

    /// &lt;summary&gt; 
    /// 解压功能(解压压缩文件到指定目录) 
    /// &lt;/summary&gt; 
    /// &lt;param name=&quot;fileToUnZip&quot;&gt;待解压的文件&lt;/param&gt; 
    /// &lt;param name=&quot;zipedFolder&quot;&gt;指定解压目标目录&lt;/param&gt; 
    /// &lt;param name=&quot;password&quot;&gt;密码&lt;/param&gt; 
    /// &lt;returns&gt;解压结果&lt;/returns&gt; 
    public static bool UnZip(string zipFilePath, string unZipDir, string password)
    {

        try
        {
            SetCode();

            if (zipFilePath == string.Empty)
            {
                throw new Exception(&quot;压缩文件不能为空！&quot;);
            }
            if (!File.Exists(zipFilePath))
            {
                throw new FileNotFoundException(&quot;压缩文件不存在！&quot;);
            }
            //解压文件夹为空时默认与压缩文件同一级目录下，跟压缩文件同名的文件夹  
            if (unZipDir == string.Empty)
                unZipDir = zipFilePath.Replace(Path.GetFileName(zipFilePath), Path.GetFileNameWithoutExtension(zipFilePath));
            
            if (!unZipDir.EndsWith(&quot;/&quot;))
                unZipDir += &quot;/&quot;;

            UnZip(File.OpenRead(zipFilePath), unZipDir, password);
        }
        catch(Exception e)
        {
            UnityEngine.Debug.LogError(e);
            return false;
        }

        return true;
    }

    public static bool UnZip(Stream baseInputStream, string unZipDir, string password)
    {
        try
        {
            SetCode();

            if (!unZipDir.EndsWith(&quot;/&quot;))
                unZipDir += &quot;/&quot;;

            if (!Directory.Exists(unZipDir))
                Directory.CreateDirectory(unZipDir);

            using (var s = new ZipInputStream(baseInputStream))
            {
                if(!string.IsNullOrEmpty(password)) s.Password = password;

                ZipEntry theEntry;
                while ((theEntry = s.GetNextEntry()) != null)
                {
                    string directoryName = Path.GetDirectoryName(theEntry.Name);
                    string fileName = Path.GetFileName(theEntry.Name);

                    if (!string.IsNullOrEmpty(directoryName))
                    {
                        Directory.CreateDirectory(unZipDir + directoryName);
                    }
                    if (directoryName != null && !directoryName.EndsWith(&quot;/&quot;))
                    {
                    }
                    if (fileName != String.Empty)
                    {
                        using (FileStream streamWriter = File.Create(unZipDir + theEntry.Name))
                        {

                            int size;
                            byte[] data = new byte[2048];
                            while (true)
                            {
                                size = s.Read(data, 0, data.Length);
                                if (size &gt; 0)
                                {
                                    streamWriter.Write(data, 0, size);
                                }
                                else
                                {
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        }
        catch(Exception e)
        {
            UnityEngine.Debug.LogError(e);
            return false;
        }

        return true;
    }

    /// &lt;summary&gt; 
    /// 解压功能(解压压缩文件到指定目录) 
    /// &lt;/summary&gt; 
    /// &lt;param name=&quot;fileToUnZip&quot;&gt;待解压的文件&lt;/param&gt; 
    /// &lt;param name=&quot;zipedFolder&quot;&gt;指定解压目标目录&lt;/param&gt; 
    /// &lt;returns&gt;解压结果&lt;/returns&gt; 
    public static bool UnZip(string fileToUnZip, string zipedFolder)
    {
        bool result = UnZip(fileToUnZip, zipedFolder, null);
        return result;
    }


    public static bool UnZip(Stream baseInputStream, string unZipDir)
    {
        return UnZip(baseInputStream, unZipDir, null);
    }


    public static bool UnZip(byte[] data, string unZipDir)
    {
        MemoryStream stream = new MemoryStream(data);
        stream.Position = 0;
        bool result =  UnZip(stream, unZipDir, null);
        stream.Dispose();
        stream.Close();
        return result;
    }
    #endregion
}
</pre>



<br>
<br>
<h2 class="nav2">测试</h2>
<pre class="brush: csharp; ">
using UnityEngine;
using System.Collections;
using System.IO;

public class TestZip : MonoBehaviour {

    

    [ContextMenu("ZipDir")]
    public void ZipDir()
    {
        string dir = "dir";
        string zipFile = "blog.zip";
        ZipHelper.ZipDirectory(dir, zipFile);
    }

    [ContextMenu("UnZip")]
    public void UnZip()
    {

        string zipFile = "blog.zip";
        string outDir = "zipout";
        ZipHelper.UnZip(zipFile, outDir);
    }


    [ContextMenu("UnZip2")]
    public void UnZip2()
    {
        StartCoroutine(LoadZip());
    }

    IEnumerator LoadZip()
    {
        string zipFile = "blog.zip";
        string outDir = "zipout";
        WWW www = new WWW("file:///" + Application.dataPath + "/../" + zipFile);
        yield return www;


        ZipHelper.UnZip(www.bytes, outDir);
    }
}


</pre>
<br>
<br>

