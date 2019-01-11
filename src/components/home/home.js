$(function () {
    if(!$.cookie("currentUser")||$.cookie("currentUser")==undefined){
        location.hash="login";
    }
})