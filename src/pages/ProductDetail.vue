<template>
  <div style="position:absolute" class="width100 height100 clearfix bgcolorfff" id="ProductDetail">
    <x-header  :left-options="{backText:''}" class="bgcolor clearfix width100 Header">{{$route.name}}</x-header>
    <view-box class="width100 height100 clearfix">
         <div class="clearfix marginTop46">
            <img class="prodImg" src="/static/member.jpg"  alt="">
             <div class="productInfo">
               <p>{{$route.query.names}}</p>
               <p><span>{{$route.query.numbers}}</span>积分</p>
               <p>{{$route.query.subitems}}</p>
             </div>
             <div class="productInstruction">
                <div class="productItem">
                  <p>商品简介:</p>
                  <p>腾讯VIP[会员]3元现金抵用券，开通会员即可尊享海量高清大片。</p>
                </div>
                 <div class="productItem">
                  <p>使用范围:</p>
                  <p>全国</p>
                </div>
                <div class="productItem">
                  <p>有效期:</p>
                  <p>2018年5月30日前兑换有效,领取兑换之日15天有效</p>
                </div>
             </div>
         </div>
         <div class="changeBtn">
            立即兑换
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
  },
  methods: {
  
  },
  
};
</script>
<style lang="less" scoped>
#ProductDetail {
  .prodImg {
    width: 100%;
    transform: translate3d(0, 0, 0);
    display: block;
  }
  .productInfo {
    padding: 5px 20px;
    border-bottom: 1px solid #ebebeb;
    p:nth-child(1) {
      font-size: 1.1rem;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
    }
    p:nth-child(2) {
      font-size: 0.95rem;
      span {
        margin: 0 5px 0 0;
        color: #e32c35;
        font-size: 0.9rem;
      }
    }
    p:nth-child(3) {
      font-size: 0.82rem;
      color: #9a9a9a;
    }
  }
  .productInstruction {
    margin: 0 20px;
    .productItem {
      margin-top: 15px;
      p:nth-child(1) {
        font-weight: bold;
        font-size: 0.95rem;
      }
      p:nth-child(2) {
        font-size: 0.82rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
      }
    }
  }
  .changeBtn {
    position: absolute;
    bottom: 0;
    height: 40px;
    width: 100%;
    text-align: center;
    left: 0;
    line-height: 40px;
    background-color: #fd915d;
    color: #fff;
    font-size: 1rem;
  }
}
</style>
