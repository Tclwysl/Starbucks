$(document).ready(function () {
    $("#djkz").click(function(){
        var tp = $("#djkz").attr("src");
        if(tp=='../img/icon-hamburger.svg')
            {
                $("#djkz").attr("src", "../img/icon-close.svg");
/*-                $("#iframe2").toggle();
                     $("#nav_body2").toggle();
                     $("#nav_top_nav1").toggle();
 -*/
            }
        if(tp=='../img/icon-close.svg')
            {
                $("#djkz").attr("src", "../img/icon-hamburger.svg");
                /*-$("#iframe2").toggle();
                $("#nav_body2").toggle();
                $("#nav_top_nav1").toggle();-*/
            }
        $("#iframe2").toggle();
        $("#nav_body2").toggle();
        $("#nav_top_nav1").toggle();
    });
});

$(document).ready(function () {
    $("#wdzhy").click(function(){
        $("#iframe2").attr("src", "../src/nav/xzdlzc.html");
    });
});

$(document).ready(function () {
    $(".logo").click(function(){
        $("#iframe2").attr("src", "../src/nav/moren.html");
    });
});

$(document).ready(function () {
    $("#zc").click(function(){
        $("#zc").addClass("dj"); // 追加样式
        $("#dl").removeClass("dj"); //移除
    });
});

$(document).ready(function () {
    $("#dl").click(function(){
        $("#dl").addClass("dj"); // 追加样式
        $("#zc").removeClass("dj"); //移除
    });
});