import React from 'react';
import './about.css';
import Nav from '../navbar/Nav.js';
import topRow from '../images/top-row.png'; 
import bottomRow from '../images/bottom-row.png';
import { ReactEmbeddedGoogleCalendar } from 'react-embedded-google-calendar';
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
            
            <div className='wwd-row'>
            {/* <img src = {topRow}/> */}
                <p className='wwd-subtitles'>LAN PARTIES</p>
                <p className='wwd-subtitles'>TOURNAMENTS</p>  
                <p className='wwd-subtitles'>SOCIALS & BANQUETS</p>  
            </div>
            <div className='wwd-row'>
                <p className='wwd-subtitles'>VIEWING PARTIES</p>
                <p className='wwd-subtitles'>INDUSTRY NETWORKING</p>  
                <p className='wwd-subtitles'>CREATIVE CHALLENGES</p>  
            </div>

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
            <ReactEmbeddedGoogleCalendar publicUrl ="https://calendar.google.com/calendar/embed?src=ffdf3kh6ao1v0gd7ae8gko17ps%40group.calendar.google.com&ctz=America%2FLos_Angeles" width="100%" height= '100px'/>
        </div>
    )
}

function PastEvents() {

    let slideIndex = 0;
    showSlides();
    
    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 2000); // Change image every 2 seconds
    }

    return (
        <body>
            <div>
                <h4 className='header'>PAST EVENTS</h4>
            </div>

            <div class="slideshow-container">

                <div class="mySlides fade">
                    <div class="numbertext">1 / 3</div>
                    <img src="img_nature_wide.jpg" style="width:100%"></img>
                    <div class="text">Caption Text</div>
                </div>

                <div class="mySlides fade">
                    <div class="numbertext">2 / 3</div>
                    <img src="img_snow_wide.jpg" style="width:100%"></img>
                    <div class="text">Caption Two</div>
                </div>

                <div class="mySlides fade">
                    <div class="numbertext">3 / 3</div>
                    <img src="img_mountains_wide.jpg" style="width:100%"></img>
                    <div class="text">Caption Three</div>
                </div>
            </div>

            <br></br>

            <div style="text-align:center">
            <span class="dot"></span> 
            <span class="dot"></span> 
            <span class="dot"></span> 
            </div>
        </body>

    )
}

function WanttoLearnMore() {
    return (
        <div>
            <h4 className='header'>WANT TO LEARN MORE?</h4>

        </div>
    )
}

function About() {
    return (
        <div className="body">
            <Nav></Nav>
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