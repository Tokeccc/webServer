/*
 * @Description: 前端常用方法
 * @Author: yanpeng
 * @Author: zhiqin
 */

/**
 * @description: 字符串首字母大写
 * @param {String} (hello-world-hi)
 * @return: string
 */
function toBigAbc(a) {
  var arr = a.split('-');
  var arr1 = [];
  arr.forEach(function (item, i) {
    var char = item.charAt(0);
    item = item.replace(char, function replace(char) {
      return char.toUpperCase(); //toLowerCase(小写)
    });
    arr1.push(item)
  })
  return arr1.join('')
}

/**
 * @description: 计算1～10000之间的对称的数字 原理就是这个是正着和反着相等就行 且大于10
 * @param {Number,Number}
 * @return: Array
 */
function getSymmetric(start, end) {
  let result = [];
  for (var i = start; i < end + 1; i++) {
    var endnum = +(i.toString().split('').reverse().join(''));
    if (endnum === i && endnum > 10) {
      result.push(i)
    }
  }
  return result;
}

/**
 * @description: 
 * 设置cookie cname:存储的cookie的名字 cvalue:存储的cookie的值 exdays:过期天数(设置-1即为过期)
 * 删除cookie setCookie(key, null, -1);
 * @param {String,String,number}
 */
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


/**
 * @description: 获取cookie cname:获取的cookie名字
 * @param  {String}
 * @return: String
 */
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

/**
 * 判断是否为空对象
 * @param obj
 * @return {boolean}
 */
const isEmptyObject = function (obj) {
  for (let name in obj) {
    return false;
  }
  return true;
};

/**
 * 判断对象内部数组长度是否为0
 * @param obj
 * @return {boolean}
 */
const ObjectItemHasLength = function (obj) {
  let num = 0;
  for (let name in obj) {
    if (obj[name].length) {
      num += obj[name].length
    }
  }
  if (num > 0) {
    return false
  } else {
    return true
  }
};

/**
 * 获取随机英文字符串
 * @param len
 */
function getRandomStr(len) {
  let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let charArr = [];
  for (let i = 0; i < len; i++) {
    let tempLen = str.length;
    if (i === 0) {
      tempLen = 26;
    }
    charArr.push(str.charAt(Math.floor(Math.random() * tempLen)));
  }
  return charArr.join('');
}

/**
 * 获取数据，没有数据返回默认值
 * @param {*}
 * @return {*}
 */
function getDataWidthDefault(source, defaultValue) {
  let result = defaultValue;
  if (defaultValue === undefined) {
    result = '';
  }
  if (source !== undefined && source !== null) {
    if (source.toString().length > 0) {
      result = source;
    }
  }
  return result;
}
/**
 * @description: 去除空格
 * @param {String,Number} :Number 1-所有空格  2-前后空格  3-前空格 4-后空格
 * @return {String}
 */
function deletSpace(str, type) {
  switch (type) {
    case 1:
      return str.replace(/\s+/g, "");
    case 2:
      return str.replace(/(^\s*)|(\s*$)/g, "");
    case 3:
      return str.replace(/(^\s*)/g, "");
    case 4:
      return str.replace(/(\s*$)/g, "");
    default:
      return str;
  }
}

/**
 * @description: 将一个数组平均分成两个数组
 * @param {Array}   数组
 * @return:  对象里面两个数组
 */
function divideArray(arr) {
  var obj = {
    leftArray: [],
    rightArray: []
  }
  for (var i = 0; i < arr.length / 2; i++) {
    obj.leftArray[i] = arr[i]
    if (Math.ceil(i + arr.length / 2) < arr.length) {
      obj.rightArray[i] = arr[Math.ceil(i + arr.length / 2)]
    }
  }
  return obj
}

/**
 * @description: 返回当前浏览器是什么类型的浏览器
 * @return: 
 */
function userBrowser() {
  var browserName = navigator.userAgent.toLowerCase();
  if (/msie/i.test(browserName) && !/opera/.test(browserName)) {
    return "IE";
  } else if (/firefox/i.test(browserName)) {
    return "Firefox";
  } else if (/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName)) {
    return "Chrome";
  } else if (/opera/i.test(browserName)) {
    return "Opera";
  } else if (/webkit/i.test(browserName) && !(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName))) {
    return "Safari";
  } else {
    return "不知道什么鬼!";
  }
}

/**
 * @description: 检测密码强度
 * @param {String} 12asdASAD (强度等级为3)
 * @return {Number}
 */
