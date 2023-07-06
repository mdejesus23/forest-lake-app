import classes from "./Footer.module.scss";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>&copy; Copyright {currentYear} Forest Lake | All Rights Reserved</p>

      <div className={classes.socialMedia}>
        <a
          href="https://www.facebook.com/ForestLakeMemorialParks/?_rdc=1&_rdr"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://www.instagram.com/forestlakememorialparks/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://twitter.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3Dforestlakememorialparks%26src%3Dtyped_query"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
