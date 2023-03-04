import React from 'react';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

function MainFooter() {
    return (
      <div className="main-footer-container">
        <div className="footer-container">
          <div className="listIcon-wrapper">
            <div className="footer-icon-wrapper">
              <button>
                <FacebookIcon />
              </button>
              <button>
                <InstagramIcon />
              </button>
              <button>
                <TwitterIcon />
              </button>
              <button>
                <YouTubeIcon />
              </button>
            </div>
            <div className="footer-menu-wrapper">
              <ul>
                <li>Audio Description</li>
                <li>Investor Relations</li>
                <li>Legal Notices</li>
              </ul>
              <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie Preferences</li>
              </ul>
              <ul>
                <li>Gift Cards</li>
                <li>Terms of Use</li>
                <li>Corporate Information</li>
              </ul>
              <ul>
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>

          <button className="Service-code-btn">Service Code</button>

          <div className="copy-right"> &#169; 1997-2023 Netflix,Inc.</div>
        </div>
      </div>
    );
}

export default MainFooter