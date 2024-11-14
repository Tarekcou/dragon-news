import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../layout/Homelayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout />
  },
  {
    path: "/news",
    element: <h1>This is news Layout</h1>
  },
  {
    path: "/auth",
    element: <h1>This is aut Layout</h1>
  },
  {
    path: "*",
    element: <h1>error</h1>
  },
])

export default router