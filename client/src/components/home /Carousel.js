import React from "react";
import { Link } from "react-router-dom";

function Carousel() {
  return (
    <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active c-item" data-bs-interval="2000">
          <img
            src="https://images.unsplash.com/photo-1554990772-0bea55d510d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGtlbnlhJTIwd2lsZGxpZmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            class="d-block w-100 c-img"
            alt="slide 1"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Visit The Maasai Mara</h5>
            <Link to="destinations">
              <button type="button" class="btn btn-outline-info">
                Show more
              </button>
            </Link>
          </div>
        </div>
        <div class="carousel-item c-item" data-bs-interval="2000">
          <img
            src="https://plus.unsplash.com/premium_photo-1661963841502-6d38dee0963d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2VueWElMjB3aWxkbGlmZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            class="d-block w-100 c-img"
            alt="slide 2"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5 className="text-secondary">See The Drylands of Kenya</h5>
            <Link to="destinations">
              <button type="button" class="btn btn-outline-info">
                Show more
              </button>
            </Link>
          </div>
        </div>
        <div class="carousel-item c-item" data-bs-interval="2000">
          <img
            src="https://images.unsplash.com/photo-1559494487-a5bbc635ed2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2VueWElMjB3aWxkbGlmZSUyMGNhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            class="d-block w-100 c-img"
            alt="slide 3"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5 className="text-secondary">Explore The Coolest City of Africa</h5>
            <Link to="destinations">
              <button type="button" class="btn btn-outline-info">
                Show more
              </button>
            </Link>
          </div>
        </div>
        <div class="carousel-item c-item" data-bs-interval="2000">
          <img
            src="https://plus.unsplash.com/premium_photo-1661846340419-89bf27138124?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VueWElMjBmbGFtaW5nb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            class="d-block w-100 c-img"
            alt="slide 3"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5 className="text-secondary">Experience The Pink Carpet</h5>
            <Link to="destinations">
              <button type="button" class="btn btn-outline-info">
                Show more
              </button>
            </Link>
          </div>
        </div>
        <div class="carousel-item c-item" data-bs-interval="2000">
          <img
            src="https://images.unsplash.com/photo-1569474028404-5eb46fd9b4fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGtlbnlhJTIwYmVhY2hlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            class="d-block w-100 c-img"
            alt="slide 3"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5 >Chill and Dine On The Beaches</h5>
            <Link to="destinations">
              <button type="button" class="btn btn-outline-info">
                Show more
              </button>
            </Link>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
