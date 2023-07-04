import React from "react";

import { Link } from "react-router-dom";
import Carousel from "./home /Carousel";
import Destination from "./Destinations";



function Home() {
  return (
    <div className="landing">
      <div className="landing row">
      
          <Carousel />
          {/* <img
            className="image"
            src="https://media.istockphoto.com/id/1320186474/vector/music-notes-with-curves-and-swirls.jpg?s=612x612&w=0&k=20&c=neILgetK4Eq8J3Z4e-80nR82pjVSqnUUVENH90Fmt40="
            alt="image loading..."
          /> */}
        

        <div className="wording">
          <div>
            
            <p>
            Welcome to our Tour and Travel website! Discover captivating destinations, exhilarating adventures, and unforgettable experiences. From pristine beaches to breathtaking mountains, our curated packages cater to all travel preferences. Browse our website now and let us transform your travel dreams into a remarkable reality!{" "}
            </p>
            <Link to="destinations">
            <button type="button" class="btn btn-outline-dark">
              Show more
            </button>
            </Link>
          </div>
        </div>
      </div>
     <Destination/>
    </div>
  );
}

export default Home;