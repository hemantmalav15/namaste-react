import { IMG_CDN_URL } from "../constants";
const RestrauntCard = ({ name, area, cloudinaryImageId, cuisines, address }) => {
    return (
        <div className="card">
            <img src={IMG_CDN_URL + cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{area}</h4>
            {/* <p>{address}</p> */}
        </div>
    );
};
export default RestrauntCard;