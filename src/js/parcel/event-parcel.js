/**
 * Created by ko on 2016-07-15.
 */
$(document).ready(function () {

    $("#parcelArea").css("display","none");

    // 택배
    $("#parcel").on("click", function () {
        $(window).unbind('scroll');
        $("#parcelArea").css("display","block");
        $(".work_area").css("display", "none");
        $("#portfolioArea").css("display", "none");
        $(".loadingArea").css("display","none");

        $("#travel_content").html("");
        $("#youtube_content").html("");
        $("#recipe_content").html("");
        $("#honbap_content").html("");
    });

    $("#mForm").submit(function(e){
        $(window).unbind('scroll');

        e.preventDefault();
        var code = $("select[name=parcel]").val();
        var num = $("#invoice").val();

        parcel_module.showParcel(code,num);
        var level = $("#level").val();
        var on = "level"+level+"on";
        var off = "level"+level+"off";
        $("#"+off).css("display","none");
        $("#"+on).css("display","inline-block");

    });
});
