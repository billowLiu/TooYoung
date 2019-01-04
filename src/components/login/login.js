$(function(){
    if ($.cookie('currentUser') !=null) {
        location.hash="#home";
    };
    document.getElementById("login").innerHTML="你好";
    alert($("#login").html("欢迎"));
});