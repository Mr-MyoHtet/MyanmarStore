import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import About from './components/About.jsx'
import Login from './components/Login.jsx'
import Cart from './components/Cart.jsx'
import Contact from './components/Contact.jsx'
import Home from './components/Home.jsx'
import ErrorPage from './components/Errorpage.jsx'
import { ToastContainer,Bounce } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { productLoader } from './components/Home.jsx'
import {saveContact} from './components/Contact'


const routeDefinitions = createRoutesFromElements(
<Route path="/" element={<App/>} errorElement={<ErrorPage/>}>
  <Route index element={<Home/>} loader={productLoader} />
  <Route path="/home" element={<Home/>} loader={productLoader} />
  <Route path="/about" element={<About/>} />
  <Route path="/contact" element={<Contact/>} action={saveContact} />
  <Route path="/login" element={<Login/>} />
  <Route path="/cart" element={<Cart/>} />
  </Route>
);
const appRouter=createBrowserRouter(routeDefinitions);
// const appRouter=createBrowserRouter([
//   {
//   path:"/",
//   element:<App/>,
//   errorElement:<ErrorPage />,
//   children:[
//   {
//     index:true,
//     element:<Home/>
//   },
//   {
//     path:"/home",
//     element:<Home/>
//   },
//   {
//     path:"/about",
//     element:<About/>
//   },
//   {
//     path:"/contact",
//     element:<Contact/>
//   },
//   {
//     path:"/login",
//     element:<Login/>
//   },
//   {
//     path:"/cart",
//     element:<Cart/>
//   }]
// } ])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={localStorage.getItem("theme")=== "dark"?"dark":"light"}
      transition={Bounce}
/>
  </StrictMode>,
)
