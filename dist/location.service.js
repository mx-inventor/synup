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
        addPhoto: function (locationId) {
            return axios.post("locationId", { params: { locationId: locationId } });
        },
        deletePhoto: function (params) {
            return axios.post(endpoint + "/photoIds/remove", params);
        },
        updateLocation: function (params) {
            return axios.post(endpoint + "/update", params);
        },
        startPhoto: function (params) {
            return axios.post(endpoint + "/star", params);
        },
        archiveLocation: function (ids) {
            return axios.post(endpoint + "/archive", { paramas: { ids: ids } });
        },
        activateLocation: function (locationId) {
            return axios.post(endpoint + "/activate", { params: { locationId: locationId } });
        },
    };
});
