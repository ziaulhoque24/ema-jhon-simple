import  React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Processed from "./components/Processed/Processed";
import Review from "./components/Review/Review";
import Shop from "./components/Shop/Shop";

export const UserContext = createContext();
function App() {
  const [loggedUser, setLoggedUser] = useState({});
  return (
    <UserContext.Provider value={[loggedUser, setLoggedUser ]}>
      <Header/>
      <Routes>
        <Route path="/*" element={<Shop></Shop>} />
        <Route path="/shop/*" element={<Shop></Shop>} />
        <Route path="/proceed" element={<PrivateRoute> <Processed/></PrivateRoute>} />
        <Route path="/review" element={<Review></Review>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      
    </UserContext.Provider>
  );
}

export default App;
