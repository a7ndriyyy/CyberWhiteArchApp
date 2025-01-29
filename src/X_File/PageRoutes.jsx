import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';




const Home = lazy(() => import('../components/HomePage/Home'));
const AboutUs = lazy(() => import('../components/AboutUs/AboutUs'));

export default function PageRoutes() {
    return (
      <>
        <Routes>

        <Route
            path="/"
            element={<SharedLayout/>}
          />
  
          <Route
            path="/Home"
            element={<Home />}
          />
       
          <Route
            path="/about-us"
            element={<AboutUs />}
          /> 
        </Routes>
      </>
    );
  }