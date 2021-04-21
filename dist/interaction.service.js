"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var endpoint = 'locations';
exports.default = (function (axios) {
    return {
        getByLocationId: function (locationId, params) {
            return axios.get(endpoint + "/" + locationId + "/reviews", { params: params });
        },
        getById: function (intractionByIds) {
            return axios.get(endpoint + "/reviewDetails", {
                params: { interactionIds: intractionByIds }
            });
        },
        respondToAnInteraction: function (params) {
            return axios.post(endpoint + "/reviews/respond", params);
        },
        getSourcesByLocation: function (locationId) {
            return axios.get(endpoint + "/" + locationId + "/reviews/settings");
        },
        addInteractionSource: function (params) {
            return axios.post(endpoint + "/reviews/settings/edit", params);
        },
        editInteractionSource: function (params) {
            return axios.post(endpoint + "/reviews/settings/edit", params);
        }
    };
});
