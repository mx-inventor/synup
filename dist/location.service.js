"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var endpoint = "locations";
exports.default = (function (axios) {
    return {
        create: function (params) {
            return axios.post(endpoint, params);
        },
        getAllLocations: function (params) {
            return axios.get(endpoint, { params: params });
        },
    };
});
