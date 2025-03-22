import { BedroomsFilter } from './BedroomsFilter';
import { ListingDetailEntity } from '../../models/ListingDetailEntity';
import { ParkingFilter } from './ParkingFilter';
import { BathroomsFilter } from './BathroomsFilter';
import { SalePriceFilter } from './SalePriceFilter';

export class FilterChain {
  public applyFilters(
    listings: ListingDetailEntity[],
    bedroomsFilterSelected: number | string | undefined,
    bathroomsFilterSelected: number | string | undefined,
    parkingFilterSelected: number | string | undefined,
    salePriceFilterSelected: number[]
  ): ListingDetailEntity[] {
    const bedroomsFilter = new BedroomsFilter(bedroomsFilterSelected);
    const bathroomsFilter = new BathroomsFilter(bathroomsFilterSelected);
    const parkingFilter = new ParkingFilter(parkingFilterSelected);
    const salePriceFilter = new SalePriceFilter(salePriceFilterSelected);
    bedroomsFilter
      .setNext(bathroomsFilter)
      .setNext(parkingFilter)
      .setNext(salePriceFilter);

    return bedroomsFilter.handle(listings);
  }
}
