;(function($){
	"use strict";

	window.baseUrl = '/api';
	$.fn.http = function (options, successCallBack, errorCallBack){
		$.ajax({
			type: options.method,
			url: baseUrl + options.url,
			data: options.data,
			header: options.header,
			processData: false,
			contentType: 'application/json',
			dataType: 'json'
		}).then(function(data){
			successCallBack(data);
		}, function(error){
			alert(error);
			//errorCallBack(error);
		})
	};

}(Zepto));
