import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Forgotpassword from "./Pages/Forgot-password";
import Offers from "./Pages/Offers";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/sign-in" element={<Signin/>}></Route>
          <Route path="/sign-up" element={<Signup/>}></Route>
          <Route path="/forgot-password" element={<Forgotpassword/>}></Route>
          <Route path="/offers" element={<Offers/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
