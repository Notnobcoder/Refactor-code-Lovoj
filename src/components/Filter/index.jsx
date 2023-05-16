import { Box } from "@mui/material";
import "./filter.css";
export const FilterComponent = () => {
  return (
    <Box className="Lovoj__filter" paddingX={"3rem"}>
      <input placeholder="Location" />
      <input placeholder="Search Store By Digiatal Name" />
    </Box>
  );
};
