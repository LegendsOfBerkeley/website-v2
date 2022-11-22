import React from 'react'
import './Championships.css'
import Nav from '../components/navbar/Nav'
import Footer from '../components/Footer'
import ticket from '../images/icons/icon_ticket.svg'
import member from '../images/icons/icon_member.svg'
import group35 from '../images/icons/Group 35.svg'
import family from '../images/icons/family.svg'
import merch from '../images/icons/icon_merch.svg'
import emote from '../images/icons/icon_emote.svg'
import grouppic from '../images/group pic.png'
import grouppic2ppl from '../images/group pic 2.png'
import LegendsButton from '../components/LegendsButton';

function PerksLeft(props) {
  return (
    <div className="perk">
      <div className="title">
        <img src={props.logo} className="logoLeft"></img>
        <h className="perksubheader">{props.title}</h>
      </div>
      <p className="description">
        {props.description}
      </p>
    </div>
  )
}

function PerksRight(props) {
  return (
    <div className="perk">
      <div className="title">
        <h className="perksubheader">{props.title}</h>
        <img src={props.logo} className="logoRight"></img>
      </div>
      <p className="description">
        {props.description}
      </p>
    </div>
  )
}

function Championship() {
  return (
    <div className="body">
      <Nav/>
      <h3 className="champ-header">Championship</h3>
      <p className="landing-info2">
        <b>Regular club membership is completely open.</b><br></br>
        Anyone interested in our events is welcome to our public events!<br></br>
        <br></br>If you’re interested in meeting the Berkeley Legends community at a more personal level, join <b>Championship</b>!
      </p>
      <h2 className="header">Champion Pass Perks</h2>
      <div className="grid-container">
        <div className="left">
          <div className="item">
            <PerksLeft title={"FREE TOURNAMENT ADMISSION"} logo={ticket} description={"All tournaments will be available to you free of charge! Berkeley Legends hosts a variety of tournaments throughout every semester, ranging from ARAM to TFT to BLCS and 5v5."}></PerksLeft>
            <PerksRight title={"CHAMPION EXCLUSIVE SOCIALS"} logo={member} description={"We will be hosting a members-only barbecue as well as a banquet where we, the BL board, will provide food, games, and cheery company for all our lovely members."}></PerksRight>
            <PerksLeft title={"RETREAT / RIOT STUDIO TOUR"} logo={group35} description={"In the spring, Berkeley Legends travels to LA to tour Riot HQ and chat with some Rioters! You can even (optionally) stay for a second day to watch LCS with the club."}></PerksLeft>
          </div>
          <div className="item">
            <img src={grouppic2ppl}></img>
          </div>
        </div>
        <div className="right">
          <div className="item">
            <img src={grouppic}></img>
          </div>
          <div className="item">
            <PerksRight title={"FAMILY SYSTEM"} logo={family} description={"Families are a smaller groups of BL members designed to let everyone to get to know each other better within the broader League community at Berkeley. Family hangouts, League games, and friendly rivalries with other families are just a few of the events you can get involved in."}></PerksRight>
            <PerksLeft title={"MERCH DISCOUNTS"} logo={merch} description={"Receive discounts on Berkeley Legends merchandise."}></PerksLeft>
            <PerksRight title={"CUSTOM DISCORD EMOTE"} logo={emote} description={"Leave a legacy as your face is immortalized in the Berkeley Legends Discord."}></PerksRight>
          </div>
        </div>
      </div>
      <div className='joinLegendsButton'>
        <LegendsButton title="JOIN US" className="centerLegendsButton"></LegendsButton>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Championship