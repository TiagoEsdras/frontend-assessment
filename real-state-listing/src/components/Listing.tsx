import { useContext } from "react";
import { ListingContext } from "../contexts/ListingContext";
import { Link } from "react-router-dom";
import ListingCard from "./ListingCard";

const Listing = () => {
  const context = useContext(ListingContext);
  const { listings } = context!;

  return (
    <section id="listing" className="mb-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {
            listings.map((listing, index) => {
              return (
                <Link to={`listing/${listing.id}`} key={index}>
                  <ListingCard listing={listing} />
                </Link>
              )
            })
          }
        </div>
      </div>
    </section>
  );
};

export default Listing;