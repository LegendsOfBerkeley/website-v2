import React from 'react';
import Nav from '../components/navbar/Nav.js';
import Footer from '../components/Footer'
import './FAQ.css';


function Text(props) {
    return(
        <div>
            <h5 className='textheader'>{props.title}</h5>
            <p className='textinfo'>{props.text}</p>
        </div>
    );
}

function FAQ() {
    return (
        <div className = 'body'>
            <Nav></Nav>
            <h2 className = 'FAQ-header'>FAQ</h2>
            <div className='container'>
                <Text title="DO I HAVE TO BE RANKED TO BE A PART OF BERKELEY LEGENDS?" text="Of course not! We welcome everyone who is interested in and would like to be a part of the Riot Games community at Cal. Please don't be intimidated from joining in if you are new or unranked. Joining Berkeley Legends is a great way to find others to play with."/>
                <Text title="HOW DO I JOIN THE COMPETITIVE SCENE AT CAL?" text="You can contact the competitive coordinator for the appropriate game you are interested in (League or Valorant) for more information on UC Berkeley's competitive collegiate teams and how to join. Contact information is available in our Discord server. Tryouts are usually held at the beginning of the Fall semester for placement into our teams." />
                <Text title="WHAT EXACTLY IS THIS CLUB, AND WHAT IS LEAGUE OF LEGENDS?" text="Berkeley Legends is the official Riot Games sponsored club at Cal that hosts community events for its student members. Berkeley Legends strives to provide support and common ground for passionate gamers from all across campus to gather, foster community, and overall have a blast. We are always unleashing a variety of different events throughout the semester for awesome and intense fun. Look out for us and our upcoming events! If you are unfamiliar about Riot Games, and want to know further about what each Riot game is all about, visit the Riot Games official website to learn more." />
                <Text title="IS BERKELEY LEGENDS AN ONLINE COMMUNITY, OR IS IT AN ON-CAMPUS ORGANIZATION?" text="Both! We're proudly a very strong on-campus organization, and we've had tremendous success with on-campus socials and other events. We hold general meetings, social gatherings, LAN parties, and viewing parties, as well as tournaments. You can also expect some new, cool and different events as well. Keep up to date with our Discord and events site for the latest info." />
                <Text title="DOES BERKELEY LEGENDS ONLY PUT ON GAME-RELATED EVENTS?" text="Not at all! We host board-game night socials, study halls, and boba runs as well. We're always open to new event suggestions, so you can expect a variety of social gatherings where you can meet and mesh with new and different Berkeley Summoners to hit up later on the rift, or just hang out with for a good time." />
            </div>
            <Footer></Footer>
        </div>
    );
}


export default FAQ