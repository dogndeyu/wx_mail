import {
  WechatPlugin,
  AjaxPlugin,
  LoadingPlugin,
  ToastPlugin,
  AlertPlugin,
  ConfirmPlugin
} from 'vux'
import FastClick from 'fastclick'

FastClick.attach(document.body)

const plugin = {
  install (Vue) {
    Vue.use(WechatPlugin)
    Vue.use(AjaxPlugin)
    Vue.use(LoadingPlugin)
    Vue.use(ToastPlugin)
    Vue.use(AlertPlugin)
    Vue.use(ConfirmPlugin)
  }
}

export default plugin
