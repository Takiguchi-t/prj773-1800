// JavaScript Document
'use strict';
////////////////////////////////////////////////
// userAgent
////////////////////////////////////////////////
var _ua = (function(u){
	return {
		tl:(u.indexOf("windows") !== -1 && u.indexOf("touch") !== -1 && u.indexOf("tablet pc") === -1) ||  u.indexOf("ipad") !== -1 || (u.indexOf("android") !== -1 && u.indexOf("mobile") === -1) || (u.indexOf("firefox") !== -1 && u.indexOf("tablet") !== -1) || u.indexOf("kindle") !== -1 || u.indexOf("silk") !== -1 || u.indexOf("playbook") !== -1, sp:(u.indexOf("windows") !== -1 && u.indexOf("phone") !== -1) || u.indexOf("iphone") !== -1 || u.indexOf("ipod") !== -1 || (u.indexOf("android") !== -1 && u.indexOf("mobile") !== -1) || (u.indexOf("firefox") !== -1 && u.indexOf("mobile") !== -1) || u.indexOf("blackberry") !== -1
	};
})(window.navigator.userAgent.toLowerCase());

////////////////////////////////////////////////
// cmn function
////////////////////////////////////////////////
var _st,_sl,_ww,_wh,_bp;

$(function(){
	//scroll bar margin
	var width = window.innerWidth - document.body.clientWidth;
	var newStyle = document.createElement('style');
	document.head.appendChild(newStyle);
	newStyle.sheet.insertRule('body.enabled_modal #wrapper { width: calc(100% - '+(width)+'px); }', 0);
	newStyle.sheet.insertRule('body.enabled_modal #header { width: calc(100% - '+(width)+'px); }', 0);
	newStyle.sheet.insertRule('body.enabled_modal #header-menu { padding-right: '+(width)+'px; }', 0);
	
	//sp bar height
	setHeight();
	window.addEventListener('resize', setHeight);
	
	//security
	$('a[target="_blank"]').attr('rel','noopener noreferrer');
	
	//tel cancel
	if(!(_ua.sp || _ua.tl)) $('a[href^="tel:"]').on('click',function(){return false;}).css({cursor: 'default'});
	
	//ie11
	if(navigator.userAgent.indexOf("Trident") !== -1){
		objectFitImages('img.ofi-cover');
		objectFitImages('img.ofi-contain');
	}
	
	//common
	cmnVar();
	$(window).on('load resize scroll', cmnVar);
	
	pageScroll();
	pagetop.init();
	switchImg.init();
	anime.init();
	header.init();
});

function setHeight(){
	let vh = $(window).height() * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}

var cmnVar = function(){
	_st = $(window).scrollTop();
	_sl = $(window).scrollLeft();
	_ww = window.innerWidth;
	_wh = window.innerHeight;
	_bp = _ww >= 769; //sp:false, pc:true
};

var pageScroll = function(){
	$('a.scroll[href^="#"]').on('click',function() {
		var href= $(this).attr("href");
		var target = $(href === "#" || href === "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').stop().animate({scrollTop:position}, 500, 'swing');
		return false;
	});
};

var pagetop = (function(){
	var _;
	function init(){
		_ = $('#pagetop');
		fix();
		$(window).on('resize scroll',fix);
	}
	function fix(){
		var _diff = diff();
		if(_st + _diff > $('#footer').offset().top - _wh){
			_.css({
				bottom: (_st + _diff) - ($('#footer').offset().top - _wh)
			});
		}else{
			_.css({
				bottom: ''
			});
		}
		if(_st > (($('body').hasClass('p-top'))? _wh*1.5 : _wh / 2)){
			_.addClass('is-show');
		}else{
			_.removeClass('is-show');
		}
	}
	function diff(){
		if(_bp){
			return 0;
		}else{
			return -80;
		}
	}
	return {init:init};
})();

var switchImg = (function(){
	var _;
	function init(){
		_ = $('img.switch');		
		_.each(function(){
			var _src = $(this).attr('src');
			var _last = _src.substring(_src.lastIndexOf('.'), _src.length);
			var _sSrc = _src.replace(_last, 's'+_last);
			$(this).attr({sSrc:_sSrc,pSrc:_src});
			$('<img>').attr('src',_sSrc);
		});
		
		srcSwitchFunc();
		$(window).on('resize', function() {
			srcSwitchFunc();
		});
	}
		
	function srcSwitchFunc(){
		_.each(function(){
			if(!_bp) {
				$(this).attr('src', $(this).attr('sSrc'));
				$(this).fadeIn();
			} else {
				$(this).attr('src', $(this).attr('pSrc'));
				$(this).fadeIn();
			}
		});
	}
	return {init:init};
})();

var anime = (function(){
	function init(){
		trigger();
		$(window).on('load resize scroll', function(){
			trigger();
		});
	}
	function trigger(){
		//free
		$('.anime').each(function(i,e){
			var timing = num($(e).data('anime'), 0.8);
			if(_st + (_wh * timing) > $(e).offset().top && !$(e).hasClass('on-anime')){
				$(e).addClass('on-anime');
			}
		});
		
		//fade
		$('.fade, .fade-top, .fade-btm, .fade-left, .fade-right').each(function(i,e){
			var timing = num($(e).data('anime'), 0.8);
			if(_st + (_wh * timing) > $(e).offset().top && !$(e).hasClass('on-fade')){
				$(e).addClass('on-fade');
			}
		});
		
		//parallax
		$('.para').each(function(i,e){
			var per = 0;
			var move = num($(e).data('para'), 0.3);
			if(_st+_wh < $(e).offset().top){
				per = 0;
			}else if(_st+_wh < $(e).offset().top + $(e).innerHeight() + _wh){
				per = ((_st + _wh) - $(e).offset().top) / ($(e).innerHeight() + _wh) * 100;
			}else {
				per = 100;
			}
			$(e).css({
				transform: 'translateY('+(per*move)+'%)'
			});
		});
	}
	function num(key,defa){
		var str = (key)? String(key): String(defa);
		if(str.indexOf(',') !== -1){
			str = (_bp)? key.split(',')[1] :key.split(',')[0];
		}
		return Number(str);
	}
	return {init:init};
})();

var header = (function(){
	var _,_t,_m,mst;
	function init(){
		_ = $('#header');
		_t = $('#header-toggle');
		_m = _.find('.menu');
		$(window).on('resize',function(){
			_.removeClass('is-active');
			_t.removeClass('is-active');
			_m.removeAttr('style');
			$('body').css({top: ''}).removeClass('enabled_modal');
		});
		_t.on('click', function(){
			menuToggle($(this));
		});
		
		//header
		h_pos();
		$(window).on('load resize scroll', h_pos);
	}
	function menuToggle(elm){
		if(!elm.hasClass('is-active')){
			elm.addClass('is-active');
			_.addClass('is-active');
			mst = $(window).scrollTop();
			if(!_bp){
				_m.innerHeight(window.innerHeight);
				$('body').css({top: -mst}).addClass('enabled_modal');
			}
		}else{
			elm.removeClass('is-active');
			_.removeClass('is-active');
			_m.removeAttr('style');
			$('body').css({top: ''}).removeClass('enabled_modal');
			$('html,body').prop({scrollTop: mst});
		}
	}
	function h_pos(){
		_.css({left: -_sl});
		if(_st > ($('body').hasClass('p-top')? _wh*2 : 100)){
			_.addClass('is-fix');
		}else{
			if(_.hasClass('is-fix')) _.removeClass('is-fix');
		}
	}
	return {init:init};
})();