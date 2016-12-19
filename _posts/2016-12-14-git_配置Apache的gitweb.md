---
layout: post
title:  配置Apache的gitweb
date: 2016-12-14 1:10:00
categories: git
tags: git
excerpt: git instaweb --httpd=webrick --port=8080
thread: 20161214011000
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: /assets/docpic/gitweb_1.png

sh: false
sh_csharp: true
---


<h2 class="nav1">安装gitweb</h2>
<p>下载git源码 <href="https://github.com/git/git" >https://github.com/git/git</a> 进入到git目录执行以下命令 /Users/git/repositories换成你git项目存放目录</p>
<pre>
git clone git@github.com:git/git.git
cd git/
make GITWEB_PROJECTROOT="/Users/git/repositories" prefix=/usr gitweb
sudo cp -Rf gitweb /var/www/
</pre>
<p> </p>
<p> </p>

<h2 class="nav1">配置Apache虚拟机</h2>
<p> 找到你的Apache配置目录 </p>
<pre>
sudo apachectl -V
</pre>
<p> </p>
<p> </p>

<h2>输出: 找到httpd.conf的路径</h2>
<pre>
Server version: Apache/2.4.16 (Unix)
Server built:   Jul 22 2015 21:03:09
Server's Module Magic Number: 20120211:47
Server loaded:  APR 1.4.8, APR-UTIL 1.5.2
Compiled using: APR 1.4.8, APR-UTIL 1.5.2
Architecture:   64-bit
Server MPM:     prefork
  threaded:     no
    forked:     yes (variable process count)
Server compiled with....
 -D APR_HAS_SENDFILE
 -D APR_HAS_MMAP
 -D APR_HAVE_IPV6 (IPv4-mapped addresses enabled)
 -D APR_USE_FLOCK_SERIALIZE
 -D APR_USE_PTHREAD_SERIALIZE
 -D SINGLE_LISTEN_UNSERIALIZED_ACCEPT
 -D APR_HAS_OTHER_CHILD
 -D AP_HAVE_RELIABLE_PIPED_LOGS
 -D DYNAMIC_MODULE_LIMIT=256
 -D HTTPD_ROOT="/usr"
 -D SUEXEC_BIN="/usr/bin/suexec"
 -D DEFAULT_PIDLOG="/private/var/run/httpd.pid"
 -D DEFAULT_SCOREBOARD="logs/apache_runtime_status"
 -D DEFAULT_ERRORLOG="logs/error_log"
 -D AP_TYPES_CONFIG_FILE="/private/etc/apache2/mime.types"
 -D SERVER_CONFIG_FILE="/private/etc/apache2/httpd.conf"
</pre>
<p> </p>
<p> </p>


<p>在apache2/extra/目录下创建 http-git.config</p>
<pre>
&lt;VirtualHost *:8080&gt;
    ServerName gitserver
    DocumentRoot /var/www/gitweb
    &lt;Directory /var/www/gitweb&gt;
        # 访问权限配置--不可以访问目录
        Options ExecCGI +FollowSymLinks +SymLinksIfOwnerMatch
        # 访问权限配置--可以访问目录
        #Options Indexes FollowSymLinks Multiviews

        AllowOverride All
        order allow,deny
        Allow from all

        # 使用 cgi 访问
        AddHandler cgi-script cgi

        # 首页文件名称配置
        DirectoryIndex gitweb.cgi
        
    &lt;/Directory&gt;
&lt;/VirtualHost&gt;
</pre>



<p> </p>
<p> </p>



<p>httpd.conf 下找到Include的地方添加下面的</p>
<pre>
# GitServer Virtual
Include /private/etc/apache2/extra/httpd-git.conf
</pre>
<p> </p>
<p> </p>


<p>httpd.conf 下找到Listen的地方</p>
<pre>
#Listen 12.34.56.78:80
Listen *:80
# 添加我们虚拟机需要的端口
Listen *:8080 
</pre>



<p>httpd.conf 下找到 LoadModule cgi_module 将前面的#去掉</p>
<pre>
LoadModule cgi_module libexec/apache2/mod_cgi.so
</pre>
<p> </p>
<p> </p>



<p>检测一下配置是否有问题</p>
<pre>
sudo apachectl -t
</pre>

<p>Syntax OK表示没有错误</p>


<p> </p>
<p> </p>




<h2 class="nav1">配置/etc/gitweb.conf</h2>
<pre>
# git 项目存放目录
$projectroot = "/Users/git/repositories"

# 如果你的访问网页，发现没有项目，可以配置一下git程序路径
$GIT = "/usr/bin/git"
</pre>
<p> </p>
<p> </p>


<h2 class="nav1">相关文档</h2>
<p><a target="_blank" href="http://blog.ihaiu.com/git_instaweb/#content">git网页查看资源 git instaweb --httpd=webrick --port=8080</a></p>
<p><a target="_blank" href="https://git-scm.com/book/zh/v1/%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%B8%8A%E7%9A%84-Git-GitWeb">4.6 服务器上的 Git - GitWeb</a></p>
<p><a target="_blank" href="https://git-scm.com/book/en/v2/Git-on-the-Server-GitWeb">https://git-scm.com/book/en/v2/Git-on-the-Server-GitWeb</a></p>
<p><a target="_blank" href="https://git-scm.com/docs/gitweb">https://git-scm.com/docs/gitweb</a></p>
<p></p>
<p></p>