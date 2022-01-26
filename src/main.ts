import { createApp } from "vue";
import { store, key } from "./store";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTimesCircle,
  faCheckCircle,
  faPenSquare,
  faPlusCircle,
  faTrash,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faTimesCircle,
  faCheckCircle,
  faPenSquare,
  faPlusCircle,
  faTrash,
  faFolderOpen
);

createApp(App)
  .use(store, key)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
