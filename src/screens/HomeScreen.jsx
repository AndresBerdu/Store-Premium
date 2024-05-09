import React from 'react';
import { Link } from 'react-router-dom';

//Components
import { NavBarComponent } from '../components/NavBarComponent';

//Images
import dishe1 from '../assets/Dishe1.png';
import dishe2 from '../assets/Dishe2.png';
import disheVegetarian1 from '../assets/DisheVegetarian1.jpg';
import disheVegetarian2 from '../assets/DisheVegetarian2.jpg';
import disheVegetarian3 from '../assets/DisheVegetarian3.jpg';
import disheVegetarian4 from '../assets/DisheVegetarian4.jpg';
import logoStarbucks from '../assets/LogoStarBucks.png';
import coffeeStarbucks from '../assets/CoffeeStarBucks.png';

//icons
import { LuSalad } from "react-icons/lu";
import { BiCoffeeTogo } from "react-icons/bi";

//Style
import '../scss/screens/HomeScreenStyle.scss';

const HomeScreen = () => {
  return (
    <div>
      <NavBarComponent/>
      <div className='body'>
        <div className='body-container'>
          <h1 className='body-container-title'>SHOP DISHES AND FOOD</h1>
          <p className='body-container-text'>Buy delicius food and change your paladar with much flavors</p>
          <p className='body-container-text-sentence'>Eat is not only eat, is lifes</p>
          <hr className='body-container-line'/>
          <div className='body-container-button'>
            <Link 
              className='body-container-button-text' 
              style={{ textDecoration: 'none', color: 'inherit'}}
              to='/Dishes'
            >
              DISHES
            </Link>
          </div>
        </div>
        <div className='body-images'>
          <img className='body-images-img1' src={dishe1} alt="Dishe with chiken"/>
          <img className='body-images-img2' src={dishe2} alt="Dishe with chiken" />
        </div>
      </div>

      <div className='body2'>
        <div className='body2-imagesVegetarian'>
          <img className='body2-imagesVegetarian-img1' src={disheVegetarian1} alt="image of dishe vegetarian"/>
          <img className='body2-imagesVegetarian-img2' src={disheVegetarian2} alt="image of dishe vegetarian" />
          <img className='body2-imagesVegetarian-img3' src={disheVegetarian3} alt="image of dishe vegetarian"/>
          <img className='body2-imagesVegetarian-img4' src={disheVegetarian4} alt="image of dishe vegetarian" />
        </div>
        <div className='body2-container2'>
          <h1 className='body2-container2-title'>FOR ALL THOSE PEOPLE</h1>
          <p className='body2-container2-text'>You need espcial food, for a espcial person, buy our dishes vegetarians</p>
          <div className='body2-container2-button'>
            <Link 
              className='body2-container2-button-text' 
              style={{ textDecoration: 'none', color: 'inherit'}}
              to='/Dishes'
            >
              Vegetarian
              <LuSalad/>
            </Link> 
          </div>
        </div>
      </div>

      <div className='body3'>
        <div className='body3-container-logo'>
          <img src={logoStarbucks} alt="Logo Starbucks" />
        </div>
        <div className='body2-container3'>
          <h1 className='body3-container3-title'>TAKE A BREAK FAST</h1>
          <h1 className='body3-container3-title'>TAKE YOUR DREAMS</h1>
          <div className='body3-container3-button'>
            <Link 
              className='body3-container3-button-text' 
              style={{ textDecoration: 'none', color: 'inherit'}}
              to='/Dishes'
            >
              Coffee
              <BiCoffeeTogo/>
            </Link> 
          </div>
        </div>
        <div>
            <img src={coffeeStarbucks} alt="" />
          </div>
      </div>
    </div>
  )
}

export { HomeScreen };
