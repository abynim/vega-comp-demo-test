import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import "@heartlandone/vega/style/vega.css";

import Components from "./routes/components/index";
import Component from "./routes/components/Component";
import ErrorPage from "./routes/components/ErrorPage";

import BannerWithStickyHeader from "./components/banner/examples/banner-sticky-header"

const App = createBrowserRouter([
  {
    path: "/",
    element: <Components />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "components/:component",
        element: <Component />,
      },
    ],
  },
  {
    path: "/banner-sticky-header",
    element: <BannerWithStickyHeader />
  },
]);

export default App;
