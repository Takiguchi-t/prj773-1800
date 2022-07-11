// JavaScript Document
$(function(){
	if($('.p-top')[0]){
		mv.init();
		business.init();
	}
});

var mv = (function(){
	var _;
	function init(){
		_ = $('.s-mv');
		mv_pos();
		$(window).on('load resize scroll', mv_pos);
	}
	function mv_pos(){
		if(_st > _wh * 0.1){
			_.addClass('is-action');
		}else{
			_.removeClass('is-action');
		}
	}
	return {init:init};
})();

var business = (function(){
	var _;
	function init(){
		_ = $('.s-business .panel');
		panel_pos();
		$(window).on('load resize scroll', panel_pos);
	}
	function panel_pos(){
		if(_bp){
			//pc
			if(_st > _.offset().top){
				_.addClass('is-fix');
			}else{
				_.removeClass('is-fix');
			}
			_.find('.panel-block').each(function(){
				if(_st >= $(this).offset().top){
					$(this).find('.panel-fix').addClass('is-visible');
				}else{
					$(this).find('.panel-fix').removeClass('is-visible');
				}
			});
		}else{
			//sp
			_.removeClass('is-fix');
			_.find('.panel-fix').removeClass('is-visible');
		}
	}
	return {init:init};
})();