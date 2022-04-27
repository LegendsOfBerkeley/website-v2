import React from 'react'
import './Exec.css'
import jett from '../images/jett.png'
import pengu from '../images/pengu.png'
import guy from '../images/guy.png'
import Nav from '../components/navbar/Nav.js';
import Footer from '../components/Footer'
import ReactTooltip from "react-tooltip";


function Card(props) {
  return (
    <div className="card">
      <img src={props.icon} className="photo"></img>
      <div className="info">
        <div className="firstline">
          <p id="name" className="name">{props.name}</p> | <p id="alias" className="alias">{props.alias}</p>
        </div>
        <div id="position" className="position">{props.position}</div>
        <p id="bio">{props.bio}</p>
      </div>
    </div>
  )
}
function Info(props) {
  return (
    <div className="bio">
      <p id="bioName">{props.bioName}</p>
      <div id="title">FAVORITE RIOT CHARACTER</div>
      <p id="favchar">{props.favchar}</p>
      <div id="title">WHY BERKELEY LEGENDS?</div>
      <p id="why">{props.why}</p>
      <div id="title">INTERESTS OUTSIDE OF LEAGUE?</div>
      <p id="interests">{props.interests}</p>
    </div>
  )
}

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../images/execboard', false, /\.(png|jpe?g|svg)$/));

