import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "layout" */ "./layouts/Basiclayout"),
      children: [
        {
          path: "/course",
          neme: "course",
          meta: { title: "课程" },
          component: () =>
            import(/* webpackChunkName: "course" */ "./views/course/course"),
          children: [
            {
              path: "/course/category",
              name: "category",
              component: () =>
                import(/* webpackChunkName: "user" */ "./layouts/Banner")
            }
          ]
        }
      ]
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
