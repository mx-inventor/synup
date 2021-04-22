"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var endpoint = "countries";
exports.default = (function (axios) {
    return {
        getPlaces: function (params) {
            return axios.get(endpoint, params);
        }
    };
});
