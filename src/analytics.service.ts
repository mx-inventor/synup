import { AxiosInstance } from "axios";
import { Analytics } from "./types/analytics";

const endpoint = "locations";

export default (axios: AxiosInstance) => {
  return {
    bing: (locationId: string, params?: Analytics) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { bingInsights },
              errors,
            },
          } = await axios.get(`${endpoint}/${locationId}/bing-analytics`, {
            params,
          });
          if (errors) {
            return reject(errors);
          }
          if (bingInsights.error) {
            return reject(bingInsights.error);
          }
          resolve(bingInsights);
        } catch (error) {
          reject(error);
        }
      });
    },
    google: (locationId: string, params?: Analytics) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { googleInsights },
              errors,
            },
          } = await axios.get(`${endpoint}/${locationId}/google-analytics`, {
            params,
          });
          if (errors) {
            return reject(errors);
          }
          if (googleInsights.error) {
            return reject(googleInsights.error);
          }
          resolve(googleInsights);
        } catch (error) {
          reject(error);
        }
      });
    },
    facebook: (locationId: string, params?: Analytics) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { facebookInsights },
              errors,
            },
          } = await axios.get(`${endpoint}/${locationId}/facebook-analytics`, {
            params,
          });
          if (errors) {
            return reject(errors);
          }
          if (facebookInsights.error) {
            return reject(facebookInsights.error);
          }
          resolve(facebookInsights);
        } catch (error) {
          reject(error);
        }
      });
    },
  };
};
