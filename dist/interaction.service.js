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
        getInteractionById: function (intractionByIds) {
            return axios.get(endpoint + "/reviewDetails" + intractionByIds);
        },
        respondToAnInteraction: function (params) {
            return axios.post(endpoint + "/reviews/respond", params);
        },
        getListOfInteractionSources: function (locationId) {
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
