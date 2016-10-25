var menus = require("./menus.js");
var notices = require("./notices.js");
//var user = require("./userInfo.js");
//var verify = require("./verify.js");

function route(app){
    app.get("/api/menus", function(req, res, next){
        menus.getMenus(req, res, next)
    });
    app.get('/api/home/message', function(req, res, next){
        notices.getNotices(req, res, next);
    })
};

exports.route = route
