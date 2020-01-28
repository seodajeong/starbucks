$(document).ready(function(){

	//Code to center the subscription pup-up box
	$box = $('#box');
	$box.css({
		'left' : '50%',
		'top' : '50%',
		'margin-left' : -$box.width()/2 + 'px',
		'margin-top' : -$box.height()/2 + 'px'
	});


	//Subscription pup-up
	$('.start_btn').click(function(){
		$('#lightbox').width($(window).width()).height($(window).height()).fadeIn(200);
		$('#box').fadeIn(200);

		return false;
	});

	$('#lightbox, .close').click(function(){
		$('#lightbox').width(0).height(0).fadeOut(200);
		$('#box').fadeOut(200);

		return false;
	});


	//비디오 컨트롤
	// 비디오 객체 가져오기
	var player=$('video')[0];
	console.log(player);

	// 재생/일시정지
	$('#btn-play-pause').click(function(e){
		e.preventDefault();
		if(player.paused){
			player.play();
			$(this).find('i').text('pause');
		}else{
			player.pause();
			$(this).find('i').text('play_arrow');
		}
	});

	// 다시 시작
	$('#btn-replay').click(function (e) { 
		e.preventDefault();
		player.currentTime=0; 
		player.play();
		$('#btn-play-pause i').text('pause');
	});

	// 음소거/해제
	$('#btn-volume').click(function(e){
		e.preventDefault();
		if(player.muted){
			player.muted=false;
			$(this).find('i').text('volume_up');
		}else{
			player.muted=true;
			$(this).find('i').text('volume_off');
		}
	});

	// 전체화면/기본화면
	$('#btn-fullscreen').click(function(e){
		e.preventDefault();
		if($(this).text()=='fullscreen'){
			$('body').addClass('fullscreen');
			$(this).find('i').text('fullscreen_exit')
		}else{
			$('body').removeClass('fullscreen');
			$(this).find('i').text('fullscreen')
		}
	});

});
