// import DefaultLayout from "@/layouts/DefaultLayout";
import Login from "@/pages/Auth/Login";
import Dashboard from "@/pages/Dashboard";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard/>,
    },
    {
        path: '/login',
        element: <Login/>
    }
])