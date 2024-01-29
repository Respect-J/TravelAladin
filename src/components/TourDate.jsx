import React from "react";

const TourDate = () => {
  return (
    <>
      <h2 className="titlestop" id="datetour">
        Даты туров
      </h2>
      <div class="container3">
        <div class="classic">
          <div className="titletour">Классический тур по Узбекистану</div>
          <ul className="daytour">
            <li>- 27-30 январь</li>
            <li>- 27-30 январь</li>
            <li>- 27-30 январь</li>
            <li>- 27-30 январь</li>
          </ul>
          <a href="https://forms.amocrm.ru/rvzmlvv" className="cart-btn" id="btn-tour">
              Оставить заявку
            </a>
        </div>
        <div class="wine">
          <div className="titletour">Винный тур по Узбекистану</div>
          <ul className="daytour">
            <li>- 27-30 январь</li>
            <li>- 27-30 январь</li>
            <li>- 27-30 январь</li>
            <li>- 27-30 январь</li>
          </ul>
          <a href="https://forms.amocrm.ru/rvzmlvv" className="cart-btn" id="btn-tour">
            Оставить заявку
          </a>
        </div>
      </div>
    </>
  );
};

export default TourDate;
