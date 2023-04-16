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
      <button class="button" data-tip data-for="ryan">
          <Card icon={images["ryancheng.png"]} name={"Ryan Cheng"} alias={"pingu51472"} position={"President"} bio={"Economics, Class of 2023"}></Card>
      </button>
      <button class="button" data-tip data-for="gilberto">
          <Card icon={images["gilbertodiaz.png"]} name={"Gilberto Diaz"} alias={"gilito345"} position={"Presidential Intern and Broadcast lead"} bio={"EECS, Class of 2024"}></Card>
      </button>
      <button class="button" data-tip data-for="hari">
          <Card icon={images["hariganeshan.png"]} name={"Hari Ganeshan"} alias={"WarRaptors"} position={"Tournament Operations and Marketing Intern"} bio={"Economics & Public Health, Class of 2024"}></Card>
      </button>
      <button class="button" data-tip data-for="jacob">
        <Card icon={images["jacobknudson.png"]} name={"Jacob Knudson"} alias={"woopah"} position={"Marketing and Outreach Lead"} bio={"Computer Science, Class of 2025"}></Card>
      </button>
      <button class="button" data-tip data-for="angelina">
        <Card icon={images["angelinawu.png"]} name={"Angelina Wu"} alias={"koizumaru"} position={"Design"} bio={"Cognitive Science, Class of 2024"}></Card>
      </button>
      <button class="button" data-tip data-for="lauren">
        <Card icon={images["laurenkim.png"]} name={"Lauren Kim"} alias={"1aurein"} position={"Design Intern"} bio={"Art Practice, Class of 2026"}></Card>
      </button>
      <button class="button" data-tip data-for="phoebe">
        <Card icon={images["phoebelyu.png"]} name={"Phoebe Lyu"} alias={"Phoebe7Kiwi"} position={"Tournament Operations Intern"} bio={"Computer Science, Class of 2026"}></Card>
      </button>
      <button class="button" data-tip data-for="christopher">  
        <Card icon={images["christopherthomas.png"]} name={"Christopher Thomas"} alias={"lucitic"} position={"Championship"} bio={"Cognitive Science and Math, Class of 2023"}></Card>
      </button>
      <button class="button" data-tip data-for="ashley">
        <Card icon={images["ashleywatanabe.png"]} name={"Ashley Watanabe"} alias={"wontonabe"} position={"Historian and Championship Intern"} bio={"Economics, Class of 2026"}></Card>
      </button>
      <button class="button" data-tip data-for="eric">
        <Card icon={images["ericyang.png"]} name={"Eric Yang"} alias={"Eyrr"} position={"Historian Lead"} bio={"Computer Science, Class of 2025"}></Card>
      </button>
      <button class="button" data-tip data-for="therese">
        <Card icon={images["thereserico.png"]} name={"Therese Rico"} alias={"PURPLE LILAC12"} position={"Tournament Operations and Championship Lead"} bio={"Business Administration, Class of 2024"}></Card>
      </button>
      <button class="button" data-tip data-for="sylvia">
        <Card icon={images["sylviachen.png"]} name={"Sylvia Chen"} alias={"DeathbyYogurt"} position={"Design Lead"} bio={"Computer Science, Class of 2024"}></Card>
      </button>
      <button class="button" data-tip data-for="ivy">
        <Card icon={images["ivyliu.png"]} name={"Ivy Liu"} alias={"snowyfern"} position={"Design Intern"} bio={"Computer Science, Class of 2026"}></Card>
      </button>
        </div>
        <ReactTooltip className="tooltip" id="gilberto" place="right" effect="solid">
        <Info bioName={"Gilberto Diaz"} favchar={"Teemo! (From Legends of Runeterra)"}
        why={"I like outdoor activities like soccer and frisbee! I also like reading and my favorite non-riot video game is Spelunky 2. :)"}
        interests={"BL lets me meet more LoR players in the wild, and play league with groups of friends! I love the in person social aspects of it too, and I think the BL community has amazing potential."}></Info>
      </ReactTooltip>

      <ReactTooltip className="tooltip" id="ryan" effect="solid">
        <Info bioName={"Ryan Cheng"} favchar={"rn it's Caitlyn"}
        why={"Back in high school, I hosted League and Overwatch tournaments as a part of my company. After that era ended, I wanted to continue running these tournaments in college, so I joined BL. It also helps that I've played league for a better half of the last decade."}
        interests={"I like to do research on the stock market, learn random stuff, and try to improve my financial independence knowledge (like how to increase credit score, etc)"}></Info>
      </ReactTooltip>

      <ReactTooltip className="tooltip" id="hari" effect="solid">
        <Info bioName={"Hari Ganeshan"} favchar={"Vladimir"}
        why={"I enjoy LoL, TFT, LoR, and even Val so getting to meet people with similar interests is really fun for me. Hopefully I can bring some exciting ideas to make this club enjoyable for everyone involved :)"}
        interests={"I really enjoy listening to music, grabbing food, and anything with the company of friends. I also love doing anything active ranging from going to the gym, rock climbing, and ultimate frisbee. I'm a pretty spontaneous and outgoing person and would love to get to know y'all this semester."}></Info>
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

      <ReactTooltip className="tooltip" id="lauren" effect="solid">
        <Info bioName={"Lauren Kim"} favchar={"Reyna <3"}
        why={"I joined Berkeley Legends to meet others who enjoy working behind the scenes on events for games they love! I love that I can be a part of this exciting community on campus with other passionate students."}
        interests={"I've done a lot of visual arts during my high school years, so I enjoy the traditional aspect of art as well as graphic arts. I also love sweets and finding new food spots to be addicted to."}></Info>
      </ReactTooltip>

      <ReactTooltip className="tooltip" id="phoebe" effect="solid">
        <Info bioName={"Phoebe Lyu"} favchar={"Zoe"}
        why={"I love League of Legends and other games developed by Riot Games. I was excited when I found the Berkeley Legends club. It is a great opportunity to connect with people that love video games as well."}
        interests={"Snowboarding, playing tennis, arranging music, playing the piano, and painting"}></Info>
      </ReactTooltip>

      <ReactTooltip className="tooltip" id="christopher" effect="solid">
        <Info bioName={"Christopher Thomas"} favchar={"Aurelion Sol/Nidalee"}
        why={"League has been a game that has brought me much joy (and immense pain) and I want to shine a light on the better side of the League community and be a part of it."}
        interests={"Table Tennis, Drawing, Random Hobbies"}></Info>
      </ReactTooltip>

      <ReactTooltip className="tooltip" id="ashley" effect="solid">
        <Info bioName={"Ashley Watanabe"} favchar={"Omen"}
        why={"I love being able to hang out and interact with such a positive gaming community, and Berkeley Legends has allowed me to meet so many people! Also, I have a crippling VALORANT addiction, and it's fun to help out in a community that suits my interests!"}
        interests={"Besides Riot Games I enjoy going to the great wide world of the outdoors, hiking and running mostly(touching grass I know), consuming unholy amounts of boba, and trying to keep my growing colony of plants alive :)"}></Info>
      </ReactTooltip>

      <ReactTooltip className="tooltip" id="eric" effect="solid">
        <Info bioName={"Eric Yang"} favchar={"Raze"}
        why={"I like playing games and hanging out with friends. I think it's pretty cool that there's a community where I can do both."}
        interests={"I like participating in kind of competitive activities like sports and board games, overanalyzing the things I read and watch, swimming in places not Berkeley, and trying to take good pictures. I also just play FPS or indie games and read manga."}></Info>
      </ReactTooltip>

      <ReactTooltip className="tooltip" id="therese" effect="solid">
        <Info bioName={"Therese Rico"} favchar={"neeko!!!! sage!!!! yordles (but the new set got me confused)!!!!"}
        why={"I've been playing League of Legends on and off for about 6 or 7 years now, so joining this club just felt right. After meeting some funky fresh people in the community during my first semester freshman year and participating in many fun events, I decided to stay and apply for board!"}
        interests={"I like to draw, make cute things out of clay, and play co-op games. I love puzzles !!! The last one I did was a 1000 piece Starry Night puzzle a few years ago, and I am itching to get my hands on another puzzle. I procrastinate a lot, much to the dismay of myself. My roommates are always suprised when they see me doing homework. Catch me watching both Mamma Mia! movies back-to-back instead of anything I am actually supposed to be doing."}></Info>
      </ReactTooltip>
      
      <ReactTooltip className="tooltip" id="sylvia" effect="solid">
        <Info bioName={"Sylvia Chen"} favchar={"Reyna"}
        why={"League and Valorant have been a huge inspirations for me creatively, and I’ve always wanted to use my skills to create content for a club like BL."}
        interests={"I play a lot of multiplayer games like Minecraft/Stardew/ROR2/Civ6 or singleplayer indies like Slime Ranchers/Gris. I also like draw digitally and do my own gel nail art! "}></Info>
      </ReactTooltip>

      <ReactTooltip className="tooltip" id="ivy" effect="solid">
        <Info bioName={"Ivy Liu"} favchar={"Kindred"}
        why={"I've met so many amazing people through Riot's games and I want to give back by creating those same opportunities for others. I know first-hand of the toxicity in games and by joining Berkeley Legends I hope to fight against it by fostering a supportive community for players of all backgrounds!"}
        interests={"I love chill games like Genshin, Stardew Valley, and... roguelikes? There's just something about mashing buttons in Hades and Risk of Rain 2. Which is why ARAMs are the best <3 Outside of gaming, you can find me drawing and learning game development! "}></Info>
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