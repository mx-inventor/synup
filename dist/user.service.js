"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var endpointRoles = "roles";
var endpointUsers = "users";
exports.default = (function (axios) {
    return {
        getAllRoles: function (params) {
            return axios.get(endpointRoles, { params: params });
        },
        createWithRole: function (params) {
            return axios.post(endpointUsers, params);
        },
        addLocation: function (params) {
            return axios.post(endpointUsers + "/locations/add", params);
        },
        addFolder: function (params) {
            return axios.post(endpointUsers + "/folders/add", params);
        },
        getAll: function (params) {
            return axios.get(endpointUsers, { params: params });
        },
        listResources: function (userId) {
            return axios.get(endpointUsers + "/" + userId + "/resources");
        },
        listByIds: function (userIds) {
            return axios.get("users-by-ids/", {
                params: { userIds: userIds }
            });
        },
        updateUser: function (params) {
            return axios.post(endpointUsers + "/update", params);
        },
        removeLocation: function (params) {
            return axios.post(endpointUsers + "/locations/remove", params);
        },
        removeFolder: function (params) {
            return axios.post(endpointUsers + "/folders/remove", params);
        }
    };
});
