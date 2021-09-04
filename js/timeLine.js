$(".step").click( function() {
 	$(this).addClass("active").prevAll().addClass("active");
 	$(this).nextAll().removeClass("active");
 });

 $(".step01").click( function() {
 	$("#line-progress").css("width", "3%");
 	$(".discovery").addClass("active").siblings().removeClass("active");
 });

 $(".step02").click( function() {
 	$("#line-progress").css("width", "25%");
 	$(".english").addClass("active").siblings().removeClass("active");
 });

 $(".step03").click( function() {
 	$("#line-progress").css("width", "50%");
 	$(".certificate").addClass("active").siblings().removeClass("active");
 });

 $(".step04").click( function() {
 	$("#line-progress").css("width", "75%");
 	$(".diploma").addClass("active").siblings().removeClass("active");
 });

 $(".step05").click( function() {
 	$("#line-progress").css("width", "100%");
 	$(".cpanel").addClass("active").siblings().removeClass("active");
 });