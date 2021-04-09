"use strict";
var axios_1 = require("axios");
var location_service_1 = require("./location.service");
var user_service_1 = require("./user.service");
var baseURL = "https://api.synup.com/api/v4/";
var _axios;
module.exports = function (apiKey) {
    if (apiKey) {
        _axios = axios_1.default.create({
            baseURL: baseURL,
            headers: { Authorization: "API " + apiKey },
        });
    }
    return {
        Location: location_service_1.default(_axios),
        user: user_service_1.default(_axios),
        _axios: _axios,
    };
};
