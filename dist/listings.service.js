"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var endpoint = "locations";
exports.default = (function (axios) {
    return {
        getPremium: function (locationId) {
            return axios.get(endpoint + "/" + locationId + "/listings/premium");
        },
        getAdittional: function (locationId) {
            return axios.get(endpoint + "/" + locationId + "/listings/additional");
        }
    };
});
