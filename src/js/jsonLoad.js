/**
 * Created by ko on 2016-07-08.
 */
/*
$(document).ready(function() {
    $("#owl-demo").owlCarousel({
        jsonPath : 'json/test.json',
        jsonSuccess : customDataSuccess
    });

    function customDataSuccess(data){
        var content = "";
        for(var i in data["items"]){

            var title = data["items"][i].title;
            var image = data["items"][i].image;

            content += "<img src=\"" +image+ "\">"+"<h5>"+title+"</h5>";
        }
        $("#owl-demo").html(content);
    }
});
*/
$(document).ready(function () {
    $.getJSON("json/test.json", function (data) {
        var content = "";
        for (var i in data["items"]) {

            var image = data["items"][i].image;
            var title = data["items"][i].title;
            var link = data["items"][i].link;
            var regdate = data["items"][i].regdate;


            content += " <div class='single_blog col-md-4 slider-content'>"
                + "<a href='http://comic.naver.com"+link+"'>"
                + "<img src="+image+"/>"
                + "<div class='slider-text'>"
                + "<h3>" + title + "</h3>"
                + "<p><i class='fa fa-user'></i> By FAHEM <i class='fa fa-clock-o'></i> " + regdate + "</p>"
                + "<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially.</p>"
                + "</div> </a></div>";
        }
        $("#webtoon_area").html(content);
    });
});
