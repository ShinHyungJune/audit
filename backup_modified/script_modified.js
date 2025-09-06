// 1920*1080(16:9) 해상도에 최적화 되어있음

var wrapImg = document.getElementById("wrapImg");
var currentPage = 1;//현재 페이지 번호
var previousMenuPage = 27;//이전 Menu 페이지 번호, 기본 26
var lastPage = $("#frame>div").length; //전체 페이지 번호
var screenWidth = wrapImg.clientWidth; //기기 너비
var screenHeight = wrapImg.clientHeight; //기기 높이
var winHeight = $(window).height(); //전체 너비
var imgHeight = $("#frame").height(); //프레임 높이

var timeTrue = true;
var blink_count = '';
var blink_set = '';
var count = 0;

var prevAnimatedPage = [16, 17, 22, 27];
var nextAnimatedPage = [15, 21, 26];

$(document).ready(function(e){
	$(".img11>div").css({height:imgHeight});


	//인트로 클릭하면 페이지 전환
	/* $(".intro").click(function(){
		$(this).animate({top:-winHeight,bottom:winHeight},500,function(){
			$(".whole_list").fadeIn();
		});
	}); */
	$(".intro").click(function(){
		$(this).animate({top:-winHeight,bottom:winHeight},-50000000,function(){
			$(".whole_list").fadeIn();
		});
	});

	$(".whole_list").click(function(){
		$(this).fadeOut();
		$(".pop_title1").fadeIn();
	})
	$(".whole_list2").click(function(){
		$(this).fadeOut();
	})
	/*$(".whole_list").click(function(){
		$(this).fadeOut();
		linkBtn(0);
	}) */
	/* $(".whole_list").click(function(){
		$(this).animate({top:-winHeight,bottom:winHeight},-50000000,function(){
			$(".pop_title1").fadeIn();
		});
	}); */

	//좌측 메뉴 버튼을 누르면 리스트 보여주기
	$(".whole_list_header>a").click(function(){
		$(".whole_list").fadeOut();
	})

	// 타이틀 클릭 시 사라지게 함
	$(".pop_title").click(function(){
		$(this).fadeOut();
	});

	// 분배 타이틀만 클릭 시 다음화면 적용
	$(".pop_title1").click(function(){
		$(this).fadeOut();
		/* linkBtn(0); */
	});
	$(".pop_title11").click(function(){
		$(this).fadeOut();
		/* linkBtn(11);*/
	});
	$(".pop_title22").click(function(){
		$(this).fadeOut();
		/* linkBtn(22);*/
	});
	$(".pop_title67").click(function(){
		$(this).fadeOut();
		/* linkBtn(67); */
	});

	$(".mv1_btn").click(function(){
		$("#video .movie").hide();
		$("#video .mv1").show();
	});
	$(".mv2_btn").click(function(){
		$("#video .movie").hide();
		$("#video .mv2").show();
	});
	$(".mv3_btn").click(function(){
		$("#video .movie").hide();
		$("#video .mv3").show();
	});
	$("#frame>div>img").click(function(){
		if(!$('.current a').is(':animated')){
			return blink();
		}
	});
	$(".prev_btn").click(function(){
		timeTrue = true;
		checkMenu();
		console.log("currentPage : " + currentPage);
		if(currentPage > 1){

			// 페이지 애니메이션 체크
			if(prevAnimatedPage.includes(currentPage)) {
				showPrevPageAnimation();
				return;
			}

			if(currentPage == 1){
				$(this).currentPage == 1;
				/*$("#nav_text").text(currentPage);
				$("#frame>div").removeClass("current");
				$("#frame>div").eq(currentPage).addClass("current");
				$("#frame>div").css({right:0,opacity:1}); */
				$(".whole_list2").fadeIn();
				return page_blink();
			}else if(currentPage == 2){
				currentPage--;
				$("#nav_text").text(currentPage);
				$("#frame>div").removeClass("current");
				$("#frame>div").eq(currentPage-1).addClass("current");
				$("#frame>div").css({right:0,opacity:1});
				$(".pop_title1").fadeIn();
				return page_blink();
			}else if(currentPage == 13){
				currentPage--;
				$("#nav_text").text(currentPage);
				$("#frame>div").removeClass("current");
				$("#frame>div").eq(currentPage-1).addClass("current");
				$("#frame>div").css({right:0,opacity:1});
				$(".pop_title11").fadeIn(); 
				return page_blink();
			}else if(currentPage == 13){
				currentPage--;
				$("#nav_text").text(currentPage);
				$("#frame>div").removeClass("current");
				$("#frame>div").eq(currentPage-1).addClass("current");
				$("#frame>div").css({right:0,opacity:1});
				var graphWidth = $("#graph_wrap").width();
				$("#graph1_img").css({width:graphWidth});
				$("#graph2_img").css({width:graphWidth});
				$(".graph1, .graph2").stop(false, false).css({width:0});

				return page_blink();
			}else if(currentPage == 14){
				currentPage=12;
				$("#nav_text").text(currentPage);
				$("#frame>.current").animate({left:"100%",opacity:0},function(){
					$("#frame>div").removeClass("current");
					$("#frame>div").eq(currentPage-1).css({right:"100%",opacity:0});
					$("#frame>div").eq(currentPage-1).addClass("current");
					$("#frame>.current").animate({right:0,opacity:1});
					$(".graph1, .graph2").stop(false, false).css({width:0});
					var graphWidth = $("#graph_wrap").width();
					$("#graph1_img").css({width:graphWidth});
					$("#graph2_img").css({width:graphWidth});
					return page_blink();
				});
			}else if(currentPage == 24){
				currentPage--;
				$("#nav_text").text(currentPage);
				$("#frame>div").removeClass("current");
				$("#frame>div").eq(currentPage-1).addClass("current");
				$("#frame>div").css({right:0,opacity:1});
				$(".pop_title22").fadeIn();
				return page_blink();
			}else if(currentPage == 69){
				currentPage--;
				$("#nav_text").text(currentPage);
				$("#frame>div").removeClass("current");
				$("#frame>div").eq(currentPage-1).addClass("current");
				$("#frame>div").css({right:0,opacity:1});
				$(".pop_title67").fadeIn();
				return page_blink();
			}else{
				currentPage--;
				$("#nav_text").text(currentPage);
				$("#frame>div").removeClass("current");
				$("#frame>div").eq(currentPage-1).addClass("current");
				$("#frame>div").css({right:0,opacity:1});
				return page_blink();
			}
		}else{
			return false;
		}
	});
	$(".next_btn").click(function(){
		timeTrue = true;
		checkMenu();
		console.log("currentPage : " + currentPage);

		// 페이지 애니메이션 체크
		if(nextAnimatedPage.includes(currentPage)) {
			showNextPageAnimation();
			return;
		}

		if(currentPage < lastPage){
			if(currentPage == 1){
				currentPage++;
				$("#nav_text").text(currentPage);
				$("#frame>div").removeClass("current");
				$("#frame>div").eq(currentPage-1).addClass("current");
				$("#frame>div").css({left:0,opacity:1});
				/*(".pop_title1").fadeIn();*/
				return page_blink();
			}else if(currentPage == 11){ //+5
				currentPage++;
				$("#nav_text").text(currentPage);
				$("#frame>div").removeClass("current");
				$("#frame>div").eq(currentPage-1).addClass("current");
				$("#frame>div").css({left:0,opacity:1});
				/* $(".pop_title6").fadeIn(); */
				$(".pop_title11").fadeIn();
				return page_blink();
			}else if(currentPage == 12){
				currentPage++;
				$("#nav_text").text(currentPage);
				$("#frame>div").removeClass("current");
				$("#frame>div").eq(currentPage-1).addClass("current");
				$("#frame>div").css({left:0,opacity:1});
				var graphWidth = $("#graph_wrap").width();
				$("#graph1_img").css({width:graphWidth});
				$("#graph2_img").css({width:graphWidth});
				$(".graph1").animate({width:"100%"},3000,"swing",function(){$(".graph2").animate({width:"100%"},3000,"swing")});
				return page_blink();

			}else if(currentPage == 13){
				currentPage++;
				$("#nav_text").text(currentPage);
				$("#frame>.current").animate({right:"100%",opacity:0},function(){
					$("#frame>div").removeClass("current");
					$("#frame>div").eq(currentPage-1).css({left:"100%",opacity:0});
					$("#frame>div").eq(currentPage-1).addClass("current");
					$("#frame>.current").animate({left:0,opacity:1});
					var graphWidth = $("#graph_wrap").width();
					$("#graph1_img").css({width:graphWidth});
					$("#graph2_img").css({width:graphWidth});
					$(".graph1, .graph2").stop(false, false).css({width:0});
					return page_blink();
				});
			}else if(currentPage == 22){ // +7
				currentPage++;
				/* $(".pop_title15").fadeIn(); */
				$(".pop_title22").fadeIn();
				$("#nav_text").text(currentPage);
				$("#frame>div").removeClass("current");
				$("#frame>div").eq(currentPage-1).addClass("current");
				$("#frame>div").css({left:0,opacity:1});
				return page_blink();
			// else if(currentPage == 31){
			// 	currentPage += 2;
			// 	$("#nav_text").text(currentPage);
			// 	$("#frame>div").removeClass("current");
			// 	$("#frame>div").eq(currentPage-1).addClass("current");
			// 	$("#frame>div").css({left:0,opacity:1});
			// 	return page_blink();
			// }
			// else if(currentPage == 38){
			// 	currentPage = 50;
			// 	$("#nav_text").text(currentPage);
			// 	$("#frame>div").removeClass("current");
			// 	$("#frame>div").eq(currentPage-1).addClass("current");
			// 	$("#frame>div").css({left:0,opacity:1});
			// 	return page_blink();
			// }
			/* else if(currentPage == 53){ */

			/* else if(currentPage == 68){
				currentPage++;
				$(".pop_title68").fadeIn();
				$("#nav_text").text(currentPage);
				$("#frame>.current").animate({right:"100%",opacity:0},function(){
					$("#frame>div").removeClass("current");
					$("#frame>div").eq(currentPage-1).css({left:"100%",opacity:0});
					$("#frame>div").eq(currentPage-1).addClass("current");
					$("#frame>.current").animate({left:0,opacity:1});
					return page_blink();
				});
			} */
			else if(currentPage == 67){
				currentPage++;
				$(".pop_title67").fadeIn();
				$("#nav_text").text(currentPage);
				$("#frame>div").removeClass("current");
				$("#frame>div").eq(currentPage-1).addClass("current");
				$("#frame>div").css({left:0,opacity:1});
				return page_blink();
			}else{
				currentPage++;
				$("#nav_text").text(currentPage);
				$("#frame>div").removeClass("current");
				$("#frame>div").eq(currentPage-1).addClass("current");
				$("#frame>div").css({left:0,opacity:1});
				return page_blink();
			}
		}else{

			$("#end").show();
			return false;
		}
	});

	$(".prev_btn_end").click(function() {
		$("#end").hide();
		return false;
	});

	$("nav .btn1").click(function(){
		if(!$(this).hasClass("opened")){
			$(this).addClass("opened")
			$(this).animate({
				left:500
			});
			$("nav ul").animate({
				left:0
			});
		}else{
			$(this).removeClass("opened")
			$(this).animate({
				left:0
			});
			$("nav ul").animate({
				/* left:-250 */
				left:-600
			});
		}
	})
	$(".btn_video").click(function(){
		$("#video").fadeIn();
	})
	$(".img1 .zoom").click(function(){
		if($(this).hasClass("extended")){
			$(this).removeClass("extended");
			$(this).next(".em_box").fadeOut(function(){$(".img1 img").animate({width:"100%",marginLeft:0,marginTop:0},function(){
				$(".current .zoom_marker").show();
			// 확대에서 돌아올때 타이틀 보여달라는 요청
			$(".pop_title1").fadeIn();
			});})
		}else{
			$(this).addClass("extended");
			$(".current .zoom_marker").hide();	$(this).prev("img").animate({width:"250%",marginLeft:"-35%",marginTop:"0%"},function(){$(".img1 .em_box").fadeIn();})
		}
	});
	$(".img3 .zoom").click(function(){
		if($(this).hasClass("extended")){
			$(this).removeClass("extended")
			$(".img3 .em_box").hide();
			$(this).prev("img").animate({width:"100%",marginLeft:0,marginTop:0},function(){
				$(".current .zoom_marker").show();
			});
		}else{
			$(this).addClass("extended")
			$(this).prev("img").animate({width:"250%",marginLeft:"-20%",marginTop:"-10%"})
			$(".current .zoom_marker").hide();
			$(".img3 .em_box").fadeIn();
		}
	});

	$(".beforehand_1 .zoom").click(function(){
		if($(this).hasClass("extended")){
			$(this).removeClass("extended")
			$(".beforehand_1 .em_box").hide();
			$(this).prev("img").animate({width:"100%",marginLeft:0,marginTop:0},function(){
				$(".current .zoom_marker").show();
			});
		}else{
			$(this).addClass("extended")
			$(this).prev("img").animate({width:"250%",marginLeft: "-150%",marginTop:"-30%"})
			$(".current .zoom_marker").hide();
			$(".beforehand_1 .em_box").fadeIn();
		}
	});
	$(".mistake_1 .zoom").click(function(){
		if($(this).hasClass("extended")){
			$(this).removeClass("extended")
			$(".mistake_1 .em_box").hide();
			$(this).prev("img").animate({width:"100%",marginLeft:0,marginTop:0},function(){
				$(".current .zoom_marker").show();
			});
		}else{
			$(this).addClass("extended")
			$(".current .zoom_marker").hide();
			$(this).prev("img").animate({width:"250%",marginLeft: "-150%",marginTop:"-30%"}, function() {
				$(".mistake_1 .em_box").fadeIn();
			})
			// $(".mistake_1 .em_box").css({opacity: 0});
		}
	});

	$(".img9 .zoom").click(function(){
		if($(this).hasClass("extended")){
			$(this).removeClass("extended")
			$(this).prev("img").animate({width:"100%",marginLeft:0,marginTop:0},function(){
				$(".current .zoom_marker").show();
			});
		}else{
			$(this).addClass("extended")
			$(this).prev("img").animate({width:"200%",marginLeft:"-60%",marginTop:"0%"})
			$(".current .zoom_marker").hide();
		}
	});
	$(".zoom11 .zoom").click(function(){
		var zoomCurrent = $(this).parents().children("img");
		var zoomObj = $(this).offset();
		var zoomTop = zoomObj.top;
		var zoomThis = $(this)

		if($(this).hasClass("zoom1")){
			if($(zoomCurrent).hasClass("zoom")){
				$(zoomCurrent).animate({left:0,width:"100%",top:0},function(){
					$(".current .zoom_marker").show();
				});
				$(zoomCurrent).removeClass("zoom")
				$(zoomThis).removeClass("extended");
			}else{
				$(zoomCurrent).animate({left:"-50%",width:"200%",top:-zoomTop*1.2});
				$(zoomCurrent).addClass("zoom")
				$(zoomThis).addClass("extended");
				$(".current .zoom_marker").hide();
			}
		}else if($(this).hasClass("zoom2")){
			if($(zoomCurrent).hasClass("zoom")){
				$(zoomCurrent).animate({left:0,width:"100%",top:0},function(){
					$(".current .zoom_marker").show();
				});
				$(zoomCurrent).removeClass("zoom")
				$(zoomThis).removeClass("extended");
			}else{
				$(zoomCurrent).animate({left:"-50%",width:"200%",top:-zoomTop*1.8});
				$(zoomCurrent).addClass("zoom")
				$(zoomThis).addClass("extended");
				$(".current .zoom_marker").hide();
			}
		}else{
			if($(zoomCurrent).hasClass("zoom")){
				$(zoomCurrent).animate({left:0,width:"100%",top:0},function(){
					$(".current .zoom_marker").show();
				});
				$(zoomCurrent).removeClass("zoom")
				$(zoomThis).removeClass("extended");
			}else{
				$(zoomCurrent).animate({left:"-50%",width:"200%",top:-zoomTop*2.5});
				$(zoomCurrent).addClass("zoom")
				$(zoomThis).addClass("extended");
				$(".current .zoom_marker").hide();
			}
		}
	});
	$(".img12 .zoom").click(function(){
		if($(this).hasClass("extended")){
			$(this).removeClass("extended")
			$(this).prev("img").animate({width:"100%",marginLeft:0,marginTop:0},function(){
				$(".current .zoom_marker").show();
			});
		}else{
			$(this).addClass("extended")
			$(this).prev("img").animate({width:"200%",marginLeft:"-80%",marginTop:"-10%"})
			$(".current .zoom_marker").hide();
		}
	});
	$(".img13 .zoom").click(function(){
		if($(this).hasClass("extended")){
			$(this).removeClass("extended")
			$(".img13 .em_box").hide();
			$(this).prev("img").animate({width:"100%",marginLeft:0,marginTop:0},function(){
				$(".current .zoom_marker").show();
			});
		}else{
			$(this).addClass("extended")
			$(this).prev("img").animate({width:"250%",marginLeft:"-30%",marginTop:"-60%"})
			$(".current .zoom_marker").hide();
			$(".img13 .em_box").fadeIn();
		}
	});
	$(".img13 .pop").click(function(){
		$(".img13 .zoom").removeClass("extended");
		$(".img13 .zoom").prev("img").animate({width:"100%",marginLeft:0,marginTop:0},function(){
			$(".img13 .pop_screen").show();
		});
	});
	$(".img14 .zoom").click(function(){
		if($(this).hasClass("extended")){
			$(this).removeClass("extended")
			$(this).prev("img").animate({width:"100%",marginLeft:0,marginTop:0},function(){
				$(".current .zoom_marker").show();
			});
		}else{
			$(this).addClass("extended")
			$(this).prev("img").animate({width:"200%",marginLeft:"-70%",marginTop:"-10%"})
			$(".current .zoom_marker").hide();
		}
	});
	$(".img15 .zoom").click(function(){
		if($(this).hasClass("extended")){
			$(this).removeClass("extended")
			$(this).prev("img").animate({width:"100%",marginLeft:0,marginTop:0},function(){
				$(".current .zoom_marker").show();
			});
		}else{
			$(this).addClass("extended")
			$(this).prev("img").animate({width:"250%",marginLeft:"-90%",marginTop:"-20%"})
			$(".current .zoom_marker").hide();
		}
	});
	/* $(".zoom_link").click(function(){
		$(".img16 .zoom_link").fadeOut();
		$(".img16 .zoom_link img").fadeOut();
	})
	$(".img16 .zoom1").click(function(){
		$(".img16 .zoom_link").fadeIn();
		$(".img16 .zoom_screen1").show();
	});
	$(".img16 .zoom2").click(function(){
		$(".img16 .zoom_link").fadeIn();
		$(".img16 .zoom_screen2").show();
	});
	$(".img16 .zoom3").click(function(){
		$(".img16 .zoom_link").fadeIn();
		$(".img16 .zoom_screen3").show();
	});
	$(".img16 .zoom4").click(function(){
		$(".img16 .zoom_link").fadeIn();
		$(".img16 .zoom_screen4").show();
	}); */
	
	$(".img16 .zoom1").click(function(){
		if($(this).hasClass("extended")){
			$(this).removeClass("extended")
			$(this).prev("img").animate({width:"100%",marginLeft:0,marginTop:0},function(){
				$(".current .zoom_marker").show();
			});
		}else{
			$(this).addClass("extended")
			$(this).prev("img").animate({width:"300%",marginLeft: "-30%",marginTop:"-15%"})
			$(".current .zoom_marker").hide();
		}
	});
	$(".img16 .zoom2").click(function(){
		if($(this).hasClass("extended")){
			$(this).removeClass("extended")
			$(this).prev().prev("img").animate({width:"100%",marginLeft:0,marginTop:0},function(){
				$(".current .zoom_marker").show();
			});
		}else{
			$(this).addClass("extended")
			$(this).prev().prev("img").animate({width:"180%",marginLeft: "-10%",marginTop:"-33%"})
			$(".current .zoom_marker").hide();
		}
	});
	$(".img16 .zoom3").click(function(){
		if($(this).hasClass("extended")){
			$(this).removeClass("extended")
			$(this).prev().prev().prev("img").animate({width:"100%",marginLeft:0,marginTop:0},function(){
				$(".current .zoom_marker").show();
			});
		}else{
			$(this).addClass("extended")
			$(this).prev().prev().prev("img").animate({width:"200%",marginLeft: "-70%",marginTop:"-15%"})
			$(".current .zoom_marker").hide();
		}
	});
	$(".img16 .zoom4").click(function(){
		if($(this).hasClass("extended")){
			$(this).removeClass("extended")
			$(this).prev().prev().prev().prev("img").animate({width:"100%",marginLeft:0,marginTop:0},function(){
				$(".current .zoom_marker").show();
			});
		}else{
			$(this).addClass("extended")
			$(this).prev().prev().prev().prev("img").animate({width:"150%",marginLeft: "-41%",marginTop:"-30%"})
			$(".current .zoom_marker").hide();
		}
	});


	$(".img17 .zoom").click(function(){
		if($(this).hasClass("extended")){
			$(this).removeClass("extended")
			$(".img17 .em_box").hide();
			$(this).prev("img").animate({width:"100%",marginLeft:0,marginTop:0},function(){
				$(".current .zoom_marker").show();
				$(".img17 .em_box").hide();
			});
		}else{
			$(this).addClass("extended")
			$(".current .zoom_marker").hide();
			$(this).prev("img").animate({width:"150%",marginLeft: "-30%",marginTop:"-25%"}, function(){
				$(".img17 .em_box").fadeIn();
			})
		}
	});

	$(".img18 .zoom").click(function(){
		if($(this).hasClass("extended")){
			$(this).removeClass("extended")
			$(this).prev("img").animate({width:"100%",marginLeft:0,marginTop:0});
		}else{
			$(this).addClass("extended")
			$(this).prev("img").animate({width:"250%",marginLeft:"0%",marginTop:"-3%"})
			$(".current .zoom_marker").hide();
		}
	});
	$(".img23 .zoom").click(function(){
		if($(this).hasClass("extended")){
			$(this).removeClass("extended")
			$(this).prev("img").animate({width:"100%",marginLeft:0,marginTop:0},function(){
				$(".current .zoom_marker").show();
			});
		}else{
			$(this).addClass("extended")
			$(this).prev("img").animate({width:"250%",marginLeft:"-60%",marginTop:"-60%"})
			$(".current .zoom_marker").hide();
		}
	});
	$(".img25 .zoom").click(function(){
		if($(this).hasClass("extended")){
			$(this).removeClass("extended")
			$(this).prev("img").animate({width:"100%",marginLeft:0,marginTop:0},function(){
				$(".current .zoom_marker").show();
			});
		}else{
			$(this).addClass("extended")
			$(this).prev("img").animate({width:"250%",marginLeft:"-25%",marginTop:"0"})
			$(".current .zoom_marker").hide();
		}
	});
	$(".img26 .zoom1").click(function(){
		$(".img26 .zoom_link").fadeIn();
		$(".img26 .zoom_screen1").show();
		setTimeout(function(){$(".img26 .em_box1,.img26 .em_box2,.img26 .em_box3").animate({opacity:1},500);},500);
	});
	$(".img26 .zoom_link_btn1").click(function(){
		$(".img26 .zoom_link").fadeOut();
		$(".img26 .zoom_link img").fadeOut();
		$(".img26 .zoom16 .zoom1").removeClass("extended")
		$(".img26 .em_box").css({opacity:0});
		return linkBtn(53);
	});
	$(".img26 .zoom_link_btn2").click(function(){
		$(".img26 .zoom_link").fadeOut();
		$(".img26 .zoom_link img").fadeOut();
		$(".img26 .em_box").css({opacity:0});
		$(".img26 .zoom16 .zoom1").removeClass("extended")
		return linkBtn(56);
	});
	/* $(".img26 .zoom_link_btn3").click(function(){
		$(".img26 .zoom_link").fadeOut();
		$(".img26 .zoom_link img").fadeOut();
		$(".img26 .em_box").css({opacity:0});
		$(".img26 .zoom16 .zoom1").removeClass("extended")
		return linkBtn(48);
	}); */
	$(".img26 .zoom_link_out").click(function(){
		$(".img26 .zoom16 .zoom1").removeClass("extended")
		$(".img26 .zoom_link").fadeOut();
		$(".img26 .zoom_link img").fadeOut();
		$(".img26 .em_box").css({opacity:0});
		$(".current .zoom_marker").show();
	});
	$(".img26 .zoom").click(function(){
		if($(this).hasClass("extended")){
			$(this).removeClass("extended")
			$(this).prev("img").animate({width:"100%",marginLeft:0,marginTop:0},function(){
				$(".current .zoom_marker").show();
			});
		}else{
			$(this).addClass("extended")
			$(this).prev("img").animate({width:"200%",marginLeft:"-63%",marginTop:"-50%"})
			$(".current .zoom_marker").hide();
		}
	});

	$(".img26-2 .zoom1").click(function(){
		$(".img26-2 .zoom_link").fadeIn();
		$(".img26-2 .zoom_screen1").show();
		setTimeout(function(){$(".img26-2 .em_box1,.img26-2 .em_box2,.img26-2 .em_box3").animate({opacity:1},500);},500);
	});
	$(".img26-2 .zoom_link_btn3").click(function(){
		$(".img26-2 .zoom_link").fadeOut();
		$(".img26-2 .zoom_link img").fadeOut();
		$(".img26-2 .em_box").css({opacity:0});
		$(".img26-2 .zoom16 .zoom1").removeClass("extended")
		return linkBtn(47);
	});
	$(".img26-2 .zoom_link_out").click(function(){
		$(".img26-2 .zoom16 .zoom1").removeClass("extended")
		$(".img26-2 .zoom_link").fadeOut();
		$(".img26-2 .zoom_link img").fadeOut();
		$(".img26-2 .em_box").css({opacity:0});
		$(".current .zoom_marker").show();
	});
	$(".img26-2 .zoom").click(function(){
		if($(this).hasClass("extended")){
			$(this).removeClass("extended")
			$(this).prev("img").animate({width:"100%",marginLeft:0,marginTop:0},function(){
				$(".current .zoom_marker").show();
			});
		}else{
			$(this).addClass("extended")
			$(this).prev("img").animate({width:"200%",marginLeft:"-63%",marginTop:"-50%"})
			$(".current .zoom_marker").hide();
		}
	});

	$(".img28 .zoom").click(function(){
		if($(this).hasClass("extended")){
			$(this).removeClass("extended")
			$(this).prev("img").animate({width:"100%",marginLeft:0,marginTop:0},function(){
				$(".current .zoom_marker").show();
			});
		}else{
			$(this).addClass("extended")
			$(this).prev("img").animate({width:"200%",marginLeft:"-22%",marginTop:"-55%"})
			$(".current .zoom_marker").hide();
		}
	});
	$(".img29 .zoom").click(function(){
		if($(this).hasClass("extended")){
			$(this).removeClass("extended")
			$(this).prev("img").animate({width:"100%",marginLeft:0,marginTop:0},function(){
				$(".current .zoom_marker").show();
			});
		}else{
			$(this).addClass("extended")
			$(this).prev("img").animate({width:"150%",marginLeft:"-36%",marginTop:"-20%"})
			$(".current .zoom_marker").hide();
		}
	});
	$(".img29 .next_zoom").click(function(){
		if($(this).hasClass("extended")){
			$(this).removeClass("extended")
			$(this).prev("img").animate({width:"100%",marginLeft:0,marginTop:0},function(){
				$(".current .zoom_marker").show();
			});
		}else{
			$(this).addClass("extended")
			$(this).prev("img").animate({width:"150%",marginLeft:"-22%",marginTop:"-20%"})
		}
	});
	$(".img33 .zoom").click(function(){
		if($(this).hasClass("extended")){
			$(this).removeClass("extended")
			$(this).prev("img").animate({width:"100%",marginLeft:0,marginTop:0},function(){
				$(".current .zoom_marker").show();
			});
		}else{
			$(this).addClass("extended")
			/* $(this).prev("img").animate({width:"250%",marginLeft:"-70%",marginTop:"-70%"}) */
			$(this).prev("img").animate({width:"230%",marginLeft:"-60%",marginTop:"-70%"})
			$(".current .zoom_marker").hide();
		}
	});
	$(".img34 .zoom").click(function(){
		if($(this).hasClass("extended")){
			$(this).removeClass("extended")
			$(this).prev("img").animate({width:"100%",marginLeft:0,marginTop:0},function(){
				$(".current .zoom_marker").show();
			});
		}else{
			$(this).addClass("extended")
			$(this).prev("img").animate({width:"250%",marginLeft:"-60%",marginTop:"-40%"})
			$(".current .zoom_marker").hide();
		}
	});
	$(".img35 .zoom").click(function(){
		if($(this).hasClass("extended")){
			console.log("A");
			console.log($(this));
			$(this).removeClass("extended")
			$(this).prev().prev("img").animate({width:"100%",marginLeft:0,marginTop:0},function(){
				$(".current .zoom_marker").show();
			});
			$(this).next(".em_box").hide();
		}else{
			console.log("B");
			console.log($(this).prev("img"));
			$(this).addClass("extended")
			$(this).prev().prev("img").animate({width:"250%",marginLeft:"-40%",marginTop:"-35%"},function(){$(".img35 .em_box").fadeIn();})
			$(".current .zoom_marker").hide();
		}
	});
	$(".img37 .zoom1").click(function(){
		if($(this).hasClass("extended")){
			$(this).removeClass("extended")
			$(this).prev("img").animate({width:"100%",marginLeft:0,marginTop:0},function(){
				$(".current .zoom_marker").show();
			});
		}else{
			$(this).addClass("extended")
			$(this).prev("img").animate({width:"250%",marginLeft:"-60%",marginTop:"-50%"})
			$(".current .zoom_marker").hide();
		}
	});
	$(".img37 .zoom2").click(function(){
		if($(this).hasClass("extended")){
			$(this).removeClass("extended")
			$(this).prev().prev("img").animate({width:"100%",marginLeft:0,marginTop:0},function(){
				$(".current .zoom_marker").show();
			});
		}else{
			$(this).addClass("extended")
			$(this).prev().prev("img").animate({width:"250%",marginLeft:"-150%",marginTop:"-50%"})
		}
			$(".current .zoom_marker").hide();
	});
	$(".img38 .zoom").click(function(){
		if($(this).hasClass("extended")){
			$(this).removeClass("extended");
			$(this).prev("img").animate({width:"100%",marginLeft:0,marginTop:0},function(){
				$(".current .zoom_marker").show();
			});

		}else{
			$(this).addClass("extended");
			$(this).prev("img").animate({width:"200%",marginLeft:"-100%",marginTop:"-12%"});
			$(".current .zoom_marker").hide();
		}
	});

	$(".img39 .zoom").click(function(){
		if($(this).hasClass("extended")){
			$(this).removeClass("extended");
			$(this).prev("img").animate({width:"100%",marginLeft:0,marginTop:0},function(){
				$(".current .zoom_marker").show();
			});

		}else{
			$(this).addClass("extended");
			$(this).prev("img").animate({width:"280%",marginLeft:"-130%",marginTop:"0%"});
			$(".current .zoom_marker").hide();
		}
	});

	// 심사시연 어플 내용 추가

	$(".img_new1 .zoom").click(function(){
		if($(this).hasClass("extended")){
			$(this).removeClass("extended")
			$(this).prev("img").animate({width:"100%",marginLeft:0,marginTop:0},function(){
				$(".current .zoom_marker").show();
			});
		}else{
			$(this).addClass("extended")
			$(this).prev("img").animate({width:"220%",marginLeft:"-60%",marginTop:"-55%"})
			$(".current .zoom_marker").hide();
		}
	});

	$(".img_new2 .zoom").click(function(){
		if($(this).hasClass("extended")){
			$(this).removeClass("extended")
			$(this).prev("img").animate({width:"100%",marginLeft:0,marginTop:0},function(){
				$(".current .zoom_marker").show();
			});
		}else{
			$(this).addClass("extended")
			$(this).prev("img").animate({width:"180%",marginLeft:"-43%",marginTop:"-19%"})
			$(".current .zoom_marker").hide();
		}
	});

	$(".img_new3 .zoom").click(function(){
		if($(this).hasClass("extended")){
			$(this).removeClass("extended")
			$(this).prev("img").animate({width:"100%",marginLeft:0,marginTop:0},function(){
				$(".current .zoom_marker").show();
			});
		}else{
			$(this).addClass("extended")
			$(this).prev("img").animate({width:"250%",marginLeft:"-150%",marginTop:"-20%"})
			$(".current .zoom_marker").hide();
		}
	});

	$(".img_new5 .zoom").click(function(){
		if($(this).hasClass("extended")){
			$(this).removeClass("extended")
			$(this).prev("img").animate({width:"100%",marginLeft:0,marginTop:0},function(){
				$(".current .zoom_marker").show();
			});
		}else{
			$(this).addClass("extended")
			$(this).prev("img").animate({width:"180%",marginLeft:"-24%",marginTop:"-15%"})
			$(".current .zoom_marker").hide();
		}
	});

	$(".img_new7 .zoom").click(function(){
		if($(this).hasClass("extended")){
			$(this).removeClass("extended")
			$(this).prev("img").animate({width:"100%",marginLeft:0,marginTop:0},function(){
				$(".current .zoom_marker").show();
			});
		}else{
			$(this).addClass("extended")
			$(this).prev("img").animate({width:"250%",marginLeft:"-150%",marginTop:"-70%"})
			$(".current .zoom_marker").hide();
		}
	});


	// ================


	$(".img25 .pop").click(function(){
		$(this).next().fadeIn();
		setTimeout(function(){$(".pop_screen .line").animate({width:"40.5%"},1000);},1000);
		$("body").css({background:"#fff"});
	});
	$(".img18 .pop,.img28 .pop, .img18-1 .pop").click(function(){
		$(this).next().fadeIn();
	});
	$(".pop_screen").click(function(){
		$(this).fadeOut();
		$("body").css({background:"#000"});
		$(".pop_screen .line").css({width:0});
	});

	$(".em_box").click(function(){
		$(this).animate({opacity:1},"slow");
	});
	$(".end").click(function(){
		$("#end").show();
	});

	$("#end>button").click(function(){
		$("#end").fadeOut();
		return linkBtn(0);
	});
	$("#video button").click(function(){
		$("#video").fadeOut();
	});

	$(".img26_5 button").click(function(){
		/* $(".img26_5").fadeOut(); */
		return linkBtn(43);
	});

	$(".img29 .inside").click(function(){
		$(".img29 .next_img").show();
		$(".img29 .zoom_next").show();
		$(".img29 .zoom").hide();
	});
});

$(window).resize(function(e){
	screenWidth = wrapImg.clientWidth;
	screenWidth = wrapImg.clientHeight;
	winHeight = $(window).height();
	imgHeight = $("#frame").height();
	graphWidth = $("#graph_wrap").width();
	$("#graph1_img").css({width:graphWidth});
	$("#graph2_img").css({width:graphWidth});
	$(".img11>div").css({height:imgHeight});
	$(".intro").click(function(){
		$(this).animate({top:-winHeight,bottom:winHeight},500);
	});
});

function linkBtn(num){
	checkMenu();
	currentPage = num+1;
	$("#nav_text").text(num+1);
	$("#frame>div").removeClass("current");
	$("#frame>div").eq(num).addClass("current");
	$(".current").css({right:0,left:0,opacity:1});
	return page_blink();
}
function navBtn(num){
	checkMenu();

	currentPage = num+1;
	$("#nav_text").text(currentPage);
	$("#frame>.current").animate({right:"100%",opacity:0},function(){
		$("#frame>div").removeClass("current");
		$("#frame>div").eq(currentPage-1).css({left:"100%",opacity:0});
		$("#frame>div").eq(currentPage-1).addClass("current");
		$("#frame>.current").animate({left:0,opacity:1});
		return page_blink();
	});
}

function blink(){
	
	$(".right_menu").hide();
	$(".right_menu2").hide();
    $(".top_nav_box").hide();
	$(".top_nav_box2").hide();
	$(".top_nav_box3").hide();
    $(".right_depth dd").hide();
    $(".link").hide();
    $(".link").css("opacity","1");
	$(".link4").hide();
    $(".link4").css("opacity","1");
    $(".current>a").fadeIn();
    $(".current>a").animate({opacity:0});
    $("nav .btn1").removeClass("opened")
    $("nav .btn1").animate({
        left:0
    });
    $("nav ul").animate({
        /* left:-250 */
		left:-600
    });

    setTimeout(function(){
        $(".right_menu").hide();
        $(".right_menu2").hide();
        $(".top_nav_box").hide();
		$(".top_nav_box2").hide();
		$(".top_nav_box3").hide();
        $(".right_depth dd").hide();
        $(".link").hide();
        $(".link").css("opacity","1");
		$(".link4").hide();
        $(".link4").css("opacity","1");
        $(".current>a").fadeIn();
        $(".current>a").animate({opacity:0});
        $("nav .btn1").removeClass("opened")
        $("nav .btn1").animate({
            left:0
        });
        $("nav ul").animate({
            /* left:-250 */
			left:-600
        });
    },1000);

    setTimeout(function(){
        $(".right_menu").hide();
        $(".right_menu2").hide();
        $(".top_nav_box").hide();
		$(".top_nav_box2").hide();
		$(".top_nav_box3").hide();
        $(".right_depth dd").hide();
        $(".link").hide();
        $(".link").css("opacity","1");
		$(".link4").hide();
        $(".link4").css("opacity","1");
        $(".current>a").fadeIn();
        $(".current>a").animate({opacity:0});
        $("nav .btn1").removeClass("opened")
        $("nav .btn1").animate({
            left:0
        });
        $("nav ul").animate({
            /* left:-250 */
			left:-600
        });
	},2000);
	
	timeTrue = false;
}


function page_blink(){
	count = 0;

	clearTimeout(blink_set);

	// 이전에 진행된 스크립트 초기화
	clearInterval(blink_count);

	blink_set = setTimeout(function(){
		if(timeTrue == true) {
			blink_count = setInterval(function() {
				count++;
				console.log("count : " + count);
				$(".right_menu").hide();
				$(".right_menu2").hide();
				$(".top_nav_box").hide();
				$(".top_nav_box2").hide();
				$(".top_nav_box3").hide();
				$(".right_depth dd").hide();
				$(".link").hide();
				$(".link").css("opacity","1");
				$(".link4").hide();
				$(".link4").css("opacity","1");
				$(".current>a").fadeIn();
				$(".current>a").animate({opacity:0});
				$("nav .btn1").removeClass("opened");
				$("nav .btn1").animate({
					left:0
				});
				$("nav ul").animate({
					/* left:-250 */
					left:-600
				});
				if(count == 3)
				{
					clearInterval(blink_count);
				}
			}, 1000);
		}
	},5000);
}

function rightMenu(){
	$(".right_menu").slideDown();
	$(".link").hide();
	setTimeout(function(){
		$(".link").css("opacity","1");
		$(".right_link>a").fadeIn();
		$(".right_link>a").animate({opacity:0});
	},1000);
}
function rightMenu2(){
	$(".right_menu2").slideDown();
	$(".link").hide();	
	setTimeout(function(){
		$(".link").css("opacity","1");
		$(".right_link>a").fadeIn();
		$(".right_link>a").animate({opacity:0});
	},1000);
}
function rightDepth(){
	$(".right_depth dd").slideDown();
	$(".depth_link a").fadeIn();
	$(".depth_link a").animate({opacity:0});
}
function topNav(){
	$(".top_nav_box").slideDown();
	$(".link").hide();
	$(".link").css("opacity","1");
	$(".top_link>a").fadeIn();
	$(".top_link>a").animate({opacity:0});
}
function topNav2(){
	$(".top_nav_box2").slideDown();
	$(".link").hide();
	$(".link").css("opacity","1");
	$(".top_link>a").fadeIn();
	$(".top_link>a").animate({opacity:0});
}
function topNav3(){
	$(".top_nav_box3").slideDown();
	$(".link").hide();
	$(".link").css("opacity","1");
	$(".top_link>a").fadeIn();
	$(".top_link>a").animate({opacity:0});
}

function openGraph(){
	currentPage++;
	$("#nav_text").text("14");
	$("#frame>div").removeClass("current");
	$("#frame>div").eq(13).addClass("current");
	$(".current").css({right:0,left:0,opacity:1});

	var graphWidth = $("#graph_wrap").width();
	$("#graph1_img").css({width:graphWidth});
	$("#graph2_img").css({width:graphWidth});
	$(".graph1").animate({width:"100%"},3000,"swing",function(){$(".graph2").animate({width:"100%"},3000,"swing")});

	return blink();
}

function closeGraph(){
	var graphWidth = $("#graph_wrap").width();
	$("#graph1_img").css({width:graphWidth});
	$("#graph2_img").css({width:graphWidth});
	$(".graph1, .graph2").stop(false, false).css({width:0});
	return linkBtn(14);
}

function go13AndShowTitle(){

	$(".pop_title6").fadeIn();
	return linkBtn(13);
}

function showPrevPageAnimation() {
	currentPage--;
	$("#nav_text").text(currentPage);
	$("#frame>.current").animate({left:"100%",opacity:0},function(){
		$("#frame>div").removeClass("current");
		$("#frame>div").eq(currentPage-1).css({right:"100%",opacity:0});
		$("#frame>div").eq(currentPage-1).addClass("current");
		$("#frame>.current").animate({right:0,opacity:1});
		return page_blink();
	});
}

function showNextPageAnimation() {
	currentPage++;
	$("#nav_text").text(currentPage);
	$("#frame>.current").animate({right:"100%",opacity:0},function(){
		$("#frame>div").removeClass("current");
		$("#frame>div").eq(currentPage-1).css({left:"100%",opacity:0});
		$("#frame>div").eq(currentPage-1).addClass("current");
		$("#frame>.current").animate({left:0,opacity:1});
		return page_blink();
	});
}

// function showShare2(){

// 	// 조정공유 화면 2번째 넘어갈때
// 	currentPage++;
// 	$("#nav_text").text(currentPage);
// 	$("#frame>div").removeClass("current");
// 	$("#frame>div").eq(currentPage-1).addClass("current");
// 	$("#frame>div").css({left:0,opacity:1});

// 	// 확대되지 않은 상태에서만 확대시킴
// 	if( !($(".img_new5 .zoom").hasClass("extended")) ){
// 		$(".img_new5 .zoom").click();
// 	}

// 	return blink();
// }

// 2개의 페이지의 이미지가 똑같으므로 이전으로 돌아갈때 마지막으로 들어갔던 페이지로 돌아감
function goPrevPage() {

	console.log(previousMenuPage);
	return linkBtn(previousMenuPage-1);

}

// 메뉴화면(img/026.jpg)이라면 이전페이지에 저장해둠
function checkMenu() {
		if(currentPage == 32 || currentPage == 35) {
			previousMenuPage = currentPage;
		}
}


/* $(document).ready(function(){
	$('#zoomIn14').zoom({ on:'toggle' });
	$('#zoomIn15').zoom({ on:'toggle' });
	$('map').imageMapResize();
}); */


// 텍스트 타이핑 효과
$(document).ready(function(){
	var typingBool = false; 
	var typingIdx=0; 
	var liIndex = 0;
	var liLength = $(".typing-txt>ul>li").length;

	var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
	typingTxt=typingTxt.split("");
	if(typingBool==false){
		typingBool=true; 
		var tyInt = setInterval(typing,100);
	} 
		
	function typing(){ 
		if(typingIdx<typingTxt.length){ 
		$(".typing").append(typingTxt[typingIdx]);
		typingIdx++; 
		} else{
		if(liIndex>=liLength-1){
			liIndex=0;
		}else{
			liIndex++; 
		}
			typingIdx=0;
			typingBool = false; 
			typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
		
			clearInterval(tyInt);
			setTimeout(function(){
				$(".typing").html('');
				tyInt = setInterval(typing,100);
			},1000);
		} 
	}
})

// 버튼 클릭 시 효과음
function sound() {
	var audio = document.getElementById('audio_play');
	if (audio.paused) {
		audio.play();
	} else {
		audio.pause();
		audio.currentTime = 0;
	}
}