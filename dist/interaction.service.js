"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var endpoint = 'locations';
//"TG9jYXRpb246MTI2NzE5" id del ejemplo del api
//"TWVkaWFGaWxlOjEzMDMzMg==" id de locations
exports.default = (function (axios) {
    return {
        getInteractions: function (locationId, params) {
            return axios.get(endpoint + "/" + locationId + "/reviews", { params: params });
        },
        getInteractionById: function (params) {
            return axios.get(endpoint + "/reviewDetails", { params: params });
        },
        respondToAnInteraction: function (params) {
            return axios.post(endpoint + "/reviews/respond", { params: params });
        },
        getListOfInteractionSources: function (locationId, params) {
            return axios.get(endpoint + "/" + locationId + "/reviews/settings", { params: params });
        },
        addInteractionSource: function (params) {
            return axios.post(endpoint + "/reviews/settings/edit", params);
        }
    };
});
