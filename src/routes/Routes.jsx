import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import About from "../components/Header/About/About";
import Menu from "../components/Menu/Menu";
import LoginAndRegister from "../layout/LoginAndRegisterLayout/LoginAndRegister";
import Main from "../layout/Main";
import HomePage from "../Pages/HomePage/HomePage";
import Login from "../Pages/Login&RegisterPage/Login/Login";
import Register from "../Pages/Login&RegisterPage/Register/Register";
import ViewRecipes from "../Pages/ViewRecipes/ViewRecipes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element: <HomePage></HomePage>,
        loader: () => fetch('https://assignment-10-server-deploy-render.onrender.com/chefs')
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/menu',
        element: <Menu></Menu>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
    ]
  },
  {
    path:'/viewRecipes',
    element: <Main></Main> ,
    children: [
      {
        path:':id',
        element: <ViewRecipes></ViewRecipes>,
        loader: ({params}) => fetch(`https://assignment-10-server-deploy-render.onrender.com/viewRecipes/${params.id}`)
        
      },
    ]
  },
  {
    path: "/",
    element: <LoginAndRegister></LoginAndRegister>,
    children:[
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ]

  }
]);

export default router;
