"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var endpoint = 'locations';
exports.default = (function (axios) {
    return {
        addLocations: function (params) {
            return axios.post(endpoint + "/locations/folders", params);
        }
    };
});
