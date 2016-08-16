---
title: 分类
layout: page
---

<div id='tag_cloud'>
{% for cat in site.categories %}
<a class="nav2" style="line-height: 2rem; display: block; float: left; padding: 0.5rem 1rem;" href="#{{ cat[0] }}" title="{{ cat[0] }}" rel="{{ cat[1].size }}">{{ cat[0] }} ({{ cat[1].size }})</a> &nbsp; &nbsp;
{% endfor %}
<div class="cls"></div>
</div>

<ul class="listing">
{% for cat in site.categories %}
  <li class="listing-seperator nav1" id="{{ cat[0] }}">{{ cat[0] }}</li>
{% for post in cat[1] %}
  <li class="listing-item">
  <time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date:"%Y-%m-%d" }}</time>
  <a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
  </li>
{% endfor %}
<br />
<br />
{% endfor %}
</ul>

<script src="/media/js/jquery.tagcloud.js" type="text/javascript" charset="utf-8"></script> 
<script language="javascript">
$.fn.tagcloud.defaults = {
    size: {start: 1, end: 1, unit: 'em'},
      color: {start: '#f8e0e6', end: '#ff3333'}
};

$(function () {
    $('#tag_cloud a').tagcloud();
});
</script>

