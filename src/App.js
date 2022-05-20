import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Layout from "./components/Layout";
import { HomePage } from "./components/Pages/HomePage/HomePage";
import UserPage from "./components/Pages/UserPage";

import './App.css';


function App() {

    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path="user/:username" element={<UserPage/>}/>
                        <Route path="*" element={<HomePage/>}/>
                    </Route>
                </Routes>
        </BrowserRouter>

    );
}


export default App;