function checkPwd(str) {
  var nowLv = 0;
  if (str.length < 6) {
    return nowLv
  };
  if (/[0-9]/.test(str)) {
    nowLv++
  };
  if (/[a-z]/.test(str)) {
    nowLv++
  };
  if (/[A-Z]/.test(str)) {
    nowLv++
  };
  if (/[\.|-|_]/.test(str)) {
    nowLv++
  };
  return nowLv;
}

/**
 * @description: 深度拷贝
 * @param {Object}
 * @return {Object}
 */
function deepCopy(obj) {
  if (typeof obj != 'object') {
    return obj;
  }
  var newObj = {};
  for (var attr in obj) {
    newObj[attr] = deepCopy(obj[attr]);
  }
  return newObj;
}

/**
 * @description: 防抖
 * @param func 回调函数
 * @param wait 时间
 * @return {Object}
 */
function debounce(func, wait) {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;

    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.apply(context, args)
    }, wait);
  }
}
/**
 * @description: 节流
 * @param func 回调函数
 * @param interval 时间
 * @return {Object}
 */
function throttle(fn, interval) {
  var last;
  var timer;
  var interval = interval || 200;
  return function () {
    var th = this;
    var args = arguments;
    var now = +new Date();
    if (last && now - last < interval) {
      clearTimeout(timer);
      timer = setTimeout(function () {
        last = now;
        fn.apply(th, args);
      }, interval);
    } else {
      last = now;
      fn.apply(th, args);
    }
  }
}

/**
 * @description: 将时间戳转成时间格式
 * @param   date 时间
 * @param   {String} fmt 时间格式  yyyy-MM-dd  hh-mm-ss
 * @return  
 */
function formatDate(date, fmt) {
  var date = new Date(date);
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : ('00' + str).substr(str.length));
    }
  }
  return fmt;
}
//---------------------------------------------------------------------------------------------------------------------------------------
/**
 * @description: 获取url地址里面的参数   
 * @param {String}
 * @return {*} 
 */
function getUrlKey(name) {
  return (
    decodeURIComponent(
      (new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(
        location.href
      ) || [, ''])[1].replace(/\+/g, '%20')
    ) || null
  );
}
/**
 * @description: 获取url参数
 * @param {String}
 * @return {Object}
 */
function getUrlPrmt(url) {
  url = url ? url : window.location.href;
  let _pa = url.substring(url.indexOf('?') + 1),
    _arrS = _pa.split('&'),
    _rs = {};
  for (let i = 0, _len = _arrS.length; i < _len; i++) {
    let pos = _arrS[i].indexOf('=');
    if (pos == -1) {
      continue;
    }
    let name = _arrS[i].substring(0, pos),
      value = window.decodeURIComponent(_arrS[i].substring(pos + 1));
    _rs[name] = value;
  }
  return _rs;
}
/**
 * @description: 设置url参数
 * @param {Object}
 * @return {String} a=1&b=2
 */
function setUrlPrmt(obj) {
  let _rs = [];
  for (let p in obj) {
    if (obj[p] != null && obj[p] != '') {
      _rs.push(p + '=' + obj[p])
    }
  }
  return _rs.join('&');
}
//-------------------------------------------------------------------------------------------------------------------------------------------
/**
 * @description: 手机号脱敏的函数
 * @param {String}
 * @return {String}
 */
function phoneQuick(item) {
  let that = this
  let str2 = item.substr(0, 3) + "****" + item.substr(7, 10)
  return str2
}

/**
 * @description: 当某个字段不是两位数时补0
 * @param {*}
 * @return {String}
 */
function fnW(str) {
  let num;
  str > 9 ? num = str : num = "0" + str;
  return num;
}

/**
 * @description: 获取当前时间
 * @return {String}
 */
function getCurrentTime() {
  let date = new Date();
  let year = date.getFullYear(); //当前年份
  let month = date.getMonth(); //当前月份
  let data = date.getDate(); //天
  let hours = date.getHours(); //小时
  let minute = date.getMinutes(); //分
  let second = date.getSeconds(); //秒
  let time = year + "-" + fnW((month + 1)) + "-" + fnW(data) + " " + fnW(hours) + ":" + fnW(minute) + ":" + fnW(second);
  console.log(time) //当前时间
  return time
}

/**
 * @description: 
 * 字符串处理   
 * type 1:首字母大写 2：首字母小写 3：大小写转换 4：全部大写 5：全部小写
 * @param {String,Number}
 * @return {String}
 */
