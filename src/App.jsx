import React, { useState } from "react";
/* import { BrowserRouter, Route, Routes } from 'react-router-dom'; */
import Footer from './components/Footer';

const App = ({ copyright }) => {
    return (
        <>
            <Footer footer={copyright} />
        </>
    )
}

export default App;