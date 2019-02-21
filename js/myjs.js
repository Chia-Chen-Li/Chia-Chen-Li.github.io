//$(document).on('click','a',function(event){
//  event.preventDefault();//該方法將通知Web 瀏覽器不要執行與事件關聯的默認動作
//  var target=$(this).attr("href");
//  $("html,body").animate({
//    scrollTop: $(target).offset().top
//  },900);
//  
//});
$(function () {

    $(window).scroll(function () {
        //判斷滾輪的位置，高於500px，按鈕將顯示
        //                console.log($(window).scrollTop());
        if ($(window).scrollTop() > 500) {
            $("#top").fadeIn(500);
        } else {
            $("#top").fadeOut(500);
        }
    });

    $("#top").click(function () {

        $("html,body").animate({
            scrollTop: 0
        }, 900);

        return false;

    });
    $("#a1").click(function () {

        $("html,body").animate({
            scrollTop: $("#an1").offset().top
        }, 900);

        return false;

    });

    $("#a2").click(function () {

        $("html,body").animate({
            scrollTop: $("#an2").offset().top
        }, 900);

        return false;


    });
    $("#a3").click(function () {

        $("html,body").animate({
            scrollTop: $("#an3").offset().top
        }, 900);

        return false;

    });

    $("#a4").click(function () {

        $("html,body").animate({
            scrollTop: $("#an4").offset().top
        }, 900);

        return false;

    });

    $('#btn1').click(function () {
        $('#part1').slideDown(500);
    });

    $('#btn2').click(function () {
        $('#part1').slideUp(500);
    });

    $('#btn3').click(function () {
        $('#part2').slideDown(500);
    });

    $('#btn4').click(function () {
        $('#part2').slideUp(500);
    });

    $('#btn5').click(function () {
        $('#part3').slideDown(500);
    });

    $('#btn6').click(function () {
        $('#part3').slideUp(500);
    });

});
