import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3 ">
        <h1 className="text-center font-bold">About Us</h1>
        <hr />
        <div>
        <p className="lead font-extrabold ">
        Welcome to SwiftMart—your go-to destination for a seamless, convenient, and enjoyable online shopping experience! Founded with a passion for quality and a commitment to speed, SwiftMart is dedicated to bringing you a wide variety of products at unbeatable prices. We understand that your time is valuable, so we’ve built SwiftMart to make shopping faster, easier, and more reliable than ever.<br/><br/>

       At SwiftMart, we believe in the power of choice, quality, and trust. We’ve partnered with top brands and suppliers to offer you an impressive selection of products, from everyday essentials to unique finds. Whether you're shopping for the latest tech gadgets, fashion trends, home essentials, or health and beauty products, SwiftMart has you covered.<br/></p>
        </div>
        
      <div className="w-max h-max mb-4 ">
      <h2 className="text-start">Our Mission</h2>
      <span className="font-extrabold text-xxl">Our mission is to revolutionize the online shopping experience by combining swift service with a diverse product range, ensuring our customers enjoy a hassle-free shopping journey every time they visit. We strive to bring you a curated selection that meets your lifestyle needs while delivering exceptional customer support at every step.</span>
      </div>  

        <div>
        <h3 className="text-start">Why Choose SwiftMart?</h3>
          <ul>
          <li>Speed & Convenience: Shop from the comfort of your home, and enjoy fast delivery to your doorstep.</li>
          <li>Quality Products: We prioritize high-quality, authentic products from trusted brands.</li>
          <li>Customer-Centric Approach: Your satisfaction is our top priority, and we're here to make sure your shopping experience is nothing short of excellent.</li>
          </ul>
        </div> 


        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage