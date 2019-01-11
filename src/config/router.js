$(function () {
    window.approuter = {
        '/':{
            templateUrl: 'components/login/login.html',
            controller: 'components/login/login.js'
        },
        '/home': {
            templateUrl: 'components/common/home.html',
            controller: 'components/common/home.js',
            subView: "#main",
            children:[
                {
                    name:'/demo1',
                    templateUrl:'components/demo1/demo1.html',
                    controller: 'components/demo1/demo1.js'
                },
                {
                    name:'/demo2',
                    templateUrl:'components/demo2/demo2.html',
                    controller: 'components/demo2/demo2.js'
                }
            ]
        },
        '/login': {
            templateUrl: 'components/login/login.html',
            controller: 'components/login/login.js'
        },
        'defaults': '/home'// 不符合上述路由时，默认跳至 
    }
});