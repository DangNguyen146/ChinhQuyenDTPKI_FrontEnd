import HomePage from "../container/HomeTemplate/HomePage";
import Login from "../container/HomeTemplate/ManagerUser/Login";
import CreatAcc from "../container/HomeTemplate/ManagerUser/CreateAcc";

const routeHome = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/login",
    component: Login,
    exact: false,
  },
  {
    path: "/signin",
    component: CreatAcc,
    exact: false,
  },
];

const routesAdmin = [];

export { routeHome, routesAdmin };
