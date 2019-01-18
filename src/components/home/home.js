$(function () {
    if(!$.cookie("currentUser")||$.cookie("currentUser")==undefined){
        location.hash="login";
    };
    var menudata =[
        {
            url: "#",
            icon: "fa-home",
            name: "一级目录(1)",
            submenu: [
                {
                    url: "#",
                    icon: "fa-home",
                    name: "二级目录(1)二级目录(1)二级目录(1)二级目录(1)",
                    submenu: [
                        {
                            url: "#home/demo1",
                            icon: "fa-home",
                            name: "三级",
                            submenu: []
                        },
                        {
                            url: "#home/demo1",
                            icon: "fa-home",
                            name: "三级",
                            submenu: []
                        },
                        {
                            url: "#home/demo1",
                            icon: "fa-home",
                            name: "三级",
                            submenu: []
                        }
                    ]
                },
                {
                    url: "#home/demo2",
                    icon: "fa-home",
                    name: "二级目录(2)",
                    submenu: []
                }
            ]
        },
        {
            url: "#",
            icon: "fa-glass",
            name: "一级目录(2)",
            submenu: [
                {
                    url: "#",
                    icon: "fa-glass",
                    name: "主页",
                    submenu: [
                        {
                            url: "#home/demo2",
                            icon: "fa-glass",
                            name: "主页",
                            submenu: []
                        }
                    ]
                }
            ]
        }
    ]
    $("#nav").jquerySimpleMenu({menudata:menudata,header:true});

})
