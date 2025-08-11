import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from "react-router";
import './style/index.css'
import Home from './components/Home';
import Root from './routes/root';


let router=createBrowserRouter([

    {
      path:'/',
      Component:Root,
    
    }


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
