const Template = require('../../template');

class Main extends Template {
    constructor() {
        super()
        this.title = "京东无线活动整合"
        this.task = 'active'
        this.verify = 1
        this.manual = 1
        this.readme = `filename_custom="url|id"\n如果显示The ShareCode is empty...\n就是你IP黑了,暂时无法访问活动\n更换ip或者等服务器解除限制方可运行\n如需开卡,filename_expand="openCard"`
        this.import = ['fs', 'jdAlgo']
        this.model = 'user'
        this.filter = "activityId"
    }

    async prepare() {
        this.assert(this.custom, '请先添加环境变量')
        this.dict = {
            'lzkj-isv.isvjcloud.com': [
                'functionId=isvObfuscator&body=%7B%22url%22%3A%22https%3A%2F%2Flzkj-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=1d9f7760c9ffaad4eb&client=apple&clientVersion=10.0.10&st=1646999134752&sv=112&sign=d14c9517190f8a8b0e253e3dbbdee87a',
                'functionId=isvObfuscator&body=%7B%22url%22%3A%22https%3A%2F%2Flzkj-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=18a17aa99f7fcfff35&client=apple&clientVersion=10.0.10&st=1646999134761&sv=121&sign=e930b0308cbfaf4200b2b84b941c6788',
                'functionId=isvObfuscator&body=%7B%22url%22%3A%22https%3A%2F%2Flzkj-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=db9c771d90d938b86b&client=apple&clientVersion=10.0.10&st=1646999134762&sv=112&sign=08221e9c89bbd9ae2c60f2051b7ce505',
                'functionId=isvObfuscator&body=%7B%22url%22%3A%22https%3A%2F%2Flzkj-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=2da6b0bb5954112f4a&client=apple&clientVersion=10.0.10&st=1646999134763&sv=100&sign=32911674584d97be1a250b98533e12f1',
                'functionId=isvObfuscator&body=%7B%22url%22%3A%22https%3A%2F%2Flzkj-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=5353d1987de933bbed&client=apple&clientVersion=10.0.10&st=1646999134765&sv=111&sign=02fabfeb6991fd0942113b8b91daa064',
                'functionId=isvObfuscator&body=%7B%22url%22%3A%22https%3A%2F%2Flzkj-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=5d0ff914dc2f99d1ed&client=apple&clientVersion=10.0.10&st=1646999134767&sv=100&sign=4d926e0ced742ced8a4374811713af51',
                'functionId=isvObfuscator&body=%7B%22url%22%3A%22https%3A%2F%2Flzkj-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=09007f4b53f42ea76a&client=apple&clientVersion=10.0.10&st=1646999134772&sv=112&sign=8b69bb949ac5098e8f0db4697e0ec84a',
                'functionId=isvObfuscator&body=%7B%22url%22%3A%22https%3A%2F%2Flzkj-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=829d99df24e49cdacb&client=apple&clientVersion=10.0.10&st=1646999134773&sv=112&sign=87dbe2a552abef974cfd6d97a7f74b97',
                'functionId=isvObfuscator&body=%7B%22url%22%3A%22https%3A%2F%2Flzkj-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=e8c798cb6d7b13c75b&client=apple&clientVersion=10.0.10&st=1646999134784&sv=112&sign=198854a1e8da61b030924ea640e61b74',
                'functionId=isvObfuscator&body=%7B%22url%22%3A%22https%3A%2F%2Flzkj-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=b024526b380d35c9e3&client=apple&clientVersion=10.0.10&st=1646999134786&sv=102&sign=7d796bf73559e6ef06ad746fdc5445c0'
            ],
            'cjhy-isv.isvjcloud.com': [
                'functionId=isvObfuscator&body=%7B%22url%22%3A%22https%3A%2F%2Fcjhy-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=b024526b380d35c9e3&client=apple&clientVersion=10.0.10&st=1646999134786&sv=111&sign=fd9417f9d8e872da6c55102bd69da99f',
                'functionId=isvObfuscator&body=%7B%22url%22%3A%22https%3A%2F%2Fcjhy-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=c13998164739530b4b&client=apple&clientVersion=10.0.10&st=1646999134787&sv=112&sign=6c8bea1dbcaec6e17841d5e66ed590ed',
                'functionId=isvObfuscator&body=%7B%22url%22%3A%22https%3A%2F%2Fcjhy-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=1d70cd0a0c7096e86d&client=apple&clientVersion=10.0.10&st=1646999134788&sv=111&sign=026a782e2d60aa8e7fbb76f000bcbc7e',
                'functionId=isvObfuscator&body=%7B%22url%22%3A%22https%3A%2F%2Fcjhy-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=293231f92a043e7bee&client=apple&clientVersion=10.0.10&st=1646999134791&sv=112&sign=e13574f1c25f5adf23d0a68bb0728e01',
                'functionId=isvObfuscator&body=%7B%22url%22%3A%22https%3A%2F%2Fcjhy-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=147dc74e2f03ec5e23&client=apple&clientVersion=10.0.10&st=1646999134792&sv=112&sign=5b14dad0922821a65d7acb1da36c0d38',
                'functionId=isvObfuscator&body=%7B%22url%22%3A%22https%3A%2F%2Fcjhy-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=cdea9eb9e5e369c041&client=apple&clientVersion=10.0.10&st=1646999134793&sv=100&sign=a9f78dae735cecf0e4447c6621d0b870',
                'functionId=isvObfuscator&body=%7B%22url%22%3A%22https%3A%2F%2Fcjhy-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=615a2eeca9d867f5f8&client=apple&clientVersion=10.0.10&st=1646999134794&sv=121&sign=afaf2c7b1756cd2dbdc3a0bf2aa72f38',
                'functionId=isvObfuscator&body=%7B%22url%22%3A%22https%3A%2F%2Fcjhy-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=baab1229681d350dd0&client=apple&clientVersion=10.0.10&st=1646999134803&sv=102&sign=91292e8c482052f55bf4a8d90f57d48c',
                'functionId=isvObfuscator&body=%7B%22url%22%3A%22https%3A%2F%2Fcjhy-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=baab1229681d350dd0&client=apple&clientVersion=10.0.10&st=1646999134804&sv=120&sign=0fe8ba286231503a9c8c642995b444bd',
                'functionId=isvObfuscator&body=%7B%22url%22%3A%22https%3A%2F%2Fcjhy-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=f7fc9bef85a8620cdf&client=apple&clientVersion=10.0.10&st=1646999134805&sv=121&sign=0339e05b0ee85e7a9346eb8c1ed7056d'
            ],
            'txzj-isv.isvjcloud.com': [
                'functionId=isvObfuscator&body=%7B%22url%22%3A%22https%3A%2F%2Ftxzj-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=f7fc9bef85a8620cdf&client=apple&clientVersion=10.0.10&st=1646999134805&sv=121&sign=bbe137e2f52dbf3a1f10fa2ffe749d05',
                'functionId=isvObfuscator&body=%7B%22url%22%3A%22https%3A%2F%2Ftxzj-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=2d055826a369eb2fc6&client=apple&clientVersion=10.0.10&st=1646999134807&sv=112&sign=fa00234b1f237624970aed51543c49e2',
                'functionId=isvObfuscator&body=%7B%22url%22%3A%22https%3A%2F%2Ftxzj-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=d5f0ab2b97d36ba178&client=apple&clientVersion=10.0.10&st=1646999134809&sv=112&sign=04895a606933f02321a35f9fca56e807',
                'functionId=isvObfuscator&body=%7B%22url%22%3A%22https%3A%2F%2Ftxzj-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=f491462298964da08f&client=apple&clientVersion=10.0.10&st=1646999134810&sv=111&sign=003c222fc32323957a3da441eb1d0a0d',
                'functionId=isvObfuscator&body=%7B%22url%22%3A%22https%3A%2F%2Ftxzj-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=f491462298964da08f&client=apple&clientVersion=10.0.10&st=1646999134810&sv=111&sign=003c222fc32323957a3da441eb1d0a0d',
                'functionId=isvObfuscator&body=%7B%22url%22%3A%22https%3A%2F%2Ftxzj-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=f491462298964da08f&client=apple&clientVersion=10.0.10&st=1646999134810&sv=112&sign=2fc24960c23983f65ef975d306b21615',
                'functionId=isvObfuscator&body=%7B%22url%22%3A%22https%3A%2F%2Ftxzj-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=d75765b6c47fc7eb46&client=apple&clientVersion=10.0.10&st=1646999134814&sv=102&sign=9753902a4c8467ab9dffcc44ffd82aad',
                'functionId=isvObfuscator&body=%7B%22url%22%3A%22https%3A%2F%2Ftxzj-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=118c532769d7022cc6&client=apple&clientVersion=10.0.10&st=1646999134817&sv=121&sign=44a1b5c6597802dcee364ba80079d668',
                'functionId=isvObfuscator&body=%7B%22url%22%3A%22https%3A%2F%2Ftxzj-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=3d709b9f33d7c423b9&client=apple&clientVersion=10.0.10&st=1646999134834&sv=120&sign=477724fcebcd7c8b54417694714406f1',
                'functionId=isvObfuscator&body=%7B%22url%22%3A%22https%3A%2F%2Ftxzj-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=3d709b9f33d7c423b9&client=apple&clientVersion=10.0.10&st=1646999134834&sv=102&sign=4d1031329bce14b47ae31bbdf03cd5f4'
            ]
        }
        this.isSend = []
        let custom = this.getValue('custom')
        this.algo = new this.modules.jdAlgo({
            appId: "8adfb",
            type: 'app',
            fp: "8389547038003203",
        })
        for (let i of custom) {
            let query = this.query(i, '&', 1)
            if (query.actId && i.includes('exchangeActDetail')) {
                query.type = 'exchangeActDetail'
                query.activityId = query.actId
                query.host = this.match(/\/\/([^\/]+)\//, i)
                this.shareCode.push(query)
            }
            else {
                let acid = this.match([/(\w{32})/, /(\w{24})/, /(\d{12,17})/], i)
                if (acid) {
                    this.code.push({
                        activityId: acid,
                    })
                }
                else {
                    let vid = this.match(/(\d+)/, i)
                    let u = await this.curl({
                            'url': `https://fjzy-isv.isvjcloud.com/index.php?mod=games&action=buyerTokenJson`,
                            'form': `buyerTokenJson={"state":"0","data":"","msg":""}&venderId=${vid}&yxId=5510`,
                        }
                    )
                    if (u.buyPin) {
                        this.code.push({
                            activityId: this.match(/(\d+)/, i),
                            title: '幸运大抽奖',
                            pageUrl: `https://fjzy-isv.isvjcloud.com/index.php?mod=games&c=redpape&venderId=${vid}&yxId=5510`,
                            type: "lucky"
                        })
                    }
                }
            }
            let array = [
                "lzkj-isv.isvjcloud.com",
                "cjhy-isv.isvjcloud.com",
            ]
            let shopArray = [
                'txzj-isv.isvjcloud.com'
            ]
            for (let i of this.code) {
                if (i.activityId.length == 32) {
                    for (let host of array) {
                        // let p = await this.response({
                        //         'url': `https://${host}/wxCommonInfo/token`,
                        //     }
                        // )
                        // var s = await this.curl({
                        //         'url': `https://${host}/customer/getSimpleActInfoVo`,
                        //         'form': `activityId=${i.activityId}`,
                        //         cookie: p.cookie
                        //     }
                        // )
                        // if (!this.haskey(s, 'data')) {
                        switch (host) {
                            case "cjhy-isv.isvjcloud.com":
                                var h = await this.response({
                                        'url': `https://${host}/wxCollectionActivity/activity?activityId=${i.activityId}`,
                                    }
                                )
                                break
                            default:
                                var h = await this.response({
                                        'url': `https://${host}/wxCollectionActivity/activity2/${i.activityId}?activityId=${i.activityId}`,
                                    }
                                )
                                break
                        }
                        let s = await this.curl({
                                'url': `https://${host}/customer/getSimpleActInfoVo`,
                                form: `activityId=${i.activityId}`,
                                cookie: h.cookie
                            }
                        )
                        // }
                        if (this.haskey(s, 'data')) {
                            let data = s.data
                            data.host = host
                            switch (data.activityType) {
                                case 5:
                                case 6:
                                    data.type = 'wxCollectionActivity'
                                    data.title = "加购有礼"
                                    data.pageUrl = `https://${host}/wxCollectionActivity/activity2/${i.activityId}?activityId=${i.activityId}`
                                    break
                                case 11:
                                case 12:
                                case 13:
                                    data.type = 'wxDrawActivity'
                                    data.title = "幸运大转盘"
                                    data.pageUrl = `https://${host}/${data.type}/activity?activityId=${i.activityId}`
                                    break
                                case 24:
                                case 73:
                                    data.type = 'wxShopGift'
                                    data.title = "店铺礼包"
                                    data.pageUrl = `https://${host}/wxShopGift/activity?activityId=${i.activityId}`
                                    break
                                case 46:
                                case 102:
                                case 100:
                                    data.type = 'wxTeam'
                                    data.title = "组队瓜分"
                                    data.pageUrl = `https://${host}/wxTeam/activity2?activityId=${i.activityId}`
                                    break
                                case 26:
                                    data.type = 'wxPointDrawActivity'
                                    data.title = "积分兑换"
                                    data.pageUrl = `https://${host}/wxPointDrawActivity/activity?activityId=${i.activityId}`
                                    break
                                case 17:
                                    data.type = 'wxShopFollowActivity'
                                    data.title = "关注店铺"
                                    data.pageUrl = `https://${host}/wxShopFollowActivity/activity?activityId=${i.activityId}`
                                    break
                                case 2001:
                                case 2003:
                                    data.type = 'drawCenter'
                                    data.title = '幸运抽奖'
                                    data.pageUrl = `https://${host}/drawCenter/activity?activityId=${i.activityId}`
                                    break
                                case 7:
                                    data.type = 'wxGameActivity'
                                    data.title = "无线游戏"
                                    data.pageUrl = `https://${host}/wxGameActivity/activity?activityId=${i.activityId}`
                                    break
                                case 65:
                                    data.type = 'wxBuildActivity'
                                    data.tittle = "盖楼有礼"
                                    data.pageUrl = `https://${host}/wxBuildActivity/activity?activityId=${i.activityId}`
                                    break
                                case 15:
                                    data.type = 'sign'
                                    data.title = "签到有礼"
                                    data.pageUrl = `https://${host}/sign/signActivity2?activityId=${i.activityId}`
                                    break
                                case 18:
                                    data.type = 'sevenDay'
                                    data.title = "七天签到"
                                    data.pageUrl = `https://${host}/sign/sevenDay/signActivity?activityId=${i.activityId}`
                                    break
                                case 400:
                                    data.type = 'microDz'
                                    data.title = "微定制"
                                    data.pageUrl = `https://${host}/microDz/invite/activity/wx/view/index?activityId=${i.activityId}`
                                    break
                                case 104:
                                    data.type = "wxMcLevelAndBirthGifts"
                                    data.title = "等级礼包"
                                    data.pageUrl = `https://${host}/mc/wxMcLevelAndBirthGifts/activity?activityId=${i.activityId}`
                                    break
                                // case 40:
                                //     data.type = 'wxInviteActivity'
                                //     data.title = "邀请关注有礼"
                                //     data.pageUrl = `https://${host}/wxInviteActivity/invitee?activityId=${i.activityId}`
                                //     break
                                case 16:
                                    data.type = "daily"
                                    data.title = "每日抢"
                                    data.pageUrl = `https://${host}/activity/daily/wx/indexPage1/${i.activityId}?activityId=${i.activityId}`
                                    break
                                // case 66:
                                //     data.type = "WxHbShareActivity"
                                //     data.title = "拼手气赢红包"
                                //     data.pageUrl = `https://${host}/WxHbShareActivity/view/activity/${i.activityId}?activityId=${i.activityId}`
                                //     break
                            }
                            if (!data.pageUrl) {
                                data.pageUrl = i.activityId
                            }
                            let shopInfo = await this.curl({
                                    'url': `https://api.m.jd.com/?functionId=lite_getShopHomeBaseInfo&body={"shopId":"${data.shopId}","venderId":"${data.venderId}","source":"appshop"}&t=1646398923902&appid=jdlite-shop-app&client=H5`,
                                }
                            )
                            if (this.haskey(shopInfo, 'result.shopInfo.shopName')) {
                                data.shopName = shopInfo.result.shopInfo.shopName
                            }
                            if (['wxTeam'].includes(data.type)) {
                                await this.wxTeam(data)
                            }
                            else if (['microDz'].includes(data.type)) {
                                await this.microDz(data)
                            }
                            else if (['WxHbShareActivity'].includes(data.type)) {
                                await this.WxHbShareActivity(data)
                            }
                            else {
                                this.shareCode.push(data)
                            }
                            break
                        }
                    }
                }
                else if (!isNaN(i.activityId)) {
                    if (this.haskey(i, 'type', 'lucky')) {
                        this.shareCode.push(i)
                    }
                    else {
                        let venderId = i.activityId.substr(4, i.activityId.length - 6)
                        for (let host of array) {
                            let token = await this.response({
                                    'url': `https://${host}/wxCommonInfo/token`,
                                }
                            )
                            let s = await this.curl({
                                    'url': `https://${host}/pointExchange/activityContent`,
                                    'form': `activityId=${i.activityId}&pin=werwr36235244`,
                                    cookie: token.cookie
                                }
                            )
                            if (this.haskey(s, 'data.activity')) {
                                this.shareCode.push({
                                    "venderId": venderId,
                                    "activityId": i.activityId,
                                    type: 'pointExchange',
                                    host
                                })
                                break
                            }
                        }
                    }
                }
            }
        }
        if (this.shareCode.length<1) {
            console.log("没获取到数据,可能IP黑了或者类型不支持")
        }
    }

    async main(p) {
        let type = p.inviter.type
        if (!this.isSend.includes(this.md5(`${p.inviter.activityId},${p.inviter.signUuid}`))) {
            let text = `🐽🐽\n活动店铺: ${p.inviter.shopName}\n活动地址: ${p.inviter.pageUrl}\n活动ID: ${p.inviter.activityId}\n活动名称: ${p.inviter.title}\n活动类型: ${p.inviter.type}`
            if (p.inviter.signUuid) {
                text += `\n${p.inviter.signUuid}`
            }
            this.notices(text, "当前活动信息")
            this.isSend.push(
                this.md5(`${p.inviter.activityId},${p.inviter.signUuid}`)
            )
        }
        if (type == 'exchangeActDetail') {
            await this.rType(p)
        }
        else if (type == 'lucky') {
            await this.lType(p)
        }
        else {
            await this.dType(p)
        }
    }

    async dType(p) {
        let pin = this.userPin(p.cookie)
        let host = p.inviter.host
        let activityId = p.inviter.activityId
        let at = p.inviter.activityType
        let type = p.inviter.type
        console.log(`活动ID: ${activityId}`)
        this.assert(type, "不支持的活动类型")
        let venderId = p.inviter.venderId
        let shopId = p.inviter.shopId
        if (p.inviter.pageUrl) {
            console.log(`活动地址: ${p.inviter.pageUrl}`)
        }
        if (p.inviter.shopName) {
            console.log(`活动店铺: ${p.inviter.shopName}`)
        }
        let gifts = []
        let skuList = []
        let getPin = await this.getMyPing(p)
        if (!getPin) {
            return
        }
        var secretPin = getPin.content.data.secretPin
        let sp = getPin.content.data.secretPin
        // 判断开卡
        if (this.getValue('expand').includes('openCard')) {
            for (let kk of Array(3)) {
                var o = await this.algo.curl({
                        'url': `https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=bindWithVender&body={"venderId":"${venderId}","shopId":"${shopId}","bindByVerifyCodeFlag":1,"registerExtend":{"v_birthday":"${this.rand(1990, 2002)}-07-${this.rand(10, 28)}"},"writeChildFlag":0,"activityId":${p.inviter.jdActivityId},"channel":8016}&clientVersion=9.2.0&client=H5&uuid=88888`,
                        // 'form':``,
                        cookie: p.cookie
                    }
                )
                if (o.success) {
                    break
                }
            }
            console.log(`开卡中`, o.success)
        }
        // 不同域名下的secretPin形式不一样
        switch (host) {
            case "cjhy-isv.isvjcloud.com":
                secretPin = escape(encodeURIComponent(secretPin))
                break
            default:
                secretPin = encodeURIComponent(secretPin)
                break
        }
        // 认证getPin信息
        let pageUrl = encodeURIComponent(`https://${host}/sign/signActivity?activityId=${activityId}&venderId=${venderId}`)
        let log = await this.response({
                'url': `https://${host}/common/accessLog`,
                'form': `venderId=${venderId}&code=${at}&pin=${secretPin}&activityId=${activityId}&pageUrl=${pageUrl}&subType=app`,
                cookie: getPin.cookie
            }
        )
        if (['sign'].includes(type)) {
            let signUp = await this.curl({
                    'url': `https://${host}/sign/wx/signUp`,
                    'form': `venderId=${venderId}&pin=${secretPin}&actId=${activityId}`,
                    cookie: getPin.cookie
                }
            )
            if (this.haskey(signUp, 'gift.giftName')) {
                console.log(`获得: ${signUp.gift.giftName}`)
                gifts.push(signUp.gift.giftName)
            }
            else {
                console.log(signUp)
                console.log(signUp.errorMessage || signUp.msg || "什么也没有")
            }
        }
        else if (['sevenDay'].includes(type)) {
            let signUp = await this.curl({
                    'url': `https://${host}/sign/${type}/wx/signUp`,
                    'form': `venderId=${venderId}&pin=${secretPin}&actId=${activityId}`,
                    cookie: getPin.cookie
                }
            )
            if (this.haskey(signUp, 'signResult.gift.giftName')) {
                console.log(`获得: ${signUp.signResult.gift.giftName}`)
                gifts.push(signUp.signResult.gift.giftName)
            }
            else {
                console.log(signUp)
                console.log(signUp.errorMessage || signUp.msg || "什么也没有")
            }
        }
        else if (['daily'].includes(type)) {
            let draw = await this.curl({
                    'url': `https://${host}/activity/daily/wx/grabGift`,
                    'form': `actId=${activityId}&pin=${secretPin}`,
                    cookie: getPin.cookie
                }
            )
            if (draw.isOk) {
                console.log(this.haskey(draw, 'gift.gift.name'))
                this.notices(this.haskey(draw, 'gift.gift.name'), p.user)
            }
            else {
                console.log(draw.msg || "什么也没有抢到")
            }
        }
        else {
            let signUuid = p.inviter.signUuid
            if (['microDz'].includes(type)) {
                // 这边不做限制
            }
            else {
                var url = `https://${host}/${type}/activityContent`
                if (type == 'wxMcLevelAndBirthGifts') {
                    url = `https://${host}/mc/wxMcLevelAndBirthGifts/activityContent`
                }
                var activityContent = await this.response({
                        url,
                        'form': `pin=${secretPin}&activityId=${activityId}&buyerPin=${secretPin}&signUuid=${signUuid}&nick=${pin}`,
                        cookie: `${getPin.cookie};`
                    }
                )
                // console.log(activityContent.content.data)
                if (!this.haskey(activityContent, 'content.result')) {
                    console.log(activityContent.content.errorMessage)
                    return
                }
            }
            let need = this.haskey(activityContent, 'content.data.needCollectionSize')
            let has = this.haskey(activityContent, 'content.data.hasCollectionSize')
            let skus = await this.curl({
                    'url': `https://${host}/act/common/findSkus`,
                    'form': `actId=${activityId}&userId=${venderId}&type=${p.inviter.activityType}`,
                    cookie: `${getPin.cookie}`
                }
            )
            let wxFollow = await this.response({
                    'url': `https://${host}/wxActionCommon/followShop`,
                    'form': `userId=${venderId}&buyerNick=${secretPin}&activityId=${activityId}&activityType=${p.inviter.activityType}`,
                    cookie: `${getPin.cookie}`
                }
            )
            skuList = this.column(skus.skus, 'skuId').map(d => d.toString())
            if (!['wxTeam'].includes(type)) {
                if (skuList.length) {
                    console.log(`加购列表: ${this.dumps(skuList)}`)
                }
            }
            if (['wxCollectionActivity'].includes(type)) {
                // 判断数据中是否存在一键加购字段
                if (this.haskey(activityContent, 'content.data.oneKeyAddCart')) {
                    for (let z = 0; z<3; z++) {
                        var add = await this.response({
                                'url': `https://${host}/wxCollectionActivity/oneKeyAddCart`,
                                form: `activityId=${activityId}&pin=${secretPin}&productIds=${this.dumps(this.column(skus.skus, 'skuId'))}`,
                                cookie: `${getPin.cookie}`
                            }
                        )
                        await this.wait(1000)
                    }
                    if (add.cookie) {
                        var cookie = `${add.cookie};AUTH_C_USER=${secretPin};`
                    }
                }
                else {
                    cookie = `${getPin.cookie}`
                    for (let k of skuList) {
                        let addOne = await this.response({
                                'url': `https://${host}/wxCollectionActivity/addCart`,
                                'form': `activityId=${activityId}&pin=${secretPin}&productId=${k}`,
                                cookie
                            }
                        )
                        console.log(`加购: ${k}`)
                        if (this.haskey(addOne, 'content.data.hasAddCartSize') == need) {
                            break
                        }
                        if (this.haskey(addOne, 'content.errorMessage').includes('异常')) {
                            console.log(addOne.content.errorMessage)
                            return
                        }
                        var cookie = `${addOne.cookie};AUTH_C_USER=${secretPin};`
                    }
                }
                if (skuList.length) {
                    console.log("加购有延迟,等待3秒...")
                    await this.wait(3000)
                }
                while (true) {
                    for (let nn = 0; nn<3; nn++) {
                        var getPrize = await this.curl({
                                'url': `https://${host}/wxCollectionActivity/getPrize`,
                                form: `activityId=${activityId}&pin=${secretPin}`,
                                cookie
                            }
                        )
                        if (getPrize.errorMessage && (getPrize.errorMessage.includes("擦肩") || getPrize.errorMessage.includes("未达到领奖条件"))) {
                            console.log('奖品与您擦肩而过了哟,重新获取')
                            await this.wait(1000)
                        }
                        else {
                            break
                        }
                    }
                    if (this.haskey(getPrize, 'data.drawOk')) {
                        console.log(`获得: ${getPrize.data.name}`)
                        gifts.push(getPrize.data.name)
                    }
                    else {
                        console.log(getPrize.errorMessage || getPrize.msg || "什么也没有")
                    }
                    if (!this.haskey(getPrize, 'data.canDrawTimes')) {
                        break
                    }
                }
            }
            else if (['drawCenter'].includes(type)) {
                while (true) {
                    let getPrize = await this.curl({
                            'url': `https://${host}/drawCenter/draw/luckyDraw`,
                            form: `activityId=${activityId}&pin=${secretPin}`,
                            cookie: getPin.cookie
                        }
                    )
                    // console.log(getPrize)
                    if (this.haskey(getPrize, 'data.drawOk')) {
                        console.log(`获得: ${getPrize.data.name}`)
                        gifts.push(getPrize.data.name)
                    }
                    else {
                        console.log(getPrize.errorMessage || getPrize.msg || "什么也没有")
                    }
                    if (!this.haskey(getPrize, 'data.canDrawTimes')) {
                        break
                    }
                }
            }
            else if (['wxDrawActivity', 'wxPointDrawActivity'].includes(type)) {
                while (true) {
                    let draw = await this.curl({
                            'url': `https://${host}/${type}/start`,
                            'form': `pin=${secretPin}&activityId=${activityId}`,
                            cookie: `${getPin.cookie}`
                        }
                    )
                    // console.log(draw)
                    if (this.haskey(draw, 'data.drawOk')) {
                        gifts.push(draw.data.drawInfo.name)
                        console.log(`获得奖品: ${draw.data.drawInfo.name} ${draw.data.drawInfo.priceInfo}`)
                    }
                    else {
                        console.log(draw.errorMessage || draw.msg || "什么也没有")
                    }
                    if (!this.haskey(draw, 'data.canDrawTimes')) {
                        break
                    }
                }
            }
            else if (['wxShopGift'].includes(type)) {
                let ad = await this.response({
                        'url': `https://${host}/common/accessLogWithAD`,
                        'form': `venderId=${venderId}&code=24&pin=${encodeURIComponent(getPin.content.data.secretPin)}&activityId=${activityId}&pageUrl=https%3A%2F%2Flzkj-isv.isvjcloud.com%2FwxShopGift%2Factivity%3FactivityId%3D${activityId}`,
                        cookie: getPin.cookie
                    }
                )
                let ac = await this.response({
                        'url': `https://${host}/${type}/activityContent`,
                        'form': `activityId=${activityId}&buyerPin=${encodeURIComponent(getPin.content.data.secretPin)}`,
                        cookie: ad.cookie
                    }
                )
                let draw = await this.curl({
                        'url': `https://${host}/wxShopGift/draw`,
                        'form': `activityId=${activityId}&buyerPin=${encodeURIComponent(getPin.content.data.secretPin)}&hasFollow=false&accessType=app`,
                        cookie: ac.cookie
                    }
                )
                // console.log(draw)
                if (draw.result) {
                    console.log(this.haskey(ac.content, 'data.list') || ac.content)
                    let g = {
                        'jd': '京豆',
                        'jf': '积分',
                        'dq': `东券`,
                    }
                    for (let i of this.haskey(ac.content, 'data.list')) {
                        console.log(`获得: ${i.takeNum}${g[i.type]}`)
                        gifts.push(
                            `${i.takeNum}${g[i.type]}`
                        )
                    }
                }
                else {
                    console.log(draw.errorMessage || draw.msg || `什么也没有`)
                }
            }
            else if (['wxShopFollowActivity'].includes(type)) {
                while (true) {
                    let getPrize = await this.curl({
                            'url': `https://${host}/${type}/getPrize`,
                            form: `activityId=${activityId}&pin=${secretPin}`,
                            cookie: getPin.cookie
                        }
                    )
                    // console.log(getPrize)
                    if (this.haskey(getPrize, 'data.drawOk')) {
                        console.log(`获得: ${getPrize.data.name}`)
                        gifts.push(getPrize.data.name)
                    }
                    else {
                        console.log(getPrize.errorMessage || getPrize.msg || "什么也没有")
                    }
                    if (!this.haskey(getPrize, 'data.canDrawTimes')) {
                        break
                    }
                }
            }
            else if (['wxGameActivity'].includes(type)) {
                while (true) {
                    let getPrize = await this.curl({
                            'url': `https://${host}/${type}/gameOverRecord`,
                            form: `activityId=${activityId}&pin=${secretPin}&score=${this.rand(1000, 100000)}`,
                            cookie: getPin.cookie
                        }
                    )
                    // console.log(getPrize)
                    if (this.haskey(getPrize, 'data.drawOk')) {
                        console.log(`获得: ${getPrize.data.name}`)
                        gifts.push(getPrize.data.name)
                    }
                    else {
                        console.log(getPrize.errorMessage || getPrize.msg || "什么也没有")
                    }
                    if (!this.haskey(getPrize, 'data.canDrawTimes')) {
                        break
                    }
                }
            }
            else if (['wxBuildActivity'].includes(type)) {
                while (true) {
                    let content = "很好!"
                    if (this.haskey(activityContent, 'content.data.words')) {
                        content = this.random(activityContent.content.data.words, 1)[0].content
                    }
                    let c = await this.response({
                            'url': `https://${host}/${type}/currentFloor`,
                            'form': `activityId=${activityId}`,
                            cookie: getPin.cookie
                        }
                    )
                    if (this.haskey(c, 'content.data.currentFloors')) {
                        console.log(`盖楼楼层: ${c.content.data.currentFloors}`)
                    }
                    let getPrize = await this.curl({
                            'url': `https://${host}/${type}/publish`,
                            'form': `pin=${secretPin}&activityId=${activityId}&content=${encodeURIComponent(content)}`,
                            cookie: c.cookie
                        }
                    )
                    // console.log(getPrize)
                    if (this.haskey(getPrize, 'data.drawResult.drawOk')) {
                        console.log(`获得: ${getPrize.data.drawResult.name}`)
                        gifts.push(getPrize.data.drawResult.name)
                    }
                    else {
                        console.log(getPrize.errorMessage || getPrize.msg || "什么也没有")
                    }
                    if (!this.haskey(getPrize, 'data.drawResult.canDrawTimes')) {
                        break
                    }
                }
            }
            else if (['wxTeam'].includes(type)) {
                if (this.haskey(activityContent, 'content.data.canJoin')) {
                    console.log("入会有延迟,等待3秒...")
                    await this.wait(3000)
                    let join = await this.curl({
                            'url': `https://${host}/${type}/saveMember`,
                            'form': `pin=${secretPin}&activityId=${activityId}&signUuid=${signUuid}&pinImg=${encodeURIComponent('https://storage.jd.com/karma/image/20220112/1dafd93018624d74b5f01f82c9ac97b0.png')}`,
                            cookie: getPin.cookie
                        }
                    )
                    console.log(join)
                    if (this.dumps(join).includes("满员")) {
                        this.finish.push(p.number)
                    }
                }
                else {
                    console.log('不能参团,或者已经参加过活动')
                }
            }
            else if (['wxMcLevelAndBirthGifts'].includes(type)) {
                let getMemberLevel = await this.curl({
                        'url': `https://${host}/mc/wxMcLevelAndBirthGifts/getMemberLevel`,
                        'form': `venderId=${venderId}&pin=${secretPin}&activityId=${activityId}`,
                        cookie: getPin.cookie
                    }
                )
                if (this.haskey(getMemberLevel, 'data.level')) {
                    if (!this.haskey(activityContent, 'content.data.isReceived')) {
                        let level = parseInt(getMemberLevel.data.level)
                        for (let ll = 1; ll<=level; ll++) {
                            let s = await this.curl({
                                    'url': `https://${host}/mc/wxMcLevelAndBirthGifts/sendLevelGifts`,
                                    'form': `venderId=${venderId}&pin=${secretPin}&level=${ll}&activityId=${activityId}`,
                                    cookie: getPin.cookie
                                }
                            )
                            if (this.haskey(s, 'data.levelData')) {
                                if (s.data.levelData.length) {
                                    for (let k of s.data.levelData) {
                                        console.log(k)
                                        this.notices(`获得奖励: ${k.beanNum} ${k.name}`)
                                    }
                                }
                                else {
                                    console.log(s.data.levelError || "可能已经获取过奖励了")
                                }
                            }
                            else {
                                console.log("什么奖励也没有")
                            }
                        }
                    }
                    else {
                        console.log(`没有获取到等级信息`)
                    }
                }
                else {
                    console.log("已经领取过了")
                }
            }
            else if (['pointExchange'].includes(type)) {
                let g = await this.response({
                        'url': `https://${host}/common/pointRedeem/getGiftList`,
                        'form': `pin=${secretPin}&venderId=${venderId}`,
                        cookie: getPin.cookie
                    }
                )
                if (this.haskey(g, 'content.point')) {
                    let point = g.content.point
                    console.log('有积分:', point)
                    let reward = await this.curl({
                            'url': `https://${host}/pointExchange/exchange`,
                            'form': `pin=${secretPin}&activityId=${venderId}&beanCount=${point}`,
                            cookie: getPin.cookie
                        }
                    )
                    console.log(reward)
                }
                else {
                    console.log("没有积分可以兑换")
                }
            }
            else if (['microDz'].includes(type)) {
                let f = await this.curl({
                        'url': `https://${host}/microDz/invite/activity/wx/acceptInvite
                        `,
                        'form': `activityId=${activityId}&invitee=${secretPin}&inviteeNick=${pin}&inviteeImg=${encodeURIComponent('https://storage.jd.com/karma/image/20220112/1dafd93018624d74b5f01f82c9ac97b0.png')}&inviter=${p.inviter.inviter}&inviterNick=${p.inviter.inviterNick}&inviterImg=${p.inviter.imgUrl}`,
                        cookie: getPin.cookie
                    }
                )
                if (f.result) {
                    console.log("加团成功")
                    for (let kkk of this.venderIds || []) {
                        for (let kk of Array(3)) {
                            var o = await this.algo.curl({
                                    'url': `https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=bindWithVender&body={"venderId":"${kkk}","shopId":"","bindByVerifyCodeFlag":1,"registerExtend":{"v_birthday":"${this.rand(1990, 2002)}-07-${this.rand(10, 28)}"},"writeChildFlag":0,"activityId":"","channel":8016}&clientVersion=9.2.0&client=H5&uuid=88888`,
                                    cookie: p.cookie
                                }
                            )
                            if (o.success) {
                                break
                            }
                        }
                        console.log(kkk, `开卡中`, o.success)
                    }
                }
                else {
                    console.log(f.errorMessage)
                }
            }
        }
        if (gifts.length) {
            // gifts.unshift(`活动店铺: ${p.inviter.shopName}\n活动ID: ${activityId}`)
            this.notices(gifts.join("\n"), p.user)
        }
        // 取消关注店铺
        await this.curl({
            'url': 'https://api.m.jd.com/client.action?g_ty=ls&g_tk=518274330',
            'form': `functionId=followShop&body={"follow":"false","shopId":"${shopId}","venderId":"${venderId}","award":"true","sourceRpc":"shop_app_home_follow"}&osVersion=13.7&appid=wh5&clientVersion=9.2.0&loginType=2&loginWQBiz=interact`,
            cookie: p.cookie
        })
        // 删除加购
        if (skuList.length) {
            let s = await this.curl({
                    'url': `https://wq.jd.com/deal/mshopcart/rmvCmdy?sceneval=2&g_login_type=1&g_ty=ajax`,
                    'form': `pingouchannel=0&commlist=123,,1,123,11,123,0,skuUuid:aaa@@useUuid:0&type=0&checked=0&locationid=&templete=1&reg=1&scene=0&version=20190418&traceid=1394319544881167891&tabMenuType=1&sceneval=2`,
                    cookie: p.cookie
                }
            )
            let list = []
            let name = []
            let n = 0
            try {
                let cart = s.cart.venderCart
                for (let i of cart) {
                    for (let items of i.sortedItems) {
                        for (let products of items.polyItem.products) {
                            if (skuList.includes(products.mainSku.id.toString())) {
                                if (this.haskey(items, 'polyItem.promotion.pid')) {
                                    list.push(`${products.mainSku.id},,1,${products.mainSku.id},11,${items.polyItem.promotion.pid},0,skuUuid:${products.skuUuid}@@useUuid:0`)
                                }
                                else {
                                    list.push(
                                        `${products.mainSku.id},,1,${products.mainSku.id},1,,0,skuUuid:${products.skuUuid}@@useUuid:0`
                                    )
                                }
                                name.push(
                                    `${products.mainSku.id} -- ${products.mainSku.name}`
                                )
                                n++
                            }
                        }
                    }
                }
            } catch (e) {
            }
            if (list.length) {
                s = await this.curl({
                        'url': `https://wq.jd.com/deal/mshopcart/rmvCmdy?sceneval=2&g_login_type=1&g_ty=ajax`,
                        'form': `pingouchannel=0&commlist=${list.join("$")}&checked=0&locationid=&templete=1&reg=1&scene=0&version=20190418&traceid=&tabMenuType=1&sceneval=2`,
                        cookie: p.cookie
                    }
                )
                console.log(`删除购物车商品数: ${list.length}`)
            }
        }
    }

    async rType(p) {
        let pin = this.userPin(p.cookie)
        let host = p.inviter.host
        let activityId = p.inviter.activityId
        console.log(`活动ID: ${activityId}`)
        let at = p.inviter.activityType
        let type = p.inviter.type
        this.assert(type, "不支持的活动类型")
        let venderId = p.inviter.venderId
        let shopId = p.inviter.shopId
        if (p.inviter.pageUrl) {
            console.log(`活动地址: ${p.inviter.pageUrl}`)
        }
        if (p.inviter.shopName) {
            console.log(`活动店铺: ${p.inviter.shopName}`)
        }
        let gifts = []
        let skuList = []
        if (type == 'exchangeActDetail') {
            let isvObfuscator = await this.curl({
                url: 'https://api.m.jd.com/client.action',
                form: 'functionId=isvObfuscator&body=%7B%22id%22%3A%22%22%2C%22url%22%3A%22https%3A%2F%2Fddsj-dz.isvjcloud.com%22%7D&uuid=5162ca82aed35fc52e8&client=apple&clientVersion=10.0.10&st=1631884203742&sv=112&sign=fd40dc1c65d20881d92afe96c4aec3d0',
                cookie: p.cookie
            })
            let reward = await this.curl({
                    'url': `https://${host}/ql/front/postQlExchange`,
                    'form': `act_id=9e8080cd7f4f2d0f017f68437a964e83&user_id=618229`,
                    cookie: `IsvToken=${isvObfuscator.token}`,
                    headers: {
                        'Accept-Language': 'zh-CN,zh-Hans;q=0.9'
                    }
                }
            )
            console.log(this.dumps(reward))
            return
        }
    }

    async lType(p) {
        let isvObfuscator = await this.curl({
            url: 'https://api.m.jd.com/client.action',
            form: 'functionId=isvObfuscator&body=%7B%22url%22%3A%22https%3A%2F%2Flzkj-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=2da6b0bb5954112f4a&client=apple&clientVersion=10.0.10&st=1646999134763&sv=100&sign=32911674584d97be1a250b98533e12f1',
            cookie: p.cookie
        })
        let u = await this.curl({
                'url': `https://fjzy-isv.isvjcloud.com/index.php?mod=games&action=buyerTokenJson`,
                'form': `buyerTokenJson={"state":"0","data":"${isvObfuscator.token}","msg":""}&venderId=${p.inviter.activityId}&yxId=5510`,
                cookie: `IsvToken:${isvObfuscator.token}`
            }
        )
        if (u.drawNum) {
            let r = await this.curl({
                    'url': `https://fjzy-isv.isvjcloud.com/index.php?mod=games&action=check&venderId=${p.inviter.activityId}&actId=6&yxId=5510&token=undefined&buyPin=${u.buyPin}`,
                    cookie: `IsvToken:${isvObfuscator.token}`
                }
            )
            console.log(r.result.prize)
            if (this.haskey(r, 'result.grade', 1)) {
                this.notices(r.result.prize, p.user)
            }
        }
        else {
            console.log('没有抽奖机会')
        }
    }

    async microDz(data) {
        data.sid = 599119
        for (let cookie of this.cookies['help']) {
            let p = {
                cookie, inviter: data
            }
            let user = this.userPin(cookie)
            try {
                for (let nnn = 0; nnn<2; nnn++) {
                    var getPin = await this.getMyPing(p)
                    if (getPin) {
                        break
                    }
                }
                if (getPin) {
                    let venderId = p.inviter.venderId
                    let shopId = p.inviter.shopId
                    var secretPin = getPin.content.data.secretPin
                    let activityId = p.inviter.activityId
                    let host = p.inviter.host
                    switch (host) {
                        case "cjhy-isv.isvjcloud.com":
                            secretPin = escape(encodeURIComponent(secretPin))
                            break
                        default:
                            secretPin = encodeURIComponent(secretPin)
                            break
                    }
                    let acc = await this.curl({
                            'url': `https://${host}/microDz/invite/activity/wx/getActivityInfo`,
                            'form': `activityId=${activityId}`,
                            cookie: getPin.cookie
                        }
                    )
                    let venderIds = []
                    if (this.haskey(acc, 'data.venderIds')) {
                        venderIds = acc.data.venderIds.split(",")
                        this.venderIds = venderIds
                        if (this.getValue('expand').includes('openCard')) {
                            for (let kkk of venderIds) {
                                for (let kk of Array(3)) {
                                    var o = await this.algo.curl({
                                            'url': `https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=bindWithVender&body={"venderId":"${kkk}","shopId":"","bindByVerifyCodeFlag":1,"registerExtend":{"v_birthday":"${this.rand(1990, 2002)}-07-${this.rand(10, 28)}"},"writeChildFlag":0,"activityId":"","channel":8016}&clientVersion=9.2.0&client=H5&uuid=88888`,
                                            // 'form':``,
                                            cookie: p.cookie
                                        }
                                    )
                                    if (o.success) {
                                        break
                                    }
                                }
                                console.log(kkk, `开卡中`, o.success)
                            }
                        }
                    }
                    let inviter = await this.curl({
                            'url': `https://${host}/microDz/invite/activity/wx/inviteRecord`,
                            'form': `activityId=${activityId}&inviter=${secretPin}&pageNo=1&pageSize=15&type=0`,
                            cookie: getPin.cookie
                        }
                    )
                    if (this.haskey(inviter, 'data.inviterNick')) {
                        data.inviter = secretPin
                        data.venderIds = venderIds
                        this.shareCode.push({...data, ...inviter.data})
                    }
                }
            } catch (e) {
            }
        }
    }

    async wxTeam(data) {
        for (let cookie of this.cookies['help']) {
            let p = {
                cookie, inviter: data
            }
            let user = this.userPin(cookie)
            try {
                for (let nnn = 0; nnn<2; nnn++) {
                    var getPin = await this.getMyPing(p)
                    if (getPin) {
                        break
                    }
                }
                if (getPin) {
                    let venderId = p.inviter.venderId
                    let shopId = p.inviter.shopId
                    var secretPin = getPin.content.data.secretPin
                    let activityId = p.inviter.activityId
                    let host = p.inviter.host
                    if (this.getValue('expand').includes('openCard')) {
                        for (let kk of Array(3)) {
                            var o = await this.algo.curl({
                                    'url': `https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=bindWithVender&body={"venderId":"${venderId}","shopId":"${shopId}","bindByVerifyCodeFlag":1,"registerExtend":{"v_birthday":"${this.rand(1990, 2002)}-07-${this.rand(10, 28)}"},"writeChildFlag":0,"activityId":${p.inviter.jdActivityId},"channel":8016}&clientVersion=9.2.0&client=H5&uuid=88888`,
                                    cookie: p.cookie
                                }
                            )
                            if (o.success) {
                                break
                            }
                        }
                        console.log(user, `开卡中`, o.success)
                    }
                    switch (host) {
                        case "cjhy-isv.isvjcloud.com":
                            secretPin = escape(encodeURIComponent(secretPin))
                            break
                        default:
                            secretPin = encodeURIComponent(secretPin)
                            break
                    }
                    let wxFollow = await this.response({
                            'url': `https://${p.inviter.host}/wxActionCommon/followShop`,
                            'form': `userId=${venderId}&buyerNick=${secretPin}&activityId=${p.inviter.activityId}&activityType=${p.inviter.activityType}`,
                            cookie: `${getPin.cookie}`
                        }
                    )
                    let ac = await this.curl({
                            'url': `https://${host}/wxTeam/activityContent`,
                            'form': `activityId=${p.inviter.activityId}&pin=${secretPin}`,
                            cookie: getPin.cookie
                        }
                    )
                    if (this.haskey(ac, 'data.successRetList') && ac.data.successRetList.length == ac.data.active.maxGroup) {
                        console.log(user, "人员已满")
                    }
                    else {
                        if (this.haskey(ac, 'data.signUuid')) {
                            var signUuid = ac.data.signUuid
                        }
                        else {
                            let pageUrl = encodeURIComponent(`https://${host}/sign/signActivity?activityId=${p.inviter.activityId}&venderId=${venderId}`)
                            let log = await this.response({
                                    'url': `https://${host}/common/accessLog`,
                                    'form': `venderId=${venderId}&code=${p.inviter.activityType}&pin=${secretPin}&activityId=${p.inviter.activityId}&pageUrl=${pageUrl}&subType=app`,
                                    cookie: getPin.cookie
                                }
                            )
                            let catpain = await this.curl({
                                    'url': `https://${host}/wxTeam/saveCaptain`,
                                    'form': `activityId=${p.inviter.activityId}&pin=${secretPin}&pinImg=${encodeURIComponent('https://storage.jd.com/karma/image/20220112/1dafd93018624d74b5f01f82c9ac97b0.png')}`,
                                    cookie: getPin.cookie
                                }
                            )
                            if (this.haskey(catpain, 'data.signUuid')) {
                                var signUuid = catpain.data.signUuid
                            }
                        }
                        if (signUuid) {
                            console.log(`队伍Id: ${signUuid}`)
                            data.signUuid = signUuid
                            this.shareCode.push(data)
                        }
                        else {
                            console.log(user, '没有获取到队伍Id')
                        }
                    }
                }
            } catch (e) {
            }
        }
    }

    async WxHbShareActivity(data) {
        // 有空再加
        for (let cookie of this.cookies['help']) {
            let p = {
                cookie, inviter: data
            }
            let user = this.userPin(cookie)
            try {
                for (let nnn = 0; nnn<2; nnn++) {
                    var getPin = await this.getMyPing(p)
                    if (getPin) {
                        break
                    }
                }
                if (getPin) {
                }
            } catch (e) {
            }
        }
    }

    async getMyPing(p) {
        let host = p.inviter.host
        let activityId = p.inviter.activityId
        let at = p.inviter.activityType
        let type = p.inviter.type
        this.assert(type, "不支持的活动类型")
        let venderId = p.inviter.venderId
        let shopId = p.inviter.shopId
        let sid = p.inviter.sid || ''
        if (venderId) {
            let follow = await this.curl({
                'url': 'https://api.m.jd.com/client.action?g_ty=ls&g_tk=518274330',
                'form': `functionId=followShop&body={"follow":"true","shopId":"${shopId}","venderId":"${venderId}","award":"true","sourceRpc":"shop_app_home_follow"}&osVersion=13.7&appid=wh5&clientVersion=9.2.0&loginType=2&loginWQBiz=interact`,
                cookie: p.cookie
            })
        }
        let isvObfuscator = await this.curl({
            url: 'https://api.m.jd.com/client.action',
            form: this.random(this.dict[host], 1)[0],
            cookie: p.cookie
        })
        switch (host) {
            case "cjhy-isv.isvjcloud.com":
                var h = await this.response({
                        'url': `https://${host}/wxCollectionActivity/activity?activityId=${activityId}`,
                    }
                )
                break
            default:
                var h = await this.response({
                        'url': `https://${host}/wxCollectionActivity/activity2/${activityId}?activityId=${activityId}`,
                    }
                )
                break
        }
        let info = await this.response({
                'url': `https://${host}/customer/getSimpleActInfoVo`,
                form: `activityId=${activityId}`,
                cookie: h.cookie
            }
        )
        var getPin = await this.response({
                'url': `https://${host}/customer/getMyPing`,
                form: `userId=${sid || venderId}&token=${isvObfuscator.token}&fromType=APP`,
                cookie: info.cookie
            }
        )
        if (!this.haskey(getPin, 'content.data.secretPin')) {
            console.log(`可能是黑号或者黑ip,停止运行`)
            return
        }
        else {
            return getPin
        }
    }

    async extra() {
        // 此处用来跑组队开卡
        if (this.venderIds && this.venderIds.length) {
            for (let cookie of this.cookies[this.task]) {
                console.log(`正在运行: ${this.userPin(cookie)}`)
                for (let kkk of this.venderIds) {
                    for (let kk of Array(3)) {
                        var o = await this.algo.curl({
                                'url': `https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=bindWithVender&body={"venderId":"${kkk}","shopId":"","bindByVerifyCodeFlag":1,"registerExtend":{"v_birthday":"${this.rand(1990, 2002)}-07-${this.rand(10, 28)}"},"writeChildFlag":0,"activityId":"","channel":8016}&clientVersion=9.2.0&client=H5&uuid=88888`,
                                cookie
                            }
                        )
                        if (o.success) {
                            break
                        }
                    }
                    console.log(kkk, `开卡中`, o.success)
                }
            }
        }
    }
}

module.exports = Main;
