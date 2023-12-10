import { createRouter, createWebHashHistory } from "vue-router";

import home from "./pages/Home.vue"
import about from "./pages/About.vue"
import projects from "./pages/Projects.vue"
import contacts from "./pages/Contacts.vue"
import showproject from "./pages/ShowProject.vue"

const router = createRouter({
  history: createWebHashHistory(),
  linkExactActiveClass: "active",

  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/about",
      name: "about",
      component: about,
    },
    {
      path: "/projects",
      name: "projects",
      component: projects,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: contacts,
    },
    {
      path: "/show-project/:slug",
      name: "showproject",
      component: showproject,
    },
    
  ],
})

export { router }