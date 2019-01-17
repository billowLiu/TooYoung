$(function () {
    if(!$.cookie("currentUser")||$.cookie("currentUser")==undefined){
        location.hash="login";
    };
    //顶部导航切换
    $("#menu-list li").click(function () {
        $("#menu-list li.active").removeClass("active")
        $(this).addClass("active");
    });

    $("#nav").jqueryAccordionMenu({"user":"nihao"});

    $.expr[":"].Contains = function (a, i, m) {
        return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
    };

    function filterList(header, list) {
        //@header 头部元素
        //@list 无需列表
        //创建一个搜素表单
        var form = $("<form>").attr({
            "class": "filterform",
            action: "#"
        }), input = $("<input>").attr({
            "class": "filterinput",
            type: "text"
        }), search = $("<i>").attr({
            "class": "fa fa-search search_icon"
        });
        $(form).append(input).appendTo(header);
        $(form).append(search).appendTo(header);
        $(input).change(function () {
            var filter = $(this).val();
            if (filter) {
                $(list).find("ul").slideUp();
                $(list).find("li").slideUp();
                var matches = $(list).find("a:Contains(" + filter + ")");
                if(matches.length>0){
                    var matchesParents=matches.parent();
                    matchesParents.slideDown();
                    // matchesParents.siblings("li").slideUp();
                    if(matchesParents.parent(".submenu").length>0){
                        var matchesParentsParents=matchesParents.parent(".submenu").parent();
                        matchesParents.parent(".submenu").slideDown();
                        matchesParentsParents.slideDown();
                        // matchesParentsParents.siblings("li").slideUp();
                        if(matchesParentsParents.parent(".submenu").length>0){
                            matchesParentsParents.parent(".submenu").slideDown();
                            matchesParentsParents.parent(".submenu").parent().slideDown();
                            // matchesParentsParents.parent(".submenu").parent().siblings("li").slideUp();
                        }
                    }
                }else{
                    $(list).find("ul").slideUp();
                    $(list).find("li").slideUp();
                }
            } else {
                $(list).find("ul").slideUp();
                $(list).find("li").slideUp();
                $(list).find("li").slideDown();
            }
            return false;
        }).keyup(function () {
            $(this).change();
        });
    }

    $(function () {
        filterList($("#form"), $("#menu-list"));
    });
})
