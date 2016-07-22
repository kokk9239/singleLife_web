/**
 * Created by ko on 2016-07-15.
 */

var cvs_module = (function () {


    function showGSPlus1(pageNo) {

        $.getJSON("http://192.168.0.53:8000/controller/cvs/gs/plus1?pageNo="+pageNo+"&pageSize=9", function (data) {
            if(!data.length){
                $(".loadingArea").html("");
                alert("마지막 페이지 입니다.");
                return false;
            }

            var source = $("#cvsTemplate").html();
            var template = Handlebars.compile(source);
            $("#gsportfoliolist").append(template(data));

        });

    }

    function showGSPlus2(pageNo) {

        $.getJSON("http://192.168.0.53:8000/controller/cvs/gs/plus2?pageNo="+pageNo+"&pageSize=9", function (data) {
            if(!data.length){
                $(".loadingArea").html("");
                alert("마지막 페이지 입니다.");
                return false;
            }

            var source = $("#cvsTemplate").html();
            var template = Handlebars.compile(source);
            $("#gsportfoliolist").append(template(data));

        });

    }


    function showGS() {

        $.getJSON("http://192.168.0.53:8000/controller/cvs/store/gs", function (data) {
            if(!data.length){
                $(".loadingArea").html("");
                return false;
            }

            var source = $("#cvsTemplate").html();
            var template = Handlebars.compile(source);
            $("#gsportfoliolist").html(template(data));
            $("#gsoneplus").click();


        });
    }

    function showCU() {

        $.getJSON("http://192.168.0.53:8000/controller/cvs/store/cu", function (data) {
            if(!data.length){
                $(".loadingArea").html("");
                return false;
            }

            var source = $("#cvsTemplate").html();
            var template = Handlebars.compile(source);
            $("#cuportfoliolist").html(template(data));
            $("#gsoneplus").click();


        });
    }

    function showSEVEN() {

        $.getJSON("http://192.168.0.53:8000/controller/cvs/store/seven", function (data) {
            if(!data.length){
                $(".loadingArea").html("");
                return false;
            }

            var source = $("#cvsTemplate").html();
            var template = Handlebars.compile(source);
            $("#sevenportfoliolist").html(template(data));
            $("#gsoneplus").click();


        });
    }

    return {
        showGS:showGS,
        showCU:showCU,
        showSEVEN:showSEVEN,
        showGSPlus1:showGSPlus1,
        showGSPlus2:showGSPlus2
    }
})();

