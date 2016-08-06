/**
 * Created by ko on 2016-07-28.
 */
var game_module = (function(){
    function gameTitle(){
        $("#game_content").html("<h1> IO <span>게임 사이트</span></h1>");
    };

    function showGame() {
        $.getJSON("http://192.168.0.53:8000/controller/play/game", function (data) {
            var content = "";
            for (var i in data) {
                var image = data[i].image;
                var title = data[i].title;
                var link = data[i].link;
                var jpg = "../img/1.jpg";
                if (image != undefined) {
                    content = " <div class='single_blog col-md-4 slider-content ' id='game-content'>"
                        + "<a href='"+link+"' target='_blank' >"
                        + "<div style = 'width:343px; height:200px; overflow:hidden'>"
                        + "<img src='http://192.168.0.53:8000/controller/play/getimg?image=" + image + "' style='width:343px; height:200px;'"
                        + " onerror='this.src='+jpg/>"
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
