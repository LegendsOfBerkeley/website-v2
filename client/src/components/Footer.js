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
            <a>Cal Esports</a>
            <br></br>
            <br></br>
            <a>Cal Women in Gaming</a>
            <br></br>
            <br></br>
            <a>Smash at Berkeley</a>
            <br></br>
            <br></br>
            <a>Gaming at Berkeley</a>
        </div>
        <div className="contact">
            <h4>CONTACT US</h4>
            <a href="berkeleyleagueoflegends@gmail.com">berkeleyleagueoflegends@gmail.com</a>
            <p>Message us on our <a href = "https://discord.com/invite/BQvHDnB">Discord</a></p>
        </div>
        <div className="find">
            <h4>FIND US ON</h4>
            <div className="icons">
                <img src={Discord}/>
                <img src={Twitch}/>
                <img src={Facebook}/>
                <img src={Instagram}/>
                <img src={Twitter}/>
            </div>
        </div>
    </div>
  );
}


export default Footer;
