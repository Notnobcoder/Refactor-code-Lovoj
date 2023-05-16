import { Box, Button, Typography } from "@mui/material";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { Fragment, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { kurtiLink, shirtLink } from "../../ImageLink";

const CustomizedSlider = () => {
  const [Men, setMen] = useState(true);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Fragment>
      <Box paddingY={"4rem"} paddingX={"4rem"}>
        <Box display={"flex"} flexDirection={"column"}>
          <Typography variant="h3" textAlign={"center"} mb={"1rem"}>
            Explore Collections
          </Typography>
          <Box
            display={"flex"}
            justifyContent={"space-around"}
            px={"4rem"}
            py={"2rem"}
          >
            <Button
              sx={{ fontSize: "2rem", color: "black" }}
              onClick={() => setMen(true)}
            >
              Men
            </Button>
            <Button
              sx={{ fontSize: "2rem", color: "black" }}
              onClick={() => setMen(false)}
            >
              Women
            </Button>
          </Box>
        </Box>
        <Box>
          {Men ? (
            <Carousel responsive={responsive} infinite>
              <Box
                backgroundColor={"#f0f0f3"}
                boxShadow={
                  "-10px -10px 30px #ffffff, 10px 10px 30px rgba(174, 174, 192, 0.4)"
                }
                margin={"1rem"}
                padding={"2rem"}
              >
                <Typography variant="h6" textAlign={"center"}>
                  Shirt
                </Typography>
                <LazyLoadImage src={shirtLink} />
              </Box>
              <Box
                backgroundColor={"#f0f0f3"}
                boxShadow={
                  "-10px -10px 30px #ffffff, 10px 10px 30px rgba(174, 174, 192, 0.4)"
                }
                margin={"1rem"}
                padding={"2rem"}
              >
                <Typography variant="h6" textAlign={"center"}>
                  Shirt
                </Typography>
                <LazyLoadImage src={shirtLink} />
              </Box>
              <Box
                backgroundColor={"#f0f0f3"}
                boxShadow={
                  "-10px -10px 30px #ffffff, 10px 10px 30px rgba(174, 174, 192, 0.4)"
                }
                margin={"1rem"}
                padding={"2rem"}
              >
                <Typography variant="h6" textAlign={"center"}>
                  Shirt
                </Typography>
                <LazyLoadImage src={shirtLink} />
              </Box>
              <Box
                backgroundColor={"#f0f0f3"}
                boxShadow={
                  "-10px -10px 30px #ffffff, 10px 10px 30px rgba(174, 174, 192, 0.4)"
                }
                margin={"1rem"}
                padding={"2rem"}
              >
                <Typography variant="h6" textAlign={"center"}>
                  Shirt
                </Typography>
                <LazyLoadImage src={shirtLink} />
              </Box>
              <Box
                backgroundColor={"#f0f0f3"}
                boxShadow={
                  "-10px -10px 30px #ffffff, 10px 10px 30px rgba(174, 174, 192, 0.4)"
                }
                margin={"1rem"}
                padding={"2rem"}
              >
                <Typography variant="h6" textAlign={"center"}>
                  Shirt
                </Typography>
                <LazyLoadImage src={shirtLink} />
              </Box>
              <Box
                backgroundColor={"#f0f0f3"}
                boxShadow={
                  "-10px -10px 30px #ffffff, 10px 10px 30px rgba(174, 174, 192, 0.4)"
                }
                margin={"1rem"}
                padding={"2rem"}
              >
                <Typography variant="h6" textAlign={"center"}>
                  Shirt
                </Typography>
                <LazyLoadImage src={shirtLink} />
              </Box>
            </Carousel>
          ) : (
            <Carousel
              responsive={responsive}
              infinite
              autoPlay
              autoPlaySpeed={2000}
            >
              <Box
                backgroundColor={"#f0f0f3"}
                boxShadow={
                  "-10px -10px 30px #ffffff, 10px 10px 30px rgba(174, 174, 192, 0.4)"
                }
                margin={"1rem"}
                padding={"2rem"}
              >
                <Typography variant="h6" textAlign={"center"}>
                  Shirt
                </Typography>
                <LazyLoadImage src={kurtiLink} />
              </Box>
              <Box
                backgroundColor={"#f0f0f3"}
                boxShadow={
                  "-10px -10px 30px #ffffff, 10px 10px 30px rgba(174, 174, 192, 0.4)"
                }
                margin={"1rem"}
                padding={"2rem"}
              >
                <Typography variant="h6" textAlign={"center"}>
                  Shirt
                </Typography>
                <LazyLoadImage src={kurtiLink} />
              </Box>
              <Box
                backgroundColor={"#f0f0f3"}
                boxShadow={
                  "-10px -10px 30px #ffffff, 10px 10px 30px rgba(174, 174, 192, 0.4)"
                }
                margin={"1rem"}
                padding={"2rem"}
              >
                <Typography variant="h6" textAlign={"center"}>
                  Shirt
                </Typography>
                <LazyLoadImage src={kurtiLink} />
              </Box>
              <Box
                backgroundColor={"#f0f0f3"}
                boxShadow={
                  "-10px -10px 30px #ffffff, 10px 10px 30px rgba(174, 174, 192, 0.4)"
                }
                margin={"1rem"}
                padding={"2rem"}
              >
                <Typography variant="h6" textAlign={"center"}>
                  Shirt
                </Typography>
                <LazyLoadImage src={kurtiLink} />
              </Box>
              <Box
                backgroundColor={"#f0f0f3"}
                boxShadow={
                  "-10px -10px 30px #ffffff, 10px 10px 30px rgba(174, 174, 192, 0.4)"
                }
                margin={"1rem"}
                padding={"2rem"}
              >
                <Typography variant="h6" textAlign={"center"}>
                  Shirt
                </Typography>
                <LazyLoadImage src={kurtiLink} />
              </Box>
              <Box
                backgroundColor={"#f0f0f3"}
                boxShadow={
                  "-10px -10px 30px #ffffff, 10px 10px 30px rgba(174, 174, 192, 0.4)"
                }
                margin={"1rem"}
                padding={"2rem"}
              >
                <Typography variant="h6" textAlign={"center"}>
                  Shirt
                </Typography>
                <LazyLoadImage src={kurtiLink} />
              </Box>
            </Carousel>
          )}
        </Box>
      </Box>
    </Fragment>
  );
};

export default CustomizedSlider;
