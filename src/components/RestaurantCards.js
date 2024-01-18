const RestaurantCards = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRatingString } = resData.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
        alt="Restaurant Logo"
      />
      <div className="res-info">
        <div className="res-name">Name: {name}</div>
        <div className="res-desc">Cuisines: {cuisines.join(", ")}</div>
        <div className="res-rating">Rating: {avgRatingString} Stars</div>
        <div className="ETA">ETA: {resData.info.sla.deliveryTime} Minutes</div>
      </div>
    </div>
  );
};

export default RestaurantCards;
