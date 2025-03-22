import { FilterHandler } from './FilterHandler';
import { ListingDetailEntity } from '../../models/ListingDetailEntity';

export class BedroomsFilter extends FilterHandler {
  private bedroomsFilterSelected: number | string | undefined;

  constructor(bedroomsFilterSelected: number | string | undefined) {
    super();
    this.bedroomsFilterSelected = bedroomsFilterSelected;
  }

  protected applyFilter(listings: ListingDetailEntity[]): ListingDetailEntity[] {
    if (!this.bedroomsFilterSelected || this.bedroomsFilterSelected === 'Select...') {
      return listings;
    }

    if (this.bedroomsFilterSelected === '4+') {
      return listings.filter(listing => listing.bedrooms >= 4);
    }

    return listings.filter(listing => listing.bedrooms === this.bedroomsFilterSelected);
  }

  public handle(listings: ListingDetailEntity[]): ListingDetailEntity[] {
    const filteredListings = this.applyFilter(listings);
    return super.handle(filteredListings);
  }
}
