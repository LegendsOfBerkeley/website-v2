import '../styles/Footer.css';
import Discord from '../images/footer/discord.svg'
import Twitch from '../images/footer/twitch.svg'
import Facebook from '../images/footer/facebook.svg'
import Instagram from '../images/footer/instagram.svg'
import Twitter from '../images/footer/twitter.svg'

function Footer() {
  return (
    <div className="footer">
        <div className="other">
            <h4>OTHER CAMPUS ORGS</h4>
            <a href='https://www.facebook.com/CalEsportsBerkeley'>Cal Esports</a>
            <br></br>
            <br></br>
            <a href='https://linktr.ee/CalMarGenGaming'>Cal Marginalized Genders in Gaming</a>
            <br></br>
            <br></br>
            <a href='https://smash.berkeley.edu/'>Smash at Berkeley</a>
            <br></br>
            <br></br>
            <a href='https://linktr.ee/gamingatberkeley?fbclid=IwAR2RvOE8GsMKIZ8uY0W0uThpC0KHjb9F1ZszTw7nnnlLcd6aQPYcMT9ADRw'>Gaming at Berkeley</a>
        </div>
        <div className="contact">
            <h4>CONTACT US</h4>
            <a href="berkeleyleagueoflegends@gmail.com">berkeleyleagueoflegends@gmail.com</a>
            <p>Message us on our <a href = "https://discord.com/invite/BQvHDnB">Discord</a></p>
        </div>
        <div className="find">
            <h4>FIND US ON</h4>
            <div className="icons">
                <a href='https://tinyurl.com/BLDisco'><img src={Discord}/></a>
                <a href='https://www.twitch.tv/berkeley_legends'><img src={Twitch}/></a>
                <a href='https://www.facebook.com/groups/BerkeleyLoL/'><img src={Facebook}/></a>
                <a href='https://www.instagram.com/berkeleylegends/'><img src={Instagram}/></a>
                <a href='https://twitter.com/berkeleylegends'><img src={Twitter}/></a>
            </div>
        </div>
    </div>
  );
}


export default Footer;
