import React from "react";
import mealsImage from '../../assests/meals.jpg';
import classes from './Header.module.css';
import HeaderCardButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>MEALS</h1> 
        <HeaderCardButton onClick={props.onshowcart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='a table of meals'/>
      </div>
    </React.Fragment>
  );
};
export default Header;
