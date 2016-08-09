/**
 * Created by ko on 2016-07-15.
 */
$(document).ready(function () {
    var pageNo= 1;

    // webtoon
    $("#recipe").on("click", function () {

        $("#travel_content").html("");
        $("#youtube_content").html("");
        $("#honbap_content").html("");
        $("#game_content").html("");
        $("#parcelArea").css("display","none");
        $("#resultArea").html("");
        $("#prodInfo_content").css("display", "none");
        pageNo=1;
        $("#cvs_content").css("display", "none");
        common_module.moveYoutubeMenu();
        recipe_module.recipeTitle();
        recipe_module.showRecipe(1);

        $(window).unbind('scroll');

        $(window).scroll(function(){
            if (Math.ceil($(window).scrollTop()) == $(document).height() - $(window).height()) {
                pageNo +=1;
                recipe_module.showRecipe(pageNo);
                $(".loadingArea").html('<img src = "https://cdn.rawgit.com/kokk9239/singleLife_web/master/src/img/preloader.gif" style="width: 60px; height: 60px">');
            }
        });
        $("#webtoon_content").css("display", "none");
    });
});
