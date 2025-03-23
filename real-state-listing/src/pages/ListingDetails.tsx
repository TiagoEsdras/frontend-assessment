import { useContext } from "react";
import Form from "../components/Form";
import ListingDetail from "../components/ListingDetail";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import { ListingContext } from "../contexts/ListingContext";

const ListingDetails = () => {
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
    <div className="flex flex-col gap-4 lg:flex-row px-4">
      <div className="lg:min-w-[768px]">
        <ListingDetail listing={listing} />
      </div>
      <div className="w-full">
        <Form />
      </div>
    </div>
  );
};

export default ListingDetails;