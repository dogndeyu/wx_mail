<script>
const colorList = [
  "#F9F900",
  "#6FB7B7",
  "#9999CC",
  "#B766AD",
  "#B87070",
  "#FF8F59",
  "#FFAF60",
  "#FFDC35",
  "#FFFF37",
  "#B7FF4A",
  "#28FF28",
  "#1AFD9C",
  "#00FFFF",
  "#2894FF",
  "#6A6AFF",
  "#BE77FF",
  "#FF77FF",
  "#FF79BC",
  "#FF2D2D",
  "#ADADAD"
];
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


function getRandColor() {
  var tem = Math.round(Math.random() * colorListLength);
  return colorList[tem];
}

export default {
  colorList,
  colorListLength,
  getRandColor,
};
</script>
