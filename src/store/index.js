import { createStore } from 'vuex'


const store = createStore({
  state () {
    return {
      locale: 'zh'
    }
  },
  mutations: {
    set_locale (state,val) {
      state.locale = val
    }
  }
})

export {store} 