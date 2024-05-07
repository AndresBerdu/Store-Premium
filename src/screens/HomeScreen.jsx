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

//icons
import { LuSalad } from "react-icons/lu";

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
          <img className='body2-imagesVegetarian-img1' src={disheVegetarian1} alt="Dishe Vegetarian chiken"/>
          <img className='body2-imagesVegetarian-img2' src={disheVegetarian2} alt="Dishe Vegetarian chiken" />
          <img className='body2-imagesVegetarian-img3' src={disheVegetarian3} alt="Dishe Vegetarian chiken"/>
          <img className='body2-imagesVegetarian-img4' src={disheVegetarian4} alt="Dishe Vegetarian chiken" />
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

      <div>
        
      </div>
    </div>
  )
}

export { HomeScreen };
