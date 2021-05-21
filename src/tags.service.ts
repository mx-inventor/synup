import { AxiosInstance } from "axios";

const endpoint = "locations/tags";

export default (axios: AxiosInstance) => {
  return {
    addLocation: (locationId: string, tag: string) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { addTag },
              errors,
            },
          } = await axios.post(`${endpoint}`, {
            input: {
              locationId,
              tag,
            },
          });
          if (errors) {
            return reject(errors);
          }
          if (addTag.errors) {
            return reject(addTag.errors);
          }
          resolve(addTag);
        } catch (error) {
          reject(error);
        }
      });
    },
    removeLocation: (locationId: string, tag: string) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { removeTag },
              errors,
            },
          } = await axios.post(`${endpoint}/remove`, {
            input: {
              locationId,
              tag,
            },
          });
          if (errors) {
            return reject(errors);
          }
          if (removeTag.errors) {
            return reject(removeTag.errors);
          }
          resolve(removeTag);
        } catch (error) {
          reject(error);
        }
      });
    },
  };
};
