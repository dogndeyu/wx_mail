<template>
  <div style="position:absolute" class="width100 height100 clearfix bgcolorfff" id="ProductClassify">
    <x-header  :left-options="{backText:''}" class="bgcolor clearfix width100 Header">{{$route.name}}</x-header>
    <view-box class="width100 height100 clearfix">
         <div class="clearfix marginTop46">
            <grid :cols="2" class="prod bgcolorfff clearfix">
              <grid-item  @click.native='goProductDetail_(item)' class="clearfix gridItem borderGird" v-for="(item,index) in items"  :key="index" >
                <img  style="width:50%;margin:10px auto 0;display:block;border-radius:50%;" class="clearfix"  :src='item.img'>
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
import { ViewBox, XHeader, Divider, Group, Cell, Grid, GridItem } from "vux";
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
    Divider,
    Group,
    Cell,
    Grid,
    GridItem
  },
  methods: {
    goProductDetail_(item) {
      this.$router.push({
        path: "ProductDetail",
        query: {
          names: item.names,
          subitems: item.subitems,
          numbers: item.number
        }
      });
    }
  },
  created() {
    console.log(this.$route.query.numbers);
  },
  mounted() {
  }
};
</script>
<style lang="less" scoped>
#ProductClassify {
  .borderGird {
    border-right: 1px solid #f0f0f0;
    border-bottom: 1px solid #f0f0f0;
    margin: 0;
    padding-top: 7px !important;
  }
  .weui-grid {
    margin: 0;
    padding: 0;
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
      color: #999;
      font-size: 0.72rem;
      margin-top: 10px;
    }
    div:nth-child(2) {
      color: #595959;
      font-size: 0.8rem;
    }
    div:nth-child(3) {
      color: #595959;
      font-size: 0.75rem;
      color: #ed935b;
      margin-bottom: 5px;
      span {
        font-size: 0.8rem;
        color: #595959;
        margin-left: 5px;
      }
    }
  }
}
</style>
