import Title from "../components/Title.vue";
import About from "../components/About.vue";
import Hotels from "../components/Hotels.vue";
import ToursById from "../components/ToursById.vue";
import Tours from "../components/Tours.vue";
import { createRouter, createWebHistory } from "vue-router";

// Vue.use(Router);

const routers = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Title",
      component: Title,
    },
    {
      path: "/hotels",
      name: "Hotels",
      component: Hotels,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: '/tours/:id',
      name: "ToursById",
      component: ToursById,
    },
    {
      path: '/tours',
      name: "Tours",
      component: Tours,
    },
  ],
});
export default routers;