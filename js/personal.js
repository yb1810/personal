$(function() {
    $("#btn").toggle(
        function() {
            $("#btns").slideToggle("slow");
            $(".banner").css({ "margin-top": "128px" })
            $(this).find("i").removeClass("icon-weibiaoti12")
            $(this).find("i").addClass("icon-cuohao")
            $(".icon-cuohao").css({ "color": "white" })
        },
        function() {
            $("#btns").slideToggle("slow");
            $(".banner").css({ "margin-top": "0" })
            $(this).find("i").removeClass("icon-cuohao")
            $(this).find("i").addClass("icon-weibiaoti12")
            $(".icon-weibiaoti12").css({ "color": "white" })
        },
    )
});