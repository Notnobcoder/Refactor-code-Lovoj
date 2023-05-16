import "./register.css";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { MainHeader } from "../../components/MainHeader";

import {
  Box,
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Dropzone from "react-dropzone";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FlexBetween } from "../../styledComponents/FlexBetween";
import {
  AlterationLink,
  BoutiqueLink,
  DesignerLink,
  TailorLink,
} from "../../ImageLink";
import { Fragment } from "react";

let initialValues = {
  email: "",
  password: "",
  storeName: "",
  country: "",
  city: "",
  zipCode: "",
  phoneNumber: "",
  category: "",
  aboutUs: "",
  picture: "",
};

const Designers = () => {
  const {
    values,
    handleSubmit,
    handleBlur,
    handleChange,
    setFieldValue,
    handleReset,
  } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(`values are`, values);
    },
  });

  return (
    <Fragment>
      <motion.Box
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <MainHeader />
        <FlexBetween paddingX={"8rem"} paddingY={"10rem"}>
          <Typography variant="h2" py={"2rem"}>
            Designer
          </Typography>
          <Box display={"flex"} width={"40%"} justifyContent={"space-between"}>
            <Box>
              <LazyLoadImage src={TailorLink} width={"30px"} />
              <Typography variant="h6" py={"2rem"}>
                Tailor
              </Typography>
            </Box>
            <Box>
              <LazyLoadImage src={DesignerLink} width={"30px"} />
              <Typography variant="h6" py={"2rem"}>
                Designer
              </Typography>
            </Box>
            <Box>
              <LazyLoadImage src={BoutiqueLink} width={"30px"} />
              <Typography variant="h6" py={"2rem"}>
                Boutique
              </Typography>
            </Box>
            <Box>
              <LazyLoadImage src={AlterationLink} width={"30px"} />
              <Typography variant="h6" py={"2rem"}>
                Alteration
              </Typography>
            </Box>
          </Box>
          <form
            className="Lovoj__Register-form"
            onSubmit={handleSubmit}
            onReset={handleReset}
          >
            <InputLabel id="demo-simple-select-helper-label">
              Category
            </InputLabel>
            <Select
              onChange={handleChange}
              label="Category"
              required
              name="category"
              sx={{
                width: {
                  lg: "95%",
                },
                ml: {
                  lg: "1rem",
                },
                mb: "1rem",
              }}
            >
              <MenuItem value={"None"}>
                <em>Select Category</em>
              </MenuItem>
              <MenuItem value={"Tailor"}>Tailor</MenuItem>
              <MenuItem value={"Designer"}>Designer</MenuItem>
              <MenuItem value={"Boutque"}>Boutique</MenuItem>
              <MenuItem value={"Alteration"}>Alteration</MenuItem>
            </Select>
            <TextField
              onBlur={handleBlur}
              value={values.email}
              label="Email"
              sx={{ margin: "1rem" }}
              name="email"
              onChange={handleChange}
              required
            />
            <TextField
              onBlur={handleBlur}
              value={values.password}
              label="Password"
              sx={{ margin: "1rem" }}
              name="password"
              onChange={handleChange}
              type="password"
              required
            />
            <TextField
              defaultValue={values.storeName}
              label="Store Name   ( Business Name)"
              sx={{ margin: "1rem" }}
              name="storeName"
              onChange={handleChange}
              required
            />
            <Typography variant="h6" px={"2rem"} pt={"1rem"}>
              Choose Store Image
            </Typography>
            <Box
              gridColumn="span 4"
              border={`1px solid`}
              borderRadius="5px"
              p="0.5rem"
              width={"95%"}
              ml={"1.2rem"}
              my={"1rem"}
            >
              <Dropzone
                acceptedFiles=".jpg,.jpeg,.png"
                multiple={false}
                onDrop={(acceptedFiles) =>
                  setFieldValue("picture", acceptedFiles[0])
                }
              >
                {({ getRootProps, getInputProps }) => (
                  <Box
                    {...getRootProps()}
                    border={`2px dashed`}
                    p="0.5rem"
                    sx={{ "&:hover": { cursor: "pointer" } }}
                  >
                    <input {...getInputProps()} />
                    {!values.picture ? (
                      <p>Add Store Image Here</p>
                    ) : (
                      <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                      >
                        <Typography>{values.picture.name}</Typography>
                        <Box />
                      </Box>
                    )}
                  </Box>
                )}
              </Dropzone>
            </Box>
            <Grid container justifyContent={"center"} alignItems={"center"}>
              <Grid item xl={"auto"}>
                <TextField
                  label="Country"
                  sx={{ margin: "1rem" }}
                  name="country"
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xl={"auto"}>
                <TextField
                  label="City"
                  sx={{ margin: "1rem" }}
                  name="city"
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xl={"auto"}>
                <TextField
                  label="Zip Code"
                  sx={{ margin: "1rem" }}
                  name="zipCode"
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xl={"auto"}>
                <TextField
                  label="Phone Number"
                  sx={{ margin: "1rem" }}
                  name="phoneNumber"
                  onChange={handleChange}
                  required
                />
              </Grid>
            </Grid>
            <Box
              display={"flex"}
              justifyContent={"space-around"}
              alignItems={"center"}
              pt={"2rem"}
              width={"45%"}
            >
              <Button color="inherit" variant="contained" type="reset">
                Reset
              </Button>
              <Button color="primary" variant="contained" type="submit">
                Submit
              </Button>
            </Box>
          </form>
        </FlexBetween>
      </motion.Box>
    </Fragment>
  );
};

export default Designers;
