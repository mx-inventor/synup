"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var endpoint = "locations";
exports.default = (function (axios) {
    return {
        addKeywordsLocation: function (params) {
            return axios.post(endpoint + "/keywords", params);
        },
        listKeywords: function (locationId) {
            return axios.get(endpoint + "/" + locationId + "/keywords");
        },
        getKeywordsPerformance: function (locationId, params) {
            return axios.get(endpoint + "/" + { locationId: locationId } + "/keywords-performance", { params: params });
        },
        archiveKeyword: function (params) {
            return axios.post(endpoint + "/keywords/archive", params);
        }
    };
});