import { BedroomsFilter } from './BedroomsFilter';
import { ListingDetailEntity } from '../../models/ListingDetailEntity';
import { ParkingFilter } from './ParkingFilter';
import { BathroomsFilter } from './BathroomsFilter';

export class FilterChain {
  public applyFilters(
    listings: ListingDetailEntity[],
    bedroomsFilterSelected: number | string | undefined,
    bathroomsFilterSelected: number | string | undefined,
    parkingFilterSelected: number | string | undefined
  ): ListingDetailEntity[] {
    const bedroomsFilter = new BedroomsFilter(bedroomsFilterSelected);
    const bathroomsFilter = new BathroomsFilter(bathroomsFilterSelected);
    const parkingFilter = new ParkingFilter(parkingFilterSelected);   
    bedroomsFilter
      .setNext(bathroomsFilter)
      .setNext(parkingFilter);
    return bedroomsFilter.handle(listings);
  }
}
