import React from "react";
import IMG from "../../assets/main.jpg";
import s from "./Home.module.css";

export const Home = () => {
  return (
    <>
      <div className={s.container}>
        <img src={IMG} className={s.img} />
        <div className={s.textcont}>
          <div className={s.title}>Carpet Travel Aladin</div>
          <div className={s.title2}>
            Carpet Travel Aladin может организовать для вас любое путешествие по
            вашему желанию и запросу. Если вы хотите отметить день рождения или
            провести свадебную поездку, то наша компания готова помочь вам
            создать самые яркие моменты.
          </div>
        </div>
      </div>


      <div class="container2">
  <div class="panel">
    <div class="ring">
      <div class="card card1"></div>
      <div class="border">
        <p class="title">Ташкент</p>
        <div class="slide">
          <h6 class="para">Latest Deals from Heathrow</h6>
          <div class="line">
            <h6 class="para">OUT</h6> <i class="fa fa-plane" aria-hidden="true"></i>
            <h6 class="para">£849</h6>
          </div>
          <div class="line">
            <h6 class="para">RTN</h6> <i class="fa fa-plane" aria-hidden="true"></i>
            <h6 class="para">£659</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="panel">
    <div class="ring">
      <div class="card card2"></div>
      <div class="border">
        <p class="title">Самарканд</p>
        <div class="slide">
          <h6 class="para">Latest Deals from Heathrow</h6>
          <div class="line">
            <h6 class="para">OUT</h6> <i class="fa fa-plane" aria-hidden="true"></i>
            <h6 class="para">£999</h6>
          </div>
          <div class="line">
            <h6 class="para">RTN</h6> <i class="fa fa-plane" aria-hidden="true"></i>
            <h6 class="para">£745</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="panel">
    <div class="ring">
      <div class="card card3"></div>
      <div class="border">
        <p class="title">Бухара</p>
        <div class="slide">
          <h6 class="para">Latest Deals from Heathrow</h6>
          <div class="line">
            <h6 class="para">OUT</h6> <i class="fa fa-plane" aria-hidden="true"></i>
            <h6 class="para">£399</h6>

          </div>
          <div class="line">
            <h6 class="para">RTN</h6> <i class="fa fa-plane" aria-hidden="true"></i>
            <h6 class="para">£257</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="panel">
    <div class="ring">
      <div class="card card3"></div>
      <div class="border">
        <p class="title">Хива</p>
        <div class="slide">
          <h6 class="para">Latest Deals from Heathrow</h6>
          <div class="line">
            <h6 class="para">OUT</h6> <i class="fa fa-plane" aria-hidden="true"></i>
            <h6 class="para">£399</h6>

          </div>
          <div class="line">
            <h6 class="para">RTN</h6> <i class="fa fa-plane" aria-hidden="true"></i>
            <h6 class="para">£257</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


         </>
  );
};
