import "./products.css";
import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";

import { AiFillShopping } from "react-icons/ai";
import { MainHeader } from "../../components/MainHeader";
import { MainFooter } from "../../components/MainFooter";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { shirtLink } from "../../ImageLink";
import { motion } from "framer-motion";

const Products = () => {
  let [activeStep, setActiveStep] = useState(0);

  const previous = () => {
    setActiveStep((activeStep = activeStep - 1));
  };

  const next = () => {
    setActiveStep((activeStep = activeStep + 1));
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MainHeader />
      <div className="Lovoj__stepper">
        <Stepper activeStep={activeStep} alternativeLabel>
          <Step>
            <StepLabel>First</StepLabel>
          </Step>
          <Step>
            <StepLabel>Second</StepLabel>
          </Step>
          <Step>
            <StepLabel>Third</StepLabel>
          </Step>
          <Step>
            <StepLabel>Fourth</StepLabel>
          </Step>
          <Step>
            <StepLabel>Fifth</StepLabel>
          </Step>
          <Step>
            <StepLabel>Sixth</StepLabel>
          </Step>
          <Step>
            <StepLabel>Seventh</StepLabel>
          </Step>
        </Stepper>
        {activeStep === 0 ? (
          <div className="Lovoj__stepper-1">
            <div className="Lovoj__stepper-1-container">
              <div className="Lovoj__stepper-1-container-card">
                <LazyLoadImage src={shirtLink} width={"100px"} />
                <div className="Lovoj__stepper-1-container-card-items">
                  <Typography variant="h6">Checked</Typography>
                  <Typography variant="p" color={"red"}>
                    210.00$
                  </Typography>
                </div>
              </div>
              <div className="Lovoj__stepper-1-container-card">
                <LazyLoadImage src={shirtLink} width={"100px"} />
                <div className="Lovoj__stepper-1-container-card-items">
                  <Typography variant="h6">Checked</Typography>
                  <Typography variant="p" color={"red"}>
                    210.00$
                  </Typography>
                </div>
              </div>
              <div className="Lovoj__stepper-1-container-card">
                <LazyLoadImage src={shirtLink} width={"100px"} />
                <div className="Lovoj__stepper-1-container-card-items">
                  <Typography variant="h6">Checked</Typography>
                  <Typography variant="p" color={"red"}>
                    210.00$
                  </Typography>
                </div>
              </div>
              <div className="Lovoj__stepper-1-container-card">
                <LazyLoadImage src={shirtLink} width={"100px"} />
                <div className="Lovoj__stepper-1-container-card-items">
                  <Typography variant="h6">Checked</Typography>
                  <Typography variant="p" color={"red"}>
                    210.00$
                  </Typography>
                </div>
              </div>
              <div className="Lovoj__stepper-1-container-card">
                <LazyLoadImage src={shirtLink} width={"100px"} />
                <div className="Lovoj__stepper-1-container-card-items">
                  <Typography variant="h6">Checked</Typography>
                  <Typography variant="p" color={"red"}>
                    210.00$
                  </Typography>
                </div>
              </div>
              <div className="Lovoj__stepper-1-container-card">
                <LazyLoadImage src={shirtLink} width={"100px"} />
                <div className="Lovoj__stepper-1-container-card-items">
                  <Typography variant="h6">Checked</Typography>
                  <Typography variant="p" color={"red"}>
                    210.00$
                  </Typography>
                </div>
              </div>
              <div className="Lovoj__stepper-1-container-card">
                <LazyLoadImage src={shirtLink} width={"100px"} />
                <div className="Lovoj__stepper-1-container-card-items">
                  <Typography variant="h6">Checked</Typography>
                  <Typography variant="p" color={"red"}>
                    210.00$
                  </Typography>
                </div>
              </div>
              <div className="Lovoj__stepper-1-container-card">
                <LazyLoadImage src={shirtLink} width={"100px"} />
                <div className="Lovoj__stepper-1-container-card-items">
                  <Typography variant="h6">Checked</Typography>
                  <Typography variant="p" color={"red"}>
                    210.00$
                  </Typography>
                </div>
              </div>
              <div className="Lovoj__stepper-1-container-card">
                <LazyLoadImage src={shirtLink} width={"100px"} />
                <div className="Lovoj__stepper-1-container-card-items">
                  <Typography variant="h6">Checked</Typography>
                  <Typography variant="p" color={"red"}>
                    210.00$
                  </Typography>
                </div>
              </div>
              <div className="Lovoj__stepper-1-container-card">
                <LazyLoadImage src={shirtLink} width={"100px"} />
                <div className="Lovoj__stepper-1-container-card-items">
                  <Typography variant="h6">Checked</Typography>
                  <Typography variant="p" color={"red"}>
                    210.00$
                  </Typography>
                </div>
              </div>
              <div className="Lovoj__stepper-1-container-card">
                <LazyLoadImage src={shirtLink} width={"100px"} />
                <div className="Lovoj__stepper-1-container-card-items">
                  <Typography variant="h6">Checked</Typography>
                  <Typography variant="p" color={"red"}>
                    210.00$
                  </Typography>
                </div>
              </div>
            </div>
            <div className="Lovoj__stepper-1-container2">
              <LazyLoadImage src={shirtLink} />
            </div>
            <div className="Lovoj__stepper-1-container3">
              <Box display={"flex"} alignItems={"center"}>
                <AiFillShopping size={70} color="black" />
                <Typography variant="h4" color={"red"}>
                  $210.00
                </Typography>
              </Box>
              <Box>
                <LazyLoadImage src={shirtLink} width={"100px"} />
                <Typography variant="h4">Fabric</Typography>
                <hr />
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  display={"flex"}
                  alignItems={"center"}
                  py={"0.5rem"}
                >
                  Fabric :<Typography variant="h6">Special Cotton</Typography>{" "}
                </Typography>
                <Typography
                  variant="h5"
                  display={"flex"}
                  alignItems={"center"}
                  py={"0.5rem"}
                >
                  Material :<Typography variant="h6">Special Cotton</Typography>{" "}
                </Typography>
                <Typography
                  variant="h5"
                  display={"flex"}
                  alignItems={"center"}
                  py={"0.5rem"}
                >
                  Price :<Typography variant="h6">Special Cotton</Typography>{" "}
                </Typography>
                <Typography
                  variant="h5"
                  display={"flex"}
                  alignItems={"center"}
                  py={"0.5rem"}
                >
                  Kurta :<Typography variant="h6">Special Cotton</Typography>{" "}
                </Typography>
                <Typography
                  variant="h5"
                  display={"flex"}
                  alignItems={"center"}
                  py={"0.5rem"}
                >
                  Style :<Typography variant="h6">Special Cotton</Typography>{" "}
                </Typography>
              </Box>
              <Box>
                <Button variant="contained" sx={{ backgroundColor: "black" }}>
                  Next
                </Button>
              </Box>
            </div>
          </div>
        ) : null}
        {activeStep === 1 ? (
          <div className="Lovoj__stepper-first">
            <h1>First</h1>
          </div>
        ) : null}
        {activeStep === 2 ? (
          <div className="Lovoj__stepper-first">
            <h1>Second</h1>
          </div>
        ) : null}
        {activeStep === 3 ? (
          <div className="Lovoj__stepper-first">
            <h1>Third</h1>
          </div>
        ) : null}
        {activeStep === 4 ? (
          <div className="Lovoj__stepper-first">
            <h1>Fourth</h1>
          </div>
        ) : null}
        {activeStep === 5 ? (
          <div className="Lovoj__stepper-first">
            <h1>Fifth</h1>
          </div>
        ) : null}
        {activeStep === 6 ? (
          <div className="Lovoj__stepper-first">
            <h1>Sixth</h1>
          </div>
        ) : null}
        {activeStep === 7 ? (
          <div className="Lovoj__stepper-first">
            <h1>Seventh</h1>
          </div>
        ) : null}
      </div>
      <MainFooter />
    </motion.div>
  );
};

export default Products;
