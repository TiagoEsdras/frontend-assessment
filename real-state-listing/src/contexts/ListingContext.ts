import { createContext } from "react";
import { ListingDetailEntity } from "../models/ListingDetailEntity";

interface ListingContextType {
  listings: ListingDetailEntity[];
  setListings: React.Dispatch<React.SetStateAction<ListingDetailEntity[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  
  bedroomsFilterValues: (number | string)[];
  setBedroomFilterValues: React.Dispatch<React.SetStateAction<(number | string)[]>>;
  
  bedroomsFilterSelected: (number | string | undefined);
  setBedroomFilterSelected: React.Dispatch<React.SetStateAction<(number | string | undefined)>>;
 
  bathroomsFilterValues: (number | string)[];
  setBathroomFilterValues: React.Dispatch<React.SetStateAction<(number | string)[]>>;

  bathroomsFilterSelected: (number | string | undefined);
  setBathroomFilterSelected: React.Dispatch<React.SetStateAction<(number | string | undefined)>>;  
  
  parkingFilterValues: (number | string)[];
  setParkingFilterValues: React.Dispatch<React.SetStateAction<(number | string)[]>>;

  parkingFilterSelected: (number | string | undefined);
  setParkingFilterSelected: React.Dispatch<React.SetStateAction<(number | string | undefined)>>;

  handleSearch: () => void;
}


export const ListingContext = createContext<ListingContextType | undefined>(undefined);