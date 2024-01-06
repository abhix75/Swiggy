import ShimmerUI from "./shimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const ResInfo = useRestaurantMenu(resId);

  if (ResInfo === null) return <ShimmerUI />;

  console.log(ResInfo?.cards[0]?.card?.card?.info);
  console.log(ResInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card);

  const { name, cloudinaryImageId, costForTwoMessage, cuisines } = ResInfo?.cards[0]?.card?.card?.info;
  const { itemCards } = ResInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card;

  console.log(name);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3><p>{cuisines.join(", ")} {costForTwoMessage}</p></h3>
      {/* Add any other relevant information you want to display */}
      <h2>Menu</h2>
      <ul>
        {itemCards && itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name} ₹{item.card.info.price/100}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
