$(function(){
    if ($.cookie('currentUser')==null) {
        location.hash="#home";
    }
    $("#login").innerHTML="欢迎登录";
});