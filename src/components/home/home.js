$(function () {
    if(!$.cookie("currentUser")||$.cookie("currentUser")==undefined){
        location.hash="login";
    };
    var menudata =[];
    // $.post("http://localhost:8080/common/getMenuList.do", {},
    //     function (data) {
    //         if (data.code == 200) {
    //             menudata=data.data;
    //         }
    //     },
    //     "json"
    // );
    $http.post("http://localhost:8080/common/getMenuList.do", {},
        function (data) {
            if (data.code == 200) {
                menudata=data.data;
                $("#nav").jquerySimpleMenu({menudata:menudata,header:true,theme:"blue"});
            }
        },
        "json"
    )


})
