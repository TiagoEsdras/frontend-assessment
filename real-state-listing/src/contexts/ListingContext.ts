import { createContext } from "react";
import { ListingDetailEntity } from "../models/ListingDetailEntity";

interface ListingContextType {
  listings: ListingDetailEntity[];
  setListings: React.Dispatch<React.SetStateAction<ListingDetailEntity[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}


export const ListingContext = createContext<ListingContextType | undefined>(undefined);