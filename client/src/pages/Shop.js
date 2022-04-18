import React from 'react'
import './Shop.css'
import Nav from '../components/navbar/Nav'
import ThinLegendsButton from '../components/ThinLegendsButton'
import {Link} from "react-router-dom";
import placeholder from '../images/shop/placeholder.png'
import championMedal from '../images/icons/champion-medal.png'


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

function ShopRow(props) {
  return (
    <div className="shop-row">
      <ShopItem image={placeholder} product={"Ruined King x Berkeley Legends Crewneck"} regular={"$35.00"} champ={"$30.00"}/>
      <ShopItem image={placeholder} product={"Ruined King x Berkeley Legends Crewneck"} regular={"$35.00"} champ={"$30.00"}/>
      <ShopItem image={placeholder} product={"Ruined King x Berkeley Legends Crewneck"} regular={"$35.00"} champ={"$30.00"}/>
    </div>
  )
}

function Shop() {
  return (
    <div className="body">
      <Header></Header>
      <ShopRow></ShopRow>
      <div className="order-form">
        <ThinLegendsButton title="GO TO ORDER FORM"></ThinLegendsButton>
      </div>
    </div>
  )
}

export default Shop