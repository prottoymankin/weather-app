import { createBrowserRouter } from "react-router";
import Homepage from "../pages/Homepage";
import WhetherPage from "../pages/WhetherPage";
import SomethingWentWrong from "../pages/SomethingWentWrong";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/weather",
    element: <WhetherPage />
  },
  {
    path: "/error",
    element: <SomethingWentWrong />
  }
]);