<template>
  <div style="position:absolute;background-color:#4e55a3" class="width100 height100 clearfix "  id="signIn">
    <x-header  :left-options="{backText:''}" class="bgcolor clearfix width100 Header">{{$route.name}}</x-header>
    <view-box class="width100 height100 clearfix">
         <div class="clearfix marginTop46">
             <div class="clearfix">
                <div class="">
                    <img style="width:100%;display:block" src="/static/qdBanner.jpg" class="img-responsive">
                </div>
                 <div class="calendar">
                    <div class="text-center" style="margin-top:-38px;">
                    <button class="btn btn-qiandao">马上签到</button>
                    </div>
                    <div class="calenbox">
                        <div id="calendar"></div>
                    </div>
                </div>
             </div>
         </div>
    </view-box>
  </div>
</template>

<script>
import { ViewBox, XHeader, Divider, Group, Cell, Grid, GridItem } from "vux";
// import "/plugins/calendar/js";

export default {
  components: {
    ViewBox,
    XHeader,
    Divider,
    Group,
    Cell,
    Grid,
    GridItem
  },
  created() {
    $(function() {
      var calUtil = {
        //当前日历显示的年份
        showYear: 2016,
        //当前日历显示的月份
        showMonth: 1,
        //当前日历显示的天数
        showDays: 1,
        eventName: "load",
        //初始化日历
        init: function(signList) {
          calUtil.setMonthAndDay();
          calUtil.draw(signList);
          calUtil.bindEnvent();
        },
        draw: function(signList) {
          //绑定日历
          var str = calUtil.drawCal(
            calUtil.showYear,
            calUtil.showMonth,
            signList
          );
          $("#calendar").html(str);
          //绑定日历表头
          var calendarName = calUtil.showYear + "年" + calUtil.showMonth + "月";
          $(".calendar_month_span").html(calendarName);
        },
        //绑定事件
        bindEnvent: function() {
          //绑定上个月事件
          $(".calendar_month_prev").click(function() {
            //ajax获取日历json数据
            var signList = [
              {
                signDay: ""
              },
              {
                signDay: ""
              },
              {
                signDay: ""
              },
              {
                signDay: ""
              }
            ];
            calUtil.eventName = "prev";
            calUtil.init(signList);
          });
          //绑定下个月事件
          $(".calendar_month_next").click(function() {
            //ajax获取日历json数据
            var signList = [
              {
                signDay: ""
              },
              {
                signDay: ""
              },
              {
                signDay: ""
              },
              {
                signDay: ""
              }
            ];
            calUtil.eventName = "next";
            calUtil.init(signList);
          });
        },
        //获取当前选择的年月
        setMonthAndDay: function() {
          switch (calUtil.eventName) {
            case "load":
              var current = new Date();
              calUtil.showYear = current.getFullYear();
              calUtil.showMonth = current.getMonth() + 1;
              break;
            case "prev":
              var nowMonth = $(".calendar_month_span")
                .html()
                .split("年")[1]
                .split("月")[0];
              calUtil.showMonth = parseInt(nowMonth) - 1;
              if (calUtil.showMonth == 0) {
                calUtil.showMonth = 12;
                calUtil.showYear -= 1;
              }
              break;
            case "next":
              var nowMonth = $(".calendar_month_span")
                .html()
                .split("年")[1]
                .split("月")[0];
              calUtil.showMonth = parseInt(nowMonth) + 1;
              if (calUtil.showMonth == 13) {
                calUtil.showMonth = 1;
                calUtil.showYear += 1;
              }
              break;
          }
        },
        getDaysInmonth: function(iMonth, iYear) {
          var dPrevDate = new Date(iYear, iMonth, 0);
          return dPrevDate.getDate();
        },
        bulidCal: function(iYear, iMonth) {
          var aMonth = new Array();
          aMonth[0] = new Array(7);
          aMonth[1] = new Array(7);
          aMonth[2] = new Array(7);
          aMonth[3] = new Array(7);
          aMonth[4] = new Array(7);
          aMonth[5] = new Array(7);
          aMonth[6] = new Array(7);
          var dCalDate = new Date(iYear, iMonth - 1, 1);
          var iDayOfFirst = dCalDate.getDay();
          var iDaysInMonth = calUtil.getDaysInmonth(iMonth, iYear);
          var iVarDate = 1;
          var d, w;
          aMonth[0][0] = "日";
          aMonth[0][1] = "一";
          aMonth[0][2] = "二";
          aMonth[0][3] = "三";
          aMonth[0][4] = "四";
          aMonth[0][5] = "五";
          aMonth[0][6] = "六";
          for (d = iDayOfFirst; d < 7; d++) {
            aMonth[1][d] = iVarDate;
            iVarDate++;
          }
          for (w = 2; w < 7; w++) {
            for (d = 0; d < 7; d++) {
              if (iVarDate <= iDaysInMonth) {
                aMonth[w][d] = iVarDate;
                iVarDate++;
              }
            }
          }
          return aMonth;
        },
        ifHasSigned: function(signList, day) {
          var signed = false;
          $.each(signList, function(index, item) {
            if (item.signDay == day) {
              signed = true;
              return false;
            }
          });
          return signed;
        },
        drawCal: function(iYear, iMonth, signList) {
          var myMonth = calUtil.bulidCal(iYear, iMonth);
          var htmls = new Array();
          htmls.push("<div class='sign_main' id='sign_layer'>");
          htmls.push("<div class='sign_succ_calendar_title'>");
          htmls.push("<div class='calendar_month_next'>下月</div>");
          htmls.push("<div class='calendar_month_prev'>上月</div>");
          htmls.push("<div class='calendar_month_span'></div>");
          htmls.push("</div>");
          htmls.push("<div class='sign' id='sign_cal'>");
          htmls.push("<table>");
          var d, w;
          for (w = 1; w < 7; w++) {
            htmls.push("<tr>");
            for (d = 0; d < 7; d++) {
              var ifHasSigned = calUtil.ifHasSigned(signList, myMonth[w][d]);
              if (ifHasSigned) {
                htmls.push(
                  "<td class='on'>" +
                    (!isNaN(myMonth[w][d]) ? myMonth[w][d] : " ") +
                    "</td>"
                );
              } else {
                htmls.push(
                  "<td>" +
                    (!isNaN(myMonth[w][d]) ? myMonth[w][d] : " ") +
                    "</td>"
                );
              }
            }
            htmls.push("</tr>");
          }
          htmls.push("</table>");
          htmls.push("</div>");
          htmls.push("</div>");
          return htmls.join("");
        }
      };
      var signList = [
        {
          signDay: "10"
        },
        {
          signDay: "11"
        },
        {
          signDay: "12"
        },
        {
          signDay: "13"
        }
      ];
      calUtil.init(signList);
    });
  }
};
</script>
<style >
#signIn {
}
/*签到*/

