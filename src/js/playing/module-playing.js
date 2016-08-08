/**
 * Created by ko on 2016-07-12.
 */

var play_module = (function () {

   /* function getdate(){
        var day = new Date();
        var week = new Array('sun','mon','tue','wed','thu','fri','sat');
        var today = week[day.getDay()];
        return today;

    }

    function getdateKorean(){} {
        var day = new Date();
        var weekKorean = new Array('일요일','월요일','화요일','수요일','목요일','금요일','토요일');
        var todayKorean = weekKorean[day.getDay()];

        return todayKorean;
    }

    */

    function showNaverWebtoon() {
        $.ajax({
            url : "http://14.32.66.116:11001/controller/play/webtoon?origin=naver&pageNo=1&pageSize=1000&apikey=a5589d81bc7d511f3becc51e093ef239",
            dataType : "JSON",
            async:false,
            success: function (data) {

                var source = $("#template").html();
                var template = Handlebars.compile(source);
                $("#naver_portfoliolist").html(template(data));
                $("#naverMonBtn").click();
            }
        });
    }
    function showDaumWebtoon() {
        $.ajax({
            url : "http://14.32.66.116:11001/controller/play/webtoon?origin=daum&pageNo=1&pageSize=1000&apikey=a5589d81bc7d511f3becc51e093ef239",
            dataType : "JSON",
            async:false,
            success: function (data) {
                var source = $("#template").html();
                var template = Handlebars.compile(source);
                $("#daum_portfoliolist").html(template(data));
                $("#daumMonBtn").click();
            }
        });
    }

    function youtubeTitle(){
        $("#youtube_content").html("<h1>YouTube<span> 인기동영상</span></h1>");
    }

    function showYoutube(pageNo) {
        $.getJSON("http://14.32.66.116:11001/controller/play/youtube?pageNo="+pageNo+"&apikey=a5589d81bc7d511f3becc51e093ef239", function (data) {
            if(!data.length){
                $(".loadingArea").html("");
                alert("마지막 페이지 입니다.");
                return false;
            }
            var content = "";
            for (var i in data) {
                var number = data[i].no;
                var image = data[i].image;
                var title = data[i].title;
                var tag = data[i].tag;
                var regdate = data[i].regdate;
                if (image != undefined) {
                    content = " <div class='single_blog col-md-4 slider-content youtubediv' id='blog-content' data-num='" + number + "'>"
                        + "<a href='#' data-toggle='modal' data-target='#playYoutube'>"
                        + "<img src=" + image + "/>"
                        + "<div class='slider-text'>"
                        + "<h4>" + title + "</h4>"
                        + "<p><i class='fa fa-user'></i> By Youtube <i class='fa fa-clock-o'></i> " + regdate + "</p>"
                        + "<input type = 'hidden' value = '" + title + "' id = 'title" + number + "'/>"
                        + "<input type = 'hidden' value = '" + tag + "' id = 'tag" + number + "'/>"
                        + "</div></a></div>";

                    $("#youtube_content").append(content);
                }

            }
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
        showNaverWebtoon: showNaverWebtoon,
        showDaumWebtoon:showDaumWebtoon,
        showYoutube: showYoutube,
        youtubeModal: youtubeModal,
        clearModal: clearModal,
        youtubeTitle:youtubeTitle
    }
})();
