import Vue from 'vue';
import App from './App.vue';
import gcloud from './gcloud';

Vue.config.productionTip = false;
console.log(gcloud.app.name);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
