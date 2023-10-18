import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MyInfo from "../pages/Home/MyInfo";
import SentEmail from "../pages/sentEmail/SentEmail";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <MyInfo />,
      },
    ],
  },
  {
    path: "/sentEmail",
    element: <SentEmail />,
  },
  {
    path: "*",
    element: <p>Pagina no encontrada</p>,
  },
]);
