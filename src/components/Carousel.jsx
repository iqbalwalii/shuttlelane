import React, { useEffect } from "react";
import { ArrowBackIos, ChevronRight } from "@material-ui/icons";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

import carousel from "../styles/Carousel.module.css";
const Carousel = () => {
  useEffect(() => {
    const prev = document.querySelector(".Carousel_prev__3TEwT");
    const next = document.querySelector(".Carousel_next__DCjIA");
    const slides = document.querySelectorAll(".Carousel_slide__m5_lk");

    let currentIndex = 0;
    if (prev && next && slides) {
      next.addEventListener("click", () => {
        if (currentIndex == slides.length - 1) {
          currentIndex = 0;
          document
            .querySelector(".Carousel_actuve__qBR1G")
            .classList.remove("Carousel_actuve__qBR1G");
          slides[currentIndex].classList.add("Carousel_actuve__qBR1G");
          return;
        }

        if (currentIndex < slides.length) {
          document
            .querySelector(".Carousel_actuve__qBR1G")
            .classList.remove("Carousel_actuve__qBR1G");
          currentIndex++;
          slides[currentIndex].classList.add("Carousel_actuve__qBR1G");
        }
      });

      prev.addEventListener("click", () => {
        if (currentIndex == 0) {
          currentIndex = slides.length - 1;
          document
            .querySelector(".Carousel_actuve__qBR1G")
            .classList.remove("Carousel_actuve__qBR1G");
          slides[currentIndex].classList.add("Carousel_actuve__qBR1G");
          return;
        }

        if (currentIndex < slides.length) {
          document
            .querySelector(".Carousel_actuve__qBR1G")
            .classList.remove("Carousel_actuve__qBR1G");
          currentIndex--;
          slides[currentIndex].classList.add("Carousel_actuve__qBR1G");
        }
      });
    }
  }, []);
  return (
    <>
      <div className={carousel.slider}>
        <button className={carousel.prev}>
          <ArrowBackIos size="large" />
        </button>
        <button className={carousel.next}>
          <ChevronRight size="large" />
        </button>
        <div className={carousel.slides_container}>
          <div className={carousel.slide.Carousel_actuve__qBR1G}>
            <div className={carousel.col_left}>
              <h2>Vegeta</h2>
              <p>
                Vegeta is the prince of an extraterrestrial warrior race known
                as the Saiyans. He is extremely arrogant, proud and hardworking;
                constantly referring to his heritage and royal status throughout
                the series.
              </p>
            </div>
            <div className={carousel.col_right}>
              <img src={`${prefix}/assets/images/car-1.png`} alt="" />
            </div>
          </div>
          <div className={carousel.slide}>
            <div className={carousel.col_left}>
              <h2>GOKU</h2>
              <p>
                Goku is introduced as an eccentric, monkey_tailed boy who
                practices martial arts and possesses superhuman strength. He
                meets Bulma and joins her on a journey to find the magical seven
                Dragon Balls that can grant the user one wish.
              </p>
            </div>
            <div className={carousel.col_right}>
              <img src={`${prefix}/assets/images/car-2.png`} alt="" />
            </div>
          </div>
          <div className={carousel.slide}>
            <div className={carousel.col_left}>
              <h2>MASTER ROSHI</h2>
              <p>
                Master Roshi's first appearance is in chapter #3 of the Dragon
                Ball manga. Roshi lives with his longtime companion, an
                anthropomorphic turtle referred to as Umigame (ウミガメ, "Sea
                Turtle"), on an island with a house built on it known as "Kame
                House".
              </p>
            </div>
            <div className={carousel.col_right}>
              <img src={`${prefix}/assets/images/masterRoshi.png`} alt="" />
            </div>
          </div>

          <div className={carousel.slide}>
            <div className={carousel.col_left}>
              <h2>CELL</h2>
              <p>
                In filler episodes of the anime, Cell makes numerous cameo
                appearances, usually as comic relief. Cell tries absorbing two
                siblings, but is prevented from doing so by Krillin, giving
                chase to the three and nearly killing Krillin before he notices
                Piccolo and Tien Shinhan on the way and escapes.
              </p>
            </div>
            <div className={carousel.col_right}>
              <img src={`${prefix}/assets/images/car-3.png`} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
