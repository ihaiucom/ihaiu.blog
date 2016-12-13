---
layout: post
title: 【转】git push remote error解决办法  
date: 2016-12-13 3:10:00
categories: git
tags: git
excerpt: git push remote error解决办法  
thread: 2016121331000
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: 

sh: false
sh_csharp: true
---


<p>通常在用git clone了remote端（服务器）的git仓库后，再进行了自己一系列修改后，会将自己测试后稳定的状态push到remote端，以更新源仓库，使 其他人在pull的时候得到自己的修改。但是在git push的时候会经常出现如下的错误提示。</p>

<pre>
MacServerdeiMac:test macserver$ git push origin master
Counting objects: 3, done.
Writing objects: 100% (3/3), 245 bytes | 0 bytes/s, done.
Total 3 (delta 0), reused 0 (delta 0)
remote: error: refusing to update checked out branch: refs/heads/master
remote: error: By default, updating the current branch in a non-bare repository
remote: error: is denied, because it will make the index and work tree inconsistent
remote: error: with what you pushed, and will require 'git reset --hard' to match
remote: error: the work tree to HEAD.
remote: error: 
remote: error: You can set 'receive.denyCurrentBranch' configuration variable to
remote: error: 'ignore' or 'warn' in the remote repository to allow pushing into
remote: error: its current branch; however, this is not recommended unless you
remote: error: arranged to update its work tree to match what you pushed in some
remote: error: other way.
remote: error: 
remote: error: To squelch this message and still keep the default behaviour, set
remote: error: 'receive.denyCurrentBranch' configuration variable to 'refuse'.
To git@127.0.0.1:repositories/test.git
 ! [remote rejected] master -> master (branch is currently checked out)
error: failed to push some refs to 'git@127.0.0.1:repositories/test.git'
</pre>

<p></p>
<p>根据上面所报的信息，它的意思就是默认情况下，git不允许用push操作更新non-bare的仓库，因为这样的操作会导致remote仓库的索引 （index）和工作树（work tree）与你push的不一致，此时需要通过‘git reset –hard’操作来使得工作树与HEAD索引相匹配。 可以通过在remote端，设置git的配置文件（.git/config），在其中添加如下内容： </p>


<pre>
[receive]
	denyCurrentBranch = false
</pre>

<p></p>
<p>这样就可以通过git push提交自己的稳定更新，要想在push后在remote端看到更新的效果，执行git reset --hard即可。</p>
