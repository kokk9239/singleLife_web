/**
 * Created by ko on 2016-07-12.
 */

var play_module = (function () {

    function showWebtoon() {

        $.getJSON("http://192.168.0.18:8000/controller/play/webtoon/mon", function (data) {

            var content = "";

            for (var i in data) {
                var image = data[i].image;
                var title = data[i].title;
                var link = data[i].link;
                var regdate = data[i].regdate;

                if (image != undefined) {
                    content += " <div class='single_blog col-md-4 slider-content' id='webtoon'>"
                        + "<a href='http://comic.naver.com" + link + "'>"
                        + "<img src='http://192.168.0.18:8000/controller/play/getimg?image=" + image + "'/>"
                        + "<div class='slider-text'>"
                        + "<h3>" + title + "</h3>"
                        + "<p><i class='fa fa-user'></i> By FAHEM <i class='fa fa-clock-o'></i> " + regdate + "</p>"
                        + "</div> </a></div>";
                }
            }
            $("#webtoon_area").html(content);

        });
    }

    function showYoutube() {

        $.getJSON("http://192.168.0.18:8000/controller/play/youtube/1", function (data) {
            var content = "";
            for (var i in data) {
                var image = data[i].image;
                var title = data[i].title;
                var tag = data[i].tag;
                var regdate = data[i].regdate;
                if (image != undefined) {
                    content += " <div class='single_blog col-md-4 slider-content youtubediv' id='blog-content' data-num='" + i + "'>"
                        + "<a href='#' data-toggle='modal' data-target='#playYoutube'>"
                        + "<img src=" + image + "/>"
                        + "<div class='slider-text'>"
                        + "<h4>" + title + "</h4>"
                        + "<p><i class='fa fa-user'></i> By FAHEM <i class='fa fa-clock-o'></i> " + regdate + "</p>"
                        + "<input type = 'hidden' value = '" + title + "' id = 'title" + i + "'/>"
                        + "<input type = 'hidden' value = '" + tag + "' id = 'tag" + i + "'/>"
                        + "</div> </a></div>";
                }
            }
            $("#webtoon_area").html(content);
        });
    }

    function youtubeModal() {
        $("#playTag").html("");
        $("#playTitle").html("");
        var idx = $(this).attr("data-num");
        var title = $("#title" + idx).val();
        var tag = $("#tag" + idx).val();

        $("#playTag").append(tag);
        $("#playTitle").append(title);
    }

    function clearModal() {
        $("#playTag").html("");
        $("#playTitle").html("");
    }

    return {
        showWebtoon: showWebtoon,
        showYoutube: showYoutube,
        youtubeModal: youtubeModal,
        clearModal: clearModal
    }
})();

