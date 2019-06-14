import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/global.css";
import {
  Button,
  Container,
  Header,
  Main,
  Aside,
  Footer,
  Divider,
  Input,
  Icon,
  Carousel,
  CarouselItem,
  Menu,
  MenuItem
} from "element-ui";

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Aside);
Vue.use(Footer);
Vue.use(Divider);
Vue.use(Input);
Vue.use(Icon);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Menu);
Vue.use(MenuItem);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
