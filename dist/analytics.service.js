"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var endpoint = "locations";
exports.default = (function (axios) {
    return {
        bing: function (locationId, params) {
            return axios.get(endpoint + "/" + locationId + "/bing-analytics", { params: params });
        },
        google: function (locationId, params) {
            return axios.get(endpoint + "/" + locationId + "/google-analytics", { params: params });
        },
        facebook: function (locationId, params) {
            return axios.get(endpoint + "/" + locationId + "/facebook-analytics", { params: params });
        },
    };
});
