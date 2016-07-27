;(function($){
	"use strict";

	function http(options){
		$.ajax({
			type: options.method,
			url: options.url,
			data: options.data,
			header: options.header,
			processData: false,
			contentType: 'application/json'
		})
	};

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
}(Zepto))
