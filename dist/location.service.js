"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var endpoint = "locations";
exports.default = (function (axios) {
    return {
        create: function (data) {
            return axios.post(endpoint, data);
        },
    };
});
