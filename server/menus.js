exports.getMenus = getMenus;

function getMenus(req, res, next){
    var menus ={
    	"code": "0000",
        "message": "ok",
        "data" : {
            "menuList":[
                {
                    "id":"1",
                    "parentId":"0",
                    "name":"待办任务",
                    "icon": "fa-clipboard fa-fw",
                    "url":""
                },
                {
                    "id":"2",
                    "parentId":"1",
                    "name":"会员待办",
                    "icon": "fa-lightbulb-o fa-fw",
                    "url":"vipAgency.html"
                },
                {
                    "id":"3",
                    "parentId":"1",
                    "name":"产品待办",
                    "icon": "fa-lightbulb-o fa-fw",
                    "url":"productAgency.html"
                },
                {
                    "id":"4",
                    "parentId":"1",
                    "name":"综合查询",
                    "icon": "fa-lightbulb-o fa-fw",
                    "url":"searchAgency.html"
                },
                {
                    "id":"5",
                    "parentId":"0",
                    "name":"组织机构",
                    "icon": "fa-clipboard fa-fw",
                    "url":""
                },
                {
                    "id":"6",
                    "parentId":"5",
                    "name":"组织机构",
                    "icon": "fa-lightbulb-o fa-w",
                    "url":"orgStructure.html"
                },
                {
                    "id":"7",
                    "parentId":"0",
                    "name":"权限组管理",
                    "icon": "fa-clipboard fa-fw",
                    "url":""
                },
                {
                    "id":"8",
                    "parentId":"7",
                    "name":"权限组管理",
                    "icon": "fa-lightbulb-o fa-w",
                    "url":"permitMgr.html"
                },
                {
                    "id":"9",
                    "parentId":"0",
                    "name":"产品管理",
                    "icon": "fa-briefcase",
                    "url":""
                },
                {
                    "id":"10",
                    "parentId":"9",
                    "name":"银行理财",
                    "icon": "fa-bookmark",
                    "url":"bankConduct.html"
                },
                {
                    "id":"11",
                    "parentId":"9",
                    "name":"资管计划",
                    "icon": "fa-bookmark",
                    "url":"assetPlan.html"
                },
                {
                    "id":"12",
                    "parentId":"9",
                    "name":"信托计划",
                    "icon": "fa-bookmark",
                    "url":"trustPlan.html"
                },
                {
                    "id":"13",
                    "parentId":"0",
                    "name":"交易管理",
                    "icon": "fa-legal",
                    "url":""
                },
                {
                    "id":"14",
                    "parentId":"13",
                    "name":"理财交易管理",
                    "icon": "fa-inbox",
                    "url":"bankTradeMgr.html"
                },
                {
                    "id":"15",
                    "parentId":"13",
                    "name":"资管交易管理",
                    "icon": "fa-heart",
                    "url":"assetTradeMgr.html"
                },
                {
                    "id":"16",
                    "parentId":"13",
                    "name":"信托交易管理",
                    "icon": "fa-heart",
                    "url":"trustTradeMgr.html"
                },
                {
                    "id":"17",
                    "parentId":"0",
                    "name":"会员管理",
                    "icon": "fa-cloud",
                    "url":""
                },
                {
                    "id":"18",
                    "parentId":"17",
                    "name":"会员管理",
                    "icon": "fa-comment",
                    "url":"vipManagement.html"
                },
                {
                    "id":"19",
                    "parentId":"0",
                    "name":"内容管理",
                    "icon": "fa-cloud",
                    "url":""
                },
                {
                    "id":"20",
                    "parentId":"19",
                    "name":"公告管理",
                    "icon": "fa-comment",
                    "url":"bulletinMgr.html"
                },
                {
                    "id":"21",
                    "parentId":"19",
                    "name":"资讯管理",
                    "icon": "fa-comment",
                    "url":"infoMgr.html"
                },
                {
                    "id":"22",
                    "parentId":"0",
                    "name":"统计分析",
                    "icon": "fa-cloud",
                    "url":""
                },
                {
                    "id":"23",
                    "parentId":"22",
                    "name":"产品募集情况报表",
                    "icon": "fa-comment",
                    "url":"raiseStatementReport.html"
                },
                {
                    "id":"24",
                    "parentId":"0",
                    "name":"流动性互助",
                    "icon": "fa-cloud",
                    "url":""
                },
    			{
                    "id":"26",
                    "parentId":"24",
                    "name":"线上资金业务",
                    "icon": "fa-comment",
                    "url":"repoInterbank.html"
                },
                {
                    "id":"25",
                    "parentId":"24",
                    "name":"同业存款业务",
                    "icon": "fa-comment",
                    "url":"tradeAgreementDeposit.html"
                },
                {
                    "id":"27",
                    "parentId":"24",
                    "name":"商业汇票交易",
                    "icon": "fa-comment",
                    "url":"commercialBills.html"
                },
                {
                    "id":"28",
                    "parentId":"24",
                    "name":"同业存单",
                    "icon": "fa-comment",
                    "url":"tradeDeposit.html"
                },
                {
                    "id":"29",
                    "parentId":"24",
                    "name":"短期融资券",
                    "icon": "fa-comment",
                    "url":"shortTermFinancing.html"
                },
                {
                    "id":"30",
                    "parentId":"24",
                    "name":"收益凭证",
                    "icon": "fa-comment",
                    "url":"returnVoucher.html"
                },
                {
                    "id":"31",
                    "parentId":"0",
                    "name":"需求意向",
                    "icon": "fa-cogs",
                    "url":""
                },
                {
                    "id":"32",
                    "parentId":"31",
                    "name":"理财产品",
                    "icon": "fa-comment",
                    "url":"requirementForBankConduct.html"
                },
                {
                    "id":"33",
                    "parentId":"31",
                    "name":"资管计划",
                    "icon": "fa-comment",
                    "url":"requirementForAssetPlan.html"
                },
                {
                    "id":"34",
                    "parentId":"31",
                    "name":"信托计划",
                    "icon": "fa-comment",
                    "url":"requirementForTrustPlan.html"
                },
                {
                    "id":"35",
                    "parentId":"0",
                    "name":"系统管理",
                    "icon": "fa-cogs",
                    "url":""
                },
                {
                    "id":"36",
                    "parentId":"35",
                    "name":"日志查询",
                    "icon": "fa-calendar",
                    "url":"checklog.html"
                },
    			{
                    "id":"37",
                    "parentId":"35",
                    "name":"流程管理",
                    "icon": "fa-calendar",
                    "url":"processMgr.html"
                },
    			{
                    "id":"38",
                    "parentId":"0",
                    "name":"模板管理",
                    "icon": "fa-cogs",
                    "url":""
                },
    			{
                    "id":"39",
                    "parentId":"38",
                    "name":"模板管理",
                    "icon": "fa-calendar",
                    "url":"templateMgr.html"
    			},{
    				"id":"49",
                    "parentId":"22",
                    "name":"客户经理业绩分析",
                    "icon": "fa-calendar",
                    "url":"managerPerformanceAnalysis.html"
                },
    			{
                    "id":"50",
                    "parentId":"22",
                    "name":"会员收费明细统计",
                    "icon": "fa-calendar",
                    "url":"memberChargeDetailStatistic.html"
                }
            ],
            "buttonList":[
    			{
                    "id":17,
                    "resourceType":"2",
                    "name":"产品终止",
                    "code":"asset_mgr_prod_termination",
                    "icon":"",
                    "url":"",
                    "orderValue":9000,
                    "parentId":16,
                    "createTime":1458705054000,
                    "updateTime":1458705054000,
                    "status":1
                },{
                    "id":98,
                    "resourceType":"2",
                    "name":"修改费率",
                    "code":"asset_fee_update",
                    "icon":"",
                    "url":"",
                    "orderValue":9000,
                    "parentId":16,
                    "createTime":1458705054000,
                    "updateTime":1458705054000,
                    "status":1
                },
                {
                    "id":24,
                    "resourceType":"2",
                    "name":"订单撤销",
                    "code":"fin_order_mgr_cancel",
                    "icon":"",
                    "url":"",
                    "orderValue":9000,
                    "parentId":23,
                    "createTime":1458705055000,
                    "updateTime":1458705055000,
                    "status":1
                },
                {
                    "id":20,
                    "resourceType":"2",
                    "name":"产品终止",
                    "code":"trustee_prod_termination",
                    "icon":"",
                    "url":"",
                    "orderValue":9000,
                    "parentId":19,
                    "createTime":1458705055000,
                    "updateTime":1458705055000,
                    "status":1
                },
                {
                    "id":90,
                    "resourceType":"2",
                    "name":"修改费率",
                    "code":"trustee_fee_update",
                    "icon":"",
                    "url":"",
                    "orderValue":9000,
                    "parentId":19,
                    "createTime":1458705055000,
                    "updateTime":1458705055000,
                    "status":1
                },
                {
                    "id":3,
                    "resourceType":"2",
                    "name":"审核",
                    "code":"toDo_member_verify",
                    "icon":"",
                    "url":"",
                    "orderValue":9000,
                    "parentId":2,
                    "createTime":1458705054000,
                    "updateTime":1458705054000,
                    "status":1
                },
                {
                    "id":39,
                    "resourceType":"2",
                    "name":"发布资讯",
                    "code":"content_release_information",
                    "icon":"",
                    "url":"",
                    "orderValue":9000,
                    "parentId":38,
                    "createTime":1458705056000,
                    "updateTime":1458705056000,
                    "status":1
                },
                {
                    "id":31,
                    "resourceType":"2",
                    "name":"新增会员",
                    "code":"member_add",
                    "icon":"",
                    "url":"",
                    "orderValue":9000,
                    "parentId":30,
                    "createTime":1458705055000,
                    "updateTime":1458705055000,
                    "status":1
                },
                {
                    "id":26,
                    "resourceType":"2",
                    "name":"订单撤销",
                    "code":"asset_order_mgr_cancel",
                    "icon":"",
                    "url":"",
                    "orderValue":9000,
                    "parentId":25,
                    "createTime":1458705055000,
                    "updateTime":1458705055000,
                    "status":1
                },
                {
                    "id":14,
                    "resourceType":"2",
                    "name":"产品终止",
                    "code":"bank_fin_prod_termination",
                    "icon":"",
                    "url":"",
                    "orderValue":9000,
                    "parentId":13,
                    "createTime":1458705054000,
                    "updateTime":1458705054000,
                    "status":1
                },
                {
                    "id":94,
                    "resourceType":"2",
                    "name":"修改费率",
                    "code":"bank_fee_update",
                    "icon":"",
                    "url":"",
                    "orderValue":9000,
                    "parentId":13,
                    "createTime":1458705054000,
                    "updateTime":1458705054000,
                    "status":1
                },
                {
                    "id":5,
                    "resourceType":"2",
                    "name":"审核",
                    "code":"toDo_product_verify",
                    "icon":"",
                    "url":"",
                    "orderValue":9000,
                    "parentId":4,
                    "createTime":1458705054000,
                    "updateTime":1458705054000,
                    "status":1
                },
    			{
                    "id":50,
                    "resourceType":"2",
                    "name":"验证",
                    "code":"toDo_product_check",
                    "icon":"",
                    "url":"",
                    "orderValue":9000,
                    "parentId":4,
                    "createTime":1458705054000,
                    "updateTime":1458705054000,
                    "status":1
                },
                {
                    "id":37,
                    "resourceType":"2",
                    "name":"发布公告",
                    "code":"content_release_announcement",
                    "icon":"",
                    "url":"",
                    "orderValue":9000,
                    "parentId":36,
                    "createTime":1458705055000,
                    "updateTime":1458705055000,
                    "status":1
                },
                {
                    "id":18,
                    "resourceType":"2",
                    "name":"募集结束",
                    "code":"asset_mgr_end_of_offer",
                    "icon":"",
                    "url":"",
                    "orderValue":9001,
                    "parentId":16,
                    "createTime":1458705054000,
                    "updateTime":1458705054000,
                    "status":1
                },
                {
                    "id":21,
                    "resourceType":"2",
                    "name":"募集结束",
                    "code":"trustee_end_of_offer",
                    "icon":"",
                    "url":"",
                    "orderValue":9001,
                    "parentId":19,
                    "createTime":1458705055000,
                    "updateTime":1458705055000,
                    "status":1
                },
                {
                    "id":32,
                    "resourceType":"2",
                    "name":"信息维护",
                    "code":"member_maint",
                    "icon":"",
                    "url":"",
                    "orderValue":9001,
                    "parentId":30,
                    "createTime":1458705055000,
                    "updateTime":1458705055000,
                    "status":1
                },
                {
                    "id":28,
                    "resourceType":"2",
                    "name":"订单撤销",
                    "code":"trustee_order_mgr_cancel",
                    "icon":"",
                    "url":"",
                    "orderValue":9001,
                    "parentId":25,
                    "createTime":1458705055000,
                    "updateTime":1458705055000,
                    "status":1
                },
                {
                    "id":15,
                    "resourceType":"2",
                    "name":"募集结束",
                    "code":"bank_fin_end_of_offer",
                    "icon":"",
                    "url":"",
                    "orderValue":9001,
                    "parentId":13,
                    "createTime":1458705054000,
                    "updateTime":1458705054000,
                    "status":1
                },
                {
                    "id":6,
                    "resourceType":"2",
                    "name":"上架",
                    "code":"toDo_product_put_on",
                    "icon":"",
                    "url":"",
                    "orderValue":9001,
                    "parentId":4,
                    "createTime":1458705054000,
                    "updateTime":1458705054000,
                    "status":1
                },
                {
                    "id":33,
                    "resourceType":"2",
                    "name":"状态维护",
                    "code":"member_status_maint",
                    "icon":"",
                    "url":"",
                    "orderValue":9002,
                    "parentId":30,
                    "createTime":1458705055000,
                    "updateTime":1458705055000,
                    "status":1
                },
                {
                    "id":34,
                    "resourceType":"2",
                    "name":"申请退会",
                    "code":"member_apply_for_withdrawal",
                    "icon":"",
                    "url":"",
                    "orderValue":9003,
                    "parentId":30,
                    "createTime":1458705055000,
                    "updateTime":1458705055000,
                    "status":1
                },
    			{
                    "id":35,
                    "resourceType":"2",
                    "name":"撤销",
                    "code":"product_agency_cancel",
                    "icon":"",
                    "url":"",
                    "orderValue":9001,
                    "parentId":4,
                    "createTime":1458705054000,
                    "updateTime":1458705054000,
                    "status":1
                }
            ]
        }
    };
    res.status(200).send(menus);
    //res.status(600).send({message: "No data."});
}
