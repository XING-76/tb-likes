import React from 'react';
import './App.css';
import Header from './containers/Header'
import ProductCard from './containers/ProductCard'
import LikesCard from './containers/LikesCard'
import { useRoutes } from 'react-router-dom';

export default function App() {
  let routes = useRoutes([
    { 
      path: '/', 
      element: <><Header/><ProductCard/></>
    },
    { 
      path: 'likes', 
      element: <><Header/><LikesCard/></>
    }
  ]);
  return routes;
}
