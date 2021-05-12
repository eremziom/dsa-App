import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueRouter from 'vue-router';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Error404 from './components/Error404';

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/login', component: Login},
    {path: '/dashboard', component: Dashboard},
    {path: '*', component: Error404},
    {path: '/'}
  ]
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
