import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  methods: {
    get: function (){ return 'get'; }
  }
}).$mount('#app');

// console.log(process.env);
// console.log('theVue.get', theVue.get);

