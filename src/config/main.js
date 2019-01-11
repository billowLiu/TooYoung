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
                        name:'demo1',
                        templateUrl:'components/demo1/demo1.html',
                        controller: 'components/demo1/demo1.js'
                    },
                    {
                        name:'demo2',
                        templateUrl:'components/demo2/demo2.html',
                        controller: 'components/demo2/demo2.js'
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