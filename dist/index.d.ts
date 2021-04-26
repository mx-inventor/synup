import { AxiosInstance } from "axios";
declare const _default: (apiKey: string) => {
    Locations: {
        create: (location: import("./types/location").Location) => Promise<import("axios").AxiosResponse<any>>;
        listLocations: (params?: import("./types/location").GetAllLocationsParams | undefined) => Promise<import("axios").AxiosResponse<any>>;
        getAll: (params?: import("./types/location").GetAllLocationsParams | undefined) => Promise<import("axios").AxiosResponse<any>>;
        getByIds: (ids: string[]) => Promise<import("axios").AxiosResponse<any>>;
        search: (query: string) => Promise<import("axios").AxiosResponse<any>>;
        addPhoto: (locationId: string, photos: import("./types/location").Photos[]) => Promise<import("axios").AxiosResponse<any>>;
        deletePhoto: (locationId: string, photoIds: string[]) => Promise<import("axios").AxiosResponse<any>>;
        updateLocation: (id: String, phone: string) => Promise<import("axios").AxiosResponse<any>>;
        starPhoto: (locationId: string, photoIds: string[], starred: boolean) => Promise<import("axios").AxiosResponse<any>>;
        archiveLocation: (ids: string[]) => Promise<import("axios").AxiosResponse<any>>;
        activateLocation: (Ids: string[]) => Promise<import("axios").AxiosResponse<any>>;
        subscriptions: () => Promise<import("axios").AxiosResponse<any>>;
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
        respondToAnInteraction: (interactionId: string, responseContent: string) => Promise<import("axios").AxiosResponse<any>>;
        getSourcesByLocation: (locationId: string) => Promise<import("axios").AxiosResponse<any>>;
        addInteractionSource: (locationId: string, siteUrls: import("./types/interactions").Site) => Promise<import("axios").AxiosResponse<any>>;
        editInteractionSource: (locationId: string, siteUrls: import("./types/interactions").Site) => Promise<import("axios").AxiosResponse<any>>;
    };
    Folders: {
        addLocations: (name: string, locationIds: string[]) => Promise<import("axios").AxiosResponse<any>>;
        rename: (name: string, id: string[]) => Promise<import("axios").AxiosResponse<any>>;
        removeLocation: (locationIds: string[]) => Promise<import("axios").AxiosResponse<any>>;
        deleteFolder: (name: string) => Promise<import("axios").AxiosResponse<any>>;
    };
    Tags: {
        addLocation: (locationId: string, tag: string) => Promise<import("axios").AxiosResponse<any>>;
        removeLocation: (locationId: string, tag: string) => Promise<import("axios").AxiosResponse<any>>;
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
