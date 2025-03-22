import { FilterHandler } from './FilterHandler';
import { ListingDetailEntity } from '../../models/ListingDetailEntity';

export class ParkingFilter extends FilterHandler {
  private parkingFilterSelected: number | string | undefined;

  constructor(parkingFilterSelected: number | string | undefined) {
    super();
    this.parkingFilterSelected = parkingFilterSelected;
  }

  protected applyFilter(listings: ListingDetailEntity[]): ListingDetailEntity[] {
    if (!this.parkingFilterSelected || this.parkingFilterSelected === 'Select...') {
      return listings;
    }

    if (this.parkingFilterSelected === '5+') {
      return listings.filter(listing => listing.parking >= 5);
    }
    return listings.filter(listing => listing.parking === this.parkingFilterSelected);
  }

  public handle(listings: ListingDetailEntity[]): ListingDetailEntity[] {
    const filteredListings = this.applyFilter(listings);
    return super.handle(filteredListings);
  }
}
