// Added home blurbs. So far, spacing is a bit off & haven't added buttons yet. - Jen 

import React from 'react';
import './homeBlurbs.css';
// new 
// import LegendsButton from '../App.js'
import photo_community from '../images/photo_community.png'
import users_group_icon from '../images/icons/Users_Group.svg'
import photo_events from '../images/photo_events.png'
import calendar_check_icon from '../images/icons/Calendar_Check.svg'
import photo_championship from '../images/photo_championship.png'
import championship_icon from '../images/icons/championship.svg'
import photo_competitive from '../images/photo_competitive.png'
import team_icon from '../images/icons/team.svg'
import join_our_discord_button from '../images/join-our-discord.png'
import view_upcoming_events_button from '../images/view-upcoming-events.png'
import become_a_champion_button from '../images/become-a-champion.png'
import learn_about_competitive_button from '../images/learn-about-competitive.png'
import LegendsButton from '../components/LegendsButton.js'
import ThinLegendsButton from '../components/ThinLegendsButton.js'
import { Link } from "react-router-dom";

// pic on the left, words on the right
function RightBlurb(props) {
    return (
        <div className="blurb-container">
            <img src = {props.img} className="blurb-img" />
            <div className='blurb-text'>
                <div className="blurb-title">
                    <img src = {props.icon} className="blurb-title-icon" />
                    <p className="blurb-title-text">{props.title}</p>
                </div>
                <p className="blurb-paragraph">{props.blurb}</p>
                <ThinLegendsButton title={props.button}></ThinLegendsButton>
            </div>
        </div>
    )
}
// pic on the right, words on the left  
function LeftBlurb(props) {
    return (
        <div className="blurb-container">
            <div className='blurb-text'>
                <div className="blurb-title">
                    <img src = {props.icon} className="blurb-title-icon" />
                    <p className="blurb-title-text">{props.title}</p>
                </div>
                <p className="blurb-paragraph">{props.blurb}</p>
                <Link to={props.link}>
                    <ThinLegendsButton title={props.button}></ThinLegendsButton>
                </Link>
            </div>
            <img src = {props.img} className="blurb-img" />
        </div>
    )
}

function AllBlurbs(props) {
    return (
        <div>
            <RightBlurb img={photo_community} icon={users_group_icon} title={"Community"} blurb={"Our community loves discussing the latest competitive esports games, character reworks, map changes, and finding new friends to duo queue or play inhouses with. We welcome any students interested in League, Teamfight Tactics, Legends of Runeterra, or Valorant, regardless of level or rank."} button={"JOIN OUR COMMUNITY"}></RightBlurb>
            <LeftBlurb img={photo_events} icon={calendar_check_icon} title={"Events"} blurb={"From LAN parties to tournaments to board game nights, Berkeley Legends hosts a variety of events open to all Berkeley students! Keep an eye on our event calendar for upcoming events, and check out our photo albums for memories from the past ones."} link={"/about"} button={"VIEW UPCOMING EVENTS"} ></LeftBlurb>
            <RightBlurb img={photo_championship} icon={championship_icon} title={"Championship"} blurb={"For those who enjoy the company at Berkeley Legends and want to see more, we offer an optional paid Champions program granting bonus perks such as access to family system, Champion-exclusive socials, free tournament admission, custom discord emotes, and more!"} button={"BECOME A CHAMPION"} ></RightBlurb>
            <LeftBlurb img={photo_competitive} icon={team_icon} title={"Competitive Teams"} blurb={"We are proud to host Division 1 and 2 collegiate esports teams in League of Legends and Valorant, representing UC Berkeley at tournaments across the country. Find out more about our teams and make sure to cheer on the Golden Bears this season!"} link={"/competitive"}  button={"LEARN ABOUT COMPETITIVE"} ></LeftBlurb>
        </div>
    )
}

export default AllBlurbs