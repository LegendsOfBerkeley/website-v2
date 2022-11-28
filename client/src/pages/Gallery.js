import React from 'react'
import './Gallery.css'
import Nav from '../components/navbar/Nav'
import {Link} from "react-router-dom";
import placeholder from '../images/shop/placeholder.png'
import {useState} from 'react'; 
import placeholder2 from '../images/shop/placeholder2.png'
import placeholder3 from '../images/shop/placeholder3.png'
import Footer from '../components/Footer'
import social1 from '../images/socialpics/2022_FFN1.jpg'
import { FFN1, GTG1, GTG2, ICE1, ICE2, ICE3, ICE4, ICE5, 
  SAKURA1, SAKURA2, SAKURA3, BANQ1, BANQ2, BANQ3, 
  VALAN1, VALAN2, VALAN3, VALAN4, BLCS1, BLCS2 } from '../images';

function Header() {
  return (
      <div>
          <h3 className="gallery-header">Photo Gallery</h3>
          {/** <p className="gallery-info">
          <img className="champ-icon" src={championMedal}/> Verified Champions receive a $5 off discount on all merchandise options! 
          </p>
        */}

        {/**    
          <Link to="/championship">
            <div className="shop-champ-button">
              <ThinLegendsButton title="BECOME A CHAMPION"></ThinLegendsButton>
            </div>
          </Link>
        */}
          
      </div>
  )
}

function PhotoItem(props) {
  return (
    <div className="photo">
      <img src={props.image} className="image" />
      {/** 
      <div className="shop-text">
          <p className="product">{props.product}</p>
          <div className="shop-prices">
            <p className="regular-price">{props.regular}</p>
            <p className="champ-price"> <img className="champ-price-icon" src={championMedal}/>{props.champ}</p>
          </div>
      </div>
      <p className="sizes"> S M L XL </p>
      */}
    </div>
  )
}


function SocialPhotos(props) {
  return (
    <div className="gallery-container">
      <div className="photo-row">
        <PhotoItem image={FFN1} product={"Ruined King x Berkeley Legends Crewneck"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
        <PhotoItem image={GTG1} product={"Ruined King x Berkeley Legends Crewneck"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
        <PhotoItem image={GTG2} product={"Ruined King x Berkeley Legends Crewneck"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
        <PhotoItem image={ICE1} product={"Ruined King x Berkeley Legends Crewneck"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
      </div>
      <div className="photo-row">
        <PhotoItem image={ICE2} product={"Ruined King x Berkeley Legends Crewneck"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
        <PhotoItem image={ICE3} product={"Ruined King x Berkeley Legends Crewneck"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
        <PhotoItem image={ICE4} product={"Ruined King x Berkeley Legends Crewneck"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
        <PhotoItem image={SAKURA1} product={"Ruined King x Berkeley Legends Crewneck"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
      </div>
      <div className="photo-row">
        <PhotoItem image={SAKURA2} product={"Ruined King x Berkeley Legends Crewneck"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
        <PhotoItem image={SAKURA3} product={"Ruined King x Berkeley Legends Crewneck"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
        <PhotoItem image={BANQ1} product={"Ruined King x Berkeley Legends Crewneck"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
        <PhotoItem image={BANQ2} product={"Ruined King x Berkeley Legends Crewneck"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
      </div>
    </div>
    
  )
}

function LANPhotos(props) {
  return (
    <div className="gallery-container">
      <div className="photo-row">
        <PhotoItem image={FFN1} product={"Ruined King x Berkeley Legends Accessory"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
        <PhotoItem image={placeholder2} product={"Ruined King x Berkeley Legends Accessory"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
        <PhotoItem image={placeholder2} product={"Ruined King x Berkeley Legends Accessory"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
        <PhotoItem image={placeholder2} product={"Ruined King x Berkeley Legends Accessory"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
      </div>
      <div className="photo-row">
        <PhotoItem image={placeholder2} product={"Ruined King x Berkeley Legends Accessory"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
        <PhotoItem image={placeholder2} product={"Ruined King x Berkeley Legends Accessory"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
        <PhotoItem image={placeholder2} product={"Ruined King x Berkeley Legends Accessory"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
        <PhotoItem image={placeholder2} product={"Ruined King x Berkeley Legends Accessory"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
      </div>
      <div className="photo-row">
        <PhotoItem image={VALAN1} product={"Ruined King x Berkeley Legends Accessory"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
        <PhotoItem image={VALAN2} product={"Ruined King x Berkeley Legends Accessory"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
        <PhotoItem image={VALAN3} product={"Ruined King x Berkeley Legends Accessory"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
        <PhotoItem image={VALAN4} product={"Ruined King x Berkeley Legends Accessory"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
      </div>
    </div>
  )
}

function TournamentPhotos(props) {
  return (
    <div className="gallery-container">
      <div className="photo-row">
        <PhotoItem image={placeholder3} product={"Ruined King x Berkeley Legends Print"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
        <PhotoItem image={placeholder3} product={"Ruined King x Berkeley Legends Print"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
        <PhotoItem image={placeholder3} product={"Ruined King x Berkeley Legends Print"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
        <PhotoItem image={placeholder3} product={"Ruined King x Berkeley Legends Print"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
      </div>
      <div className="photo-row">
        <PhotoItem image={placeholder3} product={"Ruined King x Berkeley Legends Print"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
        <PhotoItem image={placeholder3} product={"Ruined King x Berkeley Legends Print"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
        <PhotoItem image={placeholder3} product={"Ruined King x Berkeley Legends Print"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
        <PhotoItem image={placeholder3} product={"Ruined King x Berkeley Legends Print"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
      </div>
      <div className="photo-row">
        <PhotoItem image={placeholder3} product={"Ruined King x Berkeley Legends Print"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
        <PhotoItem image={placeholder3} product={"Ruined King x Berkeley Legends Print"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
        <PhotoItem image={BLCS1} product={"Ruined King x Berkeley Legends Print"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
        <PhotoItem image={BLCS2} product={"Ruined King x Berkeley Legends Print"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
      </div>
    </div>
  )
}

function Gallery() {
  let [category, setCategory] = useState("Social"); 

  function setSocial() {
    setCategory("Social"); 
  }
  
  function setLAN() {
    setCategory("LAN"); 
  }
  
  function setTournament() {
    setCategory("Tournament"); 
  }

  return (
    <div className="body">
      <Nav/>
      <Header></Header>
      <div className="category">
      {/* will try to make the buttons underline with the states */}
        <div className="category-buttons-div">
          <button className="category-button" onClick={() => setSocial()}>Champion Socials</button>
          <button className="category-button" onClick={() => setTournament()}>Tournaments</button>
          <button className="category-button" onClick={() => setLAN()}>LAN Parties</button>
        </div>
        {category === "Social" && <SocialPhotos/>}
        {category === "LAN" && <LANPhotos/>}
        {category === "Tournament" && <TournamentPhotos/>}
      </div>
      {/** 
      <div className="order-form">
        <ThinLegendsButton title="GO TO ORDER FORM"></ThinLegendsButton>
      </div>
      */}
      <Footer />
    </div>
  )
}

export default Gallery