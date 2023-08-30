import React from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { settings } from "../../../../helpers/Settings";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialTwitter,
  SlSocialYoutube,
} from "react-icons/sl";
const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container-fluid">
        <div className="contact">
          <a href={`tel:${settings.phone1}`}>
            <AiOutlinePhone /> {settings.phone1}
          </a>

          <a href={`mailto:${settings.email}`}>
            <AiOutlineMail /> {settings.email}
          </a>
        </div>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank">
            <SlSocialFacebook />
          </a>
          <a href="https://instagram.com" target="_blank">
            <SlSocialInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank">
            <SlSocialLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank">
            <SlSocialTwitter />
          </a>
          <a href="https://youtube.com" target="_blank">
            <SlSocialYoutube />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
