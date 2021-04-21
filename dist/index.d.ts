import { AxiosInstance } from "axios";
declare const _default: (
  apiKey: string
) => {
  Location: {
    create: (
      params: import("./types/location").CreateLocationParams
    ) => Promise<import("axios").AxiosResponse<any>>;
    getAll: (
      params?: import("./types/location").GetAllLocationsParams | undefined
    ) => Promise<import("axios").AxiosResponse<any>>;
    getByIds: (ids: string[]) => Promise<import("axios").AxiosResponse<any>>;
    search: (query: string) => Promise<import("axios").AxiosResponse<any>>;
    addPhoto: (
      locationId: string[]
    ) => Promise<import("axios").AxiosResponse<any>>;
    deletePhoto: (
      params: import("./types/location").deletePhoto
    ) => Promise<import("axios").AxiosResponse<any>>;
    updateLocation: (
      params: import("./types/location").updateLocation
    ) => Promise<import("axios").AxiosResponse<any>>;
    startPhoto: (
      params: import("./types/location").startPhoto
    ) => Promise<import("axios").AxiosResponse<any>>;
    archiveLocation: (
      ids: string[]
    ) => Promise<import("axios").AxiosResponse<any>>;
    activateLocation: (
      locationId: string[]
    ) => Promise<import("axios").AxiosResponse<any>>;
    subscriptions: (
      params: import("./types/location").CreateLocationParams
    ) => Promise<import("axios").AxiosResponse<any>>;
  };
  Users: {
    getAllRoles: (
      params: import("./types/User").User
    ) => Promise<import("axios").AxiosResponse<any>>;
    createWithRole: (
      params: import("./types/User").CreateUserWithRole
    ) => Promise<import("axios").AxiosResponse<any>>;
    addLocation: (
      params: import("./types/User").LocationUser
    ) => Promise<import("axios").AxiosResponse<any>>;
    addFolder: (
      params: import("./types/User").FolderUser
    ) => Promise<import("axios").AxiosResponse<any>>;
    getAll: (
      params: import("./types/User").User
    ) => Promise<import("axios").AxiosResponse<any>>;
    listResources: (
      userId: import("./types/User").User
    ) => Promise<import("axios").AxiosResponse<any>>;
    listByIds: (
      userIds?: string[] | undefined
    ) => Promise<import("axios").AxiosResponse<any>>;
    updateUser: (
      params: import("./types/User").User
    ) => Promise<import("axios").AxiosResponse<any>>;
    removeLocation: (
      params: import("./types/User").LocationUser
    ) => Promise<import("axios").AxiosResponse<any>>;
    removeFolder: (
      params: import("./types/User").FolderUser
    ) => Promise<import("axios").AxiosResponse<any>>;
  };
  Interactions: {
    getByLocationId: (
      locationId: string,
      params?: import("./types/interactions").InteractionParams | undefined
    ) => Promise<import("axios").AxiosResponse<any>>;
    getById: (
      intractionByIds?: string[] | undefined
    ) => Promise<import("axios").AxiosResponse<any>>;
    respondToAnInteraction: (
      params: import("./types/interactions").RespondInteraction
    ) => Promise<import("axios").AxiosResponse<any>>;
    getSourcesByLocation: (
      locationId: string
    ) => Promise<import("axios").AxiosResponse<any>>;
    addInteractionSource: (
      params: import("./types/interactions").AddInteractionSource
    ) => Promise<import("axios").AxiosResponse<any>>;
    editInteractionSource: (
      params: import("./types/interactions").InteractionParams
    ) => Promise<import("axios").AxiosResponse<any>>;
  };
  Folders: {
    addLocations: (
      params: import("./types/folders").AddLocationsPropierties
    ) => Promise<import("axios").AxiosResponse<any>>;
    rename: (
      params: import("./types/folders").RenameParams
    ) => Promise<import("axios").AxiosResponse<any>>;
    removeLocation: (
      params: import("./types/folders").RemoveLocations
    ) => Promise<import("axios").AxiosResponse<any>>;
    deleteFolder: (
      params: import("./types/folders").DeleteFolder
    ) => Promise<import("axios").AxiosResponse<any>>;
  };
  Tags: {
    addLocations: (
      params: import("./types/tags").LocationTag
    ) => Promise<import("axios").AxiosResponse<any>>;
    removeLocations: (
      params: import("./types/tags").LocationTag
    ) => Promise<import("axios").AxiosResponse<any>>;
  };
  Listings: {
    getPremium: (
      locationId: import("./types/listings").Listings
    ) => Promise<import("axios").AxiosResponse<any>>;
    getAdittional: (
      locationId: import("./types/listings").Listings
    ) => Promise<import("axios").AxiosResponse<any>>;
  };
  Rankings: {
    addKeywordsLocation: (
      params: import("./types/ranking").Keywords
    ) => Promise<import("axios").AxiosResponse<any>>;
    listKeywords: (
      locationId: string
    ) => Promise<import("axios").AxiosResponse<any>>;
    getKeywordsPerformance: (
      locationId: string,
      params: import("./types/ranking").KeywordsPermormance
    ) => Promise<import("axios").AxiosResponse<any>>;
    archiveKeyword: (
      params: import("./types/ranking").InputArchive
    ) => Promise<import("axios").AxiosResponse<any>>;
  };
  Campaigns: {
    create: (
      params: import("./types/campaigns").Customer
    ) => Promise<import("axios").AxiosResponse<any>>;
    addCustomers: (
      params: import("./types/campaigns").AddCustomer
    ) => Promise<import("axios").AxiosResponse<any>>;
    list: (
      locationId: string,
      params?: import("./types/campaigns").listParams | undefined
    ) => Promise<import("axios").AxiosResponse<any>>;
  };
  Places: {
    getPlaces: (params: any) => Promise<import("axios").AxiosResponse<any>>;
  };
  Analytics: {
    bing: (
      locationId: string,
      params?: import("./types/analytics").Analytics | undefined
    ) => Promise<import("axios").AxiosResponse<any>>;
    google: (
      locationId: string,
      params?: import("./types/analytics").Analytics | undefined
    ) => Promise<import("axios").AxiosResponse<any>>;
    facebook: (
      locationId: string,
      params?: import("./types/analytics").Analytics | undefined
    ) => Promise<import("axios").AxiosResponse<any>>;
  };
  _axios: AxiosInstance;
};
export = _default;
