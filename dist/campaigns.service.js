"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var endpoint = "locations/review-campaigns";
exports.default = (function (axios) {
    return {
        create: function (locationId, name, locationCustomers) {
            return axios.post("" + endpoint, {
                input: {
                    locationId: locationId,
                    name: name,
                    locationCustomers: locationCustomers
                }
            });
        },
        addCustomers: function (params) {
            return axios.post(endpoint + "/customers", params);
        },
        list: function (locationId, params) {
            return axios.get("locations/" + locationId + "/review-campaigns", { params: params });
        }
    };
});
