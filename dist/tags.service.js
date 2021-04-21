"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var endpoint = "locations/tags";
exports.default = (function (axios) {
    return {
        addLocations: function (params) {
            return axios.post("" + endpoint, params);
        },
        removeLocations: function (params) {
            return axios.post(endpoint + "/remove", params);
        }
    };
});