const Exec = () => {
  return (
    <>
      <Nav/> 
      <div className="body">
        <h3 className="about-header">EXECUTIVE BOARD</h3>
        <div class="container">
        <button class="button" data-tip data-for="amy">
          <Card icon={images["amyjiang.png"]} name={"Amy Jiang"} alias={"FYSIAE"} position={"President"} bio={"Mechanical Engineering + EECS, Class of 2022"}></Card>
      </button>
      <button class="button" data-tip data-for="ryan">
          <Card icon={images["ryancheng.png"]} name={"Ryan Cheng"} alias={"pingu51472"} position={"Presidential Intern, Tournament Operations, Sponsorship"} bio={"Economics, Class of 2023"}></Card>
      </button>
      <button class="button" data-tip data-for="victor">
          <Card icon={images["victorzhou.png"]} name={"Victor Zhou"} alias={"zhou shuai"} position={"Tournament Operations, community liason, sponsorship, historian"} bio={"Computer Science, Class of 2024"}></Card>
      </button>
      <button class="button" data-tip data-for="jacob">
        <Card icon={images["jacobknudson.png"]} name={"Jacob Knudson"} alias={"woopah"} position={"Tournament Operations, marketing, sponsorship"} bio={"Computer Science, Class of 2025"}></Card>
      </button>
      <button class="button" data-tip data-for="angelina">
        <Card icon={images["angelinawu.png"]} name={"Angelina Wu"} alias={"koizumaru"} position={"design"} bio={"Biomedical Engineering, Class of 2024"}></Card>
      </button>
      <button class="button" data-tip data-for="raymond">
        <Card icon={images["raymondliu.png"]} name={"Raymond Liu"} alias={"raay"} position={"Design"} bio={"Art Practice, Class of 2023"}></Card>
      </button>
      <button class="button" data-tip data-for="maddy">
        <Card icon={images["maddyting.png"]} name={"Maddy Ting"} alias={"ARDENTIIA"} position={"Marketing, Broadcast"} bio={"Business Administration, Class of 2025"}></Card>
      </button>
      <button class="button" data-tip data-for="christopher">  
        <Card icon={images["christopherthomas.png"]} name={"Christopher Thomas"} alias={"lucitic"} position={"COMMUNITY LIAISON"} bio={"Cognitive Science and Math, Class of 2023"}></Card>
      </button>
      <button class="button" data-tip data-for="daniel">
        <Card icon={images["danielzhao.png"]} name={"Daniel Zhao"} alias={"ASTRAD"} position={"broadcast, tournament operations, sponsorship"} bio={"Computer Science, Class of 2024"}></Card>
      </button>
      <button class="button" data-tip data-for="andy">
        <Card icon={images["andybui.png"]} name={"Andy Bui"} alias={"T4 NAMIKAZE"} position={"historian and marketing intern"} bio={"Media Studies, Class of 2025"}></Card>
      </button>
      <button class="button" data-tip data-for="therese">
        <Card icon={images["thereserico.png"]} name={"Therese Rico"} alias={"PURPLE LILAC12"} position={"COMMUNITY LIAISON INTERN"} bio={"Business Administration, Class of 2024"}></Card>
      </button>
        </div>
        <ReactTooltip className="tooltip" id="amy" place="right" effect="solid">
        <Info bioName={"Amy Jiang"} favchar={"Nidalee or Irelia, I'm also the biggest fan of the Pengu from the Ruin Rising cinematic that you have ever met (best cinematic btw)"}
        why={"I didn't really have a community to play games with throughout high school, so I was really excited to hear that Berkeley had a whole entire gaming club from a Travis Gafford interview and immediately got involved. I've met such a vibrant and varied community through Berkeley Legends and I want to make it as welcoming for others as it has been for me!"}
        interests={"I like playing board games and indie games, taking photos, and editing videos! (also cautiously eager for the League MMO) Besides that, I also spend some time working on electric racecars and hosting a science tournament."}></Info>
      </ReactTooltip>

      <ReactTooltip className="tooltip" id="ryan" effect="solid">
        <Info bioName={"Ryan Cheng"} favchar={"rn it's Caitlyn"}
        why={"Back in high school, I hosted League and Overwatch tournaments as a part of my company. After that era ended, I wanted to continue running these tournaments in college, so I joined BL. It also helps that I've played league for a better half of the last decade."}
        interests={"I like to do research on the stock market, learn random stuff, and try to improve my financial independence knowledge (like how to increase credit score, etc)"}></Info>
      </ReactTooltip>

      <ReactTooltip className="tooltip" id="victor" effect="solid">
        <Info bioName={"Victor Zhou"} favchar={"https://www.youtube.com/watch?v=3aUa_xVjf-w | https://bit.ly/2XFRyxU"}
        why={"I'm unfortunately a League addict so I find myself gaming for around 6 hours a day on average, and since I was playing so much anyway, I decided to look into Berkeley Legends to find fellow Riot Games enjoyers. The club has an amazing and welcoming community, and the members are just as dank as you would expect the average League of Legends/Valorant enjoyer to be, so I quickly came to love this group of people!"}
        interests={"I do not like League, but I enjoy the concept of playing League. I also love playing other games, reading/watching anything mystery-related (pleasepleaseplease read/watch Detective Conan), singing, doodling, spending time with friends, and, above all, waiting till the due date to begin on projects and psets! (helphelphelphelphelphelphelphelphe"}></Info>
      </ReactTooltip>

      <ReactTooltip className="tooltip" id="jacob" effect="solid">
        <Info bioName={"Jacob Knudson"} favchar={"Bard"}
        why={"I've always loved playing games with others, so finding a community that's able to bring so many different people together over a shared passion for a game was a natural fit. Ever since I ran my first tournament with a few friends, I've always been looking for ways to get involved in the eSports scene. I'm looking forward to having a great time and hosting awesome events for all the members of Berkeley Legends!"}
        interests={"I like to play roguelikes (Hades, Dead Cells, and Slay the Spire), indie games (Omori, Hollow Knight, and Undertale), and other co-op games (Payday 2, Dead by Daylight, and Terraria). If I'm not playing games, I'm probably listening to music or just chatting with my friends. I'm really big on the hyperpop and experimental scenes, with artists like Glaive, 100 gecs, and Kurtains being some of my favorites."}></Info>
      </ReactTooltip>

      <ReactTooltip className="tooltip" id="angelina" effect="solid">
        <Info bioName={"Angelina Wu"} favchar={"Lux support"}
        why={"I like League of Legends! It changed my life in a lot of ways. I also found it cool that our school has an active gaming community :)"}
        interests={"Baking, eating, building in The Sims, flaming Ryan, eating"}></Info>
      </ReactTooltip>

      <ReactTooltip className="tooltip" id="raymond" effect="solid">
        <Info bioName={"Raymond Liu"} favchar={"I've played league for so long that I've mained pretty much every lane and champ but I'm equally mediocre on all of them :( also a jett enjoyer"}
        why={"League has always been a part of my life and joining the club was a no brainer for me. As soon as I learned about it I joined the discord and applied to be an intern and here I am. The people and the community are awesome and it's just a great time."}
        interests={"I do a lot of art and design things. I love doing anything creative. Finding new and listening to new music is always fun. naps."}></Info>
      </ReactTooltip>

      <ReactTooltip className="tooltip" id="maddy" effect="solid">
        <Info bioName={"Maddy Ting"} favchar={"Seraphine, Rell, Kayle"}
        why={"I started playing League in January 2021 (yes I'm a baby compared to all you early season gamers) so when I found out about the club through the freshman Discord, I decided to check it out. Turns out it was a great decision because I've met a bunch of awesome friends here that share my passion (addiction) and a wonderful community too!"}
        interests={"I enjoy drawing and writing fanfiction (League or P5 are my favorites to talk about) when I'm not playing games, chatting with friends, or reciting random movie or game quotes from memory. I also like designing things so if I'm AFK then I'm probably rearranging pixels in either Photoshop or Canva while listening to the same songs on hour-long loops (recently it's been the Arcane playlist but I enjoy kpop too)."}></Info>
      </ReactTooltip>

      <ReactTooltip className="tooltip" id="christopher" effect="solid">
        <Info bioName={"Christopher Thomas"} favchar={"Aurelion Sol/Nidalee"}
        why={"League has been a game that has brought me much joy (and immense pain) and I want to shine a light on the better side of the League community and be a part of it."}
        interests={"Table Tennis, Drawing, Random Hobbies"}></Info>
      </ReactTooltip>

      <ReactTooltip className="tooltip" id="daniel" effect="solid">
        <Info bioName={"Daniel Zhao"} favchar={"Gragas"}
        why={"to have fun and meet people :D"}
        interests={"eat food, make games, play cello, party"}></Info>
      </ReactTooltip>

      <ReactTooltip className="tooltip" id="andy" effect="solid">
        <Info bioName={"Andy Bui"} favchar={"Yasuo, Yasuo, and Yasuo"}
        why={"Just for you :) BL is a great community with amazing people!"}
        interests={"Photography, volleyball, and obsessively drink milk tea"}></Info>
      </ReactTooltip>

      <ReactTooltip className="tooltip" id="therese" effect="solid">
        <Info bioName={"Therese Rico"} favchar={"neeko!!!! sage!!!! yordles (but the new set got me confused)!!!!"}
        why={"I've been playing League of Legends on and off for about 6 or 7 years now, so joining this club just felt right. After meeting some funky fresh people in the community during my first semester freshman year and participating in many fun events, I decided to stay and apply for board!"}
        interests={"I like to draw, make cute things out of clay, and play co-op games. I love puzzles !!! The last one I did was a 1000 piece Starry Night puzzle a few years ago, and I am itching to get my hands on another puzzle. I procrastinate a lot, much to the dismay of myself. My roommates are always suprised when they see me doing homework. Catch me watching both Mamma Mia! movies back-to-back instead of anything I am actually supposed to be doing."}></Info>
      </ReactTooltip>
        <img src = {jett} className="jett-landing"></img>
        <img src = {pengu} className="pengu"></img>
        <img src = {guy} className="guy"></img>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Exec