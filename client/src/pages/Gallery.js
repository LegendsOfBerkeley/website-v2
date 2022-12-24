import React from 'react'
import './Gallery.css'
import Nav from '../components/navbar/Nav'
import {useState} from 'react'; 
import placeholder2 from '../images/shop/placeholder2.png'
import placeholder3 from '../images/shop/placeholder3.png'
import Footer from '../components/Footer'
import { FFN1, GTG1, GTG2, ICE1, ICE2, ICE3, ICE4, ICE5, 
  SAKURA1, SAKURA2, SAKURA3, 
  BANQ1, BANQ2, BANQ3, BANQ4, BANQ5, BANQ6,
  VALAN1, VALAN2, VALAN3, VALAN4, VALAN5, BLCS1, BLCS2, 
  ARAM1, ARAM2, ARAM3, ARAM4, ARAM5, ARAM6, ARAM7, RUNE1, 
  HALLOW1, HALLOW2, HALLOW3, HALLOW4, HALLOW5, HALLOW6, HALLOW7, HALLOW8,
  FALLAN1, FALLAN2, 
  TANDEM1, TANDEM2, TANDEM3, TOURNEY1, TOURNEY2, TOURNEY3,
  SPLAN1, GAME1, GAME2} from '../images';

function Header() {
  return (
      <div>
        <h3 className="gallery-header">Photo Gallery</h3>
      </div>
  )
}

function PhotoItem(props) {
  return (
    <div className="photo">
      <img src={props.image} alt="photo_item" className="image"/>
    </div>
  )
}


//Possible issues with lack of image compression causing image to take a while to load

function SocialPhotos(props) {
  return (
    <div className="gallery-container">
      <div className="photo-row">
        <PhotoItem image={BANQ4}></PhotoItem>
        <PhotoItem image={GTG1}></PhotoItem>
        <PhotoItem image={GTG2}></PhotoItem>
        <PhotoItem image={ICE1}></PhotoItem>
      </div>
      <div className="photo-row">
        <PhotoItem image={ICE2}></PhotoItem>
        <PhotoItem image={ICE3}></PhotoItem>
        <PhotoItem image={ICE4}></PhotoItem>
        <PhotoItem image={SAKURA1}></PhotoItem>
      </div>
      <div className="photo-row">
        <PhotoItem image={SAKURA2}></PhotoItem>
        <PhotoItem image={SAKURA3}></PhotoItem>
        <PhotoItem image={BANQ1}></PhotoItem>
        <PhotoItem image={BANQ2}></PhotoItem>
      </div>
      <div className="photo-row">
        <PhotoItem image={GAME1}></PhotoItem>
        <PhotoItem image={GAME2}></PhotoItem>
        <PhotoItem image={BANQ5}></PhotoItem>
        <PhotoItem image={BANQ6}></PhotoItem>
      </div>
    </div>
    
  )
}

function LANPhotos(props) {
  return (
    <div className="gallery-container">
      <div className="photo-row">
        <PhotoItem image={FALLAN1} ></PhotoItem>
        <PhotoItem image={FALLAN2}></PhotoItem>
        <PhotoItem image={HALLOW1}></PhotoItem>
        <PhotoItem image={HALLOW2}></PhotoItem>
      </div>
      <div className="photo-row">
        <PhotoItem image={HALLOW5} ></PhotoItem>
        <PhotoItem image={HALLOW8}></PhotoItem>
        <PhotoItem image={HALLOW7}></PhotoItem>
        <PhotoItem image={HALLOW6}></PhotoItem>
      </div>
      <div className="photo-row">
        <PhotoItem image={HALLOW3}></PhotoItem>
        <PhotoItem image={HALLOW4}></PhotoItem>
        <PhotoItem image={SPLAN1}></PhotoItem>
        <PhotoItem image={VALAN1}></PhotoItem>
      </div>
      <div className="photo-row">
        <PhotoItem image={VALAN2}></PhotoItem>
        <PhotoItem image={VALAN3}></PhotoItem>
        <PhotoItem image={VALAN4}></PhotoItem>
        <PhotoItem image={VALAN5}></PhotoItem>
      </div>
    </div>
  )
}

function TournamentPhotos(props) {
  return (
    <div className="gallery-container">
      <div className="photo-row">
        <PhotoItem image={ARAM1}></PhotoItem>
        <PhotoItem image={ARAM2}></PhotoItem>
        <PhotoItem image={ARAM3}></PhotoItem>
        <PhotoItem image={ARAM4}></PhotoItem>
      </div>
      <div className="photo-row">
        <PhotoItem image={RUNE1}></PhotoItem>
        <PhotoItem image={ARAM5}></PhotoItem>
        <PhotoItem image={ARAM6}></PhotoItem>
        <PhotoItem image={ARAM7}></PhotoItem>
      </div>
      <div className="photo-row">
        <PhotoItem image={TANDEM1}></PhotoItem>
        <PhotoItem image={TANDEM2}></PhotoItem>
        <PhotoItem image={BLCS1}></PhotoItem>
        <PhotoItem image={BLCS2}></PhotoItem>
      </div>
      <div className="photo-row">
        <PhotoItem image={TANDEM3}></PhotoItem>
        <PhotoItem image={TOURNEY1}></PhotoItem>
        <PhotoItem image={TOURNEY2}></PhotoItem>
        <PhotoItem image={TOURNEY3}></PhotoItem>
      </div>
    </div>
  )
}

function Gallery() {
  let [category, setCategory] = useState("Social"); 
  let socialClassName = "category-button";
  let tourneyClassName = "category-button";
  let lanClassName = "category-button";


  function setSocial() {
    setCategory("Social");
  }
  
  function setLAN() {
    setCategory("LAN"); 
  }
  
  function setTournament() {
    setCategory("Tournament"); 
  }

  if (category === "Social") {
    socialClassName += ' active';
  }

  if (category === "Tournament") {
    tourneyClassName += ' active';
  }

  if (category === "LAN") {
    lanClassName += ' active';
  }

  return (
    <div className="body">
      <Nav/>
      <Header></Header>
      <div className="category">
      {/* will try to make the buttons underline with the states */}
        <div className="category-buttons-div">
          <button className={socialClassName} onClick={() => setSocial()}>Champion Socials</button>
          <button className={tourneyClassName} onClick={() => setTournament()}>Tournaments</button>
          <button className={lanClassName} onClick={() => setLAN()}>LAN Parties</button>
        </div>
        {category === "Social" && <SocialPhotos/>}
        {category === "LAN" && <LANPhotos/>}
        {category === "Tournament" && <TournamentPhotos/>}
      </div>
      <Footer />
    </div>
  )
}

export default Gallery