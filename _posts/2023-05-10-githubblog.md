---
layout: post
title: github博客相关介绍
date: 2023-05-10 13:51:00
categories: Github博客
tags: github blog 博客
excerpt: 搭建一个免费的，无限流量的Blog
shareexcerpt: 搭建一个免费的，无限流量的Blog
thread: 10001
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail: /assets/docpic/github.jpeg

sh: true
sh_csharp: true
sh_cpp: true
---

# 相关文档

[GitHub Pages 快速入门 - GitHub 文档](https://docs.github.com/zh/pages/quickstart)

[Github Pages + jekyll 全面介绍极简搭建个人网站和博客 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/51240503)

[欢迎 - Jekyll • 简单静态博客网站生成器 (jekyllcn.com)](https://jekyllcn.com/docs/home/)

[使用 site.github |GitHub 元数据 (jekyll.github.io)](https://jekyll.github.io/github-metadata/site.github/)



模板

[页面主题样式 Supported themes | GitHub Pages](https://pages.github.com/themes/)

[GitHub Pages themes](https://github.com/pages-themes)

[Jekyll Themes](http://jekyllthemes.org/)

[Sites · jekyll/jekyll Wiki (github.com)](https://github.com/jekyll/jekyll/wiki/sites)



评论

[关于静态博客的评论系统 - 张宸blog - 博客园 (cnblogs.com)](https://www.cnblogs.com/nodecat/p/13058292.html)




# 1.github设置
### 1.1 设置启用page

![image-20230510141833802](_img/2023-05-10-githubblog/image-20230510141833802.png)

```
设置完分支，就可以用这个地址访问了。
默认访问的是 README.md

https://${用户名}.github.io/test.blog/
```

[https://ihaiucom.github.io/test.blog/](https://ihaiucom.github.io/test.blog/)

![image-20230510144645029](_img/2023-05-10-githubblog/image-20230510144645029.png)

**访问文件优先级:**

index.html > index.md > README.md



### 1.2 设置自己的域名

![image-20230510151106746](_img/2023-05-10-githubblog/image-20230510151106746.png)



![image-20230510151233349](_img/2023-05-10-githubblog/image-20230510151233349.png)



配置完会添加一个文件CNAME

![image-20230510154924321](_img/2023-05-10-githubblog/image-20230510154924321.png)



[https://blog.zs.center](https://blog.zs.center/)

![image-20230510154016994](_img/2023-05-10-githubblog/image-20230510154016994.png)


# 2.用Jekyll来配置生成静态网站框架

### 2.1 目录结构

[目录结构 - Jekyll • 简单静态博客网站生成器 (jekyllcn.com)](http://jekyllcn.com/docs/structure/)

```
|-- blog
    |-- _config.yml -- 全局配置文件 
    |-- _layouts  -- 模板
    |-- _includes   -- 可以重复在其他界面导入的模块
    |-- _data   -- 数据(新版本支持)
    |-- _posts   -- 博客文章
    |-- assets   -- 静态资源
        |-- js
        |-- css
        |-- image
    |-- index.md   -- 首页

```



### 2.2 _layouts 模板

![image-20230510190623847](_img/2023-05-10-githubblog/image-20230510190623847.png)

![image-20230510190944836](_img/2023-05-10-githubblog/image-20230510190944836.png)

![image-20230510191047786](_img/2023-05-10-githubblog/image-20230510191047786.png)



![image-20230510191206926](_img/2023-05-10-githubblog/image-20230510191206926.png)



![image-20230510193142325](_img/2023-05-10-githubblog/image-20230510193142325.png)

![image-20230510193308218](_img/2023-05-10-githubblog/image-20230510193308218.png)



### 2.3  _includes 模块

![image-20230510192321365](_img/2023-05-10-githubblog/image-20230510192321365.png)

![image-20230510192626315](_img/2023-05-10-githubblog/image-20230510192626315.png)



### 2.4 _posts 博客文章

[常用变量 - Jekyll • 简单静态博客网站生成器 (jekyllcn.com)](http://jekyllcn.com/docs/variables/)



![image-20230510224004703](_img/2023-05-10-githubblog/image-20230510224004703.png)

#### 显示文章目录

[常用变量 - Jekyll • 简单静态博客网站生成器 (jekyllcn.com)](http://jekyllcn.com/docs/variables/#页面page变量)

https://blog.zs.center/index-posts/#content

```html
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
```

![image-20230510223536341](_img/2023-05-10-githubblog/image-20230510223536341.png)





#### 设置链接方式

在 _config.yml

```yaml

# 默认形式：https://blog.zs.center/2023/05/01/第1篇博客.html
# 修改后: https://blog.zs.center/第1篇博客/
permalink: /:title/
```





### 2.5 page info 页面头信息

[头信息 - Jekyll • 简单静态博客网站生成器 (jekyllcn.com)](http://jekyllcn.com/docs/frontmatter/)

![image-20230511000815445](_img/2023-05-10-githubblog/image-20230511000815445.png)

### 2.6 语法

#### for

```html
{% for post in site.posts %}
      <a href="{{ post.url }}">{{ post.title }}</a>
{% endfor %}
```



### 2.7 分页

[分页功能 - Jekyll • 简单静态博客网站生成器 (jekyllcn.com)](http://jekyllcn.com/docs/pagination/)

[常用变量 - Jekyll • 简单静态博客网站生成器 (jekyllcn.com)](http://jekyllcn.com/docs/variables/#分页器paginator)



#### 设置分页，每页数量

_config.yml

```yaml
paginate: 20 #设置分页，每页数量
```

![image-20230511003651360](_img/2023-05-10-githubblog/image-20230511003651360.png)








# 3.评论

[utterances](https://utteranc.es/)

[博客使用 utterances 作为评论系统 - 掘金 (juejin.cn)](https://juejin.cn/post/6844903834712539150)





# 4.编辑器工具

[Typora 官方中文站 (typoraio.cn)](https://typoraio.cn/)

https://huanle.feishu.cn/file/boxcnIqvMVztdTRwKKPmSKaekoh