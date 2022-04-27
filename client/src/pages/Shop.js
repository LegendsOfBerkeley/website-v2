import React from 'react'
import './Shop.css'
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
          <h3 className="shop-header">SHOP</h3>
          <p className="shop-info">
          <img className="champ-icon" src={championMedal}/> Verified Champions receive a $5 off discount on all merchandise options!
          </p>
          <Link to="/championship">
            <div className="shop-champ-button">
              <ThinLegendsButton title="BECOME A CHAMPION"></ThinLegendsButton>
            </div>
          </Link>
      </div>
  )
}

function ShopItem(props) {
  return (
    <div className="shop-item">
      <img src={props.image} className="shop-image" />
      <div className="shop-text">
        <p className="product">{props.product}</p>
        <div className="shop-prices">
          <p className="regular-price">{props.regular}</p>
          <p className="champ-price"> <img className="champ-price-icon" src={championMedal}/>
{props.champ}</p>
        </div>
        
      </div>
    </div>
  )
}

function ShopApparel(props) {
  return (
    <div className="shop-row">
      <ShopItem image={placeholder} product={"Ruined King x Berkeley Legends Crewneck"} regular={"$35.00"} champ={"$30.00"}></ShopItem>
      <ShopItem image={placeholder} product={"Ruined King x Berkeley Legends Crewneck"} regular={"$35.00"} champ={"$30.00"}></ShopItem>
      <ShopItem image={placeholder} product={"Ruined King x Berkeley Legends Crewneck"} regular={"$35.00"} champ={"$30.00"}></ShopItem>

    </div>
  )
}

function ShopAccessories(props) {
  return (
    <div className="shop-row">
      <ShopItem image={placeholder2} product={"Ruined King x Berkeley Legends Crewneck"} regular={"$35.00"} champ={"$30.00"}></ShopItem>
      <ShopItem image={placeholder2} product={"Ruined King x Berkeley Legends Crewneck"} regular={"$35.00"} champ={"$30.00"}></ShopItem>
      <ShopItem image={placeholder2} product={"Ruined King x Berkeley Legends Crewneck"} regular={"$35.00"} champ={"$30.00"}></ShopItem>
    </div>
  )
}

function ShopPrints(props) {
  return (
    <div className="shop-row">
      <ShopItem image={placeholder3} product={"Ruined King x Berkeley Legends Crewneck"} regular={"$35.00"} champ={"$30.00"}></ShopItem>
      <ShopItem image={placeholder3} product={"Ruined King x Berkeley Legends Crewneck"} regular={"$35.00"} champ={"$30.00"}></ShopItem>
      <ShopItem image={placeholder3} product={"Ruined King x Berkeley Legends Crewneck"} regular={"$35.00"} champ={"$30.00"}></ShopItem>
    </div>
  )
}

function Shop() {
  let [category, setCategory] = useState("apparel"); 

  function setApparel() {
    setCategory("apparel"); 
  }
  
  function setAccessories() {
    setCategory("accessories"); 
  }
  
  function setPrints() {
    setCategory("prints"); 
  }

  return (
    <div className="body">
      <Nav/>
      <Header></Header>
      <div className="category">
      {/* will try to make the buttons underline with the states */}
        <div className="category-buttons-div">
          <button className="category-button" onClick={() => setApparel()}>Apparel</button>
          <button className="category-button" onClick={() => setAccessories()}>Accessories</button>
          <button className="category-button" onClick={() => setPrints()}>Prints</button>
        </div>
        {category === "apparel" && <ShopApparel/>}
        {category === "accessories" && <ShopAccessories/>}
        {category === "prints" && <ShopPrints/>}
      </div>
      <div className="order-form">
        <ThinLegendsButton title="GO TO ORDER FORM"></ThinLegendsButton>
      </div>
      <Footer />
    </div>
  )
}

export default Shop