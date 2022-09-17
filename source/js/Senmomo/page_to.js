// JavaScript Document
(function($) { 
	$.extend({ 
		sakura : s
	});
	var o = {};
	var init_y = 0;
	var w = 0;
	var h = 0;
	var area = $('<div />').addClass('sakura-area').css({position:'absolute','overflow':'hidden',top:0,left:0,zIndex:-1});
	var sid = null;
	function s(options)
	{
		var defaults = {
			num		: 50,
			speed	: 30000,
			rand	: 0.8,
			urls	: []	
		};
		o = $.extend(true,defaults, options);
		sid = 'sakura-'+(+new Date());
		area.clone().attr('id',sid).css({width:'100%',height:$(document).outerHeight(true)}).appendTo('body');
		for(var i = 0;i < o.urls.length;i++){o.urls[i]+='?'+(+new Date());}
		$.when(a(o.urls))
		.then(b)
	}
	function a(u)
	{
		var dfds = [];
		var dfd = function(url){
		var d = new $.Deferred();
		var img = new Image();
			img.onload = function(){d.resolve(url);}
			img.onerror = function(){d.reject();}
			img.src = url;
			return d.promise();
		}
		for(var i = 0;i < u.length;i++){dfds.push(dfd(u[i]));}
		return $.when.apply(null, dfds);
	}
	function b()
	{
		//var urls = arguments;
		var urls = o.urls;
		w = $(window).width();
		h = $(document).height();
		for(var i=0;i<urls.length;i++)
		{
			var img = new Image();
			img.src = urls[i];
			if(init_y<img.height){init_y=img.height;}
		}
		$('.sakura').remove();
		for(var i=0;i<o.num;i++){if(o.num<=$('.sakura').length){return;}c(urls[Math.floor( Math.random() * urls.length )],true);}
	}
	function c(url,flag)
	{
		//var r = w*1.5*o.rand*Math.random();
		var l =  w*1.5*o.rand*Math.random();
		var t = -1*init_y-h*o.rand*Math.random();
		var f = (flag)?(o.speed*Math.random()*o.rand/100):0;
		if(o.num<=$('.sakura').length){return;}
		$('<img />')
		.addClass('sakura')
		.attr('src',url)
		//.css({position:'absolute',top:t,right:r,zIndex:-1})
		.css({position:'absolute',top:t,left:l,zIndex:-1})
		.velocity({
			easing: 'linear',
			top:(h+init_y),
			//right:w*Math.random()*o.rand
			//right:w/(Math.random()*4+1)+r
			left:-w/(Math.random()*4+1)+l
		},{delay:f,duration:(o.speed*(1+Math.random()*o.rand)),complete:function(){c($(this).attr('src'),false);$(this).remove();}
		})
		.appendTo('#'+sid);
	}
	$(window).resize(function(e)
	{
		$('.sakura-area').remove();
		sid = 'sakura-'+(+new Date());
		area.clone().attr('id',sid).css({width:'100%',height:$(document).outerHeight(true)}).appendTo('body');
		$('.sakura').remove();
		b(o.urls);
	});
})(jQuery); 
