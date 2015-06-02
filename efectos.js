/*EFECTO DEL NAVBAR*/

$(window).scroll(function() {
	var menu = $(this).scrollTop();
	if ( menu > 350) {
		$(".navbar").addClass("scroll")
	} 
	else if (menu < 350) {
		$(".navbar").removeClass("scroll");
	}
});

/*EFECTO HOVER DEL CIRCULO*/

$(document).ready(function() {        
  $(".circulo-grande").hover(function(){
        $(this).fadeOut(1000);
    },
    	function(){
        $(this).fadeIn(1000);
    });        
});        


