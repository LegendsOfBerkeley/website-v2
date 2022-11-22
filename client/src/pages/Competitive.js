import React from 'react'
import './Competitive.css'
import Nav from '../components/navbar/Nav'
import ThinLegendsButton from '../components/ThinLegendsButton'
import {Link} from "react-router-dom";
import amy_pic from '../images/amy-profile-pic.png';
import Footer from '../components/Footer'

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
            <div id="cards">
                <Card icon={amy_pic} name={"AMY JIANG "} role={"| COACH"} major={"MECHANICAL ENGINEERING + EECS"} year={"CLASS OF 2022"} bio={"Favorite Riot Character: answer"}></Card>
                <div className='card-grid-container'>
                    <Card icon={amy_pic} name={"AMY JIANG "} role={"| COACH"} major={"MECHANICAL ENGINEERING + EECS"} year={"CLASS OF 2022"} bio={"Favorite Riot Character: answer"}></Card>
                    <Card icon={amy_pic} name={"AMY JIANG "} role={"| COACH"} major={"MECHANICAL ENGINEERING + EECS"} year={"CLASS OF 2022"} bio={"Favorite Riot Character: answer"}></Card>
                    <Card icon={amy_pic} name={"AMY JIANG "} role={"| COACH"} major={"MECHANICAL ENGINEERING + EECS"} year={"CLASS OF 2022"} bio={"Favorite Riot Character: answer"}></Card>
                    <Card icon={amy_pic} name={"AMY JIANG "} role={"| COACH"} major={"MECHANICAL ENGINEERING + EECS"} year={"CLASS OF 2022"} bio={"Favorite Riot Character: answer"}></Card>
                    <Card icon={amy_pic} name={"AMY JIANG "} role={"| COACH"} major={"MECHANICAL ENGINEERING + EECS"} year={"CLASS OF 2022"} bio={"Favorite Riot Character: answer"}></Card>
                </div>
            </div>
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
            <div id="cards">
                <Card icon={amy_pic} name={"AMY JIANG "} role={"| COACH"} major={"MECHANICAL ENGINEERING + EECS"} year={"CLASS OF 2022"} bio={"Favorite Riot Character: answer"}></Card>
                <div className='card-grid-container'>
                    <Card icon={amy_pic} name={"AMY JIANG "} role={"| COACH"} major={"MECHANICAL ENGINEERING + EECS"} year={"CLASS OF 2022"} bio={"Favorite Riot Character: answer"}></Card>
                    <Card icon={amy_pic} name={"AMY JIANG "} role={"| COACH"} major={"MECHANICAL ENGINEERING + EECS"} year={"CLASS OF 2022"} bio={"Favorite Riot Character: answer"}></Card>
                    <Card icon={amy_pic} name={"AMY JIANG "} role={"| COACH"} major={"MECHANICAL ENGINEERING + EECS"} year={"CLASS OF 2022"} bio={"Favorite Riot Character: answer"}></Card>
                    <Card icon={amy_pic} name={"AMY JIANG "} role={"| COACH"} major={"MECHANICAL ENGINEERING + EECS"} year={"CLASS OF 2022"} bio={"Favorite Riot Character: answer"}></Card>
                    <Card icon={amy_pic} name={"AMY JIANG "} role={"| COACH"} major={"MECHANICAL ENGINEERING + EECS"} year={"CLASS OF 2022"} bio={"Favorite Riot Character: answer"}></Card>
                </div>
            </div>
        </div>
    )
}
function Card(props) {
    return (
      <div className='card-container'>
        <div classname='picture'><img src={props.icon}></img></div>
        <div classname='info'>
            <div classname='id-header'>
                <div className='name'>{props.name}</div>
                <div className='role'>{props.role}</div>
            </div>
            <div className='major'>{props.major}</div>
            <div classname='year'>{props.year}</div>
            <p classname='bio'>{props.bio}</p>
        </div>
      </div>
    )
  }

function Competitive() {
    return (
      <div className="body">
        <Nav></Nav>
        <Header></Header>
        {/* <PlayforCal></PlayforCal> */}
        <League></League>
        <Achievements></Achievements>
        <Valorant></Valorant>
        <Footer />
      </div>
    )
  }



  export default Competitive;