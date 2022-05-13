import { createApp } from "vue";
import App from "./App";

const mount = (el) => {
  // const router = createRouter({
  //   history: history,
  //   routes,
  // })
  const app = createApp(App);
  // app.use(router)
  app.mount(el);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#app");
  if (devRoot) {
    mount(devRoot);
  }
}
export { mount };
