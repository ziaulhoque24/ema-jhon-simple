import * as React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Processed from "./components/Processed/Processed";
import Review from "./components/Review/Review";
import Shop from "./components/Shop/Shop";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/*" element={<Shop></Shop>} />
        <Route path="/shop/*" element={<Shop></Shop>} />
        <Route path="/processed" element={<Processed></Processed>} />
        <Route path="/review" element={<Review></Review>} />
      </Routes>
      
    </div>
  );
}

export default App;
