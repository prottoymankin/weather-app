import { createBrowserRouter } from "react-router";
import Homepage from "../pages/Homepage";
import WhetherPage from "../pages/WhetherPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/whether",
    element: <WhetherPage />
  }
]);