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
    function showGSGift(pageNo) {

        $.getJSON("http://192.168.0.53:8000/controller/cvs/gs/add?pageNo="+pageNo+"&pageSize=9", function (data) {
            if(!data.length){
                $(".loadingArea").html("");
                alert("마지막 페이지 입니다.");
                return false;
            }

            var source = $("#giftTemplate").html();
            var template = Handlebars.compile(source);
            $("#gsportfoliolist").append(template(data));

        });

    }
    function showCUPlus1(pageNo) {

        $.getJSON("http://192.168.0.53:8000/controller/cvs/cu/plus1?pageNo="+pageNo+"&pageSize=9", function (data) {
            if(!data.length){
                $(".loadingArea").html("");
                alert("마지막 페이지 입니다.");
                return false;
            }

            var source = $("#cvsTemplate").html();
            var template = Handlebars.compile(source);
            $("#cuportfoliolist").append(template(data));

        });

    }
    function showCUPlus2(pageNo) {

        $.getJSON("http://192.168.0.53:8000/controller/cvs/cu/plus2?pageNo="+pageNo+"&pageSize=9", function (data) {
            if(!data.length){
                $(".loadingArea").html("");
                alert("마지막 페이지 입니다.");
                return false;
            }

            var source = $("#cvsTemplate").html();
            var template = Handlebars.compile(source);
            $("#cuportfoliolist").append(template(data));

        });

    }
    function showCUGift(pageNo) {

        $.getJSON("http://192.168.0.53:8000/controller/cvs/cu/add?pageNo="+pageNo+"&pageSize=9", function (data) {
            if(!data.length){
                $(".loadingArea").html("");
                alert("마지막 페이지 입니다.");
                return false;
            }

            var source = $("#giftTemplate").html();
            var template = Handlebars.compile(source);
            $("#cuportfoliolist").append(template(data));

        });

    }
    function showSEVENPlus1(pageNo) {

        $.getJSON("http://192.168.0.53:8000/controller/cvs/seven/plus1?pageNo="+pageNo+"&pageSize=9", function (data) {
            if(!data.length){
                $(".loadingArea").html("");
                alert("마지막 페이지 입니다.");
                return false;
            }

            var source = $("#cvsTemplate").html();
            var template = Handlebars.compile(source);
            $("#sevenportfoliolist").append(template(data));

        });

    }
    function showSEVENPlus2(pageNo) {

        $.getJSON("http://192.168.0.53:8000/controller/cvs/seven/plus2?pageNo="+pageNo+"&pageSize=9", function (data) {
            if(!data.length){
                $(".loadingArea").html("");
                alert("마지막 페이지 입니다.");
                return false;
            }

            var source = $("#cvsTemplate").html();
            var template = Handlebars.compile(source);
            $("#sevenportfoliolist").append(template(data));

        });

    }
    function showSEVENGift(pageNo) {

        $.getJSON("http://192.168.0.53:8000/controller/cvs/seven/add?pageNo="+pageNo+"&pageSize=9", function (data) {
            if(!data.length){
                $(".loadingArea").html("");
                alert("마지막 페이지 입니다.");
                return false;
            }

            var source = $("#giftTemplate").html();
            var template = Handlebars.compile(source);
            $("#sevenportfoliolist").append(template(data));

        });

    }

    return {
        showGSPlus1:showGSPlus1,
        showGSPlus2:showGSPlus2,
        showGSGift:showGSGift,
        showCUPlus1:showCUPlus1,
        showCUPlus2:showCUPlus2,
        showCUGift:showCUGift,
        showSEVENPlus1:showSEVENPlus1,
        showSEVENPlus2:showSEVENPlus2,
        showSEVENGift:showSEVENGift
    }
})();

