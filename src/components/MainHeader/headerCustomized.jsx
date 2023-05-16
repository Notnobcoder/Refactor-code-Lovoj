import { Box, Typography } from "@mui/material";
import { Fragment } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { VideoLink, kurtiLink, shirtLink } from "../../ImageLink";

const HeaderCustomized = () => {
  return (
    <Fragment>
      <Box paddingX={"2rem"}>
        <Box
          sx={{ paddingTop: "10rem" }}
          textAlign={"center"}
          fontFamily={"Inter"}
        >
          <Typography variant="h2" fontWeight={500}>
            Find Your Unique Style!
          </Typography>
          <Typography>Customize Your Orders</Typography>
        </Box>
        <Box display={"flex"} paddingY={"2rem"}>
          <Box width={"90%"} display={"grid"} gridTemplateColumns={"auto auto"}>
            <Box className="mainHeader__grid-items">
              <Typography variant="p">Designs For</Typography>
              <Typography variant="h3">Men</Typography>
              <LazyLoadImage
                src={shirtLink}
                placeholderSrc={shirtLink}
                effect="blur"
              />
            </Box>
            <Box className="mainHeader__grid-items">
              <Typography variant="p">Design For</Typography>
              <Typography variant="h3">Women</Typography>
              <LazyLoadImage
                src={kurtiLink}
                placeholderSrc={kurtiLink}
                effect="blur"
              />
            </Box>
          </Box>
          <Box
            marginY={"2rem"}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
          >
            <video src={VideoLink} autoPlay loop width={"500px"} />
            <Box>
              <Typography variant="h3" pb={"2rem"}>
                Designed For Perfect Fit
              </Typography>
              <Typography variant="p" width={"70%"}>
                When your garments are made with care, you feel the difference.
                Before our designers handmade your piece, our technology
                utilizes decade’s worth of measurement information to ensure it
                fits you right. Astonishing, simple to shop.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default HeaderCustomized;
