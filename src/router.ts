import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue'
import PuntoVenta from './views/PuntoVenta.vue';
import Admin from './views/Admin.vue';
import AddProducts from './views/AddProducts.vue';
import Transactions from './views/Transactions.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path:'/Login',
      name:'Login',
      component: Login,
    },
    {
      path:'/Register',
      name:'Register',
      component:Register,
    },
    {
      path:'/PuntoVenta',
      name:'PuntoVenta',
      component:PuntoVenta,
    },
    {
      path:'/Admin/:rol',
      name:'Admin',
      component:Admin,
    },
    {
      path:'/AddProducts',
      name:'AddProducts',
      component:AddProducts,
    },
    {
      path:'/Transactions',
      name:'Transactions',
      component:Transactions,
    },
    
  ],
});
