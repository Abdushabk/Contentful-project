//import React, { useState, useEffect } from "react";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavbarTop from "./components/NavbarTop";
import Home from "./components/pages/home/Home";
import MealTime from "./components/pages/MealTime";
import SingleRecipe from "./components/SingleRecipe";
import SearchMeals from "./components/pages/SearchMeals";
import Posts from "./components/Posts/Posts";




//import client from "./client.js";
//import Breakfast from "./components/pages/breakfast/Breakfast";
//import Lunch from "./components/pages/lunch/Lunch";
//import Dinner from "./components/pages/dinner/Dinner";
//import Dessert from "./components/pages/dessert/Dessert";

function App() {
  //const [breakfast, setBreakfast] = useState([]);
  /*   //get-Request für die Breakfast-recipies
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
  // console.log(breakfast[0].fields.title)

  //Problem: breakfast.field.title etc. is not working!!!!   
      //console.log(breakfast.fields.title)
 */

  const [searchQry, setSearchQry] = useState("");

  const handleSearchClick = (e) => {
    e.preventDefault();
    if (e.target.form[0].value !== "") {
      setSearchQry(e.target.form[0].value);
      e.target.form[0].value = "";
    } else {
      alert("Please enter something in search");
    }
  };

  const handleClearQry = () => setSearchQry("");

  return (
    <>
      <NavbarTop
        handleSearchClick={handleSearchClick}
        handleClearQry={handleClearQry}
      />
      
      {searchQry ? (
        <SearchMeals searchQry={searchQry} handleClearQry={handleClearQry} />
      ) : (
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:mealtime" element={<MealTime />} />
          <Route exact path="/recipe/:id" element={<SingleRecipe />} />
        </Routes>
      )}
      
    </>
   
  );
}

export default App;
