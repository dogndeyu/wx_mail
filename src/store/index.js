import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isForward: true
  },
  mutations: {
    updateDirection (state, payload) {
      state.isForward = payload
    }
  },
  strict: process.env.NODE_ENV !== 'production'
})

export default store
