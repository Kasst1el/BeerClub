$(function(){
	$("li").hover(function() {
		var x = parseInt($(this).css("width"))/2;
		console.log(x);
		$(this).find(" ul").css("left",-100+x);
		var y = $(this).find(" ul").css("left");
		console.log("left is: " + y);
	})
});