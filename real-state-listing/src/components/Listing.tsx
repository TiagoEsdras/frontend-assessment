import { useContext } from "react";
import { ListingContext } from "../contexts/ListingContext";
import { Link } from "react-router-dom";
import ListingDetail from "./ListingDetail";

const Listing = () => {
  const context = useContext(ListingContext);
  const { listings } = context!;

  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div>
          {
            listings.map((listing, index) => {
              return (
                <Link to={`listing/${listing.id}`} key={index}>
                  <ListingDetail />
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