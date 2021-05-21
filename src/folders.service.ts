import { AxiosInstance } from "axios";

const endpoint = "locations/folders";

export default (axios: AxiosInstance) => {
  return {
    addLocations: (name: string, locationIds: Array<string>) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { addLocationsToFolder },
              errors,
            },
          } = await axios.post(`${endpoint}`, {
            input: {
              name,
              locationIds,
            },
          });
          if (errors) {
            return reject(errors);
          }
          if (addLocationsToFolder.errors) {
            return reject(addLocationsToFolder.errors);
          }
          resolve(addLocationsToFolder);
        } catch (error) {
          reject(error);
        }
      });
    },

    rename: (name: string, id: Array<string>) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { renameFolder },
              errors,
            },
          } = await axios.post(`${endpoint}/rename`, {
            input: {
              name,
              id,
            },
          });
          if (errors) {
            return reject(errors);
          }
          if (renameFolder.errors) {
            return reject(renameFolder.errors);
          }
          resolve(renameFolder);
        } catch (error) {
          reject(error);
        }
      });
    },

    removeLocation: (locationIds: Array<string>) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { deleteLocationsFromFolder },
              errors,
            },
          } = await axios.post(`${endpoint}/remove`, {
            input: {
              locationIds,
            },
          });
          if (errors) {
            return reject(errors);
          }
          if (deleteLocationsFromFolder.errors) {
            return reject(deleteLocationsFromFolder.errors);
          }
          resolve(deleteLocationsFromFolder);
        } catch (error) {
          reject(error);
        }
      });
    },

    deleteFolder: (name: string) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { deleteFolder },
              errors,
            },
          } = await axios.post(`folders/remove`, {
            input: {
              name,
            },
          });
          if (errors) {
            return reject(errors);
          }
          if (deleteFolder.errors) {
            return reject(deleteFolder.errors);
          }
          resolve(deleteFolder);
        } catch (error) {
          reject(error);
        }
      });
    },
  };
};
