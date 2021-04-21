import { AxiosInstance } from "axios";
import {
  CreateLocationParams,
  deletePhoto,
  GetAllLocationsParams,
  startPhoto,
  updateLocation,
} from "./types/location";
declare const _default: (
  axios: AxiosInstance
) => {
  create: (
    params: CreateLocationParams
  ) => Promise<import("axios").AxiosResponse<any>>;
  getAll: (
    params?: GetAllLocationsParams | undefined
  ) => Promise<import("axios").AxiosResponse<any>>;
  getByIds: (ids: Array<string>) => Promise<import("axios").AxiosResponse<any>>;
  search: (query: string) => Promise<import("axios").AxiosResponse<any>>;
  addPhoto: (
    locationId: Array<string>
  ) => Promise<import("axios").AxiosResponse<any>>;
  deletePhoto: (
    params: deletePhoto
  ) => Promise<import("axios").AxiosResponse<any>>;
  updateLocation: (
    params: updateLocation
  ) => Promise<import("axios").AxiosResponse<any>>;
  startPhoto: (
    params: startPhoto
  ) => Promise<import("axios").AxiosResponse<any>>;
  archiveLocation: (
    ids: Array<string>
  ) => Promise<import("axios").AxiosResponse<any>>;
  activateLocation: (
    locationId: Array<string>
  ) => Promise<import("axios").AxiosResponse<any>>;
  subscriptions: (
    params: CreateLocationParams
  ) => Promise<import("axios").AxiosResponse<any>>;
};
export default _default;
