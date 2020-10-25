$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});
$('#home').on('click',function(){
    $('body,html').animate({
        scrollTop: 0
    },800);
})
$('#about').on('click',function(){
    $('body,html').animate({
        scrollTop: $('#aboutus').offset().top
    },800);
})