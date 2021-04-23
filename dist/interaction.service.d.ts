import { AxiosInstance } from "axios";
import { InteractionParams, Site } from "./types/interactions";
declare const _default: (axios: AxiosInstance) => {
    getByLocationId: (locationId: string, params?: InteractionParams | undefined) => Promise<import("axios").AxiosResponse<any>>;
    getById: (intractionByIds?: string[] | undefined) => Promise<import("axios").AxiosResponse<any>>;
    respondToAnInteraction: (interactionId: string, responseContent: string) => Promise<import("axios").AxiosResponse<any>>;
    getSourcesByLocation: (locationId: string) => Promise<import("axios").AxiosResponse<any>>;
    addInteractionSource: (locationId: string, siteUrls: Site) => Promise<import("axios").AxiosResponse<any>>;
    editInteractionSource: (locationId: string, siteUrls: Site) => Promise<import("axios").AxiosResponse<any>>;
};
export default _default;
