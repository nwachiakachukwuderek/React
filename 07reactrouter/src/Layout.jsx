import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer.jsx/Footer"; 

function Layout() {
  return ( 
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
    // this is the Layout component which wraps around all the pages
    // it contains the Header, Footer and the Outlet component
    // the Outlet component is used to render the child routes
    // the Header and Footer components are imported from the components folder
    // it makes it so that you dont have to code the footer and header again it shows on all the pages
  )
}

export default Layout;