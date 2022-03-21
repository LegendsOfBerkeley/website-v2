import logo from './logo.svg';
import './App.css';
import homePhoto from './images/homePhoto.png'
import glow from './images/glow.svg'
import Nav from './navbar/Nav.js'

function Home() {
  return(
    <div>
      <img src = {homePhoto}/>
      <img src = {glow}/>
      <h2>UC BERKELEY'S OFFICIAL RIOT - SPONSORED CLUB</h2>

      <p>
        Berkeley Legends strives to ensure that UC Berkeley students 
        have a place to create relationships with other Riot Games 
        players. Come join us at our viewing parties, socials, LAN 
        events, tournaments, and more.
      </p>
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
