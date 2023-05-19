import Vue from 'vue'
import Title from '../components/Title.vue'
import About from '../components/About.vue'
import Hotels from '../components/Hotels.vue'
import Tours from '../components/Tours.vue'
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  routes: [
    {
        path: '/',
        name: 'Title',
        component: Title
    },
    {
        path: '/hotels',
        name: 'Hotels',
        component: Hotels
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/tours',
        name: 'Tours',
        component: Tours
    },
  ],
});

export default router;