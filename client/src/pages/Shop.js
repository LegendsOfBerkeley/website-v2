import React from 'react'
import './Shop.css'
import Nav from '../components/navbar/Nav'

function Header() {
  return (
      <div>
          <h3 className="shop-header">SHOP</h3>
          <p className="shop-info">
            Verified Champions receive a $5 off discount on all merchandise options!
          </p>
      </div>
  )
}

function Shop() {
  return (
    <div className="body">
      <Header></Header>
    </div>
  )
}

export default Shop