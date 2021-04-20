import { AxiosInstance } from "axios";
declare const _default: (apiKey: string) => {
    Location: {
        create: (params: import("./types/location").CreateLocationParams) => Promise<import("axios").AxiosResponse<any>>;
        getAllLocations: (params: import("./types/location").GetAllLocationsParams) => Promise<import("axios").AxiosResponse<any>>;
    };
    Users: {
        getAllRoles: (params: import("./types/User").User) => Promise<import("axios").AxiosResponse<any>>;
        createWithRole: (params: import("./types/User").CreateUserWithRole) => Promise<import("axios").AxiosResponse<any>>;
        addLocation: (params: import("./types/User").LocationUser) => Promise<import("axios").AxiosResponse<any>>;
        addFolder: (params: import("./types/User").FolderUser) => Promise<import("axios").AxiosResponse<any>>;
        getAll: (params: import("./types/User").User) => Promise<import("axios").AxiosResponse<any>>;
        listResources: (userId: import("./types/User").User) => Promise<import("axios").AxiosResponse<any>>;
        listByIds: (userIds?: string[] | undefined) => Promise<import("axios").AxiosResponse<any>>;
        updateUser: (params: import("./types/User").User) => Promise<import("axios").AxiosResponse<any>>;
        removeLocation: (params: import("./types/User").LocationUser) => Promise<import("axios").AxiosResponse<any>>;
        removeFolder: (params: import("./types/User").FolderUser) => Promise<import("axios").AxiosResponse<any>>;
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
        addLocations: (params: import("./types/tags").LocationTag) => Promise<import("axios").AxiosResponse<any>>;
        removeLocations: (params: import("./types/tags").LocationTag) => Promise<import("axios").AxiosResponse<any>>;
    };
    Listings: {
        getPremium: (locationId: import("./types/listings").Listings) => Promise<import("axios").AxiosResponse<any>>;
        getAdittional: (locationId: import("./types/listings").Listings) => Promise<import("axios").AxiosResponse<any>>;
    };
    Rankings: {
        addKeywordsLocation: (params: import("./types/ranking").Keywords) => Promise<import("axios").AxiosResponse<any>>;
        listKeywords: (locationId: import("./types/ranking").Keywords) => Promise<import("axios").AxiosResponse<any>>;
        getKeywordsPerformance: (locationId: import("./types/ranking").Keywords) => Promise<import("axios").AxiosResponse<any>>;
    };
    _axios: AxiosInstance;
};
export = _default;
