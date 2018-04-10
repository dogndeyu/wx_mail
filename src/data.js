// "my-module.js" 模块
export function cube(x) {
  return x * x * x;
}


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
    


}
export {
  yUrl,
  hqUrl,
  dzimg,
  version,
  quDao
};
