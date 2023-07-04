import React from "react";
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
      </div>
      <h1 className="text-center">Our Destinations</h1>
      <div>
        <Destination />
      </div>
    </div>
  );
}

export default Home;
