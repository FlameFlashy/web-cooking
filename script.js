$(document).ready(function() {
    $('.header-burger').click(function(event) {
        $('.header-burger,.header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
})