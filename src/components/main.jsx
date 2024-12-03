import React from "react";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "../main.css"

const Home = () => {
    const images = [
        "./assets/main-1.jpg",
        "./assets/main-2.jpg",
        "./assets/main-3.jpg",
    ];
  return (
    <>
      <div>
      <Fade 
      duration={1500}
      arrows={false}
      >
          <div className="each-slide">
          <div>
              <img  className="slider-img" alt="new arrivals"  src={images[0]} />      
          </div>  
          <div className="slider-title">
              <h5>New Season Arrivals</h5>
              <p>
              Step Into Style , Discover the Latest Trends of the Season.
              </p>
            </div>       
          </div>
          <div className="each-slide">
          <div>
              <img className="slider-img" alt="new arrivals" src={images[1]} />
          </div>
          <div className="slider-title">
              <h5 >New Season Arrivals</h5>
              <p >
              Step Into Style , Discover the Latest Trends of the Season.
              </p>
            </div>
          </div>
          <div  className="each-slide">
          <div>
              <img className="slider-img" alt="new arrivals"  src={images[2]} />
          </div>  
          <div className="slider-title">
              <h5 >New Season Arrivals</h5>
              <p >
              Step Into Style , Discover the Latest Trends of the Season.
              </p>
            </div>        
          </div>
      </Fade>
  </div>
    </>
  );
};

export default Home;
