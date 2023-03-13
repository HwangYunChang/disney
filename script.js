$(document).ready(function(){
    var rollHeader = 850;
    $(window).scroll(function(){
        var scroll = getCurrentScroll();
        if ( scroll >= rollHeader ) {
            $('header').addClass('roll');
            }
            else {
            $('header').removeClass('roll');
            }
    });
        function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
            }
});