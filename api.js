/**
 * 全局的接口配置非vue项目使用
 */

var currentUrl = window.location.href;
var apiBaseURL = currentUrl.split("/");
apiBaseURL = "http://" + apiBaseURL[2];

var apiUrl = {
    login: apiBaseURL + "/user/login", //登录
};