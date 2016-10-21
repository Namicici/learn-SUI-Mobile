
;(function($){
	"use strict";

	$(document).on("pageInit", '#page-home', function(e, id, page){
		function resolveMenuList(menulist){
			var menuItems = [];
			for(var i = 0 ;i<menulist.length;i++){
				if(menulist[i].parentId != '0'){
					continue;
				}
				var item = {};
				item.id = menulist[i].id;
				item.displayName = menulist[i].name;
				item.expand = true;
				item.icon = menulist[i].icon;
				item.children = [];
				//二级菜单
				for(var j = 0 ;j<menulist.length;j++){
					if(menulist[j].parentId == menulist[i].id){
						var children = {};
						children.id = menulist[j].id;
						children.name = menulist[j].url.replace('.html','');
						children.displayName = menulist[j].name;
						children.icon = menulist[j].icon;
						children.url = menulist[j].url;
						item.children.push(children);
					}
				}
				menuItems.push(item);
			}
			return menuItems;
		}

		function getMenus(){
			$.fn.http({
				method:"get",
				url: "/menus"
			}, function(data){
				var menuItems = resolveMenuList(data.data.menuList);
				$.fn.saveMenus(menuItems);
				var html = "";
				for (var i = 0; i < menuItems.length; i++){
					var item = menuItems[i];
					var childHtml = "";
					for (var j = 0; j < item.children.length; j++){
						var child = item.children[j];
						childHtml = childHtml
			                +'<a href=' + urlMapping[child.url] + ' class="icon icon-me"> ' + child.displayName + '</a>';
					}
					html = html
						+ '<div class="item">'
						+      '<div class="item-title">'
						+      	   '<span class="icon icon-card" style="padding-right:8px;"></span>'
						+          item.displayName
		                +          '<span class="icon icon-left" style="padding-right:8px;float:right;"></span>'
		                +      '</div>'
		                +      '<div class="item-list">'
						+			childHtml
		                +      '</div>'
		                +  '</div>'
				}
				$('#menu-list').append(html);

				$('.item-title').on('click', function(){
		  			/*$(".ripple").remove();
					$(this).prepend("<span class='ripple'></span>");
					$(".ripple").css({
					    width: '60px',
					    height: '32px',
						left:'45%'
					}).addClass("rippleEffect");*/
					var blockMenu = $(this).parent().children('.item-list');
					if (blockMenu.css('display') == 'none'){
						blockMenu.css('display', 'block');
						$(this).children('*:nth-child(2)').addClass('icon-down');
						$(this).children('*:nth-child(2)').removeClass('icon-left');
					}else {
						blockMenu.css('display', 'none');
						$(this).children('*:nth-child(2)').removeClass('icon-down');
						$(this).children('*:nth-child(2)').addClass('icon-left');
					}
				})
			});
		}

		getMenus();
		function getNotices(pageCount){
			$.fn.http({
				method:'get',
				url:'/notices',
				page:{
					count: pageCount
				}
			}, function(data){
				var notices = data.data;
				var html = "";
				for (var i=0; i<notices.length; i++){
					html = html + '<div class="card">'
						+ '<div class="card-content">'
						+ '  <div class="card-content-inner">'
						+ '	  <div class="notice-header">'
						+ '		  <div class="notice-title">'+ notices[i].title + '</div>'
						+ '		  <div class="notice-time">'+  notices[i].time + '</div>'
						+ '	  </div>'
						+ '	  <div class="notice-content">'+ notices[i].content + '</div>'
						+ ' </div>'
						+ '</div>'
					+ '</div>'
				}
				$('.infinite-scroll-bottom .notice-container').append(html);
			})
		}
		var loading = false;
		var maxItems = 100;
		var itemsPerLoad = 20;
	    var lastIndex = 20;
		getNotices(itemsPerLoad);
		$(document).on('infinite', '.infinite-scroll-bottom',function() {
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
	          getNotices(itemsPerLoad, lastIndex);
	          // 更新最后加载的序号
	          lastIndex = $('.notice-container .card').length;
	          //容器发生改变,如果是js滚动，需要刷新滚动
	          $.refreshScroller();
	      },1000);
	  });
  });

  $.init();

}(Zepto))