.maskbox {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: none;
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
}

.calendar {
  background: #4e55a3 !important;
  padding: 37px 15px 15px !important;
}

.libaolist .bg-red {
  background: #e60012 !important;
}

.libaolist .pt2 {
  padding-top: 2px !important;
}

.libaolist .pt3 {
  padding-top: 3px !important;
}

.libaolist .btn-lingqu {
  width: 70px;
  text-align: center;
  background: #e60012;
  color: #fff;
}

.libaolist .btn-disable {
  width: 70px;
  text-align: center;
  background: #c9c9c9;
  color: #fff;
}

.btn-qiandao {
  width: 120px;
  height: 50px;
  background: #ffc40c;
  border: 5px solid #4e55a3;
  color: #fff;
  font-size: 18px;
  font-weight: bolder;
  border-radius: 25px;
  text-align: center;
  position: relative;
  bottom: 0;
  display: block;
  margin: 0 auto;
}

.qdbox {
  display: none;
  padding: 15px 0;
  width: 250px;
  border: 3px solid #58bc8d;
  border-radius: 10px;
  background: #fff;
  position: fixed;
  z-index: 1001;
  top: 50%;
  left: 50%;
  margin-top: -113px;
  margin-left: -120px;
}

.qdbox .text-green {
  color: #58bc8d;
}

.btn-lottery {
  width: 120px;
  text-align: center;
  color: #fff;
  background: #58bc8d;
  font-size: 16px;
}

.calenbox {
  width: 100%;
  margin: 0 auto;
  background: #faca34;
}

.calenbox .date {
  width: 14%;
  text-align: center;
  background: #fff;
  border-radius: 7px;
  color: #6a3906;
  font-weight: bolder;
  font-size: 18px;
  padding: 10px 0;
  float: left;
  border-right: 1px solid #faca34;
  border-bottom: 1px solid #faca34;
}

.singer_r_img:hover {
  background-position: right -53px;
  text-decoration: none;
}

.singer_r_img span {
  margin-left: 14px;
  font-size: 16px;
  font-family: "Hiragino Sans GB", "Microsoft YaHei", sans-serif !important;
  font-weight: 700;
  color: #165379;
}

