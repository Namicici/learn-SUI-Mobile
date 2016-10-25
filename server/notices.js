exports.getNotices = getNotices;

function getNotices(req, res, next){
    var notices ={
    	"code": "0000",
        "message": "ok",
        "data" : [{
            "id":1,
            "title":"产品发布",
            "createTime":"2016-10-21 10:54:01",
            "content":"【金助力】你好，中诚信托发行人客户在平台发布的信托7号产品需您审核，请及时处理。中诚信托发行人客户在平台发布的信托7号产品需您审核，请及时处理。"
        },{
            "id":2,
            "title":"会员注册",
            "createTime":"2016-10-21 11:15:00",
            "content":"【金助力】你好，中诚信托发行人客户在平台发布的信托7号产品需您审核，请及时处理。"
        },{
            "id":3,
            "title":"会员注册",
            "createTime":"2016-10-21 11:15:00",
            "content":"【金助力】你好，中诚信托发行人客户在平台发布的信托7号产品需您审核，请及时处理。"
        },{
            "id":4,
            "title":"会员注册",
            "createTime":"2016-10-21 11:15:00",
            "content":"【金助力】你好，中诚信托发行人客户在平台发布的信托7号产品需您审核，请及时处理。"
        },{
            "id":5,
            "title":"会员注册",
            "createTime":"2016-10-21 11:15:00",
            "content":"【金助力】你好，中诚信托发行人客户在平台发布的信托7号产品需您审核，请及时处理。"
        }]
    };
    res.status(200).send(notices);
    //res.status(600).send({message: "No data."});
}
