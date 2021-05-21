import { AxiosInstance } from "axios";

const endpoint = "countries";

export default (axios: AxiosInstance) => {
  return {
    getPlaces: (params: any) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { supportedCountries },
              errors,
            },
          } = await axios.get(endpoint, params);
          if (errors) {
            return reject(errors);
          }
          if (supportedCountries.error) {
            return reject(supportedCountries.error);
          }
          resolve(supportedCountries);
        } catch (error) {
          reject(error);
        }
      });
    },
  };
};
