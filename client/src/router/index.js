import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../views/Home.vue";
// @ts-ignore
import CarDetails from "../views/CarDetails.vue";
// @ts-ignore
import Jobs from "../views/Jobs.vue";
// @ts-ignore
import jobDetails from "../views/JobDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/cars/:id",
    name: "carDetails",
    component: CarDetails
  },
  {
    path: "/jobs",
    name: "jobs",
    component: Jobs
  },
  {
    path: "/jobs/:id",
    name: "jobDetails",
    component: jobDetails
  },
  {
    path: "*", //saftey net that returns bad routes back to the home
    redirect: "/"
  }
];

const router = new VueRouter({
  routes
});

export default router;
