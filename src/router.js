import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "index",
      component: Home,
      children: [
        {
          path: "/button",
          name: "button",
          component: () => import("./views/ButtonPage.vue")
        },
        {
          path: "/checkbox",
          name: "checkbox",
          component: () => import("./views/CheckboxPage.vue")
        },
        {
          path: "/datepicker",
          name: "datepicker",
          component: () => import("./views/DatePickerPage.vue")
        },
        {
          path: "/dialog",
          name: "dialog",
          component: () => import("./views/DialogPage.vue")
        },
        {
          path: "/form",
          name: "form",
          component: () => import("./views/FormPage.vue")
        },
        {
          path: "/layout",
          name: "layout",
          component: () => import("./views/LayoutPage.vue")
        },
        {
          path: "/icon",
          name: "icon",
          component: () => import("./views/IconPage.vue")
        },
        {
          path: "/input",
          name: "input",
          component: () => import("./views/InputPage.vue")
        },
        {
          path: "/message",
          name: "message",
          component: () => import("./views/MessagePage.vue")
        },
        {
          path: "/messageBox",
          name: "messageBox",
          component: () => import("./views/MessageBoxPage.vue")
        },
        {
          path: "/notification",
          name: "notification",
          component: () => import("./views/NotificationPage.vue")
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
          path: "/table",
          name: "table",
          component: () => import("./views/TablePage.vue")
        },
        {
          path: "/tag",
          name: "tag",
          component: () => import("./views/TagPage.vue")
        },
        {
          path: "/tooltip",
          name: "tooltip",
          component: () => import("./views/TooltipPage.vue")
        },
        {
          path: "/transfer",
          name: "transfer",
          component: () => import("./views/TransferPage.vue")
        }
      ],
      redirect: "/button"
    }
  ]
});
