import "./homepage.css";
import { Button, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { MainHeader } from "../../components/MainHeader";
import {
  alterationLink,
  blouseLink,
  blueShirtLink,
  girtBlouseLink,
  greenWomenLink,
  shirtLink,
  skirtLink,
  whiteShirtLink,
} from "./../../ImageLink";
import { FilterComponent } from "../../components/Filter";
import { GrGallery } from "react-icons/gr";
import { AiOutlineMenuFold } from "react-icons/ai";
import { RiFilter3Fill } from "react-icons/ri";
import { MainFooter } from "../../components/MainFooter";
import { motion, useScroll } from "framer-motion";
import { FlexBetween } from "../../styledComponents/FlexBetween";
import { Fragment, useState } from "react";
import Home__Card from "./Home__Card";
import HeaderCustomized from "../../components/MainHeader/headerCustomized";
import CustomizedSlider from "./customizedSlider";

const HomePage = () => {
  const [videoShow, setvideoShow] = useState(true);

  const changeToVideo = () => {
    setvideoShow(true);
  };

  const changeToList = () => {
    setvideoShow(false);
  };

  return (
    <Fragment>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <MainHeader />
        <div>
          <HeaderCustomized />
          <CustomizedSlider />
          <FilterComponent />

          <div className="Lovoj__video">
            <div className="Lovoj__video-navbar">
              <FlexBetween className="Lovoj__video-flex">
                <Typography variant="h3" className="Lovoj__video-flex-h3">
                  36
                </Typography>
                <Typography variant="h6">Designers</Typography>
              </FlexBetween>
              <div className="Lovoj__video-flex2">
                <div className="Lovoj__gallery">
                  <GrGallery
                    size={30}
                    className="Lovoj__padding"
                    onClick={changeToVideo}
                    cursor={"pointer"}
                  />
                  <AiOutlineMenuFold
                    size={30}
                    onClick={changeToList}
                    cursor={"pointer"}
                  />
                </div>
                <div className="Lovoj__filter-flex">
                  <RiFilter3Fill size={30} color="red" />
                  <Typography variant="h4" color="red">
                    Filter
                  </Typography>
                </div>
              </div>
            </div>
            {videoShow ? (
              <div className="Lovoj__card-container">
                <Home__Card imageLink={shirtLink} />
              </div>
            ) : (
              <Typography variant="h6">map component</Typography>
            )}
          </div>
          <div className="Lovoj__SpecialCategory">
            <Typography variant="h2" align="center">
              Special Category
            </Typography>
            <div className="Lovoj__SpecialCategory-card">
              <div className="Lovoj__SpecialCategory-card-items">
                <LazyLoadImage
                  src={alterationLink}
                  width="250px"
                  height="250px"
                  loading="lazy"
                />
                <Typography variant="h3" color="blue">
                  Alteration
                </Typography>
              </div>
              <div className="Lovoj__SpecialCategory-card-items">
                <LazyLoadImage src={blouseLink} width="250px" height="250px" />
                <Typography variant="h3" color="lightblue">
                  Blouse
                </Typography>
              </div>
              <div className="Lovoj__SpecialCategory-card-items">
                <LazyLoadImage src={skirtLink} width="250px" height="250px" />
                <Typography variant="h3" color="orange">
                  Big Sizes
                </Typography>
              </div>
            </div>
          </div>
          <div className="Lovoj__ReadyMade">
            <Typography variant="h2">Ready Made Dress</Typography>
            <Typography variant="h5">From Designers</Typography>
            <div className="Lovoj__ReadyMade-flex">
              <div className="Lovoj__ReadyMade-flex-items">
                <LazyLoadImage
                  src={greenWomenLink}
                  className="Lovoj__ReadyMade-image"
                  loading="lazy"
                  effect="blur"
                  placeholderSrc={greenWomenLink}
                />
                <div className="Lovoj__ReadyMade-flex-items-text">
                  <Typography variant="h4">Kamran Zafar</Typography>
                  <Typography variant="h6">
                    tailor made fashion store
                  </Typography>
                  <Button>contact</Button>
                </div>
              </div>
              <div className="Lovoj__ReadyMade-flex-items">
                <LazyLoadImage
                  src={girtBlouseLink}
                  className="Lovoj__ReadyMade-image"
                  loading="lazy"
                  effect="blur"
                  placeholderSrc={girtBlouseLink}
                />
                <div className="Lovoj__ReadyMade-flex-items-text">
                  <Typography variant="h4">Kamran Zafar</Typography>
                  <Typography variant="h6">
                    tailor made fashion store
                  </Typography>
                  <Button>contact</Button>
                </div>
              </div>
              <div className="Lovoj__ReadyMade-flex-items">
                <LazyLoadImage
                  src={whiteShirtLink}
                  className="Lovoj__ReadyMade-image"
                  loading="lazy"
                  effect="blur"
                  placeholderSrc={whiteShirtLink}
                />
                <div className="Lovoj__ReadyMade-flex-items-text">
                  <Typography variant="h4">Kamran Zafar</Typography>
                  <Typography variant="h6">
                    tailor made fashion store
                  </Typography>
                  <Button>contact</Button>
                </div>
              </div>
              <div className="Lovoj__ReadyMade-flex-items">
                <LazyLoadImage
                  src={blueShirtLink}
                  className="Lovoj__ReadyMade-image"
                  loading="lazy"
                  effect="blur"
                  placeholderSrc={blueShirtLink}
                />
                <div className="Lovoj__ReadyMade-flex-items-text">
                  <Typography variant="h4">Kamran Zafar</Typography>
                  <Typography variant="h6">
                    tailor made fashion store
                  </Typography>
                  <Button>contact</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MainFooter />
      </motion.div>
    </Fragment>
  );
};

export default HomePage;
