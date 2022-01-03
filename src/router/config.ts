const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/login"],
    exact: true,
    component: "Login",
  },
  {
    path: ["/register"],
    exact: true,
    component: "Login",
  },
  {
    path: ["/berita"],
    exact: true,
    component: "Berita",
  },
  {
    path: ["/multimedia"],
    exact: true,
    component: "Multimedia",
  },
];

export default routes;
