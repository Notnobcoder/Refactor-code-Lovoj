import { LazyLoadImage } from "react-lazy-load-image-component";
import "./footer.css";
import {
  IndianFlagLink,
  appleLink,
  googleLink,
  logoLink,
} from "../../ImageLink";
import { Typography } from "@mui/material";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
import { Link } from "react-router-dom";
export const MainFooter = () => {
  return (
    <div className="Lovoj__footer">
      <div className="Lovoj__footer-flex">
        <div className="Lovoj__footer-flex-items">
          <LazyLoadImage src={logoLink} width="200px" height="180px" />
          <div className="Lovoj__footer-flex-items-part">
            <LazyLoadImage src={IndianFlagLink} />
            <Typography variant="p">
              12 Todermal Road, New Delhi - 110001, India
            </Typography>
            <div className="Lovoj__footer-flex-items1">
              <Typography variant="p">Follow us and keep updated!</Typography>
              <div className="Lovoj__footer-logos">
                <BsFacebook size={25} />
                <BsTwitter size={25} />
                <BsInstagram size={25} />
                <BsLinkedin size={25} />
                <BsYoutube size={25} />
              </div>
            </div>
          </div>
        </div>
        <div className="Lovoj__footer-flex-items-part2">
          <Typography variant="h5">Be Our Partner</Typography>
          <div className="Lovoj__footer-flex-items-list">
            <Typography>Tailor and Designers</Typography>
            <Typography>Fabric</Typography>
            <Typography>Stiching Factory</Typography>
            <Typography>Stylish</Typography>
          </div>
        </div>
        <div className="Lovoj__footer-flex-items-part3">
          <Typography variant="h5">Quick Links</Typography>
          <div className="Lovoj__footer-flex-items-list">
            <Typography>About Us</Typography>
            <Typography>Product</Typography>
            <Typography>Media & Press</Typography>
            <Typography>Ourt Team</Typography>
            <Typography>Contact Us</Typography>
            <Typography>Jobs</Typography>
            <Typography>Help Center</Typography>
            <a href="./terms_of_use.html">
              <Typography>Terms of use</Typography>
            </a>
            <a href="./privacy_policy.html">
              <Typography>Privacy Policy</Typography>
            </a>
          </div>
        </div>
        <div className="Lovoj__footer-flex-items-part4">
          <Typography variant="h5">Download our App</Typography>
          <div className="Lovoj__footer-flex-items-images">
            <LazyLoadImage
              src={googleLink}
              className="Lovoj__footer-googleplay"
            />
            <LazyLoadImage
              src={appleLink}
              className="Lovoj__footer-googleplay"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
