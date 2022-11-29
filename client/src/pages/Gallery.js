import React from 'react'
import './Gallery.css'
import Nav from '../components/navbar/Nav'
import {useState} from 'react'; 
import placeholder2 from '../images/shop/placeholder2.png'
import placeholder3 from '../images/shop/placeholder3.png'
import Footer from '../components/Footer'
import { FFN1, GTG1, GTG2, ICE1, ICE2, ICE3, ICE4, ICE5, 
  SAKURA1, SAKURA2, SAKURA3, BANQ1, BANQ2, BANQ3, 
  VALAN1, VALAN2, VALAN3, VALAN4, BLCS1, BLCS2 } from '../images';

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
        <PhotoItem image={FFN1}></PhotoItem>
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
    </div>
    
  )
}

function LANPhotos(props) {
  return (
    <div className="gallery-container">
      <div className="photo-row">
        <PhotoItem image={FFN1} ></PhotoItem>
        <PhotoItem image={placeholder2}></PhotoItem>
        <PhotoItem image={placeholder2}></PhotoItem>
        <PhotoItem image={placeholder2}></PhotoItem>
      </div>
      <div className="photo-row">
        <PhotoItem image={placeholder2}></PhotoItem>
        <PhotoItem image={placeholder2}></PhotoItem>
        <PhotoItem image={placeholder2}></PhotoItem>
        <PhotoItem image={placeholder2}></PhotoItem>
      </div>
      <div className="photo-row">
        <PhotoItem image={VALAN1}></PhotoItem>
        <PhotoItem image={VALAN2}></PhotoItem>
        <PhotoItem image={VALAN3}></PhotoItem>
        <PhotoItem image={VALAN4}></PhotoItem>
      </div>
    </div>
  )
}

function TournamentPhotos(props) {
  return (
    <div className="gallery-container">
      <div className="photo-row">
        <PhotoItem image={placeholder3}></PhotoItem>
        <PhotoItem image={placeholder3}></PhotoItem>
        <PhotoItem image={placeholder3}></PhotoItem>
        <PhotoItem image={placeholder3}></PhotoItem>
      </div>
      <div className="photo-row">
        <PhotoItem image={placeholder3}></PhotoItem>
        <PhotoItem image={placeholder3}></PhotoItem>
        <PhotoItem image={placeholder3}></PhotoItem>
        <PhotoItem image={placeholder3}></PhotoItem>
      </div>
      <div className="photo-row">
        <PhotoItem image={placeholder3}></PhotoItem>
        <PhotoItem image={placeholder3}></PhotoItem>
        <PhotoItem image={BLCS1}></PhotoItem>
        <PhotoItem image={BLCS2}></PhotoItem>
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