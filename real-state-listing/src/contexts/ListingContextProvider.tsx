import { ReactNode, useEffect, useState } from "react";
import { ListingContext } from "./ListingContext";
import { ListingDetailEntity } from "../models/ListingDetailEntity";
import { getListings } from "../services/api/ListingService";

interface ListingContextProviderProps {
  children: ReactNode;
}

const ListingContextProvider = ({ children }: ListingContextProviderProps) => {
  const [listings, setListings] = useState<ListingDetailEntity[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchListings = async (): Promise<void> => {
    try {
      setLoading(true);
      const result = await getListings();
      setListings(result.data);
    } catch (error) {
      console.error('An error occurred while fetching data:', error);
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchListings();
  }, []);

  return (
    <ListingContext.Provider value={{
      listings, setListings,
      loading, setLoading
    }}>
      {children}
    </ListingContext.Provider>
  );
};

export default ListingContextProvider;