function changeCase(str, type) {
  function ToggleCase(str) {
    var itemText = ""
    str.split("").forEach(
      function (item) {
        if (/^([a-z]+)/.test(item)) {
          itemText += item.toUpperCase();
        } else if (/^([A-Z]+)/.test(item)) {
          itemText += item.toLowerCase();
        } else {
          itemText += item;
        }
      });
    return itemText;
  }
  switch (type) {
    case 1:
      return str.replace(/^(\w)(\w+)/, function (v, v1, v2) {
        return v1.toUpperCase() + v2.toLowerCase();
      });
    case 2:
      return str.replace(/^(\w)(\w+)/, function (v, v1, v2) {
        return v1.toLowerCase() + v2.toUpperCase();
      });
    case 3:
      return ToggleCase(str);
    case 4:
      return str.toUpperCase();
    case 5:
      return str.toLowerCase();
    default:
      return str;
  }
}


/**
 * @description: 禁止复制
 */
function getCopy() {
  //禁止文字选择
  document.body.onselectstart = document.body.oncontextmenu = function () {
    return false;
  }
  //禁止右键菜单
  document.oncontextmenu = function () {
    return false;
  }
  //禁止ctrl+v复制
  document.onkeydown = function () {
    if (event.ctrlKey && window.event.keyCode == 67) {
      return false;
    }
  }
  //禁止复制
  document.body.oncopy = function () {
    return false;
  }
}
/**
 * @description: 允许复制
 * @param 
 * @return 
 */
function relieveCopy() {
  document.body.onselectstart = document.body.oncontextmenu = function () {
    return true;
  }
  document.oncontextmenu = function () {
    return true;
  }
  document.onkeydown = function () {
    if (event.ctrlKey && window.event.keyCode == 67) {
      return true;
    }
  }
  document.body.oncopy = function () {
    return true;
  }
}

//120s倒计时（原声写法）
timeLoading = function () {
  var time = 120
  timeSet = setInterval(function () {
    $("#codeClick").css('backgroundColor', '#f5f5f5')
    $("#codeClick").css('color', '#519bfe')
    $('#codeClick').html(time + 's')
    time--
    if (time <= 0) {
      clearInterval(timeSet)
      time = 0
      $('#codeClick').html('获取验证码')
      $("#codeClick").css('backgroundColor', '#519bfe')
      $("#codeClick").css('color', '#fff')
      clickMore = true
    }
  }, 1000)
}
/**
 * @description: 60s倒计时（vue写法）
 * 定义data
 * count:"",
 * disabled:false,  按钮点击和不可点击的状态 初始可以点击状态
 * timer:null,
 * getMsgText:"获取验证码"  //初始值
 * 首先是获取验证码状态，点击按钮事件   回调getTimeOut函数
 */
function getTimeOut() {
  const TIME_COUNT = 60; //定义一个60s的常量
  if (!this.timer) {
    this.count = TIME_COUNT; //重新赋值
    this.disabled = false; //启用按钮
    this.timer = setInterval(() => {
      if (this.count > 0 && this.count <= TIME_COUNT) {
        this.count--;
        this.disabled = true; //按钮不可点击
        this.getMsgText = `(${this.count}s)重发`; //定义按钮内显示文本
      } else {
        this.disabled = false; //按钮可以点击
        this.getMsgText = "获取验证码";
        clearInterval(this.timer); //倒计时到0之后，删除定时器
        this.timer = null;
      }
    }, 1000)
  }
}
/**
 * @description: 冒泡排序
 * @param : Array
 * @return: Array
 */
function mpSort(arr){
  var arr = arr,
      l=arr.length-1;
  for(var i=0;i<l;i++){
    for(var j=0;j<l-i;j++){
      if(arr[j]>arr[j+1]){
        var temp = arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp
      }
    }
  }
  return arr
}

// module.exports = {
//   toBigAbc,
//   getSymmetric,
//   setCookie,
//   getCookie,
//   isEmptyObject,
//   ObjectItemHasLength,
//   getRandomStr,
//   getDataWidthDefault,
//   deletSpace,
//   divideArray,
//   userBrowser,
//   checkPwd,
//   deepCopy,
//   debounce,
//   throttle,
//   formatDate,
//   getUrlKey,
//   phoneQuick,
//   getCurrentTime,
//   changeCase,
//   getCopy,
//   relieveCopy,
//   getUrlPrmt,
//   setUrlPrmt,
//   mpSort
// };