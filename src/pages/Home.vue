<template>
  <div style="position:absolute" class="width100 height100 clearfix bgcolore0e0e0 home" id="home">
   
      <x-header :left-options="{showBack: false}"  class="bgcolor clearfix width100 Header">{{$route.name}}</x-header>
       <view-box class="width100 height100 clearfix">
         <div class="clearfix marginTop46">
            <group  gutter="0"  class="">
                <cell @click.native="goScoreList" is-link>
                  <img slot="icon" src="../assets/img/gyzqlogo.png" style="margin-top:2px" width="45px">
                  <div slot="title" >
                    <div class="titleName">Adam</div>
                    <div class="titleMember">
                      <span class="flt"><img width='20px' src="../assets/img/memberSymbol.svg" alt=""></span>
                      <span class="flt">三星会员</span>  
                    </div>
                  </div>
                  <div class="signBtnBox"  @click.prevent.stop='goSignIn'>
                    <div class="signBtn"><span class="QDsanjiaoxing"></span>签到领积分</div>
                    <div  class="signScoreBox">
                      <span>0</span>
                      <span>元宝</span>
                    </div>
                  </div>
                </cell>
            </group>
            <grid class="clearfix bgcolorfff poRelative marginTop10 marginBot10">
              <span class="poAbsolute width1"></span>
              <span class="poAbsolute width2"></span>
              <span class="poAbsolute width3"></span>
              <grid-item  class="clearfix"  @click.native='ProductClassify(1)'>
                <img slot="icon" src="../assets/img/quanBtn.svg">
                <span class="grid-center">优惠卡券</span>
              </grid-item>
              <grid-item  class="clearfix"  @click.native='ProductClassify(2)'>
                <img slot="icon" src="../assets/img/bdcBtn.svg">
                <span class="grid-center">生活服务</span>
              </grid-item>
              <grid-item  class="clearfix"  @click.native='ProductClassify(3)'>
                <img slot="icon" src="../assets/img/khBtn.svg">
                <span class="grid-center">国元专享</span>
              </grid-item>
               <grid-item  class="clearfix"  @click.native='goOrder()'>
                <img slot="icon" src="../assets/img/khBtn.svg">
                <span class="grid-center">我的订单</span>
              </grid-item>
            </grid>
            <group-title class="bgcolorfff marginTop10 active groupTitle">
              <span class="flt">
                <img src="../assets/img/quanLogo.svg" alt="">
              </span>
              <span class="flt">
                优选活动
              </span> 
            </group-title>
            <grid :cols="3" class="prod bgcolorfff clearfix">
              <!-- :link="'Prod?id='+index" -->
              <grid-item @click.native='goProductDetail(item)'  class="clearfix gridItem borderGird" v-for="(item,index) in items" v-if="index<=5" :key="index" >
                <img  style="width:70%;margin:0 auto;display:block;" class="clearfix"  :src='item.img'>
                <div class="borderGirdInstruc">
                 <div>{{item.names}}</div>
                  <div>{{item.subitems}}</div>
                  <div>{{item.number}}<span>元宝</span></div>
                </div>
              </grid-item>
            </grid>
            <group-title class="bgcolorfff marginTop10 active groupTitle">
              <span class="flt">
                <img src="../assets/img/quanLogo.svg" alt="">
              </span>
              <span class="flt">
                为您推荐
              </span> 
            </group-title>
            <grid :cols="3" class="prod bgcolorfff clearfix">
              <!-- :link="'Prod?id='+index" -->
              <grid-item class="clearfix gridItem borderGird" v-for="(item,index) in items" v-if="index<=5" :key="index" >
                <img  style="width:70%;margin:0 auto;display:block;" class="clearfix"  :src='item.img'>
                <div class="borderGirdInstruc">
                  <div>{{item.names}}</div>
                  <div>{{item.subitems}}</div>
                  <div>{{item.number}}<span>元宝</span></div>
                </div>
              </grid-item>
            </grid>
         </div>
    </view-box>
  </div>
</template>

