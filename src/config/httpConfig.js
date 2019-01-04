$(function(){  
    $.ajaxSetup({
        type: "POST",
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
        beforeSend:function () {
          
          if($.cookie("currentUser")==null){
              console.error("未登录");
              vipspa.go("login");
          }
        }
   });
});