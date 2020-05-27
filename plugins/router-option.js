export default async ({ app, store }) => {
  app.router.afterEach((to, from) => {
    // console.log(to);
    // store.dispatch('closeGuide');
  });
};
