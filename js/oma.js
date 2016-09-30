
(function(){
	$("#otsikko1").click(function(){
		$("#teksti1").slideToggle("slow");
	});
	
	$("#otsikko2").click(function(){
		$("#teksti2").slideToggle("slow");
	});
	
	$("#otsikko3").click(function(){
		$("#teksti3").slideToggle("slow");
	});
	
})();

$('#lomake').hide();
	
$('#lomakenappi').on('click', function() {
	$('#lomake').toggle('slow');
});


setInterval(function(){
    var toggle = $(".text").hasClass("toggled");
	$(".text_1").animate({opacity: toggle ? 1 : 0});
	$(".text_2").animate({opacity: toggle ? 0 : 1});
	$(".text").toggleClass("toggled");
}, 5000);



