/**
 * Created by ko on 2016-07-15.
 */
$(document).ready(function () {
    var pageNo= 1;

    // webtoon
    $("#travel").on("click", function () {

        $("#honbap_content").html("");
        $("#youtube_content").html("");
        $("#recipe_content").html("");
        $("#game_content").html("");
        $("#parcelArea").css("display","none");
        $("#resultArea").html("");
        $("#prodInfo_content").css("display", "none");
        pageNo=1;
        $("#cvs_content").css("display", "none");
        common_module.moveYoutubeMenu();
        travel_module.travelTitle();
        travel_module.showTravel(1);

        $(window).unbind('scroll');

        $(window).scroll(function(){
            if (Math.ceil($(window).scrollTop()) == $(document).height() - $(window).height()) {
                pageNo +=1;
                travel_module.showTravel(pageNo);
                $(".loadingArea").html('<img src = "img/preloader.gif" style="width: 60px; height: 60px">');
            }
        });
        $("#portfolioArea").css("display", "none");
    });

});


