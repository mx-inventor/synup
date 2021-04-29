"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var endpointRoles = "roles";
var endpointUsers = "users";
exports.default = (function (axios) {
    return {
        getAllRoles: function (params) {
            return axios.get(endpointRoles, { params: params });
        },
        createWithRole: function (user) {
            return axios.post(endpointUsers + "/create", {
                input: __assign({}, user)
            });
        },
        addLocations: function (userId, locationIds) {
            return axios.post(endpointUsers + "/locations/add", {
                input: {
                    userId: userId,
                    locationIds: locationIds
                }
            });
        },
        addFolders: function (userId, folderIds) {
            return axios.post(endpointUsers + "/folders/add", {
                input: {
                    userId: userId,
                    folderIds: folderIds
                }
            });
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
        update: function (userId, user) {
            return axios.post(endpointUsers + "/update", {
                input: __assign(__assign({}, user), { id: userId })
            });
        },
        removeLocations: function (userId, locationIds) {
            return axios.post(endpointUsers + "/locations/remove", {
                input: {
                    userId: userId,
                    locationIds: locationIds
                }
            });
        },
        removeFolders: function (userId, folderIds) {
            return axios.post(endpointUsers + "/folders/remove", {
                input: {
                    userId: userId,
                    folderIds: folderIds
                }
            });
        }
    };
});
