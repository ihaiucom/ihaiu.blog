{% if site.duoshuo %}
	<div class="ds-share flat" data-thread-key="{{ page.thread }}" data-title="{{ page.title }}" data-url="{{ site.url }}{{ page.url }}"

	{% if page.shareexcerpt %}
	data-content="{{ page.shareexcerpt }}" 
	{% else %}
	data-content="" 
	{% endif %}	

	{% if page.thumbnail %}
	data-images="{{ site.url }}{{ page.thumbnail }}" 
	{% else %}
	data-images="{{ site.url }}/assets/icon152.png" 
	{% endif %}	

	>


	    <div class="ds-share-inline">
	      <ul  class="ds-share-icons-16">
	      	
	      	<li data-toggle="ds-share-icons-more"><a class="ds-more" href="javascript:void(0);">分享到：</a></li>
	        <li><a class="ds-weibo" href="javascript:void(0);" data-service="weibo">微博</a></li>
	        <li><a class="ds-qzone" href="javascript:void(0);" data-service="qzone">QQ空间</a></li>
	        <li><a class="ds-qqt" href="javascript:void(0);" data-service="qqt">腾讯微博</a></li>
	        <li><a class="ds-wechat" href="javascript:void(0);" data-service="wechat">微信</a></li>
	      	
	      </ul>
	      <div class="ds-share-icons-more"></div>
	    </div>
	 </div>

<!-- 	{% if page.thread %}
	<div class="ds-thread" data-thread-key="{{ page.thread }}" data-url="{{ site.url }}{{ page.url }}" data-title="{{ page.title }}" />
	{% else %}
	<div class="ds-thread" />
	{% endif %}	
	<script type="text/javascript">
	var duoshuoQuery = {short_name:"{{ site.duoshuo }}"};
	(function() {
		var ds = document.createElement('script');
		ds.type = 'text/javascript';ds.async = true;
		ds.src = 'http://static.duoshuo.com/embed.js';
		ds.charset = 'UTF-8';
		(document.getElementsByTagName('head')[0] 
		|| document.getElementsByTagName('body')[0]).appendChild(ds);
	})();
	</script>
	{% endif %} -->


{% if page.thread %}
<div id="cloud-tie-wrapper" class="cloud-tie-wrapper"></div>
<script>
  var cloudTieConfig = {
    url: document.location.href, 
    sourceId: "{{ page.thread }}",
    productKey: "97dc4b8e4aeb41ca8606d2c6efa6eae3",
    target: "cloud-tie-wrapper"
  };
</script>
<script src="https://img1.cache.netease.com/f2e/tie/yun/sdk/loader.js"></script>
{% endif %}
