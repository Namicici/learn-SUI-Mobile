;(function($){
	"use strict";

	$(document).on('pageInit', "#page-product", function(e, id, page){
		function getBankPproducts(pageCount){{
			var notices =[{
				"id":1,
				"title":"产品发布",
				"createTime":"2016-10-21 10:54:01",
				"content":"【金助力】你好，中诚信托发行人客户在平台发布的信托7号产品需您审核，请及时处理。中诚信托发行人客户在平台发布的信托7号产品需您审核，请及时处理。"
			},{
				"id":2,
				"title":"会员注册",
				"createTime":"2016-10-21 11:15:00",
				"content":"【金助力】你好，中诚信托发行人客户在平台发布的信托7号产品需您审核，请及时处理。"
			},{
				"id":3,
				"title":"会员注册",
				"createTime":"2016-10-21 11:15:00",
				"content":"【金助力】你好，中诚信托发行人客户在平台发布的信托7号产品需您审核，请及时处理。"
			},{
				"id":4,
				"title":"会员注册",
				"createTime":"2016-10-21 11:15:00",
				"content":"【金助力】你好，中诚信托发行人客户在平台发布的信托7号产品需您审核，请及时处理。"
			},{
				"id":5,
				"title":"会员注册",
				"createTime":"2016-10-21 11:15:00",
				"content":"【金助力】你好，中诚信托发行人客户在平台发布的信托7号产品需您审核，请及时处理。"
			},{
				"id":5,
				"title":"会员注册",
				"createTime":"2016-10-21 11:15:00",
				"content":"【金助力】你好，中诚信托发行人客户在平台发布的信托7号产品需您审核，请及时处理。"
			},{
				"id":5,
				"title":"会员注册",
				"createTime":"2016-10-21 11:15:00",
				"content":"【金助力】你好，中诚信托发行人客户在平台发布的信托7号产品需您审核，请及时处理。"
			},{
				"id":5,
				"title":"会员注册",
				"createTime":"2016-10-21 11:15:00",
				"content":"【金助力】你好，中诚信托发行人客户在平台发布的信托7号产品需您审核，请及时处理。"
			}];
			var html = "";
			for (var i=0; i<notices.length; i++){
				html = html + '<div class="card">'
					+ '<div class="card-content">'
					+ '  <div class="card-content-inner">'
					+ '	  <div class="notice-header">'
					+ '		  <div class="notice-title">'+ notices[i].title + '</div>'
					+ '		  <div class="notice-time">'+  notices[i].createTime + '</div>'
					+ '	  </div>'
					+ '	  <div class="notice-content">'+ notices[i].content + '</div>'
					+ ' </div>'
					+ '</div>'
				+ '</div>'
			}
			$('.infinite-scroll-bottom #bankProduct>.content-block').append(html);
		}};
		var loading = false;
		var maxItems = 100;
		var itemsPerLoad = 20;
	    var lastIndex = 20;
		getBankPproducts(itemsPerLoad);
		$(document).on("infinite", '.infinite-scroll-bottom', function(){
			if (loading) return;
			loading = true;

			setTimeout(function() {
				loading = false;

				if (lastIndex >= maxItems) {
					// 加载完毕，则注销无限加载事件，以防不必要的加载
					$.detachInfiniteScroll($('.infinite-scroll'));
					// 删除加载提示符
					$('.infinite-scroll-preloader').remove();
					return;
				}
				getBankPproducts(itemsPerLoad, lastIndex);
				// 更新最后加载的序号
				lastIndex = $('#bankProduct>.content-block .card').length;
				//容器发生改变,如果是js滚动，需要刷新滚动
				$.refreshScroller();
			},1000);
		})
	});

    $.init();

}(Zepto))
