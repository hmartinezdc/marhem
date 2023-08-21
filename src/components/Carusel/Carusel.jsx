import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carurel.css";

const Carusel = () => {
  return (
    <section className="swiper__container">
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        speed={600}
        // autoplay={true}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        loop={true}
        // pagination={true}
        pagination={{
          el: ".swiper__pagination",
          clickable: false,
        }}
        navigation={true}
        // navigation={{
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        //   clickable: true,
        // }}
        className="swiper__wrapper"
      >
        <SwiperSlide className="swiper__slide swiper__slide--one">
          <div>
            <img src="https://i.imgur.com/e9LoCgF.png" alt="e-commerce" />
          </div>
          <div>
            <h2>E-commerce</h2>
            <a
              href="https://ecommerce-app-zdc.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visitar
            </a>
          </div>
          <div className="swiper-cap">
            <p>Ver E-commerce</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper__slide swiper__slide--two">
          <div>
            <img src="https://i.imgur.com/7xSFDQn.png" alt="crud users" />
          </div>
          <div>
            <h2>CRUD</h2>
            <a
              href="https://app-crud-userszdc.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visitar
            </a>
          </div>
          <div className="swiper-cap">
            <p>Ver CRUD</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper__slide swiper__slide--three">
          <div>
            <img src="https://i.imgur.com/8LeNfgd.png" alt="Pokemones" />
          </div>
          <div>
            <h2>Pokemon</h2>
            <a
              href="https://app-pokedex-zdc.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visitar
            </a>
          </div>
          <div className="swiper-cap">
            <p>Ver Pokemones</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper__slide swiper__slide--four">
          <div>
            <img src="https://i.imgur.com/R8gvQyL.png" alt="weather" />
          </div>
          <div>
            <h2>Weather app</h2>
            <a
              href="https://weather-app-zdc.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visitar
            </a>
          </div>
          <div className="swiper-cap">
            <p>Ver Weather app</p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper__pagination"></div>
      {/* <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow"></div>
        <div className="swiper-button-next slider-arrow"></div>
      </div> */}
    </section>
  );
};

export default Carusel;
