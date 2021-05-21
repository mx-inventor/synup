import { AxiosInstance } from "axios";
import { Customer, ListParams } from "./types/campaigns";

const endpoint = "locations/review-campaigns";

export default (axios: AxiosInstance) => {
  return {
    create: (
      locationId: string,
      name: string,
      locationCustomers: Array<Customer>
    ) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { createReviewCampaign },
              errors,
            },
          } = await axios.post(`${endpoint}`, {
            input: {
              locationId,
              name,
              locationCustomers,
            },
          });
          if (errors) {
            return reject(errors);
          }
          if (createReviewCampaign.error) {
            return reject(createReviewCampaign.error);
          }
          if (createReviewCampaign.errors) {
            return reject(createReviewCampaign.errors);
          }
          resolve(createReviewCampaign);
        } catch (error) {
          reject(error);
        }
      });
    },
    addCustomers: (
      reviewCampaignId: string,
      locationCustomers: Array<Customer>
    ) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { addCustomersToReviewCampaign },
              errors,
            },
          } = await axios.post(`${endpoint}/customers`, {
            input: {
              reviewCampaignId,
              locationCustomers,
            },
          });
          if (errors) {
            return reject(errors);
          }
          if (addCustomersToReviewCampaign.error) {
            return reject(addCustomersToReviewCampaign.error);
          }
          if (addCustomersToReviewCampaign.errors) {
            return reject(addCustomersToReviewCampaign.errors);
          }
          resolve(addCustomersToReviewCampaign);
        } catch (error) {
          reject(error);
        }
      });
    },
    list: (locationId: string, params?: ListParams) => {
      return new Promise(async (resolve, reject) => {
        try {
          let {
            data: {
              data: { listReviewCampaigns },
              errors,
            },
          } = await axios.get(`locations/${locationId}/review-campaigns`, {
            params,
          });
          if (errors) {
            return reject(errors);
          }
          if (listReviewCampaigns.error) {
            return reject(listReviewCampaigns.error);
          }
          if (listReviewCampaigns.errors) {
            return reject(listReviewCampaigns.errors);
          }
          resolve(listReviewCampaigns);
        } catch (error) {
          reject(error);
        }
      });
      return;
    },
  };
};
