import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        {/* home image with some mask image */}
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title=" All-new Echo Dot (4th Gen) | Next generation smart speaker with improved bass and Alexa (Black)   "
            price={12000}
            rating={5}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5GUWwE-H7BbelriwGE4r-MkUreBST-YBDpQ&usqp=CAU"
          />
          <Product
            id="49538094"
            title="Sony Bluetoot 18 Hours Battery Life, Quick Charge, BT Ver 5.0 (Blue)"
            price={4399}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsF0YbnauyXF9APqvHwz_QH2BMmLtdeyQNNA&usqp=CAU"
          />

          <Product
            id="23445930"
            title="PUMA   Men's Speed 600 2 One8 Running Shoe"
            price={3999}
            rating={5}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOniYrL45fXvnYd5Ao1OCm01nd7qcBja-7gg&usqp=CAU"
          />
        </div>

        <div className="home__row">
          <Product
            id="3254354345"
            title="Realme ShopMagics Fast Charger for Realme C15 / C 15 Charger Original Adapter Like Wall Charger | Mobile Fast Charger | Android USB Charger with 1 Meter Micro USB Charging Data Cable (2.4 Amp, WE6, White)
            "
            price={598}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf2O_haf-kh9bJyEgV6ut9gCjNUMo-zhAc2Q&usqp=CAU"
          />
          <Product
            id="4903850"
            title="Puma Shoes  Men Reeping XT 2 IDP Black-High Risk Re"
            price={2699}
            rating={3}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqYDr8ju_KmCujCVgcw70LzMz89AFITpbwWg&usqp=CAU"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321342"
            title=" IFB 6 kg 5 Star Fully-Automatic Front Loading Washing Machine (Diva Aqua BX, White|Black matte, In-Built Heater)  "
            price={22999}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/41RHbTfjw-L._AC_SX184_.jpg"
          />
          <Product
            id="49538095"
            title="Mellifluous Reversible Super Soft Velvet Round Cat Dog Pet Bed Diameter 61 cms Height 15 cms S (Small, Brown Cream)"
            price={2399}
            rating={4}







            
            image="https://m.media-amazon.com/images/I/41sDV3dti-L._AC_SY200_.jpg"
          />

          <Product
            id="23445932"
            title="Levi's Men's Straight Fit Jeans
            "
            price={4999}
            rating={5}
            image="https://m.media-amazon.com/images/I/41QeXZVbPxL.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
