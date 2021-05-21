import { AxiosInstance } from "axios";
import { Listings } from "./types/listings";

const endpoint = "locations";

export default (axios: AxiosInstance) => {
  return {
    getPremium: (locationId: Listings) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: { data, errors },
          } = await axios.get(`${endpoint}/${locationId}/listings/premium`);
          if (errors) {
            return reject(errors);
          }
          if (data.listingsForLocation.errors) {
            return reject(data.listingsForLocation.errors);
          }
          resolve(data.listingsForLocation);
        } catch (error) {
          reject(error);
        }
      });
    },
    getAdittional: (locationId: Listings) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: { data, errors },
          } = await axios.get(`${endpoint}/${locationId}/listings/additional`);
          if (errors) {
            return reject(errors);
          }
          if (data.listingsForLocation.errors) {
            return reject(data.listingsForLocation.errors);
          }
          resolve(data.listingsForLocation);
        } catch (error) {
          reject(error);
        }
      });
    },
  };
};
