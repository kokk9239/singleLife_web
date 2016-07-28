/**
 * Created by ko on 2016-07-15.
 */
var parcel_module = (function () {


    function showParcel(code,invoice) {
        $.ajax({
            url : "http://192.168.0.53:8000/controller/parcel",
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
