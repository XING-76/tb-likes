import React from 'react';
import './App.css';
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import LikesCard from './components/LikesCard'
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
