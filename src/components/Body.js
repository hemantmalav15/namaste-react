import { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
// Optional Chaining -> ?..
function filterData(searchText, restaurants) {
    // it will go one by one on each restaurant and filter those on searchText
    return restaurants.filter((restaurant) => restaurant.data.name.includes(searchText));
}
const Body = () => {
    // we cannot modify variable like javascript in react has something diffrent i.e. state variable or hooks
    // hooks are just a normal function at the end of the day
    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState(restaurantList);

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
                        setRestaurants(data);
                    }}>
                    Search
                </button>
            </div>
            <div className='restaurant-list'>
                {
                    restaurantList.map((restaurant) => {
                        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                    })
                }
            </div>
        </>
    );
}
export default Body;