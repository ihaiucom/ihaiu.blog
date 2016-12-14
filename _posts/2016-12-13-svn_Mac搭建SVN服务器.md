---
layout: post
title:  Mac搭建SVN服务器
date: 2016-12-13 20:10:00
categories: git
tags: git
excerpt: mac 搭建服务器
thread: 20161213201000
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: 

sh: false
sh_csharp: true
---

参考: https://cnbin.github.io/blog/2015/06/13/mac-da-jian-svn-fu-wu-qi-huan-jing/

<h2 class="nav1">一:生成项目目录</h2>
<pre>
cd ~/
mkdir svn
cd svn
svnadmin create projectdir
</pre>
</p> projectdir 是你的项目名称</p>
<p> </p>
<p> </p>





<h2 class="nav1">二:配置svn的用户权限</h2>
<p>主要是修改 /svn/projectdir/conf 目录下的三个文件：authz，passwd，svnserve.conf</p>
<p> </p>

<h3>1.打开 svnserve.conf，将下列配置项前面的#和空格都去掉</h3>
<pre>
# anon-access = read
# auth-access = write

# password-db = passwd

# authz-db = authz
</pre>

<p>四行前的 ＃ 号去掉，再将 anon-access = read 改为 anon-access = none，这样禁止匿名访问，需要帐号密码才能访问 </p>

<p> </p>

<p>PS：这里要注意的，在 ＃ 号后是有空格的，得去掉这个空格，上文字顶格，不然也有错误  </p>

<p><img src="/assets/docpic/svn_config_1.jpg"/> </p>
<p> </p>


<h3>2.打开passwd，在[users]下面添加帐号和密码</h3>
<p><img src="/assets/docpic/svn_config_2.jpg"/> </p>
<p>
帐号是mj，密码是123； <br>
帐号是jj，密码是456
</p>
<p> </p>
<p> </p>


<h3>3.打开authz，配置用户组和权限</h3>
<p>我们可以将在 passwd 里添加的用户分配到不同的用户组里，以后的话，就可以对不同用户组设置不同的权限，没有必要对每个用户进行单独设置权限。 在 [groups]下面添加组名和用户名，多个用户之间用逗号(，)隔开</p>

<p><img src="/assets/docpic/svn_config_3.jpg"/> </p>
<p>PS：用户组前要用 @ 符号，如果是用户，直接写用户名就可以了。rm 代表可读写，显然只读就是 r 了</p>
<p> </p>
<p> </p>


<h3>启动SVN服务</h3>
<pre>
svnserve -d -r /path/svn  
</pre>
<p> </p>

<p>特别注意，路径一定是 SVN 的目录，不是其中一个版本库的目录，不然，能正常启动，就是访问有问题 </p>
<p>没有任何输出，则启动成功 </p>
<p>实例： </p>

<pre>
svnserve -d -r /Users/macserver/svn
</pre>

<p>查看 </p>

<pre>
ps -e | grep svnserve
</pre>


<h2 class="nav1">二:客户端路径</h2>

<pre>
 svn checkout svn://localhost/projectdir --username=jj --password=456
</pre>
