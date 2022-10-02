import React from 'react';
import homeLogo from '../../images/homeLogo.svg';
import './Nav.css';
import discord from '../../images/Discord-Logo-White.svg'
import {Link} from "react-router-dom";

function NavItem(props) {
    return (
        <Link to={props.to} className="navbar-item">{props.name}</Link>
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
        <Link to={"/"}>
            <img src = {homeLogo} className="logo"/>
        </Link>
    )
}

function Nav() {
    return (
    <div className="nav">
        <HomeButton></HomeButton>
        <div className="navbar-links">
            <NavItem name={"About"} to={"/about"}></NavItem>
            <NavItem name={"Championship"} to={"/championship"}></NavItem>
            <NavItem name={"Competitive"} to={"/competitive"}></NavItem>
            <NavItem name={"Shop"} to={"/shop"}></NavItem>
            <a href='https://tinyurl.com/BLDisco' target="_blank" rel="noopener noreferrer">
                <NavItemIcon></NavItemIcon>
            </a>
        </div>
    </div>
    )
}

export default Nav