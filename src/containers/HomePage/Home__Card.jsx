import { Button, Dialog, Rating, Typography } from "@mui/material";
import { FlexComponent } from "../../styledComponents/FlexComponent";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FlexLeft } from "../../styledComponents/FlexLeft";
import { shirtLink } from "../../ImageLink";
import { useState } from "react";
import { FlexBetween } from "../../styledComponents/FlexBetween";
import { Link } from "react-router-dom";

const Home__Card = () => {
  const [value, setValue] = useState(2);
  const [dialogOpen, setdialogOpen] = useState(false);

  const openDialog = () => {
    setdialogOpen(true);
  };

  const closeDialog = () => {
    setdialogOpen(false);
  };

  return (
    <div className="Lovoj__card">
      <Dialog open={dialogOpen} maxWidth={"900px"}>
        <Button variant="contained" onClick={closeDialog}>
          Close
        </Button>
        <FlexComponent>
          <LazyLoadImage src={shirtLink} width={"170px"} />
          <div>
            <Typography variant="h5" px={"1rem"}>
              Jacob Jacob
            </Typography>
            <Typography variant="h6" px={"1rem"}>
              Shirt , Kurti
            </Typography>
            <Rating name="read-only" value={value} readOnly />
            <Typography variant="h6" px={"2rem"}>
              Rs . 22
            </Typography>
            <Button variant="contained">Visit Store</Button>
          </div>
        </FlexComponent>
        <FlexBetween>
          <Typography variant="h5" py={"2rem"}>
            Instant Appoinment
          </Typography>
          <Link to={"/products/1"}>
            <Typography variant="h5" py={"2rem"} sx={{ cursor: "pointer" }}>
              3d Store
            </Typography>
          </Link>
          <Typography variant="h5" py={"2rem"}>
            Ready Made Store
          </Typography>
        </FlexBetween>
      </Dialog>
      <div className="Lovoj__card-image" onClick={openDialog}>
        <LazyLoadImage src={shirtLink} onClick={openDialog} width={"210px"} />
      </div>
      <div className="Lovoj__card-image-items">
        <FlexLeft>
          <Typography variant="h5" className="Lovoj__card-image">
            Jacob Jacob
          </Typography>
          <Typography variant="h6">Shirt , Kurti</Typography>
          <Rating name="read-only" value={value} readOnly />
          <Typography variant="p">Rs . 22</Typography>
          <Button variant="contained">Visit Store</Button>
        </FlexLeft>
      </div>
    </div>
  );
};

export default Home__Card;
