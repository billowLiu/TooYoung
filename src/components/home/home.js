$(function () {
    if(!$.cookie("currentUser")||$.cookie("currentUser")==undefined){
        location.hash="login";
    };
    $("#nav").jqueryAccordionMenu({"user":"nihao"});

})
