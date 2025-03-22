import { FilterHandler } from './FilterHandler';
import { ListingDetailEntity } from '../../models/ListingDetailEntity';

export class SalePriceFilter extends FilterHandler {
  private salePriceFilterSelected: number[];

  constructor(salePriceFilterSelected: number[]) {
    super();
    this.salePriceFilterSelected = salePriceFilterSelected;
  }

  protected applyFilter(listings: ListingDetailEntity[]): ListingDetailEntity[] {
    return listings.filter(listing => listing.salePrice >= this.salePriceFilterSelected[0] && listing.salePrice <= this.salePriceFilterSelected[1]);
  }

  public handle(listings: ListingDetailEntity[]): ListingDetailEntity[] {
    const filteredListings = this.applyFilter(listings);
    return super.handle(filteredListings);
  }
}
