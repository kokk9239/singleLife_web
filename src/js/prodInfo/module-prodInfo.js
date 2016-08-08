/**
 * Created by ko on 2016-07-15.
 */

var prodInfo_module = (function () {


    function showCoupang(pageNo) {

        $.getJSON("http://14.32.66.116:11001/controller/prodInfo/coupang?pageNo="+pageNo+"&pageSize=9", function (data) {
            if(!data.length){
                $(".loadingArea").html("");
                alert("마지막 페이지 입니다.");
                return false;
            }

            var source = $("#prodInfoTemplate").html();
            var template = Handlebars.compile(source);
            $("#coupang_portfoliolist").append(template(data));

        });

    }

    function showTmon(pageNo) {

        $.getJSON("http://14.32.66.116:11001/controller/prodInfo/tmon?pageNo="+pageNo+"&pageSize=9", function (data) {
            if(!data.length){
                $(".loadingArea").html("");
                alert("마지막 페이지 입니다.");
                return false;
            }

            var source = $("#prodInfoTemplate").html();
            var template = Handlebars.compile(source);
            $("#tmon_portfoliolist").append(template(data));

        });

    }
    function showAuction(pageNo) {

        $.getJSON("http://14.32.66.116:11001/controller/prodInfo/auction?pageNo="+pageNo+"&pageSize=9", function (data) {
            if(!data.length){
                $(".loadingArea").html("");
                alert("마지막 페이지 입니다.");
                return false;
            }

            var source = $("#prodInfoTemplate").html();
            var template = Handlebars.compile(source);
            $("#auction_portfoliolist").append(template(data));

        });

    }
    function showWmp(pageNo) {

        $.getJSON("http://14.32.66.116:11001/controller/prodInfo/wmp?pageNo="+pageNo+"&pageSize=9", function (data) {
            if(!data.length){
                $(".loadingArea").html("");
                alert("마지막 페이지 입니다.");
                return false;
            }

            var source = $("#prodInfoTemplate").html();
            var template = Handlebars.compile(source);
            $("#wmp_portfoliolist").append(template(data));

        });

    }

    return {
        showCoupang:showCoupang,
        showTmon:showTmon,
        showAuction:showAuction,
        showWmp:showWmp
    }
})();

