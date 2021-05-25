import Vue from 'vue'
import App from './App.vue'
// import get from './components/library/CallbackBlogger.js'

Vue.config.productionTip = false

var theVue = new Vue({
  render: h => h(App),
  methods: {
    get: function (){ return 'get'; }
  }
}).$mount('#app');

// console.log(process.env);
console.log('theVue.get', theVue.get);

