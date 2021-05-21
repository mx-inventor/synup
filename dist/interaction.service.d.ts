import { AxiosInstance } from "axios";
import { InteractionParams, Site } from "./types/interactions";
declare const _default: (axios: AxiosInstance) => {
    getByLocationId: (locationId: string, params?: InteractionParams | undefined) => Promise<unknown>;
    getById: (intractionByIds?: string[] | undefined) => Promise<unknown>;
    respondToAnInteraction: (interactionId: string, responseContent: string) => Promise<unknown>;
    getSourcesByLocation: (locationId: string) => Promise<unknown>;
    addInteractionSource: (locationId: string, siteUrls: Site) => Promise<unknown>;
    editInteractionSource: (locationId: string, siteUrls: Site) => Promise<unknown>;
};
export default _default;
