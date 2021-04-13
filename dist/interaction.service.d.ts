import { AxiosInstance } from "axios";
import { InteractionParams, RespondInteraction } from "./types/interactions";
declare const _default: (axios: AxiosInstance) => {
    getInteractions: (locationId: string, params?: InteractionParams | undefined) => Promise<import("axios").AxiosResponse<any>>;
    getInteractionById: (intractionByIds?: string[] | undefined) => Promise<import("axios").AxiosResponse<any>>;
    respondToAnInteraction: (params: RespondInteraction) => Promise<import("axios").AxiosResponse<any>>;
    getListOfInteractionSources: (locationId: string) => Promise<import("axios").AxiosResponse<any>>;
    addInteractionSource: (params: InteractionParams) => Promise<import("axios").AxiosResponse<any>>;
    editInteractionSource: (params: InteractionParams) => Promise<import("axios").AxiosResponse<any>>;
};
export default _default;
