import React from 'react';
import homeLogo from '../images/homeLogo.svg';
import './Nav.css';
import discord from '../images/Discord-Purple.svg'

function NavItem(props) {
    return (
      <h1 className="navbar-item">{props.name}</h1>
    );
}

function NavItemIcon(props) {
    return (
        <img src = {props.icon} className="navbar-item"/> //maybe button class, i forgot which class we were going to use -Jared
    )
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
            <NavItemIcon icon={discord}></NavItemIcon>
        </div>
    </div>
    )
}

export default Nav