import { Restaurant } from "@/types";
import { Link } from "react-router-dom";
import { AspectRatio } from "./ui/aspect-ratio";
import { Dot } from "lucide-react";

type Props = {
  restaurant: Restaurant;
};

const SearchResultsCard = ({ restaurant }: Props) => {
  return (
    <Link
      to={`/detail/${restaurant._id}`}
      className="grid lg:grid grid-cols-[2fr_3fr] gap-5 group"
    >
      <AspectRatio ratio={16 / 6}>
        <img
          src={restaurant.imageUrl}
          className="rounded-md w-full h-full object-cover"
        />
      </AspectRatio>
      <div id="card-content" className="grid md:grid-cols-2 gap-2">
        <div className="flex flex-row flex-wrap">
          {restaurant.cuisines.map((item, index) => (
            <span className="flex">
              <span>{item}</span>
              {index < restaurant.cuisines.length - 1 && <Dot />}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default SearchResultsCard;
