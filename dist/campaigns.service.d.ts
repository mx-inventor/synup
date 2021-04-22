import { AxiosInstance } from "axios";
import { Customer, listParams } from "./types/campaigns";
declare const _default: (axios: AxiosInstance) => {
    create: (locationId: string, name: string, locationCustomers: Array<Customer>) => Promise<import("axios").AxiosResponse<any>>;
    addCustomers: (reviewCampaignId: string, locationCustomers: Array<Customer>) => Promise<import("axios").AxiosResponse<any>>;
    list: (locationId: string, params?: listParams | undefined) => Promise<import("axios").AxiosResponse<any>>;
};
export default _default;
