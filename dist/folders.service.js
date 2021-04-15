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
        }
    };
});
