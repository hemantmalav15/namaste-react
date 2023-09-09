import React from 'react';
import ReactDOM from 'react-dom/client';

/*
* Header
*   - Logo
*   - Nav items (Right side bar)
*   - Cart
* Body
*   - Search bar
*   - RestaurantList
*      - RestaurantCards 
*          - Image
*          - Name
*          - Rating
*          - Cusines
* Footer
*   - links
*   - Copyright
*/
const Title = () => (
    <h1 id='title' key="h1">
        Swiggy
    </h1>
);

const Header = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}
// config driven UI -> tell the interviewer 
const burgerKing = {
    name: "Burger King",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
    cusines: ["Burger", "American"],
    rating: "4.2"
}
// Optional Chaining -> ?...
const RestaurantCard = () => {
    return (
        <div className="card">
            <img src={burgerKing.image} alt="food-image" />
            <h2>{burgerKing.name}</h2>
            <h3>{burgerKing.cusines.join(", ")}</h3>
            <h4>{burgerKing.rating} stars</h4>
        </div>
    );
}
const Body = () => {
    return (
        <div className='container'>
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
        </div>
    );
}
const Footer = () => {
    return <div>footer</div>
}
const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// passing the react element inside root
root.render(<AppLayout />);