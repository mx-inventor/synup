import { AxiosInstance } from "axios";
declare const _default: (apiKey: string) => {
    Locations: {
        create: (params: import("./types/location").CreateLocationParams) => Promise<import("axios").AxiosResponse<any>>;
        getAll: (params?: import("./types/location").GetAllLocationsParams | undefined) => Promise<import("axios").AxiosResponse<any>>;
        getByIds: (ids: string[]) => Promise<import("axios").AxiosResponse<any>>;
        search: (query: string) => Promise<import("axios").AxiosResponse<any>>;
        addPhoto: (locationId: string, photos: string[]) => Promise<import("axios").AxiosResponse<any>>;
        deletePhoto: (locationId: string, photoIds: string[]) => Promise<import("axios").AxiosResponse<any>>;
        updateLocation: (params: import("./types/location").UpdateLocation) => Promise<import("axios").AxiosResponse<any>>;
        startPhoto: (input: import("./types/location").StartPhoto) => Promise<import("axios").AxiosResponse<any>>;
        archiveLocation: (ids: string[]) => Promise<import("axios").AxiosResponse<any>>;
        activateLocation: (locationIds: string[]) => Promise<import("axios").AxiosResponse<any>>;
        subscriptions: (params: import("./types/location").CreateLocationParams) => Promise<import("axios").AxiosResponse<any>>;
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
        addKeywords: (locationId: string, inputKeywords: string[]) => Promise<import("axios").AxiosResponse<any>>;
        listKeywords: (locationId: string) => Promise<import("axios").AxiosResponse<any>>;
        getKeywordsPerformance: (locationId: string, params: import("./types/ranking").KeywordsPermormance) => Promise<import("axios").AxiosResponse<any>>;
        archiveKeyword: (id: string) => Promise<import("axios").AxiosResponse<any>>;
    };
    Campaigns: {
        create: (locationId: string, name: string, locationCustomers: import("./types/campaigns").Customer[]) => Promise<import("axios").AxiosResponse<any>>;
        addCustomers: (reviewCampaignId: string, locationCustomers: import("./types/campaigns").Customer[]) => Promise<import("axios").AxiosResponse<any>>;
        list: (locationId: string, params?: import("./types/campaigns").ListParams | undefined) => Promise<import("axios").AxiosResponse<any>>;
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
