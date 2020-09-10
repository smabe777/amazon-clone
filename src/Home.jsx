import React, {useState} from "react";
import Product from "./Product";
import "./Home.css";

export default function Home() {
  let [id, setId] = useState(1);
  const genId = ()=>{
    return id++;
  }
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />

        <div className="home__row">
          <Product
            id={genId()}
            title="The Lean Startup"
            price={29.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id={genId()}
            title="Samsung Galaxy Tab"
            price={179.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/41UPtXbP4LL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
          id={genId()}
            title="Twelve South BookArc for Macbook"
            price={50.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61w4HvjDL3L._AC_SL1500_.jpg"
          />
          <Product
          id={genId()}
            title="Twelve South BookArc for MacBook | Space-Saving Vertical Desktop Stand for Apple notebooks (Space Grey) Newest Version"
            price={159.99}
            rating={2}
            image="https://images-na.ssl-images-amazon.com/images/I/819WMWm6NoL._AC_SL1500_.jpg"
          />
          <Product
          id={genId()}
            title="AmazonBasics Nylon Braided Lightning to USB A Cable, MFi Certified Apple iPhone Charger, Dark Gray, 6-Foot"
            price={14.49}
            image="https://images-na.ssl-images-amazon.com/images/I/71p11135VSL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
          id={genId()}
            title="Wemo Light Switch, WiFi enabled, Works with Alexa and the Google Assistant (F7C030fc)"
            price={39.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/310bMKQjT5L._AC_SY200_.jpg"
          />
        </div>
      </div>
    </div>
  );
}
