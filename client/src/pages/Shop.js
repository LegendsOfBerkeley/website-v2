import React from 'react'
import './Shop.css'
import Nav from '../components/navbar/Nav'
import ThinLegendsButton from '../components/ThinLegendsButton'
import {Link} from "react-router-dom";
import placeholder from '../images/shop/placeholder.png'
import championMedal from '../images/icons/champion-medal.png'
import {useState} from 'react'; 
import charmjuice from '../images/shop/charmjuice.jpg'
import meepjuice from '../images/shop/meepjuice.jpg'
import souljuice from '../images/shop/souljuice.jpg'
import meeppin from '../images/shop/meeppin.jpg'
import poropin from '../images/shop/poropin.jpg'
import ruinedking from '../images/shop/ruinedking.png'
import fa22rgb from '../images/shop/fall22-rgb.png'
import placeholder3 from '../images/shop/placeholder3.png'
import Footer from '../components/Footer'


function Header() {
  return (
      <div>
          <h3 className="shop-header">Merchandise Gallery</h3>
          <p className="shop-info">
          {/* <img className="champ-icon" src={championMedal}/>  */}
          View our selection of Berkeley Legends merchandise, drawn and created by artists in our community!  
          </p>
          <br></br><br></br>
          {/* <Link to="/championship">
            <div className="shop-champ-button">
              <ThinLegendsButton title="BECOME A CHAMPION"></ThinLegendsButton>
            </div>
          </Link> */}
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
            {/* <p className="champ-price"> <img className="champ-price-icon" src={championMedal}/>{props.champ}</p> */}
          </div>
      </div>
      {/* <p className="sizes"> S M L XL </p> */}

    </div>
  )
}

function ShopApparel(props) {
  return (
    <div className="shop-row">
      <ShopItem image={fa22rgb} product={"Fall 2022 Riot Games at Berkeley Hoodie"} regular={"$50.00"} champ={"$35.00"}></ShopItem>
      <ShopItem image={ruinedking} product={"Viego Ruined King x Berkeley Legends Crewneck"} regular={"$35.00"} champ={"$30.00"}></ShopItem>
      {/* <ShopItem image={placeholder} product={"Ruined King x Berkeley Legends Crewneck"} regular={"$35.00"} champ={"$30.00"}></ShopItem> */}

    </div>
  )
}

function ShopAccessories1(props) {
  return (
    <div className="shop-row">
      <ShopItem image={charmjuice} product={"Charm Juice Sticker"} regular={"$3.00"} champ={"$3.00"}></ShopItem>
      <ShopItem image={meepjuice} product={"Meep Juice Sticker"} regular={"$3.00"} champ={"$3.00"}></ShopItem>
      <ShopItem image={souljuice} product={"Soul Juice Sticker"} regular={"$3.00"} champ={"$3.00"}></ShopItem>
    </div>
  )
}

//temp hardcoded implementation for multiple rows. todo: implement resizable grids.
function ShopAccessories2(props) {
  return (
    <div className="shop-row">
      <ShopItem image={meeppin} product={"Meep Boba Pin"} regular={"$8.00"} champ={"$8.00"}></ShopItem>
      <ShopItem image={poropin} product={"Poro Boba Pin"} regular={"$8.00"} champ={"$8.00"}></ShopItem>
    </div>
  )
}

function ShopPrints(props) {
  return (
    <div className="shop-row">
      <ShopItem image={placeholder3} product={"Ruined King x Berkeley Legends Print"} regular={"$35.00"} champ={"$30.00"}></ShopItem>
      <ShopItem image={placeholder3} product={"Ruined King x Berkeley Legends Print"} regular={"$35.00"} champ={"$30.00"}></ShopItem>
      <ShopItem image={placeholder3} product={"Ruined King x Berkeley Legends Print"} regular={"$35.00"} champ={"$30.00"}></ShopItem>
    </div>
  )
}

function Shop() {
  let [category, setCategory] = useState("apparel"); 
  let appClassName = 'category-button';
  let accClassName = 'category-button';

  function setApparel() {
    setCategory("apparel"); 
  }
  
  function setAccessories() {
    setCategory("accessories"); 
  }
  
  function setPrints() {
    setCategory("prints"); 
  }

  if (category == "apparel") {
    appClassName += ' category-button-active';
  }

  if (category == "accessories") {
    accClassName += ' category-button-active';
  }


  return (
    <div className="body">
      <Nav/>
      <Header></Header>
      <div className="category">
      {/* will try to make the buttons underline with the states */}
        <div className="category-buttons-div">
          <button className={appClassName} onClick={() => setApparel()}>Apparel</button>
          <button className={accClassName} onClick={() => setAccessories()}>Accessories</button>
          {/* <button className="category-button" onClick={() => setPrints()}>Prints</button> */}
        </div>
        {category === "apparel" && <ShopApparel/>}
        {category === "accessories" && <><ShopAccessories1 /><ShopAccessories2 /></>}
        {/* {category === "prints" && <ShopPrints/>} */}
      </div>
      <p className='shop-info'>
        Reach out to us on Discord to order and for the most updated stock.
      </p>
      <a href='https://tinyurl.com/BLDisco' target="_blank" rel="noopener noreferrer">
        <div className="order-form">
          <ThinLegendsButton title="DISCORD"></ThinLegendsButton>
        </div>
      </a>
      
      <Footer />
    </div>
  )
}

export default Shop