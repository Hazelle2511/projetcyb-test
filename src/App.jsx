// import React, {Component,useState, useEffect} from 'react';
import React from 'react';
import './App.css'
// import Accueil from "./Accueil"
import Navbar from "./Components/Navbar";
import Accueil from "./pages";
// import Signup from "./pages/signup.jsx";
import {Switch, Route} from "react-router-dom";
import Signup from "./pages/signup.jsx";


export default () => {
   
    return(
        <div className = "App">
       
            {/* {
           <Accueil/> */} 
           <Navbar />
          

           <Switch>
               <Route path="/" exact component = {Accueil} />
               <Route path="/signup" component = {Signup} />
           </Switch>

        

          

           

        </div>
    )
}