import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ListingContext } from "../contexts/ListingContext";
import { formatDate } from "../assets/utils/FormatDate";
import Loading from "./Loading";
import { FaBath, FaBed, FaCar, FaExpandArrowsAlt, } from "react-icons/fa";

const ListingDetail = () => {
  const { id } = useParams();
  const context = useContext(ListingContext);
  const { listings, loading } = context!;

  const listing = listings.find(listing => listing.id == parseInt(id!));

  if (loading) {
    return (
      <Loading />
    );
  }

  if (!listing) {
    return (
      <div>Not Found</div>
    );
  }

  return (
    <section id={`listing-detail-${id}`}>
      <div className="px-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 max-w-[768px]">
          <div>
            <h2 className="text-2xl font-semibold text-dark-blue">{listing.title}</h2>
            <h3 className="text-lg mb-4 text-dark-gray">{listing.location}</h3>
          </div>
          <div className="mb-4 lg:mb-0 gap-x-2 flex flex-col text-sm text-dark-gray items-start lg:items-end">
            <div className="text-dark-gray text-3xl font-thin italic">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(listing.salePrice)}</div>
            <div>Date Listed: {formatDate(listing.dateListed)}</div>
            <div>Built in: {listing.yearBuilt}</div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="max-w-[768px]">
            <div className="mb-8">
              <img width="768px" src={listing.pictureURL} alt={listing.title} />
            </div>
            <div className="text-dark-blue flex justify-between mb-6 px-6">
              <div className="flex  gap-x-2 items-center">
                <FaBed className="text-2xl mr-[18px]" />
                <div>{listing.bedrooms}</div>
              </div>
              <div>|</div>
              <div className="flex  gap-x-2 items-center">
                <FaBath className="text-2xl mr-[18px]" />
                <div>{listing.bathrooms}</div>
              </div>
              <div>|</div>
              <div className="flex  gap-x-2 items-center">
                <FaCar className="text-2xl mr-[18px]" />
                <div>{listing.parking}</div>
              </div>
              <div>|</div>
              <div className="flex gap-x-2 items-center">
                <FaExpandArrowsAlt className="text-2xl mr-[18px]" />
                <div>{listing.sqft} sqft</div>
              </div>
            </div>
            <div className="text-justify">{listing.description}</div>
          </div>
        </div>
      </div>
    </section>
  );

}

export default ListingDetail;
