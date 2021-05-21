import { AxiosInstance } from "axios";
import { Customer, ListParams } from "./types/campaigns";
declare const _default: (axios: AxiosInstance) => {
    create: (locationId: string, name: string, locationCustomers: Array<Customer>) => Promise<unknown>;
    addCustomers: (reviewCampaignId: string, locationCustomers: Array<Customer>) => Promise<unknown>;
    list: (locationId: string, params?: ListParams | undefined) => Promise<unknown> | undefined;
};
export default _default;
