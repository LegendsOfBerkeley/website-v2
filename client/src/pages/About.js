import React from 'react';
import './About.css';
import Nav from '../components/navbar/Nav.js';
import topRow from '../images/toprow.png'; 
import bottomRow from '../images/bottomrow.png';
import wwdFull from '../images/wwd-full.png'; 
import pastevents1 from '../images/pastevents1.png';
import pastevents2 from '../images/pastevents2.png';
import pastevents3 from '../images/pastevents3.png';
import pastevents4 from '../images/pastevents4.png';
import { ReactEmbeddedGoogleCalendar } from 'react-embedded-google-calendar';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import LegendsButton from '../components/LegendsButton';
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
                <Link to="/exec">
                    <LegendsButton title="Meet Exec"></LegendsButton>
                </Link>
                <LegendsButton title="FAQS"></LegendsButton>
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
            <EventsCalendar></EventsCalendar>
            <PastEvents></PastEvents>
            <WanttoLearnMore></WanttoLearnMore>
        </div>
    )
}


export default About;