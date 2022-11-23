import React from 'react';
import './About.css';
import Nav from '../components/navbar/Nav.js';
import topRow from '../images/toprow.png'; 
import bottomRow from '../images/bottomrow.png';
import Footer from '../components/Footer'
import wwdFull from '../images/wwd-full.png'; 
import pastevents1 from '../images/events/09-24-aram.png';
import pastevents2 from '../images/events/10-21-qf-watch.png';
import pastevents3 from '../images/events/11-13-fall-lan.png';
import pastevents4 from '../images/events/11-18-blt.png';
import announce1 from '../images/events/12-04-tandem.png'
import { ReactEmbeddedGoogleCalendar } from 'react-embedded-google-calendar';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import LegendsButton from '../components/LegendsButton';
import ThinLegendsButton from '../components/ThinLegendsButton.js'
import {Link} from "react-router-dom";

function Header() {
    return (
        <div>
            <h3 className="about-header">ABOUT</h3>
            <p className="about-info">
                Berkeley Legends was born in 2013 out of the desire to create an inclusive and 
                welcoming community that emphasizes the social aspects of video games. Now one 
                of the largest student organizations on campus, we continue to provide a home for 
                any Riot Games enthusiast - on and off the rift.
            </p>
        </div>
    )
}

function WhatWeDo() {
    return (
        <div>
            <h4 className='header'>WHAT WE DO</h4>
            {/* <img src = {topRow} className='wwd-row-images'/>
            <div className='wwd-row'>
                <p className='wwd-subtitles'>LAN PARTIES</p>
                <p className='wwd-subtitles'>TOURNAMENTS</p>  
                <p className='wwd-subtitles'>SOCIALS & BANQUETS</p>  
            </div>
            <img src = {bottomRow} className='wwd-row-images'/>
            <div className='wwd-row'>
                <p className='wwd-subtitles'>VIEWING PARTIES</p>
                <p className='wwd-subtitles'>INDUSTRY NETWORKING</p>  
                <p className='wwd-subtitles'>CREATIVE CHALLENGES</p>  
            </div> */}
            <img src={wwdFull} className='row-images'></img>
        </div>
    )
}

function RecentAnnoucements() {
    return (
        <div>
            <h4 className='header'>RECENT ANNOUNCEMENTS</h4>
            <div className="announce-container">
            <img src = {announce1} className="announce-img" />
            <div className='announce-text'>
                <div className="announce-title">
                    <p className="announce-title-text">Tandem Tournament</p>
                </div>
                <p className="announce-paragraph">
                    We all know it takes two to tango - but do your dancing skills carry over to the Rift? Will you and your partner rival the synergy of Bjergsen + Faker? Or will your attempts at coordination fall short of the Mark? 
                    <br></br><br></br>
                    Competitors will break the ice in a series of 2v2 Tandem matches on Sunday, Dec. 4th from 1 to 5 PM at the Cal Esports Community Center.
                </p>
                <br></br><br></br>
                <a href='https://tinyurl.com/F22BLTandemSignup' target="_blank" rel="noopener noreferrer">
                <ThinLegendsButton title={"Register"}></ThinLegendsButton>
                </a>
            </div>
        </div>
        </div>
    )
}

function EventsCalendar() {
    return (
        <div>
            <h4 className='header'>EVENTS CALENDAR</h4>
            <div align="center">
                <ReactEmbeddedGoogleCalendar className = 'calendar' publicUrl ="https://calendar.google.com/calendar/embed?src=ffdf3kh6ao1v0gd7ae8gko17ps%40group.calendar.google.com&ctz=America%2FLos_Angeles" width = '1000px' height= '600px'/>
            </div>
        </div>
    )
}

/* Attempt at abtraction */

// function slideShowImages(props) {
//     return (
//         <div className="each-fade">
//             <div>
//                 <img src={props.images} />
//             </div>
//         </div>
//     );
// }

function PastEvents() {
    return (
    <div>
        <h4 className='header'>PAST EVENTS</h4>
        <div className='sizeCorrection'>
            <div className="slide-container">
                <Fade>
                    {/* Attempt at abtraction */}

                    {/* <slideShowImages images={pastevents1}></slideShowImages>
                    <slideShowImages image={pastevents2}></slideShowImages>
                    <slideShowImages image={pastevents3}></slideShowImages>
                    <slideShowImages image={pastevents4}></slideShowImages> */}

                    <div className="each-fade">
                        <div>
                            <img src={pastevents1} />
                        </div>
                    </div>
                    <div className="each-fade">
                        <div>
                            <img src={pastevents2} />
                        </div>
                    </div>
                    <div className="each-fade">
                        <div>
                            <img src={pastevents3} />
                        </div>
                    </div>
                    <div className="each-fade">
                        <div>
                            <img src={pastevents4} />
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    </div>
    );
}

function WanttoLearnMore() {
    return (
        <div>
            <h4 className='header'>WANT TO LEARN MORE?</h4>
            <div className='about-buttons'>
                <Link to="/exec" onClick={() => {window.scroll(0, 0);}}>
                    <LegendsButton title="EXEC TEAM"></LegendsButton>
                </Link>
                <Link to="/championship" onClick={() => {window.scroll(0, 0);}}>
                    <LegendsButton title="CHAMPIONSHIP"></LegendsButton>
                </Link>
                <Link to="/faq" onClick={() => {window.scroll(0, 0);}}>
                <LegendsButton title="FAQ"></LegendsButton>
                </Link>
            </div>
            
        </div>
    )
}

function About() {
    return (
        <div className="body">
            <Nav/>    
            <Header></Header>
            <WhatWeDo></WhatWeDo>
            <RecentAnnoucements></RecentAnnoucements>
            {/* <EventsCalendar></EventsCalendar> */}
            <PastEvents></PastEvents>
            <WanttoLearnMore></WanttoLearnMore>
            <Footer></Footer>
        </div>
    )
}


export default About;