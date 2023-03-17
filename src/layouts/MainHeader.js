import React, { useState } from 'react';
import LogoNexflix from "../images/logo_netflix.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from 'react-router-dom';


function MainHeader() {
  const [scroll, setScroll] = useState(0);
  const [isClicked, setIsClicked] = useState("none");
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/Login")
  }

  const handleScrolly = () => {
    const scrolly = window.scrollY;
    setScroll(scrolly);
  }
  
  window.addEventListener("scroll", handleScrolly)
  

  return (
    <div
      className="napbar-container"
      style={
        scroll < 50
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "black" }
      }
    >
      <div className="header-container">
        <div className="logo-menu">
          <div className="logo-wrapper">
            <img src={LogoNexflix} alt="Netflix's logo" />
          </div>

          <div className="menu-wrapper">
            <div>Home</div>
            <div>TVShows</div>
            <div>Movies</div>
            <div>New & Popular</div>
            <div>My List</div>
          </div>

          <div>
            <button onClick={() => {
              if (isClicked === "none")
              {
                setIsClicked("flex")
              } else {
              setIsClicked("none")
            }}} id="basic-button">
              Browse
              <ArrowDropDownIcon />
            </button>
            <div className="browse-list" style={{display: isClicked}}>
              <button className="btn-list">Home</button>
              <button className="btn-list">TV Shows</button>
              <button className="btn-list">Movies</button>
              <button className="btn-list">New & Popular </button>
              <button className="btn-list">My List</button>
              <button className="btn-list">Brose by Language</button>
            </div>
          </div>
        </div>

        <div className="icon-wrapper">
          <div className="search-wrapper">
            <SearchIcon className="search-icon" />
            <input className="input-search" type="text" placeholder="search" />
          </div>

          <div className="dvd">DVD</div>

          <button className="notification-icon">
            <NotificationsNoneIcon />
          </button>

          <button onClick={handleSignIn} className="sign-in">Sign in</button>
        </div>
      </div>
    </div>
  );
}

export default MainHeader