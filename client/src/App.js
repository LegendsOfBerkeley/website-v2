import logo from './logo.svg';
import './App.css';
import homePhoto from './images/homePhoto.png'
import jett from './images/jett.png'
import glow from './images/glow.svg'
import games from './images/games.png'
import events from './images/button_events.png'
import sponsors from './images/sponsors.png'
import Nav from './navbar/Nav.js'
import AllBlurbs from './home-blurbs/homeBlurbs';

function Home() {
  return(
    <div className="showcase">
      <div className="landing-container">
        <img src = {homePhoto} className="team-landing-image"/>
        <div className="right-landing">
          <img src = {glow} className="logo-landing"/>
          <h2 className="subheader">UC BERKELEY'S OFFICIAL RIOT - SPONSORED CLUB</h2>
          <p className="landing-info">
            Berkeley Legends strives to ensure that UC Berkeley students 
            have a place to create relationships with other Riot Games 
            players. Come join us at our viewing parties, socials, LAN 
            events, tournaments, and more.
          </p>
          <img src = {events}></img>
        </div>
        <img src = {jett} className="jett-landing"></img>
      </div> 
    </div>
  )
}
function GamesWeRepresent() {
  return (
    <div>
      <h3 className="games-and-sponsors-text">GAMES WE REPRESENT</h3>
      <img src={games} className="games-img" /> 
    </div>
  )
}
function Sponsors() {
  return (
    <div>
      <h3 className="games-and-sponsors-text">SPONSORS</h3>
      <img src={sponsors} className="sponsors-img" /> 
    </div>
  )
}

function App() {
  return (
    <div className="body">
      <Nav></Nav>
      <Home></Home>
      <GamesWeRepresent></GamesWeRepresent>
      <AllBlurbs></AllBlurbs>
      <Sponsors></Sponsors>
    </div>
  );
}


export default App
