$(document).ready(function() {
    $('.header-burger').click(function(event) {
        $('.header-burger,.header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.header_menu').click(function(){
        $('.header-burger,.header_menu').removeClass('active');
        $('body').removeClass('lock');
 });
})