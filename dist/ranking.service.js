"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var endpoint = "locations";
exports.default = (function (axios) {
    return {
        addKeywords: function (locationId, inputKeywords) {
            return axios.post(endpoint + "/keywords", {
                input: {
                    locationId: locationId,
                    inputKeywords: inputKeywords
                }
            });
        },
        listKeywords: function (locationId) {
            return axios.get(endpoint + "/" + locationId + "/keywords");
        },
        getKeywordsPerformance: function (locationId, params) {
            return axios.get(endpoint + "/" + { locationId: locationId } + "/keywords-performance", { params: params });
        },
        archiveKeyword: function (id) {
            return axios.post(endpoint + "/keywords/archive", id);
        }
    };
});
