import React, { useState } from 'react';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cards from './Component/Cards';
import Category from './Component/Category';
import Chart from './Component/Chart';
import Navbar from './Component/Navbar';

function App() {
  const [cate, setCate] = useState("Ayush");
  console.log(cate);
  return (
    <>
    <Router>
      <Navbar cate={cate} setCate={setCate}/>
      {/* {cate} */}
      <Routes>
        <Route exact path="/" element={<Cards />} />
        <Route exact path="/category" element={<Category cate={cate}/>} />
      </Routes>
    </Router>
      {/* <Chart /> */}
    </>
  );
}

export default App;
