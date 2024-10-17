import React from "react";
import "./Home.css";
import Product from "./Product";
import BakingMixer from "./images/bakingmixer.jpg";
import alexa from "./images/Alexa.jpg";
import ctv from "./images/curvedtv.jpg";
//import "./images";
//import images from "./images";
// import myImage from './images/myImage.png';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood KMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5Litre Glass Bowl"
            price={239.0}
            rating={4}
            image={BakingMixer}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image={alexa}
          />
          <Product
            id="3254354345"
            title="New Apple ipad Pro (12.9-inch, WiFi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="49538094"
            title="Kenwood Kmix Stand Mixture For Baking ,Stylish Kitchen Mixer With K-beater ,Dough Hook and Whisk, 5Litre"
            price={239.0}
            rating={5}
            image={ctv}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
