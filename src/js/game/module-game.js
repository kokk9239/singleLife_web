/**
 * Created by ko on 2016-07-28.
 */
var game_module = (function(){
    function gameTitle(){
        $("#game_content").html("<h1> IO <span>게임 사이트</span></h1>");
    };

    function showGame() {
        $.getJSON("http://14.32.66.116:11001/controller/play/game?apikey=a5589d81bc7d511f3becc51e093ef239", function (data) {
            var content = "";
            for (var i in data) {
                var image = data[i].image;
                var title = data[i].title;
                var link = data[i].link;
                var jpg = "img/images.png";
                if (image != undefined) {
                    console.dir(this);
                    content = " <div class='single_blog col-md-4 slider-content ' id='game-content'>"
                        + "<a href='"+link+"' target='_blank' >"
                        + "<div style = 'width:343px; height:200px; overflow:hidden'>"
                    if(!image)
                        image = jpg;
                    else
                        image = "http://14.32.66.116:11001/controller/play/getimg?image=" + image

                    content+= "<img src='"+image+"' style='width:343px; height:200px;'/>"
                        + "</div>"
                        + "<div class='slider-text'>"
                        + "<h4>" + title + "</h4>"
                        + "<p><i class='fa fa-user'></i> By game</p>"
                        + "</div></a></div>";

                    $("  #game_content").append(content);
                }

            }
        });
    }
    return{
        gameTitle : gameTitle,
        showGame : showGame
    }



})();
