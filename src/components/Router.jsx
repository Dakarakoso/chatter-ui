import { createBrowserRouter } from "react-router-dom";
import SignUp from "./Auth/Signup";
import Login from "./Auth/Login";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

export default router;
