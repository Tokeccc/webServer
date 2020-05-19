/*
 * @Description: 
 * vue项目使用 
 * _checkStatus：检测接口状态 
 * _checkCode：检测code 
 * 请求的时候携带token：(haveToken,hasToken)
 * debounceGet：防抖的get请求
 * 使用方法main.js全局引入 
 * import axios from './utils/http'  Vue.prototype.$http = axios
 * 然后在组件中使用 this.$http.get()
 * @Author: Tokeccc
 */
'use strict'

// import axios from 'axios'
// import qs from 'qs'
import Common from './common'

//生产
let productUrl = 'http://192.168.1.60:9999';

//测试
let developUrl = 'http://192.168.20.163:8080';

// process.env.NODE_ENV === 'development' ? apiBaseURL = developUrl : apiBaseURL = productUrl;

class HttpUtil {
    constructor() {
        this.url = {
            login: apiBaseURL + "/user/login", //登录
        }
        axios.defaults.withCredentials = true
        axios.defaults.crossDomain = true
        axios.defaults.baseURL = apiBaseURL
        axios.defaults.timeout = 5000
    }
    _checkStatus(response) {
        // 如果http状态码正常，则直接返回数据
        if (response && (response.status === 200 || response.status === 304 ||
                response.status === 400)) {
            return response
        }
        // 异常状态下，把错误信息返回去
        return {
            status: -404,
            msg: '网络异常:' + response.status
        }
    }
    _checkCode(res) {
        // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
        if (res.status === -404) {
            //TODO 提示用户请求失败：网络异常或服务端异常
            //			console.log(res.msg)

            /* this.vue.$message({
              showClose: true,
              message: res.msg,
              type: 'error'
            }); */
        } else if (res.data && (res.data.code !== 200)) {
            //TODO 服务端返回错误
            let msg = res.data.code + ':' + res.data.message
            //			console.log(msg)

            //检查通用错误码：-10000未登录
            if (res.data.code === -10000) {
                // window.location.href = apiBaseURL + '/mobile_index.html';
            }
        }
        return res
    }
    post(url, data) {
        return axios({
            method: 'post',
            url: url,
            data: qs.stringify(data),
            headers: {
                //				'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(
            (response) => {
                return this._checkStatus(response)
            }
        ).then(
            (res) => {
                return this._checkCode(res)
            }
        )
    }
    haveToken(url, data) {
        return axios({
            method: 'post',
            url: url,
            data: qs.stringify(data),
            headers: {
                "token": localStorage.token
            }
        }).then(
            (response) => {
                return this._checkStatus(response)
            }
        ).then(
            (res) => {
                return this._checkCode(res)
            }
        )
    }
    hasToken(url, data) {
        return axios({
            method: 'get',
            url: url,
            data: qs.stringify(data),
            headers: {
                "token": localStorage.token
            }
        }).then(
            (response) => {
                return this._checkStatus(response)
            }
        ).then(
            (res) => {
                return this._checkCode(res)
            }
        )
    }
    get(url, params) {
        return axios({
            method: 'get',
            url: url,
            params: params,
            headers: {}
        }).then(
            (response) => {
                return this._checkStatus(response)
            }
        ).then(
            (res) => {
                return this._checkCode(res)
            }
        )
    }
    //上传图片
    uploadFile(url, data) {
        return axios({
            method: 'post',
            url: url,
            data: data,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(
            (response) => {
                return this._checkStatus(response)
            }
        ).then(
            (res) => {
                return this._checkCode(res)
            }
        )
    }
    //发起防抖请求
    debounceGet() {
        var that = this;
        Common.debounce(that.get(),3000)
    }
    debouncePost() {
        var that = this;
        Common.debounce(that.post(),3000)
    }
    //发起节流请求
    throttleGet(){
        var that = this;
        Common.throttle(that.get(),3000)
    }
    throttlePost(){
        var that = this;
        Common.throttle(that.post(),3000)
    }
}

export default new HttpUtil();