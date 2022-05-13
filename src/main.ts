import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// TODO: main.ts is the default file for entry for vue cli
createApp(App).use(store).use(router).mount("#app");
