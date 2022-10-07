$(document).ready(function() {

	
	// main nav
	$('.total').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('on');
		if($(this).hasClass('on')) {
            $('.menu-nav').show();
            $('.bg_black').show();
        } else {
            $('.menu-nav').hide();
            $('.bg_black').hide();
        }
	});


	$('.bg_black, #info_link1, #info_link2').click(function() {
		$('.total').toggleClass('on');
		$('.menu-nav').hide();
        $('.bg_black').hide();
	});
	
	$(".main>a").click(function(e){
		e.preventDefault();
		var sub = $(this).next(".sub");

		if(sub.is(":visible")) {
			sub.slideUp();
			$(".main>a").removeClass("on");
		} else {
			sub.slideDown();
			$(this).addClass("on");
		}
	});
	
	$('#menu_link').click(function(){
		self.location.href = "https://www.baewha.ac.kr/main.do";
	});


	$('.bg_black2').click(function(e) {
		e.preventDefault();
        $('.bg_black2').hide();
	});


	// main slide
	$('.fade').slick({
		autoplay: true,
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		arrows: false
	});


	// college slider part
	$('.today').slick({
		infinite: true,
  		slidesToShow: 2,
  		slidesToScroll: 2,
  		dots: false,
  		centerMode: true,
  		focusOnSelect: true,
		arrows:true,
	});

	$('.img_inner').slick({
		dots: true,
		infinite: true,
		cssEase: 'linear',
		arrows: false,
	});
	



	$('').click(function() {
		if($("").css("display") == "none"){
			('').show();
		}else{
			('').hide();
		}
	});

	   $('.s_img').hover(function(){
	      $(this).find('.s_detail').show();
	     }, function(){
	      $(this).find('.s_detail').hide();
	  });



		// 캠퍼스 타운 소개
		$('.i_goal img').css({opacity:'0.1',transition:'3s all ease'});


		$(window).scroll(function () {
			var scrollT = $(document).scrollTop();
			log(scrollT);
		});


		// intro animation
		function log(str){
			$('#log').text(str);

			if(str>=800){

				// PC
				if($(window).width() >767) {
					$('.ex_circle:eq(0)').css({opacity:'1',transform:'translateX(-15.5rem)',transition:'2s all ease'});// 13
					$('.ex_circle:eq(1)').css({opacity:'1',transform:'',transition:'2s all ease'});
					$('.ex_circle:eq(2)').css({opacity:'1',transform:'translateX(7rem)',transition:'2s all ease'});
				}
				// mobile
				else{
					$('.ex_circle:eq(0)').css({opacity:'1',transform:'',transition:'2s all ease'});
					$('.ex_circle:eq(1)').css({opacity:'1',transform:'translateY(-1rem)',transition:'2s all ease'});
					$('.ex_circle:eq(2)').css({opacity:'1',transform:'translateY(-2rem)',transition:'2s all ease'});
				}
			}

			if(str >= 900) { // 스크롤바가 아래 쪽에 위치할 때
				$('.p_square:eq(0)').stop().animate({opacity:'1'}, 500);
				$('.p_square:eq(1)').stop().animate({opacity:'1'}, 800);
				$('.plan_img').stop().animate({top:'50%', opacity:'1'}, 1100);
				$('.p_square:eq(2)').stop().animate({opacity:'1'}, 1400);
				$('.p_square:eq(3)').stop().animate({opacity:'1'}, 1700);
			} else {
				$('.p_square').stop().animate({top:'30%', opacity:'0'});
				$('.plan_img').stop().animate({top:'80%', opacity:'0'});
			};
		}
		 
	      
	      // collge 리스트 페이지 이동시 스크롤 고정
	      var url = $(location).attr('href')
	      var pathName = $(location).attr('pathname')
	      var hash = $(location).attr('hash')
	      var search = $(location).attr('search')
	      var header_height = $('header').height();
	      var offset='';

	      if (pathName =="/store.do" && search!=''){
	    	  offset = $(".s_container").offset().top - header_height; // 헤더값에 가려짐 -> 헤더 밑으로  위치하게
	          $('html, body').scrollTop(offset);
	       }


});