$(function () {
    // if ($.cookie('currentUser') != null) {
    //     location.hash = "home";
    // }
    ;
    //document.getElementById("login").innerHTML="你好";
    $("#login").html("欢迎");
    // $.post("http://localhost:8080/login.do", {"loginName": "admin", "password": "root123"},
    //     function (data) {
    //         if (data.code == 200) {
    //             $.cookie("currentUser", JSON.stringify(data.data));
    //             setTimeout(
    //                 function () {
    //                     vipspa.go("home")
    //                 }
    //                 , 3000
    //             )
    //
    //         } else {
    //             alert("登录失败!")
    //         }
    //     },
    //     "json"
    // );
    $http.post("http://localhost:8080/login.do", {"loginName": "admin", "password": "root123"},
        function (data) {
            if (data.code == 200) {
                $.cookie("currentUser", JSON.stringify(data.data));
                setTimeout(
                    function () {
                        vipspa.go("home")
                    }
                    , 3000
                )

            } else {
                alert("登录失败!")
            }
        },
        "json"
    )
});