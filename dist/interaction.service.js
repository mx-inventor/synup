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
        respondToAnInteraction: function (interactionId, responseContent) {
            return axios.post(endpoint + "/reviews/respond", {
                interactionId: interactionId,
                responseContent: responseContent
            });
        },
        getSourcesByLocation: function (locationId) {
            return axios.get(endpoint + "/" + locationId + "/reviews/settings");
        },
        addInteractionSource: function (locationId, siteUrls) {
            return axios.post(endpoint + "/reviews/settings/edit", {
                locationId: locationId,
                siteUrls: siteUrls
            });
        },
        editInteractionSource: function (locationId, siteUrls) {
            return axios.post(endpoint + "/reviews/settings/edit", {
                locationId: locationId,
                siteUrls: siteUrls
            });
        }
    };
});
