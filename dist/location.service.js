"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var endpoint = "locations";
exports.default = (function (axios) {
    return {
        create: function (location) {
            return axios.post(endpoint, location);
        },
        listLocations: function (params) {
            return axios.get(endpoint, { params: params });
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
        addPhotos: function (locationId, photos) {
            return axios.post(endpoint + "/photos", { input: { locationId: locationId, photos: photos } });
        },
        deletePhotos: function (locationId, photoIds) {
            return axios.post(endpoint + "/photos/remove", { input: { locationId: locationId, photoIds: photoIds } });
        },
        updateLocation: function (id, locationData) {
            return axios.post(endpoint + "/update", { input: { id: id, locationData: locationData } });
        },
        starPhotos: function (locationId, photoIds, starred) {
            return axios.post(endpoint + "/photos/star", {
                input: {
                    locationId: locationId,
                    photoIds: photoIds,
                    starred: starred
                }
            });
        },
        archiveLocation: function (ids) {
            return axios.post(endpoint + "/archive", { input: { locationIds: ids } });
        },
        activateLocation: function (ids) {
            return axios.post(endpoint + "/activate", { input: { ids: ids } });
        },
        subscriptions: function () {
            return axios.get('subscriptions');
        },
    };
});
