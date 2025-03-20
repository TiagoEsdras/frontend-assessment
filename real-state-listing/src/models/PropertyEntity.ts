import { Expose } from 'class-transformer';

export class PropertyEntity {
    id!: number;
    dateListed!: string;
    title!: string;
    description!: string;
    @Expose({ name: 'Sale Price' })
    salePrice!: number;
    thumbnailURL!: string;
    pictureURL!: string;
    location!: string;
    sqft!: number;
    bedrooms!: number;
    bathrooms!: number;
    parking!: number;
    yearBuilt!: number;
}