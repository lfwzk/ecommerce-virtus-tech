import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const Gamer = () => {
  return (
    <>
    <Header/>
    <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="../assets/images/gamers.png" alt="gamer"/></figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
    <Footer/>
    </>

  )
}
