"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var endpoint = 'locations/';
//"TG9jYXRpb246MTI2NzE5"
exports.default = (function (axios) {
    return {
        getInteractions: function (id, params) {
            return axios.get(endpoint + "TWVkaWFGaWxlOjEzMDMzMg==" + "/reviews", { params: params });
        },
    };
});
