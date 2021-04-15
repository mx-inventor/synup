"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var endpoint = 'locations/folders';
exports.default = (function (axios) {
    return {
        addLocations: function (params) {
            return axios.post("" + endpoint, params);
        },
        rename: function (params) {
            return axios.post(endpoint + "/rename", params);
        },
        removeLocation: function (params) {
            return axios.post(endpoint + "/remove", params);
        },
        deleteFolder: function (params) {
            return axios.post("folders/remove", params);
        }
    };
});
