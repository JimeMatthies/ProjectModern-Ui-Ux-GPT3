import React, { useState } from "react";
/* import { BrowserRouter, Route, Routes } from 'react-router-dom'; */
import Navbar from './components/Navbar';
import Article from './components/Article';
import Brand from './components/Brand';
import Cta from './components/Cta';
import Feature from './components/Feature';
import Footer from './components/Footer';

const App = ({ copyright }) => {
    return (
        <>
            <Navbar/>
            <Article />
            <Brand/>
            <Cta/>
            <Feature/>
            <Footer/>
        </>
    )
}

export default App;