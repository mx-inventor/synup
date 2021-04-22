import { AxiosInstance } from "axios";
declare const _default: (apiKey: string) => {
    Location: {
        create: (params: import("./types/location").CreateLocationParams) => Promise<import("axios").AxiosResponse<any>>;
        getAllLocations: (params: import("./types/location").GetAllLocationsParams) => Promise<import("axios").AxiosResponse<any>>;
    };
    Users: {
        getAllRoles: (params: import("./types/User").User) => Promise<import("axios").AxiosResponse<any>>;
        createWithRole: (user: import("./types/User").User) => Promise<import("axios").AxiosResponse<any>>;
        addLocations: (userId: string, locationIds: string[]) => Promise<import("axios").AxiosResponse<any>>;
        addFolders: (userId: string, folderIds: string[]) => Promise<import("axios").AxiosResponse<any>>;
        getAll: (params: import("./types/User").User) => Promise<import("axios").AxiosResponse<any>>;
        listResources: (userId: import("./types/User").User) => Promise<import("axios").AxiosResponse<any>>;
        listByIds: (userIds?: string[] | undefined) => Promise<import("axios").AxiosResponse<any>>;
        update: (userId: string, user: import("./types/User").User) => Promise<import("axios").AxiosResponse<any>>;
        removeLocations: (userId: string, locationIds: string[]) => Promise<import("axios").AxiosResponse<any>>;
        removeFolders: (userId: string, folderIds: string[]) => Promise<import("axios").AxiosResponse<any>>;
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
        listKeywords: (locationId: string) => Promise<import("axios").AxiosResponse<any>>;
        getKeywordsPerformance: (locationId: string, params: import("./types/ranking").KeywordsPermormance) => Promise<import("axios").AxiosResponse<any>>;
        archiveKeyword: (params: import("./types/ranking").InputArchive) => Promise<import("axios").AxiosResponse<any>>;
    };
    Campaigns: {
        create: (params: import("./types/campaigns").Customer) => Promise<import("axios").AxiosResponse<any>>;
        addCustomers: (params: import("./types/campaigns").AddCustomer) => Promise<import("axios").AxiosResponse<any>>;
        list: (locationId: string, params?: import("./types/campaigns").listParams | undefined) => Promise<import("axios").AxiosResponse<any>>;
    };
    Places: {
        getPlaces: (params: any) => Promise<import("axios").AxiosResponse<any>>;
    };
    Analytics: {
        bing: (locationId: string, params?: import("./types/analytics").Analytics | undefined) => Promise<import("axios").AxiosResponse<any>>;
        google: (locationId: string, params?: import("./types/analytics").Analytics | undefined) => Promise<import("axios").AxiosResponse<any>>;
        facebook: (locationId: string, params?: import("./types/analytics").Analytics | undefined) => Promise<import("axios").AxiosResponse<any>>;
    };
    _axios: AxiosInstance;
};
export = _default;
