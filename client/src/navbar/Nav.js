import React from 'react';
import homeLogo from '../images/homeLogo.svg';
import './Nav.css';

function NavItem(props) {
    return (
      <h1 className="navbar-item">{props.name}</h1>
    );
  }
// home button 
function HomeButton() {
    return (
        <img src = {homeLogo} className="logo"/>
    )
}

function Nav() {
    return (
    <div className="nav">
        <HomeButton></HomeButton>
        <div className="navbar-links">
            <NavItem name={"About"}></NavItem>
            <NavItem name={"Championship"}></NavItem>
            <NavItem name={"Competitive"}></NavItem>
            <NavItem name={"Shop"}></NavItem>
            <NavItem name={"Discord"}></NavItem>
        </div>
    </div>
    )
}

export default Nav