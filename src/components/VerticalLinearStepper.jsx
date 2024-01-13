import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "Трансфер в аэропорт и обратно",
    description: `For each ad campaign that you create, you can control how much
    you're willing to spend on clicks and conversions, which networks
    and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Проживание в гостинице",
    description: `For each ad campaign that you create, you can control how much
    you're willing to spend on clicks and conversions, which networks
    and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Обеспечение транспортом в рамках тура",
    description: `For each ad campaign that you create, you can control how much
    you're willing to spend on clicks and conversions, which networks
    and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Опытный сопровождающий гид",
  },
  {
    label: "Питание 2 раза в день (Завтрак, обед)",
  },
  {
    label: "Знакомство с бытом местных жителей",
  },
  {
    label: "Шоу программа",
  },
  {
    label: "Билеты на новый скоростной поезд Ташкент - Самарканд - Бухара",
  },
  {
    label: "Обеспечение водой в течение всего тура",
  },
  {
    label: "Входные билеты в музеи",
  },
  {
    label: "Приветственные сувениры и сюрпризы",
  },
  {
    label: "Дегустация более 15 вкуснейших национальных блюд",
  },
  {
    label: "Ежедневная активная программа, интерактивы, вечерние развлечения",
  },
  {
    label:
      "Дегустация коньяка и вин (Ташкент - Самарканд, 3 дегустации + 3 экскурсии с сомелье) (При бронировании Винного тура)",
  },
  {
    label: "Проведение по маршруту и посещение 3-х городов + горы",
  },
  {
    label: "Страховка включена в цену",
  },
];

export default function VerticalLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
  
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
        setActiveStep((prevActiveStep) => - 1);
      };
  
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pt: 6,
        }}
        id='steps'
      >
        <Box sx={{ maxWidth: 500, cx: 24 }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                
                 onClick={handleNext}
                  optional={
                    index === 15 ? (
                      <Typography variant="caption">Последняя стадия</Typography>
                    ) : null
                  }
                >
                  {step.label}
                </StepLabel>
                <StepContent>
                  <Typography>{step.description}</Typography>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? "Закончить" : "Продолжить"}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Назад
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleReset}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        В начало
                      </Button>
                      <Button
                        onClick={handleClose}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Закрыть
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>Иии на этом всё!</Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                В начало
              </Button>
            </Paper>
          )}
        </Box>
      </Box>
    );
  }