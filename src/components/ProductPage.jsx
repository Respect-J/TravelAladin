import React, { useState } from "react";
import Img from "../assets/blog1.jpg";
import Navbar from "./Navbar";
import Footer from './Footer'
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";

const ProductPage = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <>
      <Navbar />
      <main className="container">
        <div className="left-column">
          <img data-image="red" className="active" src={Img} alt="" /><br/>
          <p className="inclusions-title">Что входит в стоимость:</p>
          <ul className="inclusions-list">
            <li>− Трансфер в аэропорт и обратно.</li>
            <li>− Проживание в гостинице.</li>
            <li>− Обеспечение транспорта в рамках тура. </li>
            <li>− Питание 2 раза в день (Завтрак, Обед).</li>
            <li>− Проведение по маршруту и посещение 3-х городов.</li>
            <li>− Знакомство с бытом местных жителей.</li>
            <li>− Дегустация более 15 вкуснейших национальных блюд.  </li>
            <li>− Ежедневная активная программа, интерактивы, вечерние развлечения.</li>
            <li>−  Шоу программа</li>
            <li>− Билеты на новый скоростной поезд Ташкент - Самарканд - Бухара</li>
            <li>− Приветственные сувениры и сюрпризы.</li>
            <li>− Обеспечение водой в течение всего тура.</li>
            <li>− Входные билеты в музеи.</li>
          </ul>
        </div>

        <div className="right-column">
          <div className="product-description">
            <span>Тур</span>
            <h1>Beats EP</h1>
            <p>
              The preferred choice of a vast range of acclaimed DJs. Punchy,
              bass-focused sound and high isolation. Sturdy headband and on-ear
              cushions suitable for live performance
            </p>
          </div>

          <div className="product-configuration">
          <Accordion
              expanded={expanded}
              onChange={handleExpansion}
              slots={{ transition: Fade }}
              slotProps={{ transition: { timeout: 400 } }}
              sx={{
                "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
                "& .MuiAccordionDetails-root": {
                  display: expanded ? "block" : "none",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography>1 день</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  ● Встреча в Аэропорту Ташкент<br/> 
                  ● Чек ин в гостинице <br/> 
                  ● 19:00 Ужин <br/> 
                  ● Ознакомительная прогулка по вечернему Ташкенту<br/> 
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>2 день</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                ● 08:30 завтрак в отеле <br/>
● Ансамбль Хаст Имам<br/>
● Музей древнего Корана<br/>
● 13:00 обед в Центре Среднеазиатского плова (Besh qozon)<br/>
● Обзорная экскурсия по г. Ташкент<br/>
● Свободное время<br/>

                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>3 день</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                ● 08:30 завтрак в отеле<br/>
● 10:00-18:00 обзорная экскурсия по горам Ташкента (Чимган, Amirsoy, Канатная дорога) <br/>
● 14:00 Обед в горах <br/>
● 18:00 возвращение в Ташкент  <br/>
● 18:45 поезд Ташкент-Самарканд<br/>
● Свободное время <br/>

                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>4 день</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                ● 08:00 завтрак в отеле<br/>
● 09:00 начало Экскурсионной программы по Самарканду<br/>
● Мавзолей Гур-Эмир <br/>
● Регистан<br/>
● 13:20 Обед <br/>
● Биби-Ханум<br/>
● Сиабский базар <br/>
● Свободное время <br/>

                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>5 день</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                ● 08:00 завтрак в отеле<br/>
● 09:00 Шахи-Зинда<br/>
● Обсерватория Улугбека <br/>
● 13:30 Обед<br/>
● Ремесленническая деревня Конигил <br/>
● Мастер класс по бумаге<br/>
● 21:00-22:30 Самарканд - Бухара (на скоростном поезде) <br/>
● Размещение в отеле (Бухара) <br/>

                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>6 день</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                ● 08:30 завтрак <br/>
● 09:30 экскурсия по Бухаре <br/>
● Ансамбль Ляби-Хауз<br/>
● Цитадель Арк<br/>
● Боло-Хауз<br/>
● Мавзолей Саманидов<br/>
● 13:30 обед<br/>
● Крытые базары (Токи-Тельпак-Фурушон, Токи-Саррафон, Токи-Заргарон) <br/>
● Тим Абдуллахана II <br/>
● Медресе Улугбека и Абдулазизхана<br/>
● Пой-Калон <br/>
● Свободное время <br/>

                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>7 день</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                ● 08:00  Завтрак в отеле <br/>
● 09:20 Выезд в загородный Дворец Бухарского Эмира <br/> 
● 11:20  Выезд Гиждуван <br/>
● Посещение галереи и мастерской гончарного мастера (мастер класс + home stay обед) <br/>
● 13:00 Обед <br/>
● Возвращение в Бухару <br/>
● Свободное время<br/>

                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>8 день</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                ● Завтрак в ланч боксах <br/>
● Трансфер в аэропорт г. Бухара <br/>
● 05:10 или 07:30 рейс Бухара-Москва<br/>

                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="product-price">
            <span>900$</span>
            <a href="http://localhost:3000/#contact" className="cart-btn">
              Оставить заявку
            </a>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default ProductPage;