<script>
import { ViewBox, XHeader, Grid, GridItem, Group, GroupTitle, Cell } from "vux";
let ways = [
  {
    names: "10M电信流量",
    subitems: "中国联通",
    number: "59",
    img: "/static/example.png"
  },
  {
    names: "10M电信流量",
    subitems: "中国联通",
    number: "59",
    img: "/static/example.png"
  },
  {
    names: "10M电信流量",
    subitems: "中国联通",
    number: "59",
    img: "/static/example.png"
  },
  {
    names: "10M电信流量",
    subitems: "中国联通",
    number: "59",
    img: "/static/example.png"
  },
  {
    names: "10M电信流量",
    subitems: "中国联通",
    number: "59",
    img: "/static/example.png"
  },
  {
    names: "10M电信流量",
    subitems: "中国联通",
    number: "59",
    img: "/static/example.png"
  },
  {
    names: "10M电信流量",
    subitems: "中国联通",
    number: "59",
    img: "/static/example.png"
  },
  {
    names: "10M电信流量",
    subitems: "中国联通",
    number: "59",
    img: "/static/example.png"
  }
];
export default {
  data() {
    return {
      items: ways
    };
  },
  components: {
    ViewBox,
    XHeader,
    Group,
    GroupTitle,
    Cell,
    Grid,
    GridItem
  },
  created: function() {},
  computed: {
    limitTo: function() {
      return this.items.slice(0, 6);
    }
  },
  methods: {
    goScoreList() {
      this.$router.push({
        path: "ScoreList"
      });
    },
    goProductDetail(item) {
      this.$router.push({
        path: "ProductDetail",
        query: {
          names: item.names,
          subitems: item.subitems,
          numbers: item.number
        }
      });
    },
    ProductClassify(number, name) {
      this.$router.push({
        path: "ProductClassify",
        query: {
          numbers: number
        }
      });
    },
    goOrder() {
      this.$router.push({
        path: "Order"
      });
    },
    goSignIn() {
      this.$router.push({
        path: "SignIn"
      });
    }
  }
};
</script>
<style lang="less" scoped>
.weui-grid:before {
  border-right: none !important;
}
.weui-grid {
  padding: 0 !important;
  margin: 10px 0;
}
.grid-center {
  display: block;
  text-align: center;
  color: #333;
  font-size: 0.78rem;
  margin-top: 2px;
}
.width1 {
  width: 1px;
  height: 35px;
  background-color: #5f86ad;
  left: 25%;
  top: 18px;
}
.width2 {
  width: 1px;
  height: 35px;
  background-color: #5f86ad;
  left: 50%;
  top: 18px;
}
.width3 {
  width: 1px;
  height: 35px;
  background-color: #5f86ad;
  right: 25%;
  top: 18px;
}
.weui-cell_access .weui-cell__ft:after {
  width: 9px !important;
  height: 9px !important;
  right: -1px !important;
}
.home {
  .weui-cell {
    padding: 10px 12px;
  }
  .titleName {
    font-size: 1.2rem;
    margin-left: 8px;
    color: #262626;
  }
  .titleMember {
    font-size: 13px;
    margin-left: 8px;
    color: #262626;
    span {
      display: block;
    }
    span:nth-child(2) {
      margin-left: 5px;
      margin-top: 2px;
    }
  }
  .signScoreBox {
    text-align: center;
  }
  .signBtnBox {
    margin-right: 14px;
    .signBtn {
      width: 74px;
      height: 25px;
      background-color: #e32c35;
      color: #fff;
      text-align: center;
      font-size: 0.75rem;
      border-radius: 6px;
      line-height: 25px;
      position: relative;
    }
    .QDsanjiaoxing {
      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 4px solid #e32c35;
      position: absolute;
      right: 33px;
      bottom: -4px;
    }
  }
  .signScoreBox span:nth-child(1) {
    font-size: 0.9rem;
    color: #262626;
  }
  .signScoreBox span:nth-child(2) {
    font-size: 0.75rem;
    color: #858585;
  }
  .active {
    height: 40px;
    line-height: 40px;
  }
  .groupTitle {
    margin-bottom: 0 !important;
    border-bottom: 1px solid #e0e0e0;
    span {
      display: block;
    }
    span:nth-child(1) img {
      margin-top: 12px;
      display: block;
    }
    span:nth-child(2) {
      margin-left: 5px;
    }
  }
  .weui-grid__icon {
    width: 100px !important;
    img {
      width: 100%;
    }
  }
  .borderGird {
    border-right: 1px solid #f0f0f0;
    border-bottom: 1px solid #f0f0f0;
    margin: 0;
    padding-top: 7px !important;
  }
  .borderGirdInstruc {
    div {
      text-align: left;
      padding-left: 15%;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
    }
    div:nth-child(1) {
      color: #595959;
      font-size: 0.78rem;
    }
    div:nth-child(2) {
      color: #999;
      font-size: 0.72rem;
    }
    div:nth-child(3) {
      color: #595959;
      font-size: 0.75rem;
      color: #ed935b;
      span {
        font-size: 0.78rem;
        color: #595959;
        margin-left: 5px;
      }
    }
  }
}
</style>
