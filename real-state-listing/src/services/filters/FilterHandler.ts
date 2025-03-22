import { ListingDetailEntity } from "../../models/ListingDetailEntity";

export abstract class FilterHandler {
  protected nextHandler: FilterHandler | null = null;

  public setNext(handler: FilterHandler): FilterHandler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(listings: ListingDetailEntity[]): ListingDetailEntity[] {
    if (this.nextHandler) {
      return this.nextHandler.handle(listings);
    }
    return listings;
  }

  protected abstract applyFilter(listings: ListingDetailEntity[]): ListingDetailEntity[];
}
