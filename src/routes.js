import { createWebHistory, createRouter } from "vue-router";
import PeopleContent from "./views/PeopleContent.vue";
import CompaniesContent from "./views/CompaniesContent.vue";
const routes = [
  { path: "/people", name: "People", component: PeopleContent },
  { path: "/companies", name: "Companies", component: CompaniesContent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
