import { Box } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { logoLinkGif } from "../../ImageLink";

const LoadingComponent = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      pt={"15%"}
    >
      <LazyLoadImage src={logoLinkGif} width={"15%"} height={"15%"} />
    </Box>
  );
};

export default LoadingComponent;
