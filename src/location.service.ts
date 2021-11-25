import { AxiosInstance } from 'axios';
import { GetAllLocationsParams, Location, Photo } from './types/location';

const endpoint = 'locations';

export default (axios: AxiosInstance) => {
  return {
    create: (location: Location) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { createLocation },
            },
          } = await axios.post(endpoint, { input: location });
          if (!createLocation.success) {
            return reject(createLocation.error);
          }
          resolve(createLocation);
        } catch (error: any) {
          reject(error.response.data || error);
        }
      });
    },
    list: (params?: GetAllLocationsParams) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { allLocations },
            },
          } = await axios.get(endpoint, { params });
          resolve(allLocations);
        } catch (error: any) {
          reject(error.response.data || error);
        }
      });
    },
    getByIds: (ids: Array<string>) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { getLocationsByIds },
            },
          } = await axios.get('locations-by-ids', { params: { ids } });
          resolve(getLocationsByIds);
        } catch (error) {
          reject(error);
        }
      });
    },
    search: (query: string) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { searchLocations },
            },
          } = await axios.get(endpoint + '/search', {
            params: { query },
          });
          resolve(searchLocations);
        } catch (error) {
          reject(error);
        }
      });
    },
    addPhotos: (locationId: string, photos: Array<Photo>) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { addLocationPhotos },
              errors,
            },
          } = await axios.post(`${endpoint}/photos`, {
            input: { locationId, photos },
          });
          if (errors) {
            return reject(errors);
          }
          resolve(addLocationPhotos);
        } catch (error) {
          reject(error);
        }
      });
    },
    deletePhotos: (locationId: string, photoIds: Array<string>) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { removeLocationPhotos },
              errors,
            },
          } = await axios.post(`${endpoint}/photos/remove`, {
            input: { locationId, photoIds },
          });
          if (errors) {
            return reject(errors);
          }
          if (removeLocationPhotos.errors) {
            return reject(removeLocationPhotos.errors);
          }
          resolve(removeLocationPhotos);
        } catch (error) {
          reject(error);
        }
      });
    },
    updateLocation: (id: String, locationData: Location) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { updateLocation },
              errors,
            },
          } = await axios.post(`${endpoint}/update`, {
            input: { ...locationData, id },
          });
          if (errors) {
            return reject(errors);
          }
          if (updateLocation.error) {
            return reject(updateLocation.error);
          }
          resolve(updateLocation);
        } catch (error) {
          reject(error);
        }
      });
    },
    starPhotos: (
      locationId: string,
      photoIds: Array<string>,
      starred: boolean
    ) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { starUnstarLocationPhotos },
              errors,
            },
          } = await axios.post(`${endpoint}/photos/star`, {
            input: {
              locationId,
              photoIds,
              starred,
            },
          });
          if (errors) {
            return reject(errors);
          }
          if (starUnstarLocationPhotos.error) {
            return reject(starUnstarLocationPhotos.error);
          }
          resolve(starUnstarLocationPhotos);
        } catch (error) {
          reject(error);
        }
      });
    },
    archiveLocation: (ids: Array<string>) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { archiveLocations },
              errors,
            },
          } = await axios.post(endpoint + '/archive', {
            input: { locationIds: ids },
          });
          if (errors) {
            return reject(errors);
          }
          if (archiveLocations.error) {
            return reject(archiveLocations.error);
          }
          resolve(archiveLocations);
        } catch (error) {
          reject(error);
        }
      });
    },
    activateLocation: (ids: Array<string>) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { activateLocations },
              errors,
            },
          } = await axios.post(endpoint + '/activate', {
            input: { ids },
          });
          if (errors) {
            return reject(errors);
          }
          if (activateLocations.error) {
            return reject(activateLocations.error);
          }
          resolve(activateLocations);
        } catch (error) {
          reject(error);
        }
      });
    },
    subscriptions: () => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { activeSubscriptions },
            },
          } = await axios.get('subscriptions');
          resolve(activeSubscriptions);
        } catch (error) {
          reject(error);
        }
      });
    },
  };
};
