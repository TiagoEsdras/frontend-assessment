
import { formatDate } from "../utils/FormatDate";
import { FaBath, FaBed, FaCar, FaExpandArrowsAlt, } from "react-icons/fa";
import { ListingDetailEntity } from "../models/ListingDetailEntity";

interface ListingDetailProps {
  listing: ListingDetailEntity;
}

const ListingDetail: React.FC<ListingDetailProps> = ({ listing }) => {
  const {
    pictureURL,
    title,
    yearBuilt,
    salePrice,
    location,
    bedrooms,
    dateListed,
    bathrooms,
    parking,
    description,
    sqft,
    id
  } = listing;

  return (
    <section id={`listing-detail-${id}`}>
      <div className="container mx-auto min-h-[800px] mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
          <div>
            <h2 className="text-2xl font-semibold text-dark-blue">{title}</h2>
            <h3 className="text-lg mb-4 text-dark-gray">{location}</h3>
          </div>
          <div className="mb-4 lg:mb-0 gap-x-2 flex flex-col text-sm text-dark-gray items-start lg:items-end">
            <div className="text-dark-gray text-3xl font-thin italic">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(salePrice)}</div>
            <div>Date Listed: {formatDate(dateListed)}</div>
            <div>Built in: {yearBuilt}</div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="max-w-[768px]">
            <div className="mb-8">
              <img className="w-full" src={pictureURL} alt={title} />
            </div>
            <div className="text-dark-blue flex justify-between mb-6 gap-x-2 px-6">
              <div className="flex items-center">
                <FaBed className="text-2xl mr-[18px]" />
                <div>{bedrooms}</div>
              </div>
              <div>|</div>
              <div className="flex items-center">
                <FaBath className="text-2xl mr-[18px]" />
                <div>{bathrooms}</div>
              </div>
              <div>|</div>
              <div className="flex items-center">
                <FaCar className="text-2xl mr-[18px]" />
                <div>{parking}</div>
              </div>
              <div>|</div>
              <div className="flex items-center">
                <FaExpandArrowsAlt className="text-2xl mr-[18px]" />
                <div>{sqft} sqft</div>
              </div>
            </div>
            <div className="text-justify">{description}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ListingDetail;
