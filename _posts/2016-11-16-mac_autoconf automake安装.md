---
layout: post
title: 【转】mac下autoconf automake安装
date: 2016-11-16 23:00:00
categories: mac
tags: mac automake安装
excerpt: automake 有很多其他的也需要装
thread: 20161116230000
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail:

sh: false
sh_csharp: true
---


curl -O http://mirrors.kernel.org/gnu/m4/m4-1.4.13.tar.gz
tar -xzvf m4-1.4.13.tar.gz
cd m4-1.4.13
./configure --prefix=/usr/local
make
sudo make install


cd ..
curl -O http://mirrors.kernel.org/gnu/autoconf/autoconf-2.65.tar.gz
tar -xzvf autoconf-2.65.tar.gz
cd autoconf-2.65
./configure --prefix=/usr/local
make
sudo make install
cd ..
curl -O http://mirrors.kernel.org/gnu/automake/automake-1.11.tar.gz
tar xzvf automake-1.11.tar.gz
cd automake-1.11
./configure --prefix=/usr/local
make
sudo make install
cd ..
curl -O http://mirrors.kernel.org/gnu/libtool/libtool-2.2.6b.tar.gz
tar xzvf libtool-2.2.6b.tar.gz
cd libtool-2.2.6b
./configure --prefix=/usr/local
make

sudo make install

curl http://pkgconfig.freedesktop.org/releases/pkg-config-0.28.tar.gz -o pkg-config-0.28.tar.gz
tar -zxvf pkg-config-0.28.tar.gz
cd pkg-config-0.28
./configure --with-internal-glib