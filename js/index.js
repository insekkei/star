$(function(){
	$(document).on('click', '#light a' ,function(e){
		var $this = $(this);
		$this.addClass('active').siblings('a').removeClass('active');
		var left = $this.offset().left;
		$('#color-box').fadeIn().css('left',left);
		e.preventDefault();
	})
	.on('click', '#color-box a' ,function(e){
		var cbn = $(this).attr('class');
		$('.active').removeClass().addClass('active').addClass(cbn);
		e.preventDefault();
	});
	$('.wrapper').click(function(e){
		$('#color-box').fadeOut(0);
		$('.light a').removeClass('active');
	})

	//倒计时
	$('.start').click(function(e){
		$(this).fadeOut(0);
		playGame();
		e.preventDefault();
	});
	
});
function playGame(){
	$('.yuan').removeClass('trans');
	$('.jin').removeClass('trans2');
	$('.djs').fadeIn(0).children('span').addClass('ani');
	$('.djs').delay(3000).fadeOut(function(){
		$('.yuan').addClass('trans');
		$('.jin').addClass('trans2');
		$('.jdt-border').fadeIn(0).children('.jdt').fadeIn(0,function(){
			$('#gameover').delay(29000).fadeIn(function(){
				$('.jdt-border').fadeOut(0);
				$(document).on('click','.restart',function(e){
					$('#gameover').fadeOut(0);
					playGame();
					e.preventDefault();
				})
			});
		}).addClass('jdt-trans');
		$('.light .weiba').css('opacity',1);

	});
}