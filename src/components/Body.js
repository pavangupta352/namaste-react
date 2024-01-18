import RestaurantCards from "./RestaurantCards";
import restObjList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [ListRes, SetListRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    SetListRes(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );
  };

  if (ListRes.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div classaName="filter">
        <button
          className="filter-button"
          onClick={() => {
            SetListRes();
            const filteredlist = ListRes.filter((rest) => {
              return rest.info.avgRating > 4.5;
            });
            SetListRes(filteredlist);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {
          ListRes.map((resturant) => (
            <RestaurantCards resData={resturant} />
          ))
          // <RestaurantCards resData={restObjList[0]} />
        }
      </div>
    </div>
  );
};

export default Body;
