// "my-module.js" 模块
export function cube(x) {
  return x * x * x;
}
//测试地址
// const yUrl = 'http://60.173.222.38:8211/web?';
// const hqUrl = "http://60.173.222.46/hq?action="
// const dzimg = "http://60.173.222.38:8211/pic/";

//正式 生产地址
const yUrl = "http://wx.gyzq.com.cn/web?";
const hqUrl = "http://wx.gyzq.com.cn/hq?action=";
const dzimg = "http://wx.gyzq.com.cn/pic/";

const colorListLength = 20;
const version = "1.0.0";
const quDao = "1";
const systemId = 'odN2Is5Ih8homJ-uJzYgrXKkmUVc';
const deviceType = 4;
var cczd;
cczd = "INT;WID:" + systemId + "," + version + "_" + deviceType;
import tool from './utils/tool'
import axios from 'axios'
console.log(this)
export function getOpenId() {
  var data_ = [];
  data_.push(['1', 'p_900001_wxInfo_Select']);
  data_.push(['p_ip', '', 'C', 20]);
  data_.push(['p_ipzh', '', 'C', 100]);
  data_.push(['p_mac', '', 'C', 50]);
  data_.push(['p_userid', '', 'C', 15]);
  data_.push(['p_ver', version, 'C', 15]);
  data_.push(['p_qd', quDao, 'C', 1]);
  data_.push(['p_openID', systemId, 'C', 40]);
  console.log(data_)
  var supc_nc = tool.pc(data_);
  console.log(supc_nc)
  axios.get(
      yUrl + "action=00008&param=" + tool.Bt_encrypt(systemId) + "&type=0" + "&secret=" + tool.Bt_encrypt(cczd),
    )
    .then((res) => {
      console.log(res)
    })
    
  // jQuery.support.cors = true;
  // $.ajax({
  //   type: "get",
  //   url: yUrl + "action=DB_000001&type=wxInfo_Select&param=" + Bt_encrypt(supc_nc),
  //   async: false,
  //   cache: false,
  //   timeout: 20000, //超时时间：20秒
  //   dataType: "json",
  //   jsonp: "callbackparam",
  //   jsonpCallback: "success_jsonpCallback",
  //   beforeSend: function (xmlHttpRequest) {},
  //   success: function (data, textStatus) {
  //     // data.errormsg[0].msg == 'openid未邦定.' 
  //     if (data.errorcode != '0') {
  //       insertInformation();
  //     } else {
  //       OpenIdInform = data.errormsg.root0[0];

  //       if (OpenIdInform.sex == undefined || OpenIdInform.sex == "undefined" || OpenIdInform.sex == "" || OpenIdInform.sex == " " || OpenIdInform.sex == null) {
  //         sendSex();
  //         OpenIdInform.headimg = sex_wx;
  //       }

  //       if (OpenIdInform.headimg == undefined || OpenIdInform.headimg == "undefined" || OpenIdInform.headimg == "" || OpenIdInform.headimg == " " || OpenIdInform.headimg == null) {
  //         sendHeadImg();
  //         OpenIdInform.headimg = headImg_wx;
  //       }

  //       if (OpenIdInform.nickname == undefined || OpenIdInform.nickname == "undefined" || OpenIdInform.nickname == "" || OpenIdInform.nickname == " " || OpenIdInform.nickname == null) {
  //         sendNickname();
  //         OpenIdInform.nickname = nickName_wx;
  //       }
  //     }
  //   },
  //   complete: function (xmlHttpRequest, textStatus) {

  //   },
  //   error: function (xmlHttpRequest, textStatus, errorThrown) {

  //   }
  // });

}
export {
  yUrl,
  hqUrl,
  dzimg,
  version,
  quDao
};
