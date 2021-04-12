import { AxiosInstance } from "axios";
import { Interactions, InteractionParams, RespondInteraction } from "./types/interactions";
declare const _default: (axios: AxiosInstance) => {
    getInteractions: (locationId: any, params: InteractionParams) => Promise<import("axios").AxiosResponse<any>>;
    getInteractionById: (params: Interactions) => Promise<import("axios").AxiosResponse<any>>;
    respondToAnInteraction: (params: RespondInteraction) => Promise<import("axios").AxiosResponse<any>>;
    getListOfInteractionSources: (locationId: any, params: InteractionParams) => Promise<import("axios").AxiosResponse<any>>;
    addInteractionSource: (params: InteractionParams) => Promise<import("axios").AxiosResponse<any>>;
};
export default _default;
