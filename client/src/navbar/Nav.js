import React from 'react';
import homeLogo from '../images/homeLogo.svg';
import './Nav.css';
import discord from '../images/Discord-Logo-White.svg'

function NavItem(props) {
    return (
      <h1 className="navbar-item">{props.name}</h1>
    );
}

function NavItemIcon() {
    return (
        <div className="navbar-item">
            <button className="btnNav btn-1-Nav">
                <h1 className="joinus">JOIN US</h1>
                <div className="centerDiscordLogo">
                    <img src={discord} className="discord"></img>
                    <div className="discordBG"></div>
                </div>
            </button>
        </div>
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
            <NavItemIcon></NavItemIcon>
        </div>
    </div>
    )
}

export default Nav