import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index',
            component: Home,
            children: [
                {
                    path: "/button",
                    name: "button",
                    component: () => import("./views/ButtonPage.vue")
                },
                {
                    path: "/layout",
                    name: "layout",
                    component: () => import("./views/LayoutPage.vue")
                },
                {
                    path: "/radio",
                    name: "radio",
                    component: () => import("./views/RadioPage.vue")
                },
                {
                    path: "/select",
                    name: "select",
                    component: () => import("./views/SelectPage.vue")
                },
                {
                    path: "/switch",
                    name: "switch",
                    component: () => import("./views/SwitchPage.vue")
                },
                {
                    path: "/transfer",
                    name: "transfer",
                    component: () => import("./views/TransferPage.vue")
                },
                {
                    path: "/table",
                    name: "table",
                    component: () => import("./views/TablePage.vue")
                },
                {
                    path: "/tag",
                    name: "tag",
                    component: () => import("./views/TagPage.vue")
                }
            ],
            redirect: "/button"
        }
    ]
})