.singer_r_img.current {
  text-decoration: none;
}

.sign table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  color: #a46626;
  font-weight: bold;
  font-size: 20px;
}

.sign th,
.sign td {
  width: 30px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border: 1px solid #faca34;
  border-radius: 6px;
  background: #fff;
}

.sign th {
  font-size: 16px;
  border-radius: 6px;
  background: #fff;
}

.sign td {
  color: #404040;
  vertical-align: middle;
  border-radius: 6px;
  background: #fff;
  color: #a46626;
}

.sign .on {
  background-color: #ff8989;
  color: #fff;
}

.calendar_month_next,
.calendar_month_prev {
  display: none;
  width: 34px;
  height: 40px;
  cursor: pointer;
}

.calendar_month_next {
  display: none;
  float: right;
  line-height: 40px;
}

.calendar_month_span {
  display: inline !important;
  line-height: 40px !important;
  font-size: 16px !important;
  color: #656565 !important;
  letter-spacing: 2px !important;
  font-weight: bold !important;
}

.calendar_month_prev {
  float: left;
  line-height: 40px;
}

.sign_succ_calendar_title {
  text-align: center;
  border-left: 1px solid #faca34;
  border-right: 1px solid #faca34;
  background: #faca34;
}

.sign_main {
  border-top: 1px solid #faca34;
  font-family: "Microsoft YaHei", SimHei;
}

.qiandao-sprits {
  background-repeat: no-repeat;
}

.qiandao-tran {
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
  -ms-transition: all 0.3s ease-out;
}

.qiandao-radius {
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -o-border-radius: 5px;
  -ms-border-radius: 5px;
}

.qiandao-warp {
  height: 1306px;
}

.qiandap-box {
  margin: 0 auto;
  width: 70pc;
  height: 1306px;
  background-color: #4d56a3;
}

.qiandao-con {
  margin: 0 auto;
  width: 1035px;
  height: 684px;
}

.qiandao-left {
  float: left;
  padding: 20px 42px 0 39px;
  width: 603px;
}

.qiandao-right {
  float: right;
  padding: 0 20px;
  width: 290px;
}

.current-date {
  float: left;
  padding-top: 5px;
  padding-left: 55px;
  color: #b25d06;
  font-size: 18px;
}

.qiandao-history {
  float: right;
  width: 92px;
  height: 36px;
  border-radius: 4px;
  background-color: #b25d06;
  color: #fff;
  text-align: center;
  font-size: 1pc;
  line-height: 36px;
  cursor: pointer;
}

.qiandao-history:hover {
  background-color: #9c4f01;
}

.qiandao-top {
  padding-top: 70px;
  height: 13pc;
}

.just-qiandao {
  margin: 0 auto 20px;
  width: 212px;
  height: 67px;
  cursor: pointer;
}

.just-qiandao.actived,
.just-qiandao:active {
  background-position: 0 -68px;
}

.qiandao-notic {
  color: #b25d06;
  text-align: center;
  font-size: 18px;
}

.qiandao-rule-list {
  margin-bottom: 35px;
  color: #8d8ebb;
  font-size: 1pc;
  line-height: 26px;
}

.qiandao-rule-list h4 {
  font-weight: bolder;
  font-size: 1pc;
}

.qiandao-main {
  overflow: hidden;
  width: 603px;
}

.qiandao-list {
  margin-top: 76px;
  margin-right: -10px;
}

.qiandao-list li {
  position: relative;
  float: left;
  margin: 0 1px 1px 0;
  width: 85px;
  height: 85px;
  background-position: 0 0;
}

.qiandao-list li.date1 {
  background-position: -430px 0;
}

.qiandao-list li.date2 {
  background-position: -516px 0;
}

.qiandao-list li.date3 {
  background-position: 0 -86px;
}

.qiandao-list li.date4 {
  background-position: -86px -86px;
}

.qiandao-list li.date5 {
  background-position: -172px -86px;
}

.qiandao-list li.date6 {
  background-position: -258px -86px;
}

.qiandao-list li.date7 {
  background-position: -344px -86px;
}

.qiandao-list li.date8 {
  background-position: -430px -86px;
}

.qiandao-list li.date9 {
  background-position: -516px -86px;
}

.qiandao-list li.date10 {
  background-position: 0 -172px;
}

.qiandao-list li.date11 {
  background-position: -86px -172px;
}

.qiandao-list li.date12 {
  background-position: -172px -172px;
}

.qiandao-list li.date13 {
  background-position: -258px -172px;
}

