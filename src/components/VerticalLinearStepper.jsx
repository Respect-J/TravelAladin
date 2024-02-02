import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useLanguage } from "./LanguageContext";

const API_URL = "https://back.theeastcaravan.com/api/step/";

export default function VerticalLinearStepper() {
  const [steps, setSteps] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const { language } = useLanguage();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setSteps(data.map((step) => language === 'ru' ? step.title_ru : step.title_en));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [language]);// Empty dependency array ensures the effect runs only once on mount

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleClose = () => {
    setActiveStep((prevActiveStep) => -1);
  };

  return (
    <div className="linear">
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pt: 6,
        margin: "1rem 1rem",
      }}
      id="steps"
    >
      <Box sx={{ maxWidth: 500, cx: 24 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={index}>
              <StepLabel
                optional={
                  index === steps.length - 1 ? (
                    <Typography variant="caption">{language === 'ru' ? 'Последняя стадия' : 'Last Stage'}</Typography>
                  ) : null
                }
              >
                {step}
              </StepLabel>
              <StepContent>
                {/* Add any content related to the step if needed */}
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>{language === 'ru' ? 'Иии на этом всё!' : 'And that\'s it!'}</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              {language === 'ru' ? 'В начало' : 'Start Over'}
            </Button>
          </Paper>
        )}
      </Box>
    </Box>
    </div>
  );
}