import Homepage from "./pages/Homepage";
import Reserve from "./pages/Reserve";

const routes = [
  {
    path: "/",
    title: "Homepage",
    exact: true,
    element: <Homepage />,
  },
  {
    path: "/reserve",
    title: "Reserve",
    exact: true,
    element: <Reserve />,
  },
];

export default routes;
