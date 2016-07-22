/**
 * Created by ko on 2016-07-15.
 */
var honbap_module = (function () {

    function showHonbap() {

        $.getJSON("http://192.168.0.18:8000/controller/play/webtoon/mon", function (data) {

            var content = "";
            var header ="";

            header = "<h1>네이버 블로그<span> 혼밥 정보</span></h1>";

            for (var i in data) {
                var image = data[i].image;
                var title = data[i].title;
                var link = data[i].link;
                var writer = data[i].writer;
                var star = data[i].star;

                if (image != undefined) {
                    content += "<div class='single_blog col-md-4 slider-content' id='webtoon'>"
                        + "<a href='http://comic.naver.com" + link + "'>"
                        + "<img src='http://192.168.0.18:8000/controller/play/getimg?image=" + image + "'/>"
                        + "<div class='slider-text titleContent'>"
                        + "<h3 class='titleArea'>" + title + "</h3>"
                        + "<p><i class='fa fa-user'></i> "+writer+" <i class='fa fa-star'></i> " + star + "</p>"
                        + "</div></a></div>";
                }
            }
            $("#main_content").html(header + content);

        });
    }

    return {
        showHonbap : showHonbap
    }
})();
