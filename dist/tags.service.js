"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var endpoint = "locations/tags";
exports.default = (function (axios) {
    return {
        addLocation: function (locationId, tag) {
            return axios.post("" + endpoint, {
                input: {
                    locationId: locationId,
                    tag: tag
                }
            });
        },
        removeLocation: function (locationId, tag) {
            return axios.post(endpoint + "/remove", {
                input: {
                    locationId: locationId,
                    tag: tag
                }
            });
        }
    };
});
