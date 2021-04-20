"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var endpoint = "locations/review-campaigns";
exports.default = (function (axios) {
    return {
        create: function (params) {
            return axios.post("" + endpoint, params);
        },
        addCustomers: function (params) {
            return axios.post(endpoint + "/customers", params);
        },
        list: function (locationId, params) {
            return axios.get("locations/" + locationId + "/review-campaigns", { params: params });
        }
    };
});
