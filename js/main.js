//Preloader
$(document).ready(function($) {  
    $('.preloader').delay(1800).fadeOut('slow',function(){
        $(this).remove();
    });
});