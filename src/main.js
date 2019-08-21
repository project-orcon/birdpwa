import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import vuetify from "./plugins/vuetify";
import router from "./router";
import { firestorePlugin } from "vuefire";
import axios from "axios";
import { db } from "./services/firebase";
//import firebase from "./services/firebase.js";

Vue.use(firestorePlugin);
Vue.prototype.$http = axios;

//CORS workaround for BIRB api which has no  Access-Control-Allow-Origin:* header on it
//In a production app this request would have to come from the backend.

Vue.prototype.$corsWorkaround = "https://cors-anywhere.herokuapp.com/";
Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
