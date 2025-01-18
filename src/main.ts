import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import { router } from "./router";
import { useMediaQuery } from "@vueuse/core";

const pinia = createPinia();
const app = createApp(App);
const isDesktop: boolean = useMediaQuery("(min-width: 768px)");

app.provide("isDesktop", isDesktop);
app.use(router);
app.use(pinia);
app.mount("#app");
