require("./bootstrap");
import Vue from "vue";
// import App from "./components/App.vue";
// Register Vue Components
Vue.component("app-component", require("./components/App.vue").default);

const app = new Vue({
    el: "#app",
});
