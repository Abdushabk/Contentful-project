import React,{ useState, useEffect } from 'react'; 
import './App.css';
import NavbarTop from './components/NavbarTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/home/Home';
import client from "./client.js";
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Breakfast from "./components/pages/breakfast/Breakfast";
import Lunch from "./components/pages/lunch/Lunch";
import Dinner from "./components/pages/dinner/Dinner"
import Dessert from "./components/pages/dessert/Dessert"

function App() {

  const [breakfast, setBreakfast] = useState([]);

  //get-Request für die Breakfast-recipies
  useEffect(() => {
    client
      .getEntries({content_type:"breakfast"})
      .then ((json) => {
        console.log(json)
      return  setBreakfast(json.items)
      })
      .catch (() => console.log ("need help!"))

  }, [])
//get-request successful; console log of breakfast gets array with 4 recipies
  console.log(breakfast)
  console.log(breakfast[0].fields.title)

//Problem: breakfast.field.title etc. is not working!!!!   
      //console.log(breakfast.fields.title)

  
  return (
    <>
      <Router>
        <NavbarTop/>

        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/breakfast" element={<Breakfast breakfast={breakfast}/>}/>
            <Route exact path="/lunch" element={<Lunch/>}/>
            <Route exact path="/dinner" element={<Dinner/>}/>
            <Route exact path="/dessert" element={<Dessert/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
