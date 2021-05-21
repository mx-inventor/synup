import { AxiosInstance } from "axios";
declare const _default: (apiKey: string) => {
    Analytics: {
        bing: (locationId: string, params?: import("./types/analytics").Analytics | undefined) => Promise<unknown>;
        google: (locationId: string, params?: import("./types/analytics").Analytics | undefined) => Promise<unknown>;
        facebook: (locationId: string, params?: import("./types/analytics").Analytics | undefined) => Promise<unknown>;
    };
    Campaigns: {
        create: (locationId: string, name: string, locationCustomers: import("./types/campaigns").Customer[]) => Promise<unknown>;
        addCustomers: (reviewCampaignId: string, locationCustomers: import("./types/campaigns").Customer[]) => Promise<unknown>;
        list: (locationId: string, params?: import("./types/campaigns").ListParams | undefined) => Promise<unknown> | undefined;
    };
    Folders: {
        addLocations: (name: string, locationIds: string[]) => Promise<unknown>;
        rename: (name: string, id: string[]) => Promise<unknown>;
        removeLocation: (locationIds: string[]) => Promise<unknown>;
        deleteFolder: (name: string) => Promise<unknown>;
    };
    Interactions: {
        getByLocationId: (locationId: string, params?: import("./types/interactions").InteractionParams | undefined) => Promise<unknown>;
        getById: (intractionByIds?: string[] | undefined) => Promise<unknown>;
        respondToAnInteraction: (interactionId: string, responseContent: string) => Promise<unknown>;
        getSourcesByLocation: (locationId: string) => Promise<unknown>;
        addInteractionSource: (locationId: string, siteUrls: import("./types/interactions").Site) => Promise<unknown>;
        editInteractionSource: (locationId: string, siteUrls: import("./types/interactions").Site) => Promise<unknown>;
    };
    Listings: {
        getPremium: (locationId: import("./types/listings").Listings) => Promise<unknown>;
        getAdittional: (locationId: import("./types/listings").Listings) => Promise<unknown>;
    };
    Locations: {
        create: (location: import("./types/location").Location) => Promise<unknown>;
        list: (params?: import("./types/location").GetAllLocationsParams | undefined) => Promise<unknown>;
        getByIds: (ids: string[]) => Promise<unknown>;
        search: (query: string) => Promise<unknown>;
        addPhotos: (locationId: string, photos: import("./types/location").Photo[]) => Promise<unknown>;
        deletePhotos: (locationId: string, photoIds: string[]) => Promise<unknown>;
        updateLocation: (id: String, locationData: import("./types/location").Location) => Promise<unknown>;
        starPhotos: (locationId: string, photoIds: string[], starred: boolean) => Promise<unknown>;
        archiveLocation: (ids: string[]) => Promise<unknown>;
        activateLocation: (ids: string[]) => Promise<unknown>;
        subscriptions: () => Promise<unknown>;
    };
    Places: {
        getPlaces: (params: any) => Promise<unknown>;
    };
    Rankings: {
        addKeywords: (locationId: string, inputKeywords: string[]) => Promise<unknown>;
        listKeywords: (locationId: string) => Promise<unknown>;
        getKeywordsPerformance: (locationId: string, params: import("./types/ranking").KeywordsPermormance) => Promise<unknown>;
        archiveKeyword: (id: string) => Promise<unknown>;
    };
    Tags: {
        addLocation: (locationId: string, tag: string) => Promise<unknown>;
        removeLocation: (locationId: string, tag: string) => Promise<unknown>;
    };
    Users: {
        getAllRoles: (params: import("./types/User").User) => Promise<unknown>;
        createWithRole: (user: import("./types/User").User) => Promise<unknown>;
        addLocations: (userId: string, locationIds: string[]) => Promise<unknown>;
        addFolders: (userId: string, folderIds: string[]) => Promise<unknown>;
        getAll: (params: import("./types/User").User) => Promise<unknown>;
        listResources: (userId: import("./types/User").User) => Promise<unknown>;
        listByIds: (userIds?: string[] | undefined) => Promise<unknown>;
        update: (userId: string, user: import("./types/User").User) => Promise<unknown>;
        removeLocations: (userId: string, locationIds: string[]) => Promise<unknown>;
        removeFolders: (userId: string, folderIds: string[]) => Promise<unknown>;
    };
    _axios: AxiosInstance;
};
export = _default;
