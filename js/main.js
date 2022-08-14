/*==================== CHANGE BANNER ====================*/
jQuery(document).ready(function($) {
	var mastheadheight = $('.ng-header').outerHeight();
	//console.log(mastheadheight);
	$(".ng-banner,.ng-main-section").css("margin-top" , mastheadheight);

	$(window).scroll(function(){
	    if ($(window).scrollTop() >= 10) {
	        $('.ng-header').addClass('ng-fixed-header');
			$('.ng-logo span').addClass('ng-fixed-header');
			$('.ng-logo').addClass('ng-fixed-header');
			$('.ng-social li a').addClass('ng-fixed-header');
			$('.ng-logo:hover').addClass('ng-fixed-header');
	    }
	    else {
	        $('.ng-header').removeClass('ng-fixed-header');
			$('.ng-logo span').removeClass('ng-fixed-header');
			$('.ng-logo').removeClass('ng-fixed-header');
			$('.ng-social li a').removeClass('ng-fixed-header');
			$('.ng-logo:hover').removeClass('ng-fixed-header');
	    }
	}).scroll();
});

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)
