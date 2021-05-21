import { AxiosInstance } from "axios";
import { InteractionParams, Site } from "./types/interactions";

const endpoint = "locations";

export default (axios: AxiosInstance) => {
  return {
    getByLocationId: (locationId: string, params?: InteractionParams) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { interactions },
              errors,
            },
          } = await axios.get(`${endpoint}/${locationId}/reviews`, { params });
          if (errors) {
            return reject(errors);
          }
          if (interactions.error) {
            return reject(interactions.error);
          }
          resolve(interactions);
        } catch (error) {
          reject(error);
        }
      });
    },
    getById: (intractionByIds?: Array<string>) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { interactionDetails },
              errors,
            },
          } = await axios.get(`${endpoint}/reviewDetails`, {
            params: { interactionIds: intractionByIds },
          });
          if (errors) {
            return reject(errors);
          }
          if (interactionDetails.error) {
            return reject(interactionDetails.error);
          }
          resolve(interactionDetails);
        } catch (error) {
          reject(error);
        }
      });
    },
    respondToAnInteraction: (
      interactionId: string,
      responseContent: string
    ) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { respondToInteraction },
              errors,
            },
          } = await axios.post(`${endpoint}/reviews/respond`, {
            interactionId,
            responseContent,
          });
          if (errors) {
            return reject(errors);
          }
          if (respondToInteraction.error) {
            return reject(respondToInteraction.error);
          }
          if (respondToInteraction.errors) {
            return reject(respondToInteraction.errors);
          }
          resolve(respondToInteraction);
        } catch (error) {
          reject(error);
        }
      });
    },
    getSourcesByLocation: (locationId: string) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { interactionsSetting },
              errors,
            },
          } = await axios.get(`${endpoint}/${locationId}/reviews/settings`);
          if (errors) {
            return reject(errors);
          }
          if (interactionsSetting.error) {
            return reject(interactionsSetting.error);
          }
          resolve(interactionsSetting);
        } catch (error) {
          reject(error);
        }
      });
    },
    addInteractionSource: (locationId: string, siteUrls: Site) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { editInteractionsSetting },
              errors,
            },
          } = await axios.post(`${endpoint}/reviews/settings/edit`, {
            locationId,
            siteUrls,
          });
          if (errors) {
            return reject(errors);
          }
          if (editInteractionsSetting.error) {
            return reject(editInteractionsSetting.error);
          }
          if (editInteractionsSetting.errors) {
            return reject(editInteractionsSetting.errors);
          }
          resolve(editInteractionsSetting);
        } catch (error) {
          reject(error);
        }
      });
    },
    editInteractionSource: (locationId: string, siteUrls: Site) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { editInteractionsSetting },
              errors,
            },
          } = await axios.post(`${endpoint}/reviews/settings/edit`, {
            locationId,
            siteUrls,
          });
          if (errors) {
            return reject(errors);
          }
          if (editInteractionsSetting.error) {
            return reject(editInteractionsSetting.error);
          }
          if (editInteractionsSetting.errors) {
            return reject(editInteractionsSetting.errors);
          }
          resolve(editInteractionsSetting);
        } catch (error) {
          reject(error);
        }
      });
    },
  };
};
