import { ReactNode, useCallback, useEffect, useState } from "react";

import { ListingDetailEntity } from "../models/ListingDetailEntity";
import { getListings } from "../services/api/ListingService";
import { ListingContext } from "./ListingContext";
import { FilterChain } from "../services/filters/FilterChain";

interface ListingContextProviderProps {
  children: ReactNode;
}

const ListingContextProvider = ({ children }: ListingContextProviderProps) => {
  const [listings, setListings] = useState<ListingDetailEntity[]>([]);
  const [originalListings, setOriginalListings] = useState<ListingDetailEntity[]>([]);
  const [loading, setLoading] = useState(false);

  const [bedroomsFilterValues, setBedroomFilterValues] = useState<(string | number)[]>([]);
  const [bathroomsFilterValues, setBathroomFilterValues] = useState<(string | number)[]>([]);
  const [parkingFilterValues, setParkingFilterValues] = useState<(string | number)[]>([]);

  const [bedroomsFilterSelected, setBedroomFilterSelected] = useState<(string | number)>();
  const [bathroomsFilterSelected, setBathroomFilterSelected] = useState<(string | number)>();
  const [parkingFilterSelected, setParkingFilterSelected] = useState<(string | number)>();


  const fetchListings = async (): Promise<void> => {
    try {
      setLoading(true);
      const result = await getListings();
      setListings(result.data);
      setOriginalListings(result.data);
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

  const handleSearch = useCallback((): void => {
    const filterChain = new FilterChain();
    const filteredListings = filterChain.applyFilters(
      originalListings,
      bedroomsFilterSelected,
      bathroomsFilterSelected,
      parkingFilterSelected
    );
    setListings(filteredListings);
  }, [originalListings, bedroomsFilterSelected, bathroomsFilterSelected, parkingFilterSelected]);



  useEffect(() => {
    const values: (number | string)[] = ['Select...', 1, 2, 3, '4+'];
    setBedroomFilterValues(values);
    setBedroomFilterSelected(bedroomsFilterSelected ? bedroomsFilterSelected : values[0]);
  }, [bedroomsFilterSelected]);

  useEffect(() => {
    const values: (number | string)[] = ['Select...', 1, 2, '3+'];
    setBathroomFilterValues(values);
    setBathroomFilterSelected(bathroomsFilterSelected ? bathroomsFilterSelected : values[0]);

  }, [bathroomsFilterSelected]);

  useEffect(() => {
    const values: (number | string)[] = ['Select...', 1, 2, 3, 4, '5+'];
    setParkingFilterValues(values);
    setParkingFilterSelected(parkingFilterSelected ? parkingFilterSelected : values[0]);

  }, [parkingFilterSelected]);



  return (
    <ListingContext.Provider value={{
      listings, setListings,
      loading, setLoading,
      bedroomsFilterValues, setBedroomFilterValues,
      bathroomsFilterValues, setBathroomFilterValues,
      parkingFilterValues, setParkingFilterValues,
      bedroomsFilterSelected, setBedroomFilterSelected,
      bathroomsFilterSelected, setBathroomFilterSelected,
      parkingFilterSelected, setParkingFilterSelected,
      handleSearch
    }}>
      {children}
    </ListingContext.Provider>
  );
};

export default ListingContextProvider;
