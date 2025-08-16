import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from "react-router";
import './style/index.css'
import Root from './routes/root';
import{genreMovie}from './components/TabsGenre'
import ErrorPage from './routes/errorPage';
import movieByGenre from './routes/movieByGenre';
import {movieByGenreLoader} from'./components/MovieList'
let router=createBrowserRouter([

    {
      path:'/',
      Component:Root,
      errorElement:<ErrorPage/>,
      loader:genreMovie,
      children:[
          {
            path:':genre',
            Component:movieByGenre,
            loader:movieByGenreLoader,
  

          }
      ]
    
    }


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
