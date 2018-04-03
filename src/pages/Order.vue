<template>
  <div style="position:absolute" class="width100 height100 clearfix bgcolore0e0e0" id="Order">
    <x-header  :left-options="{backText:''}" class="bgcolor clearfix width100 Header">{{$route.name}}</x-header>
    <view-box class="width100 height100 clearfix">
         <div class="clearfix marginTop46">
            <div class='clearfix bgcolorfff OrderBox' @click='goOrderInfo(item)' v-for="(item,index) in items"  :key="index" >
                <div class="clearfix OrderStatue">
                    <span class="flt">订单号：</span>
                    <span class="flt">{{item.orderNumber}}</span>
                    <span class="frt">{{item.statue}}</span>
                </div>
                <div class="clearfix OrderCont poRelative">
                   <div class="clearfix flt">
                     <img :src="item.img" alt="">
                   </div>
                   <div class="clearfix flt ">
                     <p>{{item.name}}</p>
                     <p>{{item.subtitle}}</p>
                     <x-icon class="poAbsolute Icon" type="ios-arrow-forward" size="30"></x-icon>
                   </div>
                </div> 
                <div class="OrderMail clearfix">
                    <div class="flt clearfix">共{{item.numer}}件商品，</div>
                    <div class="flt clearfix">支付: <span>{{item.score}}</span>积分</div>
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
    orderNumber: "111111111111",
    name: "滴滴快车",
    subtitle: "1元快车券",
    score: 100,
    number: 1,
    statue: "交易成功"
  },
  {
    img: "/static/example.png",
    orderNumber: "2222222222222",
    name: "滴滴快车",
    subtitle: "2元快车券",
    score: 200,
    number: 1,
    statue: "交易成功"
  },
  {
    img: "/static/example.png",
    orderNumber: "3333333333333",
    name: "滴滴快车",
    subtitle: "4元快车券",
    score: 300,
    number: 1,
    statue: "交易成功"
  },
  {
    img: "/static/example.png",
    orderNumber: "4444444444444",
    name: "滴滴快车",
    subtitle: "4元快车券",
    score: 400,
    number: 1,
    statue: "交易成功"
  },
  {
    img: "/static/example.png",
    orderNumber: "5555555555555",
    name: "滴滴快车",
    subtitle: "5元快车券",
    score: 500,
    number: 1,
    statue: "交易成功"
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
  methods: {
    goOrderInfo(item) {
      this.$router.push({
        path: "OrderInfo",
        query: {
          orderNumber: item.orderNumber,
          name: item.name,
          img: item.img,
          subtitle: item.subtitle,
          score: item.score,
          number: item.number,
          statue: item.statue,
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
#Order {
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
    font-size: 0.8rem;
    color: #323232;
    span {
      color: #ee965f;
      font-size: 0.8rem;
      margin: 0 5px;
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
      p:first-child {
        color: #6f6f6f;
        font-size: 0.95rem;
      }
      p:nth-child(2) {
        color: #2f2f2f;
        font-size: 0.98rem;
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
