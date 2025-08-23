import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from "react-router";
import './style/index.css'
import Root from './routes/root';
import{genreMovie}from './components/TabsGenre'
import ErrorPage from './routes/errorPage';
import movieByGenre from './routes/movieByGenre';
import {movieByGenreLoader} from'./components/MovieList'
import SkeletonLoadingList from './components/SkeletoLoadingList';
import moviePage, { movieLoader } from './routes/moviePage';
import moviePageBySearch,{movieByNameLoader} from './routes/moviePageBySearch';
let router=createBrowserRouter([

    {
      path:'/',
      Component:Root,
      errorElement:<ErrorPage/>,
      loader:genreMovie,
      children:[
        {
          index:true,
          Component:SkeletonLoadingList,
        },

          {
            path:':genre',
            Component:movieByGenre,
            loader:movieByGenreLoader,
  

          },
         
      ]
      
    
    },
    {
       
            path:'movie/:id',
            errorElement:<ErrorPage/>,
            Component:moviePage,
            loader:movieLoader,
          
    },
    {
            path:'search/:name',
            errorElement:<ErrorPage/>,
            Component:moviePageBySearch,
            loader:movieByNameLoader,
    }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
