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
                    name:'/ch1',
                    templateUrl:'components/ch1/ch1.html',
                    controller: 'components/ch1/ch1.js'
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