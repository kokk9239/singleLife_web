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

    $("#honbap").on("click", function(){

        $.getJSON("http://192.168.0.18:8000/controller/play/webtoon", function (data) {
            var content = "";
            for (var i in data) {

                var image = data[i].image;
                var title = data[i].title;
                var link = data[i].link;
                var tag = data[i].tag;
                var regdate = data[i].regdate;


                content += " <div class='single_blog col-md-4 slider-content'>"
                    + "<a href="+link+">"
                    + "<img src="+image+"/>"
                    /*+ tag*/
                    + "<div class='slider-text'>"
                    + "<h3>" + title + "</h3>"
                    + "<p><i class='fa fa-user'></i> By FAHEM <i class='fa fa-clock-o'></i> " + regdate + "</p>"
                    + "</div> </a></div>";
            }
            $("#webtoon_area").html(content);
        });

    });


    $("#youtube").on("click", function(){

        $.getJSON("http://192.168.0.18:8000/controller/play/youtube/2", function (data) {
            var content = "";
            var modal = "";

            for (var i in data) {

                var image = data[i].image;
                var title = data[i].title;
                var link = data[i].link;
                var tag = data[i].tag;
                var regdate = data[i].regdate;

                modal += "<div class='modal fade' id='playYoutube"+i+"'>"
                        + "<div class='modal-dialog login animated'>"
                        + "<div class='modal-content'>"
                        + "<div class='modal-header'>"
                        + "<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>"
                        + "<h4 class='modal-title'>"+title+"</h4>"
                        + "</div>"
                        + "<div class='modal-body'>"
                        + "<div class='box'>"
                        + "<div class='content'>"
                        + "<div class='division'>"
                        + tag
                        + "</div> </div> </div> </div>"
                        + "<div class='modal-footer'>"
                        + "<div class='forgot login-footer'>"
                        + "<button class='btn btn-primary'data-dismiss='modal'aria-hidden='true'>닫기</button>"
                        + " </div> </div> </div> </div> </div>";

                content += " <div class='single_blog col-md-4 slider-content' id='blog-content'>"
                    + "<a href='#' data-toggle='modal' data-target='#playYoutube"+i+"'>"
                    + "<img src="+image+"/>"
                    /*+ tag*/
                    + "<div class='slider-text'>"
                    + "<h4>" + title + "</h4>"
                    + "<p><i class='fa fa-user'></i> By FAHEM <i class='fa fa-clock-o'></i> " + regdate + "</p>"
                    + "</div> </a></div>";

            }

            $("#webtoon_area").html(content + modal);
        });

    });

});

/*$(document).on("hidden.bs.modal",function(e){
    $(e.target).removeData("bs.modal").find(".division").empty();
    $(e.target).removeData("bs.modal").find(".modal-title").empty();
});*/
