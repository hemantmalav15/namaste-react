import { useEffect, useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
// Optional Chaining -> ?..
function filterData(searchText, restaurants) {
    // it will go one by one on each restaurant and filter those on searchText
    return restaurants.filter((restaurant) => restaurant?.data?.name.toLowerCase()?.includes(searchText.toLowerCase()));
}
const Body = () => {
    // we cannot modify variable like javascript in react has something diffrent i.e. state variable or hooks
    // hooks are just a normal function at the end of the day
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantList);
    const [restaurants, setRestaurants] = useState(restaurantList);

    useEffect(() => {
        // API CALL -> This is the best place to make an API Call, It renders Once and if the dependency uodates
        getRestaurants();
    }, []);

    async function getRestaurants() {
        let data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
        let json = await data.json();
        console.log(json)
        let res = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        // console.log(res)
        setRestaurants(res);
        setFilteredRestaurants(res);
    }

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <button
                    className="search-btn"
                    onClick={() => {
                        // we want to filter data when button is clicked, but we can't update the data directly we have to use state variable only then the components will rerendered
                        const data = filterData(searchText, restaurants);
                        // when we got filtered data we have to update it on UI
                        setFilteredRestaurants(data);
                    }}>
                    Search
                </button>
            </div>
            <div className='restaurant-list'>
                {
                    filteredRestaurants.map((restaurant, index) => {
                        return <RestaurantCard {...restaurant?.info} key={index} />
                    })
                }
            </div>
        </>
    );
}
export default Body;