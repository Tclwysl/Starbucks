$(document).ready(function () {
    $("#zc").click(function(){
        $("#zc").addClass("zcbk"); // 追加样式
        $("#dl").removeClass("zcbk"); //移除
    });
});

$(document).ready(function () {
    $("#dl").click(function(){
        $("#dl").addClass("zcbk"); // 追加样式
        $("#zc").removeClass("zcbk"); //移除
    });
});