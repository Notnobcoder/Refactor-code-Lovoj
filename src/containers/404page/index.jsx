import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Page404 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, animationDelay: 5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box
        className="Lovoj__page404"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        pt={30}
      >
        <Typography variant="h1">404</Typography>
        <Typography variant="h4">Page Not Found</Typography>
        <Typography variant="h6">
          Oops ! The Page you are looking for does not exist . It might have
          been moved to delete
        </Typography>
        <Link to="/">
          <Typography variant="h5">Back to Home</Typography>
        </Link>
      </Box>
    </motion.div>
  );
};

export default Page404;
