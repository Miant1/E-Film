$(function(){
    $('.portfolio .filter li').on('click', function(){
        $('.portfolio li').removeClass('active');
        $(this).addClass('active');
    });
    $("#my-accordion").accordionjs();
});