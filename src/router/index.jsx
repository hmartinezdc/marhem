import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About/About";
import App from "../App";
import MyInfo from "../pages/Home/MyInfo";
import PortFolio from "../pages/Portfolio/PortFolio";
import Contact from "../pages/Contact/Contact";
import SentEmail from "../pages/sentEmail/sentEmail";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <MyInfo />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/portfolio",
        element: <PortFolio />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "*",
    element: <p>Pagina no encontrada</p>,
  },
  {
    path: "/sentEmail",
    element: <SentEmail />,
  },
]);
