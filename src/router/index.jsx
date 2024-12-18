import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/not-found";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "*",
        element: <NotFound/>
    }
])

export default router;