import { Exposed } from "class-transform";

export class ListingDetailEntity {
    id = Exposed.alias("Id").number();
    dateListed = Exposed.alias("DateListed").string();
    title = Exposed.alias("Title").string();
    description = Exposed.alias("Description").string();
    salePrice = Exposed.alias("Sale Price").number();
    thumbnailURL = Exposed.alias("ThumbnailURL").string();
    pictureURL = Exposed.alias("PictureURL").string();
    location = Exposed.alias("Location").string();
    sqft = Exposed.alias("Sqft").number();
    bedrooms = Exposed.alias("Bedrooms").number();
    bathrooms = Exposed.alias("Bathrooms").number();
    parking = Exposed.alias("Parking").number();
    yearBuilt = Exposed.alias("YearBuilt").number();
}