.qiandao-list li.date14 {
  background-position: -344px -172px;
}

.qiandao-list li.date15 {
  background-position: -430px -172px;
}

.qiandao-list li.date16 {
  background-position: -516px -172px;
}

.qiandao-list li.date17 {
  background-position: 0 -258px;
}

.qiandao-list li.date18 {
  background-position: -86px -258px;
}

.qiandao-list li.date19 {
  background-position: -172px -258px;
}

.qiandao-list li.date20 {
  background-position: -258px -258px;
}

.qiandao-list li.date21 {
  background-position: -344px -258px;
}

.qiandao-list li.date22 {
  background-position: -430px -258px;
}

.qiandao-list li.date23 {
  background-position: -516px -258px;
}

.qiandao-list li.date24 {
  background-position: 0 -344px;
}

.qiandao-list li.date25 {
  background-position: -86px -344px;
}

.qiandao-list li.date26 {
  background-position: -172px -344px;
}

.qiandao-list li.date27 {
  background-position: -258px -344px;
}

.qiandao-list li.date28 {
  background-position: -344px -344px;
}

.qiandao-list li.date29 {
  background-position: -430px -344px;
}

.qiandao-list li.date30 {
  background-position: -516px -344px;
}

.qiandao-list li.date31 {
  background-position: 0 -430px;
}

.qiandao-list li .qiandao-icon {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  display: none;
  width: 85px;
  height: 85px;
}

.qiandao-list li.qiandao .qiandao-icon {
  display: block;
}

.qiandao-layer {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 888;
  display: none;
  width: 100%;
}

.qiandao-layer-bg {
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.55;
  filter: alpha(opacity=55);
}

.qiandao-layer-con {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 999;
  padding-top: 30px;
  border: 3px #33b23f solid;
  border-radius: 5px;
  background-color: #fff;
}

.qiandao-history-layer .qiandao-layer-con {
  margin: -257px 0 0 -293px;
  width: 586px;
  height: 484px;
}

.close-qiandao-layer {
  position: absolute;
  top: 13px;
  right: 13px;
  width: 1pc;
  height: 1pc;
  background-position: -228px -51px;
}

.qiandao-history-inf {
  margin-top: 25px;
  color: #666;
  text-align: center;
  font-size: 14px;
}

.qiandao-history-inf li {
  float: left;
  width: 25%;
}

.qiandao-history-inf li h4 {
  color: #33b23f;
  font-size: 40px;
  line-height: 50px;
}

.qiandao-history-table {
  overflow: hidden;
  margin: 20px;
  -webkit-border-radius: 5px 5px 0 0;
  -moz-border-radius: 5px 5px 0 0;
  border-radius: 5px 5px 0 0;
  -o-border-radius: 5px 5px 0 0;
  -ms-border-radius: 5px 5px 0 0;
}

.qiandao-history-table table {
  width: 100%;
  color: #666;
  text-align: center;
  font-size: 1pc;
  border-spacing: 0;
}

.qiandao-history-table table th {
  width: 33.3%;
  background-color: #f2f2f2;
  text-align: center;
  line-height: 40px;
}

.qiandao-history-table td {
  width: 33.3%;
  border-bottom: 1px #e5e5e5 dashed;
  line-height: 34px;
}

.qiandao-active .qiandao-layer-con {
  margin: -232px 0 0 -211px;
  width: 422px;
  height: 434px;
}

.yiqiandao {
  margin: 36px 0 0 40px;
  color: #666;
  font-size: 14px;
  line-height: 38px;
}

.yiqiandao .yiqiandao-icon {
  float: left;
  margin: 0 25px;
  width: 178px;
  height: 38px;
  background-position: -217px 0;
}

.qiandao-jiangli {
  position: relative;
  margin: 45px auto;
  width: 335px;
  height: 170px;
  background-position: 0 -146px;
}

.qiandao-jiangli span {
  position: absolute;
  top: 58px;
  left: 50px;
  display: block;
  width: 178px;
  height: 106px;
  color: #ff7300;
  text-align: center;
  font-weight: bolder;
  font-size: 30px;
  line-height: 106px;
}

.qiandao-jiangli span em {
  padding-left: 5px;
  font-style: normal;
  font-size: 1pc;
}

.qiandao-share {
  display: block;
  margin: 60px auto 0;
  width: 318px;
  height: 3pc;
  border-radius: 5px;
  background-color: #4ab854;
  color: #fff;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 3pc;
}

.qiandao-share:hover {
  background-color: #3e9d46;
}
</style>
