/**
 * Created by ko on 2016-07-15.
 */
var honbap_module = (function () {

    function honbapTitle(){
        $("#honbap_content").html("<h1><span> 혼밥</span> 식당 </h1>");
    }

    function showHonbap(pageNo) {
        $.getJSON("http://14.32.66.116:11001/controller/restaurant?pageNo="+pageNo+"&pageSize=9", function (data) {
            if(!data.length){
                $(".loadingArea").html("");
                alert("마지막 페이지 입니다.");
                return false;
            }
            var content = "";
            for (var i in data) {
                var number = data[i].no;
                var link = data[i].link;
                var image = data[i].image;
                var title = data[i].title;
                var regdate = data[i].regdate;
                if (image != undefined) {
                    content = " <div class='single_blog col-md-4 slider-content ' id='blog-content'>"
                        + "<a href='"+link+"' target='_blank' >"
                        + "<img src='http://14.32.66.116:11001/controller/play/getimg?image=" + image + "' style='width:343px; height:200px;'/>"
                        + "<div class='slider-text'>"
                        + "<h4>" + title + "</h4>"
                        + "<p><i class='fa fa-user'></i> By Blog <i class='fa fa-clock-o'></i> " + regdate + "</p>"
                        + "</div></a></div>";

                    $("#honbap_content").append(content);
                }

            }
        });
    }

    return {
        showHonbap : showHonbap,
        honbapTitle : honbapTitle
    }
})();
