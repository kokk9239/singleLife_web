/**
 * Created by ko on 2016-07-15.
 */
var parcel_module = (function () {


    function showParcel(code,invoice) {
        $.ajax({
            url : "http://14.32.66.116:11001/controller/parcel&apikey=a5589d81bc7d511f3becc51e093ef239",
            dataType : "JSON",
            data : {
                code : code,
                invoice:invoice
            },
            async:false,
            success: function (data) {
                var source = $("#parcelTemplate").html();
                var template = Handlebars.compile(source);
                $("#resultArea").html(template(data));
            }
        });
    }

    return {
        showParcel : showParcel
    }
})();
