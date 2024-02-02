import React, { useContext, useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import axios from "axios";
import { useLanguage } from "./LanguageContext";

const Accordion2 = () => {
  const { language } = useLanguage();
  const [data, setData] = useState([]);
  const [accordionData, setAccordionData] = useState([]);
  const [comesOutData, setComesOutData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tourData, setTourData] = useState({});
  const [price, setPrice] = useState("");
  const { translations } = useLanguage();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://back.theeastcaravan.com/tours/api/tour/1/"
        );
        const data = response.data;

        setTourData(data.tour);
        setAccordionData(data.days);
        setComesOutData(data.comes_out);
        const daysData = response.data.days;
        setData(daysData);
        const parsedPrice = parseFloat(
          data.tour.price_for_one.replace("$", "")
        );
        setPrice(isNaN(parsedPrice) ? null : parsedPrice);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const processText = (text) => {
    const newText = text.replace(/●/g, "<br>●");
    return newText;
  };
  // Пустой массив зависимостей означает, что эффект будет запущен только один раз при монтировании компонента

  return (
    <div>
      {data.map((day, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
          >
            <Typography>{`${index + 1} ${
              language === "ru" ? "День" : "Day"
            }`}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    language === "ru"
                      ? processText(day.description_ru)
                      : processText(day.description_en),
                }}
              />
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      {/* <span className='acorprice'>
        {price !== null
          ? `${
              language === "ru" ? `Цена за одного` : `Price for one person`
            }: ${tourData.price_for_one}$`
          : translations && translations.loading}
      </span><br/>
      <span className='acorprice'>
        {price !== null
          ? `${
              language === "ru" ? `Цена за двоих` : `Price for two persons`
            }: ${tourData.price_for_two}$`
          : translations && translations.loading}
      </span> */}
    </div>
  );
};

export default Accordion2;
