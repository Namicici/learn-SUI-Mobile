var menus = require("./menus.js");
//var user = require("./userInfo.js");
//var verify = require("./verify.js");

function route(app){
    app.get("/api/menus", function(req, res, next){
        menus.getMenus(req, res, next)
    });
    
    /*
    app.post("/login.do", function(req, res, next){
        verify.verifyLogin(req, res, next);
    });

    app.put("/register.do", function(req, res, next){
        verify.verifyRegister(req, res, next);
    });

    app.get("/dashboard.me", function(req, res, next){
        user.getUserInfo(req, res, next)
    });
    */
};

exports.route = route
