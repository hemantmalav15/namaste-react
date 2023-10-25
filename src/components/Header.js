import { Link } from "react-router-dom";
const Title = () => (
    <h1 id='title' key="h1">
        {/* Rajasthani Delights */}
        {/* Khamma Ghani Sa -> Restaurant */}
        Food Plaza
    </h1>
);

const Header = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Cart</a></li>
                </ul>
            </div>
        </div>
    );
}
export default Header;