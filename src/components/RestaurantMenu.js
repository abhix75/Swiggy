import ShimmerUI from "./shimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const ResInfo = useRestaurantMenu(resId);

  if (ResInfo === null) return <ShimmerUI />;

  console.log(ResInfo?.cards[0]?.card?.card?.info);
  console.log(
    ResInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card
  );

  const { name, cloudinaryImageId, costForTwoMessage, cuisines } =
    ResInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    ResInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card;

  const categories =
    ResInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("categories", categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h3>
        <p className="font-bold text-lg">
          {cuisines.join(", ")} {costForTwoMessage}
        </p>
      </h3>
      {/* Add any other relevant information you want to display */}
      {categories.map((category) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category?.card.card}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
