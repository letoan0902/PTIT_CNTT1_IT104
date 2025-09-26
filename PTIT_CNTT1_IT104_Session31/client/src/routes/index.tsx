import { createBrowserRouter } from "react-router-dom";
import ListPost from "../pages/ListPost";

const routers = createBrowserRouter([
  {
    path: "/list-post",
    element: <ListPost />,
  },
]);

export default routers;
