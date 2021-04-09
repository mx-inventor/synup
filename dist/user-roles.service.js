"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var endpoint = "roles";
exports.default = (function (axios) {
    return {
        getAllUsersRoles: function (params) {
            return axios.get(endpoint, { params: params });
        }
    };
});
