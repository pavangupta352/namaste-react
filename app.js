import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCards = (props) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"
        alt="Restaurant Logo"
      />
      <div className="res-info">
        <div className="res-name">{props.resName}</div>
        <div className="res-desc">{props.resCuisine}</div>
        <div className="res-rating">{props.resRating}</div>
        <div className="ETA">{props.resETA}</div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        <RestaurantCards
          resName="Meghana Foods"
          resCuisine="South Indian, North Indian, Chinese"
          resRating="4.5"
          resETA="45 Minutes"
        />
        <RestaurantCards
          resName="KFCCCCC"
          resCuisine="ONLY BAD CHICKEN"
          resRating="-2.2"
          resETA="109 Minutes"
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
