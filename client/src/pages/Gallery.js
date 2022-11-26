import React from 'react'
import './Gallery.css'
import Nav from '../components/navbar/Nav'
import ThinLegendsButton from '../components/ThinLegendsButton'
import {Link} from "react-router-dom";
import placeholder from '../images/shop/placeholder.png'
import championMedal from '../images/icons/champion-medal.png'
import {useState} from 'react'; 
import placeholder2 from '../images/shop/placeholder2.png'
import placeholder3 from '../images/shop/placeholder3.png'
import Footer from '../components/Footer'


function Header() {
  return (
      <div>
          <h3 className="gallery-header">Our Community</h3>
          <p className="gallery-info">
         {/**<img className="champ-icon" src={championMedal}/> Verified Champions receive a $5 off discount on all merchandise options! */}
          </p>
        

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
    <div className="shop-row">
      <PhotoItem image={placeholder} product={"Ruined King x Berkeley Legends Crewneck"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
      <PhotoItem image={placeholder} product={"Ruined King x Berkeley Legends Crewneck"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
      <PhotoItem image={placeholder} product={"Ruined King x Berkeley Legends Crewneck"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>

    </div>
  )
}

function LANPhotos(props) {
  return (
    <div className="shop-row">
      <PhotoItem image={placeholder2} product={"Ruined King x Berkeley Legends Accessory"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
      <PhotoItem image={placeholder2} product={"Ruined King x Berkeley Legends Accessory"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
      <PhotoItem image={placeholder2} product={"Ruined King x Berkeley Legends Accessory"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
    </div>
  )
}

function TournamentPhotos(props) {
  return (
    <div className="shop-row">
      <PhotoItem image={placeholder3} product={"Ruined King x Berkeley Legends Print"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
      <PhotoItem image={placeholder3} product={"Ruined King x Berkeley Legends Print"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
      <PhotoItem image={placeholder3} product={"Ruined King x Berkeley Legends Print"} regular={"$35.00"} champ={"$30.00"}></PhotoItem>
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
          <button className="category-button" onClick={() => setSocial()}>Social</button>
          <button className="category-button" onClick={() => setLAN()}>LAN</button>
          <button className="category-button" onClick={() => setTournament()}>Tournament</button>
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