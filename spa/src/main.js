import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,

  methods: {
    get: function (){ return 'get'; }
  }
}).$mount('#app');

// console.log(process.env);
// console.log('theVue.get', theVue.get);

