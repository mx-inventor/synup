"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var endpoint = "locations";
exports.default = (function (axios) {
    return {
        create: function (location) {
            return axios.post(endpoint, location);
        },
        getAll: function (params) {
            return axios.get(endpoint, { params: params });
        },
        getByIds: function (ids) {
            return axios.get("locations-by-ids", { params: { ids: ids } });
        },
        search: function (query) {
            return axios.get(endpoint + "/search", { params: { query: query } });
        },
        addPhoto: function (locationId, photos) {
            return axios.post(endpoint + "/photos", { input: { locationId: locationId, photos: photos } });
        },
        deletePhoto: function (locationId, photoIds) {
            return axios.post(endpoint + "/photos/remove", { input: { locationId: locationId, photoIds: photoIds } });
        },
        updateLocation: function (locationId, location) {
            return axios.post(endpoint + "/update", { input: { locationId: locationId, location: location } });
        },
        startPhoto: function (locationId, mediaIds, starred) {
            return axios.post(endpoint + "/photos/star", { input: { locationId: locationId, mediaIds: mediaIds, starred: starred } });
        },
        archiveLocation: function (ids) {
            return axios.post(endpoint + "/archive", { input: { locationIds: ids } });
        },
        activateLocation: function (Ids) {
            return axios.post(endpoint + "/activate", { input: { Ids: Ids } });
        },
        subscriptions: function (params) {
            return axios.get(endpoint, { params: params });
        },
    };
});
