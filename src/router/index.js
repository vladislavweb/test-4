import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/home/Home.vue";
import Note from "@/pages/Note.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "Notes",
    path: "/notes/:id",
    component: Note,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  sensitive: true,
  strict: true,
});

export default router;
