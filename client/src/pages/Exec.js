import React from 'react'
import amyjiang from '../images/execboard/amyjiang.png'
import './Exec.css'
import Nav from '../components/navbar/Nav'

function Card(props) {
  return (
    <div>
      <div id="picture">
        <img src={props.icon}></img>
      </div>
      <div id="name">{props.name}</div>
      <div id="name">{props.alias}</div>
      <div id="position">{props.position}</div>
      <p id="bio">{props.bio}</p>
    </div>
  )
}
const Exec = () => {
  return (
    <div>
      <Nav/>
      <h3 className="about-header">EXECUTIVE BOARD</h3>
      <div class="container">
        <Card icon={amyjiang} name={"Amy Jiang"} alias={"FYSIAE"} position={"President"} bio={"Mechanical Engineering + EECS, Class of 2022"}></Card>
      </div>
    </div>
  )
}

export default Exec