import {createRouter, createWebHistory} from 'vue-router'

const routers = [
    {
        path: '/',
        // alias:"home",
        alias: ['/home', "/index"],
        component: () => import('../App.vue')
    }, {
        path: "/button",
        component: () => import("../views/button.vue")
    },
    {
        path: "/icon",
        component: () => import("../views/icon.vue")
    },
    {
        path: "/tips",
        component: () => import("../views/tips.vue")
    },
    {
        path: "/navigation",
        component: () => import("../views/navigation.vue")
    },
    {
        path: "/tabs",
        component: () => import("../views/tabs.vue")
    },
    {
        path: "/input",
        component: () => import("../views/input.vue")
    },
    {
        path: "/radio",
        component: () => import("../views/radio.vue")
    },
    {
        path: "/select",
        component: () => import("../views/select.vue")
    },
    {
        path: "/datepicker",
        component: () => import("../views/datepicker.vue")
    },
    {
        path: "/form",
        component: () => import("../views/form.vue")
    },
    {
        path: "/dialog",
        component: () => import("../views/dialog.vue")
    },
    {
        path: "/pagination",
        component: () => import("../views/pagination.vue")
    },
    {
        path: "/table",
        component: () => import("../views/table.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routers
})

export default router