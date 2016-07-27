;(function($){
	"use strict";

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

	$.fn.http({
		method:"get",
		url: baseUrl + "/menus"
	}, function(data){
		var menuItems = resolveMenuList(data.data.menuList);
		var html = "";
		for (var i = 0; i < menuItems.length; i++){
			var item = menuItems[i];
			var childHtml = "";
			for (var j = 0; j < item.children.length; j++){
				var child = item.children[j];
				childHtml = childHtml
	                +'<a href="/toDo/member/" class="icon icon-me"> ' + child.displayName + '</a>';
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

		/*** button list需要挂载到全局 ***/
        //$scope.$emit("iamp.buttonList", data.data.data.buttonList);
	});

}(Zepto))
