const CUSTOMER_SITES = {
    tyyszy: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: '天涯资源',
    },
  yinghua: {
api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
name: '樱花资源'
},
baidu: {
api: 'https://api.apibdzy.com/api.php/provide/vod',
name: '百度云资源'
},
  xiaomaomi: {
api: 'https://zy.xmm.hk/api.php/provide/vod',
name: '小猫咪资源',
},
  ffzy: {
api: 'http://ffzy5.tv/api.php/provide/vod',
name: '非凡影视',
detail: 'http://ffzy5.tv',
},
  dyttzy: {
api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
name: '电影天堂资源',
detail: 'http://caiji.dyttzyapi.com',
},
    zy360: {
        api: 'https://360zy.com/api.php/provide/vod',
        name: '360资源',
    },
    wolong: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
    },
    cjhw: {
        api: 'https://cjhwba.com/api.php/provide/vod',
        name: '新华为',
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源',
        detail: 'https://jszyapi.com'
    },
    dbzy: {
        api: 'https://dbzy.com/api.php/provide/vod',
        name: '豆瓣资源',
    },
    bfzy: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源',
    },
    mozhua: {
        api: 'https://mozhuazy.com/api.php/provide/vod',
        name: '魔爪资源',
    },
    mdzy: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都资源',
    },
    ruyi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
