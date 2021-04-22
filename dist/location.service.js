"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var endpoint = "locations";
exports.default = (function (axios) {
    return {
        create: function (params) {
            return axios.post(endpoint, params);
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
        updateLocation: function (params) {
            return axios.post(endpoint + "/update", params);
        },
        startPhoto: function (input) {
            return axios.post(endpoint + "/photos/star", input);
        },
        archiveLocation: function (ids) {
            return axios.post(endpoint + "/archive", { input: { locationIds: ids } });
        },
        activateLocation: function (locationIds) {
            return axios.post(endpoint + "/activate", { input: { locationIds: locationIds } });
        },
        subscriptions: function (params) {
            return axios.get(endpoint, { params: params });
        },
    };
});
