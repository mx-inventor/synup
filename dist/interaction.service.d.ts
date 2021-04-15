import { AxiosInstance } from "axios";
import { AddInteractionSource, InteractionParams, RespondInteraction } from "./types/interactions";
declare const _default: (axios: AxiosInstance) => {
    getByLocationId: (locationId: string, params?: InteractionParams | undefined) => Promise<import("axios").AxiosResponse<any>>;
    getById: (intractionByIds?: string[] | undefined) => Promise<import("axios").AxiosResponse<any>>;
    respondToAnInteraction: (params: RespondInteraction) => Promise<import("axios").AxiosResponse<any>>;
    getSourcesByLocation: (locationId: string) => Promise<import("axios").AxiosResponse<any>>;
    addInteractionSource: (params: AddInteractionSource) => Promise<import("axios").AxiosResponse<any>>;
    editInteractionSource: (params: InteractionParams) => Promise<import("axios").AxiosResponse<any>>;
};
export default _default;
