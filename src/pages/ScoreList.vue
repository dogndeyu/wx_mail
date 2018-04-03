<template>
  <div style="position:absolute" class="width100 height100 clearfix bgcolorf7f7f7" id="scoreList">
    <x-header  :left-options="{backText:''}" class="bgcolor clearfix width100 Header">{{$route.name}}</x-header>
    <view-box class="width100 height100 clearfix">
         <div class="clearfix marginTop46">
             <p class="scoreList_p clearfix">
                <span class="clearfix">
                     积分规则
                </span>
                 <span class="clearfix"> 
                     <img width="20" src="/static/306wenhao.svg" alt="">
                 </span>
             </p>
             <div class="scoreList_score clearfix">
                 <div class="clearfix">
                     <p>元宝</p>
                     <p>2,000</p>
                 </div>
                        
             </div>
            <divider class="scoreList_Bottom">积分明细</divider>
            <div class="clearfix scoreList_list">
                <div class="clearfix">
                    <div class="clearfix flt scoreList_list_l">
                        <div class="clearfix">签到领取</div>
                        <div class="clearfix">2017-10-22 10:26:29</div>
                    </div>
                    <div class="clearfix frt scoreList_list_r">
                        5
                    </div>
                </div>
                   <div class="clearfix">
                    <div class="clearfix flt scoreList_list_l">
                        <div class="clearfix">签到领取</div>
                        <div class="clearfix">2017-10-22 10:26:29</div>
                    </div>
                    <div class="clearfix frt scoreList_list_r">
                        5
                    </div>
                </div>
                   <div class="clearfix">
                    <div class="clearfix flt scoreList_list_l">
                        <div class="clearfix">签到领取</div>
                        <div class="clearfix">2017-10-22 10:26:29</div>
                    </div>
                    <div class="clearfix frt scoreList_list_r">
                        5
                    </div>
                </div>
                   <div class="clearfix">
                    <div class="clearfix flt scoreList_list_l">
                        <div class="clearfix">签到领取</div>
                        <div class="clearfix">2017-10-22 10:26:29</div>
                    </div>
                    <div class="clearfix frt scoreList_list_r">
                        5
                    </div>
                </div>
                   <div class="clearfix">
                    <div class="clearfix flt scoreList_list_l">
                        <div class="clearfix">签到领取</div>
                        <div class="clearfix">2017-10-22 10:26:29</div>
                    </div>
                    <div class="clearfix frt scoreList_list_r">
                        5
                    </div>
                </div>
                   <div class="clearfix">
                    <div class="clearfix flt scoreList_list_l">
                        <div class="clearfix">签到领取</div>
                        <div class="clearfix">2017-10-22 10:26:29</div>
                    </div>
                    <div class="clearfix frt scoreList_list_r">
                        5
                    </div>
                </div>
                   <div class="clearfix">
                    <div class="clearfix flt scoreList_list_l">
                        <div class="clearfix">签到领取</div>
                        <div class="clearfix">2017-10-22 10:26:29</div>
                    </div>
                    <div class="clearfix frt scoreList_list_r">
                        5
                    </div>
                </div>
            </div>
         </div>
    </view-box>
  </div>
</template>

<script>
import { ViewBox, XHeader, Divider, Group, Cell } from "vux";

export default {
  components: {
    ViewBox,
    XHeader,
    Divider,
    Group,
    Cell
  }
};
</script>
<style lang="less" scoped>
#scoreList {
  .scoreList_p {
    width: 100%;
    height: 33px;
    line-height: 38px;
    position: relative;
    font-size: 0.82rem;
    span {
      float: right;
      display: block;
      img {
        margin-top: 9px;
        display: block;
        margin-right: 5px;
      }
    }
    span:nth-child(1) {
      margin-right: 10px;
    }
  }
  .scoreList_score {
    width: 100%;
    height: 149px;
    div:nth-child(1) {
      display: block;
      width: 135px;
      height: 135px;
      border-radius: 50%;
      background-color: #ea575c;
      border-color: #f39194;
      margin: auto;
      p:nth-child(1) {
        text-align: center;
        width: 100%;
        font-size: 18px;
        font-family: PingFangSC-Medium;
        color: rgba(255, 255, 255, 1);
        line-height: 25px;
        margin-bottom: 8px;
        margin-top: 26px;
        display: inline-block;
      }
      p:nth-child(2) {
        text-align: center;
        width: 100%;
        height: 41px;
        font-size: 29px;
        font-family: PingFangSC-Regular;
        color: rgba(255, 255, 255, 1);
        line-height: 41px;
      }
    }
  }
  .scoreList_Bottom {
    color: rgba(187, 187, 187, 1);
    font-size: 0.9rem;
    margin: 0 20px;
  }
  .scoreList_list > div {
    border-bottom: 1px dashed rgba(224, 224, 224, 1);
    height: 50px;
    margin: 0 20px;
    .scoreList_list_l div:nth-child(1) {
      height: 20px;
      font-size: 0.85rem;
      font-family: PingFangSC-Regular;
      color: rgba(68, 68, 68, 1);
      line-height: 25px;
    }
    .scoreList_list_l div:nth-child(2) {
      height: 17px;
      font-size: 0.76rem;
      font-family: PingFangSC-Regular;
      color: rgba(153, 153, 153, 1);
      line-height: 17px;
      margin-top: 5px;
    }
    .scoreList_list_r {
      height: 50px;
      font-size: 1.1rem;
      font-family: PingFangSC-Regular;
      line-height: 50px;
      color: rgb(22, 181, 107);
    }
  }
}
</style>
