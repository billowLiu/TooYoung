$(function() {  
    vipspa.start({  
        view: '#app',// 装载视图的dom  
        router: {
            'home': {
                templateUrl: 'components/home/home.html',
                controller: 'components/home/home.js',
                subView: "#main",
                children:[
                    {
                        name:'/ch1',
                        templateUrl:'components/ch1/ch1.html',
                        controller: 'components/ch1/ch1.js'
                    }
                ]
            },
            'login': {
                templateUrl: 'components/login/login.html',
                controller: 'components/login/login.js'
            },
            'defaults': 'login'// 不符合上述路由时，默认跳至
        } 
    });
});  