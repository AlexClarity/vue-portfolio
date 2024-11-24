

import {createRouter, createWebHistory} from 'vue-router'
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";

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
        }
    ]
})

export default router