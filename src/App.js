import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import React from "react";
import Navbar from './components/Navbar'
import Home from "./pages/Home";
import Recipes from './pages/Recipes'
import Setting from './pages/Setting'
import Footer from "./components/Footer";

function App() {
  return (

    <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/recipes' element={<Recipes/>}></Route>
          <Route path='/setting' element={<Setting />}></Route>
        </Routes>
      <Footer />
    </Router>

  );
}

export default App;
