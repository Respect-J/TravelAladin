// import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { LanguageContext } from "./LanguageContext";
// import Accordion from "./Accordion";

// const AccordionAll = () => {
//   const { language } = useContext(LanguageContext);
//   const [accordionData, setAccordionData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://theeastcaravan.com/back/tours/api/tour/0/"
//         );

//         const data = response.data;
//         setAccordionData(data.days);
//         // Вы можете установить другие данные, такие как заголовок и цены
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []); // Пустой массив зависимостей означает, что эффект будет запущен только один раз при монтировании компонента

//   return (
//     <div>
//       <div className="accordion">
//         {accordionData.map((item, index) => (
//           <Accordion
//             key={index}
//             title={`${index + 1} ${
//               language === "ru" ? `День` : `Day`
//             }`}
//             content={
//               language === "ru"
//                 ? item.description_ru
//                 : item.description_en
//             }
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AccordionAll;
