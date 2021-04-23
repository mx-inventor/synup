"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var endpoint = 'locations/folders';
exports.default = (function (axios) {
    return {
        addLocations: function (name, locationIds) {
            return axios.post("" + endpoint, {
                input: {
                    name: name,
                    locationIds: locationIds
                }
            });
        },
        rename: function (name, id) {
            return axios.post(endpoint + "/rename", {
                input: {
                    name: name,
                    id: id
                }
            });
        },
        removeLocation: function (locationIds) {
            return axios.post(endpoint + "/remove", {
                input: {
                    locationIds: locationIds
                }
            });
        },
        deleteFolder: function (name) {
            return axios.post("folders/remove", {
                input: {
                    name: name
                }
            });
        }
    };
});
