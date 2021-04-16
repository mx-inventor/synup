import { AxiosInstance } from "axios";
declare const _default: (apiKey: string) => {
    Location: {
        create: (params: import("./types/location").CreateLocationParams) => Promise<import("axios").AxiosResponse<any>>;
        getAllLocations: (params: import("./types/location").GetAllLocationsParams) => Promise<import("axios").AxiosResponse<any>>;
    };
    Interactions: {
        getByLocationId: (locationId: string, params?: import("./types/interactions").InteractionParams | undefined) => Promise<import("axios").AxiosResponse<any>>;
        getById: (intractionByIds?: string[] | undefined) => Promise<import("axios").AxiosResponse<any>>;
        respondToAnInteraction: (params: import("./types/interactions").RespondInteraction) => Promise<import("axios").AxiosResponse<any>>;
        getSourcesByLocation: (locationId: string) => Promise<import("axios").AxiosResponse<any>>;
        addInteractionSource: (params: import("./types/interactions").AddInteractionSource) => Promise<import("axios").AxiosResponse<any>>;
        editInteractionSource: (params: import("./types/interactions").InteractionParams) => Promise<import("axios").AxiosResponse<any>>;
    };
    Folders: {
        addLocations: (params: import("./types/folders").AddLocationsPropierties) => Promise<import("axios").AxiosResponse<any>>;
        rename: (params: import("./types/folders").RenameParams) => Promise<import("axios").AxiosResponse<any>>;
        removeLocation: (params: import("./types/folders").RemoveLocations) => Promise<import("axios").AxiosResponse<any>>;
        deleteFolder: (params: import("./types/folders").DeleteFolder) => Promise<import("axios").AxiosResponse<any>>;
    };
    Tags: {
        addLocations: (params: import("./types/folders").AddLocations) => Promise<import("axios").AxiosResponse<any>>;
    };
    _axios: AxiosInstance;
};
export = _default;
