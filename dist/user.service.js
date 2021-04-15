"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var endpointRoles = "roles";
var endpointUsers = "users";
exports.default = (function (axios) {
    return {
        getAllUsersRoles: function (params) {
            return axios.get(endpointRoles, { params: params });
        },
        createUserWithRole: function (params) {
            return axios.post(endpointUsers, params);
        },
        addLocationUser: function (params) {
            return axios.post(endpointUsers + "/location/add", params);
        },
    };
});
