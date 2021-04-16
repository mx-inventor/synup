"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var endpoint = "location/:id/listings";
exports.default = (function (axios) {
    return {
        getPremium: function (params) {
            return axios.get(endpoint, { params: params });
        }
    };
});
