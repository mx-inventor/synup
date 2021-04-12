import { AxiosInstance } from "axios";
declare const _default: (apiKey: string) => {
    Location: {
        create: (params: import("./types/location").CreateLocationParams) => Promise<import("axios").AxiosResponse<any>>;
        getAllLocations: (params: import("./types/location").GetAllLocationsParams) => Promise<import("axios").AxiosResponse<any>>;
    };
    Interactions: {
        getInteractions: (locationId: any, params: import("./types/interactions").InteractionParams) => Promise<import("axios").AxiosResponse<any>>;
        getInteractionById: (params: import("./types/interactions").Interactions) => Promise<import("axios").AxiosResponse<any>>;
        respondToAnInteraction: (params: import("./types/interactions").RespondInteraction, response: import("./types/interactions").Interaction) => Promise<import("axios").AxiosResponse<any>>;
        getListOfInteractionSources: (locationId: any, params: import("./types/interactions").InteractionParams) => Promise<import("axios").AxiosResponse<any>>;
    };
    _axios: AxiosInstance;
};
export = _default;
