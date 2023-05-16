import "./drawer.css";
import { Box, Drawer, Typography } from "@mui/material";
import { useState } from "react";
import { IoIosListBox } from "react-icons/io";
import {
  AccessoriesLink,
  DesignerLink,
  FabricLink,
  FactoryLink,
  logoLink,
} from "../../ImageLink";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { FaProductHunt } from "react-icons/fa";
import { MdPermMedia } from "react-icons/md";
import { GiTeamIdea } from "react-icons/gi";
import { MdHelp } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { MdBusiness } from "react-icons/md";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";

export const DrawerComponent = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <IoIosListBox
        size={40}
        onClick={() => setDrawerOpen(true)}
        color="black"
        cursor={"pointer"}
      />
      <Drawer anchor="left" open={isDrawerOpen}>
        <Box px={3} pt={4} width="350px" role="presentation">
          <div className="Lovoj__drawer">
            <div className="Lovoj__drawer-flex">
              <LazyLoadImage src={logoLink} width="80px" height="80px" />
              <BsFillArrowLeftSquareFill
                color="black"
                size={22}
                onClick={() => setDrawerOpen(false)}
                cursor={"pointer"}
              />
            </div>
            <hr color="grey" />
            <div className="Lovoj__drawer-Links">
              <ul>
                <Box display={"flex"} alignItems={"center"}>
                  <InfoIcon color="black" />
                  <li>
                    <Typography variant="h6">About us</Typography>
                  </li>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <FaProductHunt color="black" size={23} />
                  <li>
                    <Typography variant="h6">Products</Typography>
                  </li>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <MdPermMedia color="black" size={23} />
                  <li>
                    <Typography variant="h6">Media and Press</Typography>
                  </li>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <GiTeamIdea color="black" size={23} />
                  <li>
                    <Typography variant="h6">Our Team</Typography>
                  </li>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <IoMdContact color="black" size={23} />
                  <li>
                    <Typography variant="h6">Contact Us</Typography>
                  </li>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <MdBusiness color="black" size={23} />
                  <li>
                    <Typography variant="h6">Jobs</Typography>
                  </li>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                  <MdHelp color="black" size={23} />
                  <li>
                    <Typography variant="h6">Help Center</Typography>
                  </li>
                </Box>
              </ul>
            </div>
            <hr />
            <div className="Lovoj__drawer-Links2">
              <Typography variant="h5" pt={3} pl={"2rem"} pb={"1rem"}>
                Be Our Partner
              </Typography>
              <Link to={"/be-our-partner/Designer"}>
                <Box paddingY={"0.5rem"} display={"flex"} px={"3rem"}>
                  <LazyLoadImage src={DesignerLink} width={"15%"} />
                  <Typography variant="h6" pl={"0.7rem"}>
                    Designer
                  </Typography>
                </Box>
              </Link>

              <Link to={"/be-our-partner/Fabric"}>
                <Box paddingY={"0.5rem"} display={"flex"} px={"2.5rem"}>
                  <LazyLoadImage src={FabricLink} width={"15%"} />
                  <Typography variant="h6" pl={"0.7rem"}>
                    Fabric
                  </Typography>
                </Box>
              </Link>
              <Link to={"/be-our-partner/Factory"}>
                <Box paddingY={"0.5rem"} display={"flex"} px={"2.5rem"}>
                  <LazyLoadImage src={FactoryLink} width={"15%"} />
                  <Typography variant="h6" pl={"0.7rem"}>
                    Factory
                  </Typography>
                </Box>
              </Link>
              <Link to={"/be-our-partner/Accessories"}>
                <Box paddingY={"0.5rem"} display={"flex"} px={"2.5rem"}>
                  <LazyLoadImage src={AccessoriesLink} width={"15%"} />
                  <Typography variant="h6" pl={"0.7rem"}>
                    Accessories
                  </Typography>
                </Box>
              </Link>
            </div>
          </div>
        </Box>
      </Drawer>
    </>
  );
};
