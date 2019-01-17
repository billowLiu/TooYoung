;(function ($, window, document, undefined) {
    var pluginName = "jqueryAccordionMenu";
    var defaults = {
        speed: 300,
        showDelay: 0,
        hideDelay: 0,
        singleOpen: true,//只展开单个
        clickEffect: false
    };
    var menuConfig = {
        useHash: true
    }
    var menuData = [
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

    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({},
            defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init()
    };
    $.extend(Plugin.prototype, {
        init: function () {
            this.createMenuTree();
            this.openSubmenu();
            this.submenuIndicators();

            if (defaults.clickEffect) {
                this.addClickEffect()
            }
        },
        createMenuTree: function () {
            //传入menujson 数据this.settings.menuData;
            var menulist = menuData;
            var header = this.settings.header;
            if (menulist && menulist.length > 0) {
                var menuDiv = $("<div>").attr({
                    class: "simple-menu",
                    id: "simple-menu"
                });
                var menuUl = $("<ul>").attr({
                    "id": "menu-list"
                });
                for (i = 0; i < menulist.length; i++) {
                    var menu = menulist[i];
                    if (menu) {
                        var menuLi = $("<li>");
                        if (menu.default && menu.default == true) {
                            menuLi.attr({
                                class: "active"
                            })
                        }
                        var menua = $("<a>").attr({
                            href: menu.url
                        })
                        var menuI = $("<i>").attr({
                            class: "fa " + menu.icon
                        })
                        var menuNameSpan = $("<span>").attr({
                            class: "menu-name-span",
                            title: menu.name
                        })
                        $(menua).append(menuI);
                        $(menuNameSpan).append(menu.name)
                        $(menua).append(menuNameSpan);
                        $(menuLi).append(menua);
                        if (menu.submenu && menu.submenu.length > 0) {
                            var submenuUl = $("<ul>").attr({
                                class: "submenu"
                            })
                            // 二级菜单
                            for (j = 0; j < menu.submenu.length; j++) {
                                var smenu = menu.submenu[j];
                                if (smenu) {
                                    var smenuLi = $("<li>");
                                    if (smenu.default && smenu.default == true) {
                                        smenuLi.attr({
                                            class: "active"
                                        })
                                    }
                                    var smenua = $("<a>").attr({
                                        href: smenu.url
                                    })
                                    var smenuNameSpan = $("<span>").attr({
                                        class: "menu-name-span",
                                        title: smenu.name
                                    })
                                    $(smenuNameSpan).append(smenu.name)
                                    $(smenua).append(smenuNameSpan);
                                    $(smenuLi).append(smenua);
                                    if (smenu.submenu && smenu.submenu.length > 0) {
                                        var ssubmenuUl = $("<ul>").attr({
                                            class: "submenu"
                                        })
                                        //三级目录
                                        for (m = 0; m < smenu.submenu.length; m++) {
                                            var ssmenu = smenu.submenu[m];
                                            if (ssmenu) {
                                                var ssmenuLi = $("<li>");
                                                if (ssmenu.default && ssmenu.default == true) {
                                                    ssmenuLi.attr({
                                                        class: "active"
                                                    })
                                                }
                                                var ssmenua = $("<a>").attr({
                                                    href: ssmenu.url
                                                })
                                                var ssmenuNameSpan = $("<span>").attr({
                                                    class: "menu-name-span",
                                                    title: ssmenu.name
                                                })
                                                $(ssmenuNameSpan).append(ssmenu.name);
                                                $(ssmenua).append(ssmenuNameSpan);
                                                $(ssmenuLi).append(ssmenua);
                                                $(ssubmenuUl).append(ssmenuLi);
                                            }
                                        }
                                        $(smenuLi).append(ssubmenuUl);
                                    }
                                    $(submenuUl).append(smenuLi)
                                }
                            }
                            $(menuLi).append(submenuUl);
                        }
                        $(menuUl).append(menuLi);
                    }
                }
                $(menuDiv).append(menuUl)
                $(this.element).append(menuDiv);
                $(this.element).addClass("menu-nav blue");
            } else {
                console.error("菜单不能为空");
            }
        },
        openSubmenu: function () {
            //$("#simple-menu")替换$(this.element)
            $("#simple-menu").children("ul").find("li").bind("click touchstart",
                function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    if ($(this).children(".submenu").length > 0) {
                        $()
                        if ($(this).children(".submenu").css("display") == "none") {
                            $(this).children(".submenu").delay(defaults.showDelay).slideDown(defaults.speed);
                            $(this).children(".submenu").siblings("a").addClass("submenu-indicator-minus");
                            $(this).children("a").children("span").children("i").removeClass("fa-caret-right").addClass("fa-caret-down");
                            if (defaults.singleOpen) {
                                $(this).siblings().find(".submenu").slideUp(defaults.speed);
                                $(this).siblings().find(".submenu").siblings("a").removeClass("submenu-indicator-minus");
                                $(this).siblings().find(".fa-caret-down").removeClass("fa-caret-down").addClass("fa-caret-right");
                            }
                        } else {
                            $(this).find(".submenu").delay(defaults.hideDelay).slideUp(defaults.speed);
                            $(this).find(".fa-caret-down").removeClass("fa-caret-down").addClass("fa-caret-right")
                            if ($(this).find(".submenu").siblings("a").hasClass("submenu-indicator-minus")) {
                                $(this).find(".submenu").siblings("a").removeClass("submenu-indicator-minus")
                            }
                        }
                        return false
                    }
                    //去掉其他已选中的菜单
                    $("#simple-menu").find(".menu-active").removeClass("menu-active");
                    //选中菜单
                    $(this).addClass("menu-active");
                    //选中父级菜单
                    if ($(this).parent(".submenu")) {
                        $(this).parent().parent().addClass("menu-active");
                        if ($(this).parent().parent().parent(".submenu")) {
                            $(this).parent().parent().parent().parent().addClass("menu-active");
                        }
                    }
                    if ($(this).children("a").attr("href") == "#") {
                        return false;
                    }
                    //判断是href  还是 hash
                    if (menuConfig.useHash) {
                        location.hash = $(this).children("a").attr("href");
                    } else {
                        window.location.href = $(this).children("a").attr("href");
                    }
                })
        },
        submenuIndicators: function () {
            if ($("#simple-menu").find(".submenu").length > 0) {
                $("#simple-menu").find(".submenu").siblings("a").append("<span class='submenu-indicator'><i class='fa fa-caret-right'></i></span>")
            }
        },
        addClickEffect: function () {
            var ink, d, x, y;
            $("#simple-menu").find("a").bind("click touchstart",
                function (e) {
                    $(".ink").remove();
                    if ($(this).children(".ink").length === 0) {
                        $(this).prepend("<span class='ink'></span>")
                    }
                    ink = $(this).find(".ink");
                    ink.removeClass("animate-ink");
                    if (!ink.height() && !ink.width()) {
                        d = Math.max($(this).outerWidth(), $(this).outerHeight());
                        ink.css({
                            height: d,
                            width: d
                        })
                    }
                    x = e.pageX - $(this).offset().left - ink.width() / 2;
                    y = e.pageY - $(this).offset().top - ink.height() / 2;
                    ink.css({
                        top: y + 'px',
                        left: x + 'px'
                    }).addClass("animate-ink")
                })
        }
    });
    $.fn[pluginName] = function (options) {
        this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options))
            }
        });
        return this
    }
})(jQuery, window, document);