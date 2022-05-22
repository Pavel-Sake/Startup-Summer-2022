import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import { HomePage } from "./pages/HomePage/HomePage";
import UserPage from "./pages/UserPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="user/:username" element={<UserPage/>}/>
          <Route path="*" element={<HomePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
