const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://360zy.com/api.php/provide/vod',
        name: '360资源',
    }
    ruyi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
    }
        subo: {
        api: 'https://subocaiji.com/api.php/provide/vod/',
        name: '速播资源',
    }
        guangsu: {
        api: 'https://api.guangsuapi.com/api.php/provide/vod/',
        name: '光速资源',
    }
        smzy: {
        api: 'https://img.smdyw.top/api.php/provide/vod',
        name: '神马资源',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
