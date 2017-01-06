---
layout: post
title: C# Java AES 协议加密
date: 2017-01-04 20:50:00
categories: C#
tags: C# Java AES Proto 协议加密
excerpt: 协议加密
shareexcerpt: 协议加密
thread: 20170104205000
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: 

sh: true
sh_csharp: true
sh_java: true
---


<br>
<br>
<h2 class="nav1">相关工具 </h2>
<p><a href="http://ilspy.net/" target="_blank" >dll反编译工具 (ilspy)</a></p>
<p><a href="https://github.com/yck1509/ConfuserEx/releases" target="_blank" >dll代码加密混淆工具 (ConfuserEx)</a></p>
<p><a href="http://www.cnblogs.com/zhangzhi19861216/p/3937434.html" target="_blank" >开源.net 混淆器ConfuserEx介绍</a></p>


<br>
<br>
<h2 class="nav1">C#</h2>
<pre class="brush: csharp; ">
using System;
using System.Security.Cryptography;
using System.Text;
using System.IO;

public class de
{
    public class DE
    {


        private string keyStr   = "12345678123456781234567812345678";
        private string ivStr    = "12345678123456781234567812345678";

        public DE()
        {


            CreateDES(keyStr, ivStr);
        }

        SymmetricAlgorithm des;
        private void CreateDES(string keyStr, string ivStr)
        {
            byte[] key  = new byte[16];
            byte[] iv   = new byte[16];

            byte[] bytes = Encoding.UTF8.GetBytes(keyStr);
            for(int i = 0; i < key.Length; i ++)
            {
                key[i] = i < bytes.Length ? bytes[i] : (byte)0;
            }

            bytes = Encoding.UTF8.GetBytes(ivStr);
            for(int i = 0; i < iv.Length; i ++)
            {
                iv[i] = i < bytes.Length ? bytes[i] : (byte)0;
            }


            //分组加密算法   
            des = Rijndael.Create();    
            //设置密钥及密钥向量
            des.Key = key;
            des.IV = iv;
        }



        public byte[] encrypt(byte[] src)
        {
            using (MemoryStream ms = new MemoryStream())
            {
                using (CryptoStream cs = new CryptoStream(ms, des.CreateEncryptor(), CryptoStreamMode.Write))
                {
                    cs.Write(src, 0, src.Length);
                    cs.FlushFinalBlock();
                    byte[] cipherBytes = ms.ToArray();//得到加密后的字节数组   
                    cs.Close();
                    ms.Close();                   
                    return cipherBytes;
                }
            }
        }


        public byte[] decrypt(byte[] src)
        {
            return decrypt(src, 0, src.Length);
        }

        public byte[] decrypt(byte[] src, int offest, int length)
        {
            byte[] decryptBytes = new byte[src.Length];
            using (MemoryStream ms = new MemoryStream())
            {
                ms.Write(src, offest, length);
                ms.Position = 0;

                using (CryptoStream cs = new CryptoStream(ms, des.CreateDecryptor(), CryptoStreamMode.Read))
                {
                    cs.Read(decryptBytes, 0, decryptBytes.Length);
                    cs.Close();
                    ms.Close();
                }
            }
            return decryptBytes;
        }


    }

  


}


</pre>
<br>
<br>


<br>
<br>
<h2 class="nav1">java</h2>
<pre class="brush: java; ">

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;


public class ProtocolAES
{

    private static ProtocolAES _instanceLogin;
    public static ProtocolAES getInstanceLogin()
    {
        if(_instanceLogin == null)
        {
            _instanceLogin = new ProtocolAES();
            
            try
            {
                _instanceLogin.init();
            } catch (Exception e)
            {
                e.printStackTrace();
            }
        }
        return _instanceLogin;
    }
    
    
    private static ProtocolAES _instance;
    public static ProtocolAES getInstance()
    {
        if(_instance == null)
        {
            _instance = new ProtocolAES();
            try
            {
                _instance.keyStr = "12345678123456781234567812345678";
                _instance.init();
            } catch (Exception e)
            {
                e.printStackTrace();
            }
        }
        return _instance;
    }
    

    public String keyStr    = "12345678123456781234567812345678";
    public String ivStr     = "12345678123456781234567812345678";
    private Cipher encryptCipher;
    private Cipher decryptCipher;
    
    public void init() throws Exception
    {

        
        
        byte[] key = new byte[16];
        byte[] bytes = keyStr.getBytes("utf-8");
        for(int i = 0; i < key.length; i ++)
        {
            key[i] = i < bytes.length ? bytes[i] : (byte)0;
        }
        

        System.out.println("keyStr=" + keyStr);
        System.out.println("keyStr.length=" + keyStr.length());
        System.out.println("key.length=" + key.length);
        
        byte[] iv = new byte[16];
        bytes = ivStr.getBytes("utf-8");
        for(int i = 0; i < iv.length; i ++)
        {
            iv[i] = i < bytes.length ? bytes[i] : (byte)0;
        }
        

        System.out.println("ivStr.length=" + ivStr.length());
        System.out.println("iv.length=" + iv.length);
        
        SecretKeySpec skeySpec = new SecretKeySpec(key, "AES");
        IvParameterSpec _iv = new IvParameterSpec(iv);// 使用CBC模式，需要一个向量iv，可增加加密算法的强度
        
        
        encryptCipher = Cipher.getInstance("AES/CBC/PKCS5Padding");// "算法/模式/补码方式"
        encryptCipher.init(Cipher.ENCRYPT_MODE, skeySpec, _iv);
        
        

        decryptCipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
        decryptCipher.init(Cipher.DECRYPT_MODE, skeySpec, _iv);
    }
    
    public byte[] encrypt(byte[] src) throws Exception 
    {
        return encryptCipher.doFinal(src);
    }
    
    public byte[] decrypt(byte[] src) throws Exception
    {
        return decryptCipher.doFinal(src);
    }
}

</pre>
<br>
<br>