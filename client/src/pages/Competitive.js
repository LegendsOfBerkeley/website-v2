import React from 'react'
import './Competitive.css'
import Nav from '../components/navbar/Nav'
import ThinLegendsButton from '../components/ThinLegendsButton'
import {Link} from "react-router-dom";

function Header() {
    return (
        <div>
            <h3 className="play-header">COMPETITIVE TEAMS</h3>
            <p className="play-info">
            We are proud to host Division 1 and 2 collegiate esports teams in League of Legends and Valorant, representing UC Berkeley at tournaments across the country. Find out more about our teams and make sure to cheer on the Golden Bears this season!
            </p>
        </div>
    )
}

function PlayforCal() {
    return (
        <div>
            <h3 className='subheader'>PLAY FOR CAL</h3>
        </div>
    )
}

function League() {
    return (
        <div>
            <h4 className='header'>LEAGUE OF LEGENDS</h4>
        </div>
    )
}

function Achievements() {
    return (
        <div>
            <h3 className='subheader'>ACHIEVEMENTS</h3>
        </div>
    )
}

function Valorant() {
    return (
        <div>
            <h4 className='header'>VALORANT</h4>
        </div>
    )
}
function Card(props) {
    return (
      <div>
        <div id="picture">
          <img src={props.icon}></img>
        </div>
        <div id="name">{props.name}</div>
        <div id="name">{props.alias}</div>
        <div id="position">{props.position}</div>
        <p id="bio">{props.bio}</p>
      </div>
    )
  }

function Competitive() {
    return (
      <div className="body">
        <Nav></Nav>
        <Header></Header>
        <PlayforCal></PlayforCal>
        <League></League>
        <Achievements></Achievements>
        <Valorant></Valorant>
      </div>
    )
  }



  export default Competitive;