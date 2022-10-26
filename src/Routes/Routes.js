import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUP/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import LeftSideNav from "../pages/LeftSideNav/LeftSideNav";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch(`https://khan-academy-server.vercel.app/courses`)

            },
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/signin',
                element: <SignIn />
            },
            {
                path: '/title',
                element: <LeftSideNav></LeftSideNav>,
                loader: () => fetch(`https://khan-academy-server.vercel.app/courses/`)
            }
        ]
    }

])