import { createMemoryHistory, createRouter } from "vue-router";
import HomePage from "@/components/pages/HomePage.vue";
import GroupPage from "@/components/pages/GroupPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/group/:id", component: GroupPage },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
