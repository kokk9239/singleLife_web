/**
 * Created by ko on 2016-07-15.
 */
$(document).ready(function () {

    var cvsName = "";

    var pageNo = 1;

    //편의점
    $("#prodInfo_content").css("display", "none");

    $("#prodInfo").on("click", function () {

        $("#honbap_content").html("");
        $("#travel_content").html("");
        $("#youtube_content").html("");
        $("#recipe_content").html("");
        $("#cvs_content").css("display", "none");

        $("#parcelArea").css("display","none");
        $("#resultArea").html("");

        $("#portfoliolist").html("");

        $(window).unbind('scroll');

        $("#prodInfo_content").css("display", "block");
        common_module.moveProdMenu();
        $("#coupangTab").click();
    });

    $("#coupangTab").on("click",function(){
        common_module.moveProdMenu();
        prodInfo_module.showCoupang(pageNo);
        $(window).unbind('scroll');

        $(window).scroll(function () {
            if (Math.ceil($(window).scrollTop()) == $(document).height() - $(window).height()) {
                pageNo += 1;
                prodInfo_module.showCoupang(pageNo);
                $(".loadingArea").html('<img src = "img/preloader.gif" style="width: 60px; height: 60px">');
            }
        });

    });
    $("#tmonTab").on("click", function () {
        common_module.moveProdMenu();
        prodInfo_module.showTmon(pageNo);
        $(window).unbind('scroll');

        $(window).scroll(function () {
            if (Math.ceil($(window).scrollTop()) == $(document).height() - $(window).height()) {
                pageNo += 1;
                prodInfo_module.showTmon(pageNo);
                $(".loadingArea").html('<img src = "img/preloader.gif" style="width: 60px; height: 60px">');
            }
        });
    });
    $("#auctionTab").on("click", function () {
        common_module.moveProdMenu();
        prodInfo_module.showAuction(pageNo);
        $(window).unbind('scroll');

        $(window).scroll(function () {
            if (Math.ceil($(window).scrollTop()) == $(document).height() - $(window).height()) {
                pageNo += 1;
                prodInfo_module.showAuction(pageNo);
                $(".loadingArea").html('<img src = "img/preloader.gif" style="width: 60px; height: 60px">');
            }
        });
    });

    $("#wmpTab").on("click", function () {
        common_module.moveProdMenu();
        prodInfo_module.showWmp(pageNo);
        $(window).unbind('scroll');

        $(window).scroll(function () {
            if (Math.ceil($(window).scrollTop()) == $(document).height() - $(window).height()) {
                pageNo += 1;
                prodInfo_module.showWmp(pageNo);
                $(".loadingArea").html('<img src = "img/preloader.gif" style="width: 60px; height: 60px">');
            }
        });
    });

});

$(document).on("mouseenter", "#giftPortfolio", function () {
    $(this).find('.rabel').stop().animate({bottom: 0}, 200, 'easeOutQuad');
     /*$(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');*/
    $(this).find("#giftprod").attr('style', 'display:block; height:200px; width:200px');
    $(this).find('#prod').attr('style', 'display:none;height:200px; width:200px');
    $(this).find('#prodName').attr('style','visibility:hidden;height:40px; width:100%');
    /*$(this).find('#prodName').attr('style','display:none;');*/
});

$(document).on("mouseleave", "#giftPortfolio", function () {
    $(this).find('.rabel').stop().animate({bottom: -40}, 200, 'easeInQuad');
     /*$(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');*/
    $(this).find("#giftprod").attr('style', 'display:none;height:200px; width:200px');
    $(this).find('#prod').attr('style', 'display:block;height:200px; width:200px');
    $(this).find('#prodName').attr('style','visibility:visible;height:40px; width:100%');
    /*$(this).find('#prodName').attr('style','display:block;');*/
});
