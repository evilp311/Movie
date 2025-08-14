import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from "react-router";
import './style/index.css'
import Home from './components/Home';
import Root from './routes/root';
import Genre ,{genreMovie} from './routes/genre';
import ErrorPage from './routes/errorPage';

let router=createBrowserRouter([

    {
      path:'/',
      Component:Root,
      errorElement:<ErrorPage/>,
      children:[
          {
            path:'g',
            Component:Genre,
            loader:genreMovie,
           

          }
      ]
    
    }


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
