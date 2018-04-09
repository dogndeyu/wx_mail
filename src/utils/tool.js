// import { AlertPlugin } from 'vux'
// Vue.use(AlertPlugin);
exports.install = function (Vue, options) {
  Vue.prototype.changeData = function () {
    alert('执行成功');
  };
  /*组字符串格式*/
  Vue.prototype.pc = function (obj) {
    var str_fi = "";
    var bwcs_1 = "";
    //组串格式：{id:"",value:"",type:"",length:""},{id:"",value:"",type:"",length:""}
    for (var i = 1; i < obj.length; i++) {
      if (i == 1) {
        str_fi += "{id:'" + obj[1][0] + "',value:'" + obj[1][1] + "',type:'" + obj[1][2] + "',length:'" + obj[1][3] + "'}";
      } else if (obj[i][0] == "0") {
        bwcs_1 = obj[i][1];
      } else {
        str_fi += ",{id:'" + obj[i][0] + "',value:'" + obj[i][1] + "',type:'" + obj[i][2] + "',length:'" + obj[i][3] + "'}";
      }
    }
    var gnh = obj[0][0]; //获取功能号
    var ds_name = obj[0][1] //存储过程名称

    var str_ = "1.0|" + ds_name + "," + gnh + "|{root:[" + str_fi + "]}|" + bwcs_1 + "||";
    return str_;
  };
  /*加密*/
  Vue.prototype.Bt_encrypt = function (n) {
    var ts = "8ABC7DLO5MN6Z9EFGdeJfghijkHIVrstuvwWSTUXYabclmnopqKPQRxyz01234";
    var nl = n.length,
      t = [],
      a, b, c, x, m = function (y) {
        t[t.length] = ts.charAt(y)
      },
      N = ts.length,
      N2 = N * N,
      N5 = N * 5;
    for (x = 0; x < nl; x++) {
      a = n.charCodeAt(x);
      if (a < N5) m(Math.floor(a / N)), m(a % N);
      else m(Math.floor(a / N2) + 5), m(Math.floor(a / N) % N), m(a % N);
    }
    var s = t.join("");
    return String(s.length).length + String(s.length) + s;
  }
  /*解密*/
  Vue.prototype.Bt_decrypt = function (n) {
    var c = n.charAt(0) * 1;
    if (isNaN(c)) return "";
    c = n.substr(1, c) * 1;
    if (isNaN(c)) return "";
    var nl = n.length,
      t = [],
      a, f, b, x = String(c).length + 1,
      m = function (y) {
        return ts.indexOf(n.charAt(y))
      },
      N = ts.length;
    if (nl != x + c) return "";
    while (x < nl) {
      a = m(x++);
      if (a < 5) f = a * N + m(x);
      else f = (a - 5) * N * N + m(x) * N + m(x += 1);
      t[t.length] = String.fromCharCode(f);
      x++;
    }
    return t.join("");
  }
  /*alert*/
  Vue.prototype.msgbox = function (title, msg) {
    this.$vux.alert.show({
      title: title,
      content: msg
    });
  }
  Vue.prototype.getLocalTime = function () {
    var data_ = [];
    data_.push(["1", "p_wx_getdate"]);
    data_.push(["p_ip", "", "C", 20]);
    data_.push(["p_ipzh", "", "C", 100]);
    data_.push(["p_mac", "", "C", 50]);
    data_.push(["p_userid", "", "C", 15]);
    data_.push(["p_ver", global.version, "C", 15]);
    data_.push(["p_qd", global.quDao, "C", 1]);
    var supc_nc = this.pc(data_);
    console.log(this.yUrl)
    console.log(this.version)
    this.$http
      .get(global.yUrl + "action=DB_000002&type=wx_getdate&param=" + this.Bt_encrypt(supc_nc))
      .then(function (response) {
        // console.log(response);
      })
      .catch(function (error) {
        // console.log(error);
      });
  }
};
exports.pc = function (obj) {
  var str_fi = "";
  var bwcs_1 = "";
  //组串格式：{id:"",value:"",type:"",length:""},{id:"",value:"",type:"",length:""}
  for (var i = 1; i < obj.length; i++) {
    if (i == 1) {
      str_fi += "{id:'" + obj[1][0] + "',value:'" + obj[1][1] + "',type:'" + obj[1][2] + "',length:'" + obj[1][3] + "'}";
    } else if (obj[i][0] == "0") {
      bwcs_1 = obj[i][1];
    } else {
      str_fi += ",{id:'" + obj[i][0] + "',value:'" + obj[i][1] + "',type:'" + obj[i][2] + "',length:'" + obj[i][3] + "'}";
    }
  }
  var gnh = obj[0][0]; //获取功能号
  var ds_name = obj[0][1] //存储过程名称

  var str_ = "1.0|" + ds_name + "," + gnh + "|{root:[" + str_fi + "]}|" + bwcs_1 + "||";
  return str_;
}
exports.Bt_encrypt = function (n) {
  var ts = "8ABC7DLO5MN6Z9EFGdeJfghijkHIVrstuvwWSTUXYabclmnopqKPQRxyz01234";
  var nl = n.length,
    t = [],
    a, b, c, x, m = function (y) {
      t[t.length] = ts.charAt(y)
    },
    N = ts.length,
    N2 = N * N,
    N5 = N * 5;
  for (x = 0; x < nl; x++) {
    a = n.charCodeAt(x);
    if (a < N5) m(Math.floor(a / N)), m(a % N);
    else m(Math.floor(a / N2) + 5), m(Math.floor(a / N) % N), m(a % N);
  }
  var s = t.join("");
  return String(s.length).length + String(s.length) + s;
}
