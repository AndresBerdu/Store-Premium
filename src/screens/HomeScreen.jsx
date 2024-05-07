import React from 'react';
import { Link } from 'react-router-dom';

//Components
import { NavBarComponent } from '../components/NavBarComponent';

//Images
import dishe1 from '../assets/Dishe1.png';
import dishe2 from '../assets/Dishe2.png';

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
          <Link className='body-container-button' style={{ textDecoration: 'none', color: 'inherit'}} to='/Dishes'>DISHES</Link>
        </div>
        <div>
          <img className='body-img' src={dishe1} alt="Dishe with chiken"/>
          <img className='body-img' src={dishe2} alt="Dishe with chiken" />
        </div>
      </div>
      <footer>

      </footer>
    </div>
  )
}

export { HomeScreen };
