import React from 'react';
import { Routes as Router, Route } from 'react-router-dom';

//Screens
import { HomeScreen } from '../screens/HomeScreen';
import { AboutUsScreen } from '../screens/AboutUsScreen';
import { DishesScreen } from '../screens/DishesScreen';
import { DrinksSreen } from '../screens/DrinksSreen';
import { DessertsSreen } from '../screens/DessertsSreen';
import { SoupsScreen } from '../screens/SoupsScreen';

const Routes = () => {
  return (
    <Router>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/Dishes' element={<DishesScreen/>}/>
      <Route path='/Drinks' element={<DrinksSreen/>}/>
      <Route path='/Desserts' element={<DessertsSreen/>}/>
      <Route path='/Soups' element={<SoupsScreen/>}/>
      <Route path='/About Us' element={<AboutUsScreen/>}/>
    </Router>
  )
}

export { Routes };
