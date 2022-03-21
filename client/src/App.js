import logo from './logo.svg';
import './App.css';
import homePhoto from './images/homePhoto.png'
import jett from './images/jett.png'
import glow from './images/glow.svg'
import Nav from './navbar/Nav.js'

function Home() {
  return(
    <div className="landing">
      <img src = {homePhoto} className="team-landing-image"/>
      <div className="right-landing">
        <img src = {glow} className="logo-landing"/>
        <h2>UC BERKELEY'S OFFICIAL RIOT - SPONSORED CLUB</h2>
        <p className="landing-info">
          Berkeley Legends strives to ensure that UC Berkeley students 
          have a place to create relationships with other Riot Games 
          players. Come join us at our viewing parties, socials, LAN 
          events, tournaments, and more.
        </p>
      </div>
      <img src = {jett} className="jett-landing"></img>
    </div>
    
  )
}

function button() {
  
}

function App() {
  return (
    <div className="body">
      <Nav></Nav>
      <Home></Home>
    </div>
  );
}


export default App;
