

import {createRouter, createWebHistory} from 'vue-router'
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import Projects from "./components/Projects.vue";
import ProjectDetails from "./components/ProjectDetails.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/projects',
            name: 'Projects',
            component: Projects
        },
        {
            path: '/projectDetails',
            name: 'ProjectDetails',
            component: ProjectDetails,
        }
    ]
})

export default router