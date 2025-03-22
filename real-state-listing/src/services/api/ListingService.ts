import 'reflect-metadata';
import { plainToInstance } from 'class-transformer';

import { ListingDetailEntity } from "../../models/ListingDetailEntity";

import listings from "../../data/listings.json";

export const getListings = async (): Promise<{ data: ListingDetailEntity[] }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {        
        const response = plainToInstance(ListingDetailEntity, listings);
        resolve({ data: response });
      } catch (error) {       
        console.error('Error fetching listings data:', error);
        reject(error);
      }
    }, 1500);
  });
};
