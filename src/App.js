import React, {useState, useCallback} from "react";
import {BrowserRouter, Routes, Route, useSearchParams} from "react-router-dom";


import './App.css';

import Layout from "./components/Layout";
import { HomePage } from "./components/Pages/HomePage/HomePage";
import UserPage from "./components/Pages/UserPage";


export const ValueContext = React.createContext();


function App() {

    const [value, setValue] = useState("");

    const changeUserValue = (value) => {
        setValue(value);
    };


//onChange, Username
    // changeuser value or cantext
    return (
        <BrowserRouter>
            <ValueContext.Provider value={value}>
                <Routes>
                    <Route path="/" element={<Layout onChangeUsername={changeUserValue }/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path="/user/:username" element={<UserPage/>}/>
                        <Route path="*" element={<HomePage/>}/>
                    </Route>

                </Routes>
            </ValueContext.Provider>
        </BrowserRouter>

    );
}

export default App;
