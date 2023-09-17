import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
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
root.render(<AppLayout />);