(function ($,window) {
    $.ajaxSetup({
        error: function(jqXHR, textStatus, errorThrown) {
            switch(jqXHR.status) {
                case(500):
                    alert("服务器系统内部错误");
                    break;
                case(401):
                    alert("未登录");
                    vipspa.go("login");
                    break;
                case(403):
                    alert("无权限执行此操作");
                    break;
                case(408):
                    alert("请求超时");
                    break;
                default:
                    alert("未知错误");
            }
        },
        beforeSend:function (jqXHR,requestInfo) {
            if($.cookie("currentUser")==null){
                if(requestInfo.url.indexOf(".do")>-1 && requestInfo.url.indexOf("login") == -1){
                    vipspa.go("login");
                    return false
                }
            }
        }
    });
    function $http() {
        
    }
    $http.prototype.post=function(url,data,success,dataType){
        $.ajax({
            url:url,
            type:"post",
            xhrFields:{
                withCredentials:true
            },
            crossDomain: true,
            data:data,
            dataType:dataType,
            success:success
        })
    }

    $http.prototype.get=function(url,data,success,dataType){
        $.ajax({
            url:url,
            type:"get",
            xhrFields:{
                withCredentials:true
            },
            crossDomain: true,
            data:data,
            dataType:dataType,
            success:success
        })
    }

    window.$http=new $http();
})(jQuery,window)