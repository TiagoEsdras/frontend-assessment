import { FilterHandler } from './FilterHandler';
import { ListingDetailEntity } from '../../models/ListingDetailEntity';

export class BathroomsFilter extends FilterHandler {
  private bathroomsFilterSelected: number | string | undefined;

  constructor(bathroomsFilterSelected: number | string | undefined) {
    super();
    this.bathroomsFilterSelected = bathroomsFilterSelected;
  }

  protected applyFilter(listings: ListingDetailEntity[]): ListingDetailEntity[] {
    if (!this.bathroomsFilterSelected || this.bathroomsFilterSelected === 'Select...') {
      return listings;
    }

    if (this.bathroomsFilterSelected === '3+') {
      return listings.filter(listing => listing.bathrooms >= 3);
    }

    return listings.filter(listing => listing.bathrooms === this.bathroomsFilterSelected);
  }

  public handle(listings: ListingDetailEntity[]): ListingDetailEntity[] {
    const filteredListings = this.applyFilter(listings);
    return super.handle(filteredListings);
  }
}
