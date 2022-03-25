/* Attempting to make components for the home blurbs, currently not rendering it in App.js bc it's still in progress - Jen */

import React from 'react';
import './homeBlurbs.css';
import discord from '../images/Discord-Purple.svg'


function button(props) {

}

function Blurb(props) {
    return (
        <div className="blurb">
            <img src = {props.img} className="blurb-img" />
            <img src = {props.icon} className="blurb-icon" />
            <p className="blurb-title-text">{props.title}</p>
            <p className="blurb-text">{props.blurb}</p>
        </div>
    )
}

function AllBlurbs(props) {
    return (
        <div>
            <Blurb img="About" icon="" title="COMMUNITY" blurb="testing"></Blurb>
            <Blurb img="About" icon="" title="EVENTS" blurb="testing"></Blurb>
            <Blurb img="About" icon="" title="CHAMPIONSHIP" blurb="testing"></Blurb>
            <Blurb img="About" icon="" title="COMPETITIVE TEAMS" blurb="testing"></Blurb>
        </div>
       
    )
}

export default AllBlurbs