var windowHeight=$(window).height();
 
$(function(){
	
	$(".close_btn").click(function(){
		$(this).parent().parent().hide();			  
	})
	$(".a_1").click(function(){
		showDjcgBox();							   
	})
	$(".ndztBox .a_2").click(function(){
		showDjcgBox();							   
	})
	
	$(".a_1").click(function(){
		showDjcgBox();							   
	})
	
	$(".a_2").click(function(){
		showDjcgBox();							   
	})
	$(".a_3").click(function(){
		showDjcgBox();							   
	})
	$(".a_4").click(function(){
		showDjcgBox();							   
	})
	$(".a_5").click(function(){
		showDjcgBox();							   
	})
	$(".a_6").click(function(){
		showDjcgBox();							   
	})
	
	
	$(".syld_from ul li dd.d_3 .s_1 a").mouseover(function(){												   
		var s_i=$(this).index()+1;
		var this_parent=$(this).parent();
		this_parent.children("a").attr("class","");
		for(var i=0;i<s_i;i++){
			this_parent.children("a").eq(i).attr("class","click")
		}
		this_parent.parent().children(".s_2").html(s_i+"心");
	})
	$(".syld_from ul li dd.d_3 .s_1 a").mouseout(function(){
		var pTar=$(this).parent().attr("tar");
		var this_parent=$(this).parent();
		this_parent.children("a").attr("class","");	
		if(!pTar){
			this_parent.parent().children(".s_2").html("");
		}else{
			this_parent.parent().children(".s_2").html(pTar+"心");
			for(var i=0;i<pTar;i++){
				this_parent.children("a").eq(i).attr("class","click")
			}
		}
	})
	
	$(".syld_from ul li dd.d_3 .s_1 a").click(function(){
		var ci=$(this).index()+1;
		$(this).parent().attr("tar",ci)												   
	})
	
});

function showSyplqBox(){
	$("#syplqBox").show();
	var top=(windowHeight-68)/2
	$(".syplqBox .windows_box").css("top",top)
}

function showDjcgBox(){
	$(".windows").hide();
	$("#djcgBox").show();
	var top=(windowHeight-473)/2
	$("#djcgBox .windows_box").css("top",top)	
}

function showLoginBox(){
	$(".windows").hide();
	$("#loginBox").show();
	var top=(windowHeight-577)/2
	$("#loginBox .windows_box").css("top",top)		
}

function showchaBox(){
	$(".windows").hide();
	$("#chaBox").show();
	var top=(windowHeight-577)/2
	$("#chaBox .windows_box").css("top",top)		
}

function showahbBox(){
	$(".windows").hide();
	$("#ahbBox").show();
	var top=(windowHeight-577)/2
	$("#ahbBox .windows_box").css("top",top)		
}

function showchcBox(){
	$(".windows").hide();
	$("#chcBox").show();
	var top=(windowHeight-577)/2
	$("#chcBox .windows_box").css("top",top)		
}

function showdhdBox(){
	$(".windows").hide();
	$("#dhdBox").show();
	var top=(windowHeight-577)/2
	$("#dhdBox .windows_box").css("top",top)		
}

function showvdoBox(){
	$(".windows").hide();
	$("#vdoBox").show();
	var top=(windowHeight-177)/2
	$("#vdoBox .windows_box").css("top",top)		
}
function showromBox(){
	$(".windows").hide();
	$("#romBox").show();
	var top=(windowHeight-577)/2
	$("#romBox .windows_box").css("top",top)		
}


function showSyldBox(){
	$(".windows").hide();
	$("#syldBox").show();
	var top=(windowHeight-parseInt($("#syldBox .windows_box").height()))/2
	$("#syldBox .windows_box").css("top",top)		
}

function showTjcgBox(){
	$(".windows").hide();
	$("#tjcgBox").show();
	var top=(windowHeight-parseInt($("#tjcgBox .windows_box").height()))/2
	$("#tjcgBox .windows_box").css("top",top)			
}