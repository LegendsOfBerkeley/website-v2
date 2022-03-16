import logo from './logo.svg';
import './App.css';
import homePhoto from './images/homePhoto.png'
import glow from './images/glow.svg'
import homeLogo from './images/homeLogo.svg'

function NavItem(props) {
  return (
    <h1 className="navbar-item">{props.name}</h1>
  );
}
// home button 
function HomeButton() {
  return (
    <img src = {homeLogo} className="logo"/>
  )
}

function Nav() {
  return (
    <div className="nav">
      <HomeButton></HomeButton>
      <div className="navbar-links">
        <NavItem name={"About"}></NavItem>
        <NavItem name={"Championship"}></NavItem>
        <NavItem name={"Competitive"}></NavItem>
        <NavItem name={"Shop"}></NavItem>
        <NavItem name={"Discord"}></NavItem> // will turn this into an image in a bit
      </div>
    </div>
  )
}

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
