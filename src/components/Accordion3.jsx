import React, { useContext, useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import axios from "axios";
import { useLanguage } from "./LanguageContext";

const Accordion3 = () => {
  const { language } = useLanguage();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://back.theeastcaravan.com/tours/api/tour/2/"
        );

        const daysData = response.data.days;
        setData(daysData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Пустой массив зависимостей означает, что эффект будет запущен только один раз при монтировании компонента
  const processText = (text) => {
    const newText = text.replace(/●/g, "<br>●");
    return newText;
  };
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
    </div>
  );
};

export default Accordion3;
