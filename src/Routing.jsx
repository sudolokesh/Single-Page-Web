import React from "react";
import { Outlet } from "react-router";
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'

export default function App() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  );
}
