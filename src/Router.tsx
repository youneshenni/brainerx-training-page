import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Header from "./components/Header";

const router = createBrowserRouter([
    {
        element: <div className="flex flex-col h-screen">
            <Header>
            <Outlet />
            </Header>
        </div>,
        children: [

            {path: "/", element: <Home />},
            {
                path: "/users", element: <Users />,
            }
        ]
    }
])

export default function Router() {
    return <RouterProvider router={router} />
}