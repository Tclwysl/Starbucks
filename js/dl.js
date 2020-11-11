$(document).ready(function(){
    $("#dl").click(function() {
        var zhanghao = $("#zh").val();
        var mima = $("#mm").val();

        if(zhanghao!='' && mima!='')
        {
            alert("登录成功！")
        }
        if(zhanghao=='')
        {
            alert("用户名不能为空！");
        }
        if(mima=='')
        {
            alert('密码不能为空！')
        }
        /*if(zhanghao!='admin'&&mima!="123456" && (zhanghao!='' || mima!=''))
        {
            alert("账号或密码错误！");
           $("#la1").after("<span id='emails' style='color: red'>账号或密码错误！</span>");
            $("#username").val('');
             $("#userpwd").val('');
        }*/
    });
});

$(document).ready(function(){
    $("#qh").click(function() {
        var src = $('#qh').attr('src')

        if(src=='../img/smdl.png')
        {
            $("#qh").attr("src", "../img/zhdl.png");
            $("#dldldl").toggle();
            $("#smsmsm").toggle();
        }
        else
        {
            $("#qh").attr("src", "../img/smdl.png");
            $("#dldldl").toggle();
            $("#smsmsm").toggle();
        }
    });
});


