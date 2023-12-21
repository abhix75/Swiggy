import ResList from "../Utils/reslist";
import ResturantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUI from "./shimmerUI";
const Body = () => {

    const [ListofRestaurant,setListofRestaurant]=useState([]);
    
    useEffect(()=>{
    fetchData();
    },[]);
    
    const fetchData = async ()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
        const json = await data.json();
        console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListofRestaurant(json?.data?.cards[2]?.card.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(ListofRestaurant && ListofRestaurant.length === 0){
           return <ShimmerUI/>
    }
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                           onClick={() => {
                           const filteredList = ListofRestaurant.filter(
                            (res) => res.info.avgRating > 4.5
            );
            setListofRestaurant(filteredList);
          }}>Top Rated restaurant</button>
            </div>
            <div className="res-container">
                {
                    ListofRestaurant.map((data) => (
                        <ResturantCard key={data.info.id} resData={data} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body;