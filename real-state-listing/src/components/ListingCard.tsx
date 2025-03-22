import { ListingDetailEntity } from "../models/ListingDetailEntity";
import DefaultImage from '../assets/shared/default-image.png';
import { FaBath, FaBed } from "react-icons/fa";

interface ListingCardProps {
  listing: ListingDetailEntity;
}

const ListingCard: React.FC<ListingCardProps> = ({
  listing,
}) => {
  const {
    pictureURL,
    title,
    yearBuilt,
    salePrice,
    location,
    bedrooms,
    bathrooms
  } = listing;
  return (
    <div className="bg-light-gray shadow-lg p-5 rounded-tl-4xl w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition" >
      <img src={pictureURL ?? DefaultImage} alt={listing.title} className="rounded-tl-4xl rounded-br-4xl mb-8" />
      <div className="mb-4 flex gap-x-2 text-sm">
        <div className="bg-gold rounded-full text-dark-blue px-3">{location}</div>
        <div className="bg-dark-blue rounded-full text-off-white px-3">{yearBuilt}</div>
      </div>
      <div className="flex gap-x-4 my-4">
        <div className="flex items-center text-dark-blue gap-1">
          <div className="text-[20px]">
            <FaBed />
          </div>
          <div>{bedrooms}</div>
        </div>
        <div className="text-dark-blue gap-1 text-[20px]">
          |
        </div>
        <div className="flex items-center text-dark-blue gap-1">
          <div className="text-[20px]">
            <FaBath />
          </div>
          <div>{bathrooms}</div>
        </div>
      </div>
      <div className="text-dark-gray text-[15px] font-semibold maz-w-[260px] mb-1">{title}</div>
      <div className="text-dark-gray font-thin italic mb-2">
        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(salePrice)}
      </div>
    </div>
  );
};

export default ListingCard;