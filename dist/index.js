"use strict";
var axios_1 = require("axios");
var location_service_1 = require("./location.service");
var user_service_1 = require("./user.service");
var interaction_service_1 = require("./interaction.service");
var folders_service_1 = require("./folders.service");
var tags_service_1 = require("./tags.service");
var listings_service_1 = require("./listings.service");
var ranking_service_1 = require("./ranking.service");
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
        Users: user_service_1.default(_axios),
        Interactions: interaction_service_1.default(_axios),
        Folders: folders_service_1.default(_axios),
        Tags: tags_service_1.default(_axios),
        Listings: listings_service_1.default(_axios),
        Rankings: ranking_service_1.default(_axios),
        _axios: _axios,
    };
};
