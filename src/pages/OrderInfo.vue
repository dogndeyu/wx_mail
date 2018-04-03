<template>
  <div style="position:absolute" class="width100 height100 clearfix bgcolore0e0e0" id="OrderInfo">
    <x-header  :left-options="{backText:''}" class="bgcolor clearfix width100 Header">{{$route.name}}</x-header>
    <view-box class="width100 height100 clearfix">
         <div class="clearfix marginTop46">
            <div class='clearfix bgcolorfff OrderBox'>
                <div class="clearfix OrderStatue">
                    <span class="flt">订单号：</span>
                    <span class="flt">{{$route.query.orderNumber}}</span>
                    <span class="frt">{{$route.query.statue}}</span>
                </div>
                <div class="clearfix OrderCont poRelative">
                   <div class="clearfix flt">
                     <img :src="$route.query.img" alt="">
                   </div>
                   <div class="clearfix flt ">
                     <p>{{$route.query.name}}</p>
                     <p>{{$route.query.score}} 积分<span class="frt">*{{$route.query.number}}</span></p>
                   </div>
                </div> 
                <div class="OrderMail clearfix">
                    <div class="flt clearfix">券码</div>
                    <div class="flt clearfix"> 2131231321312312<span>2018 03.01 过期</span></div>
                </div>
            </div>
         </div>
    </view-box>
  </div>
</template>

<script>
import { ViewBox, XHeader, Divider, Group, Cell, Grid, GridItem } from "vux";
let lists = [
  {
    img: "/static/example.png",
    orderNumber: "5a5a5a5a5a5a5",
    name: "滴滴快车",
    subtitle: "1元快车券",
    score: 500
  },
  {
    img: "/static/example.png",
    orderNumber: "5a5a5a5a5a5a5",
    name: "滴滴快车",
    subtitle: "1元快车券",
    score: 500
  },
  {
    img: "/static/example.png",
    orderNumber: "5a5a5a5a5a5a5",
    name: "滴滴快车",
    subtitle: "1元快车券",
    score: 500
  },
  {
    img: "/static/example.png",
    orderNumber: "5a5a5a5a5a5a5",
    name: "滴滴快车",
    subtitle: "1元快车券",
    score: 500
  },
  {
    img: "/static/example.png",
    orderNumber: "5a5a5a5a5a5a5",
    name: "滴滴快车",
    subtitle: "1元快车券",
    score: 500
  }
];
export default {
  data() {
    return {
      items: lists
    };
  },
  components: {
    ViewBox,
    XHeader,
    Divider,
    Group,
    Cell,
    Grid,
    GridItem
  },
  methods: {}
};
</script>
<style lang="less" scoped>
#OrderInfo {
  .OrderBox {
    margin-top: 10px;
  }
  .OrderBox:nth-child(1) {
    margin-top: 0;
  }
  .OrderStatue {
    margin: 0 20px;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #e4e4e4;
    font-size: 0.8rem;
    color: #323232;
    span:nth-child(3) {
      color: #ee965f;
      font-size: 0.8rem;
    }
  }
  .OrderMail {
    margin: 0 20px;
    height: 40px;
    line-height: 40px;
    border-top: 1px solid #e4e4e4;
    font-size: 0.79rem;
    color: #323232;
    span {
      color: #ee965f;
      font-size: 0.8rem;
      margin: 0 5px;
    }
    div:nth-child(1) {
      margin-right: 5px;
      color: #333;
    }
    div:nth-child(2) {
      color: #ed8d51;
      width: 89%;
      span {
        float: right;
        color: #333;
        font-size: 0.75rem;
      }
    }
  }
  .OrderCont {
    margin: 0 20px;
    padding: 10px 0;
    div:nth-child(1) {
      width: 55px;
      height: 55px;
      border-radius: 6px;
      border: 1px solid #e4e4e4;
      img {
        display: block;
        width: 70%;
        margin-left: 15%;
        margin-top: 15%;
      }
    }
    div:nth-child(2) {
      margin-left: 10px;
      width: 75%;
      p:first-child {
        color: #333;
        font-size: 0.9rem;
      }
      p:nth-child(2) {
        color: #ed8d51;
        font-size: 0.8rem;
        margin-top: 12px;
        span {
          float: right;
        }
      }
    }
    .Icon {
      right: -3px;
      top: 23px;
    }
  }
  .vux-x-icon {
    fill: #7f7f7f;
  }
}
</style>
