"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var endpoint = "locations";
exports.default = (function (axios) {
    return {
        addKeywordsLocation: function (params) {
            return axios.post(endpoint + "/keywords", params);
        }
    };
});
