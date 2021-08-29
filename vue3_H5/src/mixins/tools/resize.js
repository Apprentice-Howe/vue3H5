//判断当前设备是pc端还是移动端
function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(sUserAgent)) {
        //跳转移动端页面
        return 'mobile'
    } else {
        //跳转pc端页面
        return 'pc'
    }
}

export default browserRedirect
