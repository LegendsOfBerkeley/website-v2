import React from 'react'
import './Exec.css'
import jett from '../images/jett.png'
import pengu from '../images/pengu.png'
import guy from '../images/guy.png'
import Nav from '../components/navbar/Nav.js';
import Footer from '../components/Footer'

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
          <Card icon={images["amyjiang.png"]} name={"Amy Jiang"} alias={"FYSIAE"} position={"President"} bio={"Mechanical Engineering + EECS, Class of 2022"}></Card>
          <Card icon={images["ryancheng.png"]} name={"Ryan Cheng"} alias={"pingu51472"} position={"Presidential Intern, Tournament Operations, Sponsorship"} bio={"Economics, Class of 2023"}></Card>
          <Card icon={images["victorzhou.png"]} name={"Victor Zhou"} alias={"zhou shuai"} position={"Tournament Operations, community liason, sponsorship, historian"} bio={"Computer Science, Class of 2024"}></Card>
          <Card icon={images["jacobknudson.png"]} name={"Jacob Knudson"} alias={"woopah"} position={"Tournament Operations, marketing, sponsorship"} bio={"Computer Science, Class of 2025"}></Card>
          <Card icon={images["angelinawu.png"]} name={"Angelina Wu"} alias={"koizumaru"} position={"design"} bio={"Biomedical Engineering, Class of 2024"}></Card>
          <Card icon={images["raymondliu.png"]} name={"Raymond Liu"} alias={"raay"} position={"Design"} bio={"Art Practice, Class of 2023"}></Card>
          <Card icon={images["maddyting.png"]} name={"Maddy Ting"} alias={"ARDENTIIA"} position={"Marketing, Broadcast"} bio={"Business Administration, Class of 2025"}></Card>
          <Card icon={images["christopherthomas.png"]} name={"Christopher Thomas"} alias={"lucitic"} position={"COMMUNITY LIAISON"} bio={"Cognitive Science and Math, Class of 2023"}></Card>
          <Card icon={images["danielzhao.png"]} name={"Daniel Zhao"} alias={"ASTRAD"} position={"broadcast, tournament operations, sponsorship"} bio={"Computer Science, Class of 2024"}></Card>
          <Card icon={images["andybui.png"]} name={"Andy Bui"} alias={"T4 NAMIKAZE"} position={"historian and marketing intern"} bio={"Media Studies, Class of 2025"}></Card>
          <Card icon={images["thereserico.png"]} name={"Therese Rico"} alias={"PURPLE LILAC12"} position={"COMMUNITY LIAISON INTERN"} bio={"Business Administration, Class of 2024"}></Card>
        </div>
        <img src = {jett} className="jett-landing"></img>
        <img src = {pengu} className="pengu"></img>
        <img src = {guy} className="guy"></img>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Exec