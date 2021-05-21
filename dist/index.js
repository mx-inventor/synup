"use strict";
const axios_1 = require("axios");
const location_service_1 = require("./location.service");
const user_service_1 = require("./user.service");
const interaction_service_1 = require("./interaction.service");
const folders_service_1 = require("./folders.service");
const tags_service_1 = require("./tags.service");
const listings_service_1 = require("./listings.service");
const ranking_service_1 = require("./ranking.service");
const campaigns_service_1 = require("./campaigns.service");
const places_service_1 = require("./places.service");
const analytics_service_1 = require("./analytics.service");
const baseURL = "https://api.synup.com/api/v4/";
let _axios;
module.exports = (apiKey) => {
    if (apiKey) {
        _axios = axios_1.default.create({
            baseURL,
            headers: { Authorization: `API ${apiKey}` },
        });
    }
    return {
        Analytics: analytics_service_1.default(_axios),
        Campaigns: campaigns_service_1.default(_axios),
        Folders: folders_service_1.default(_axios),
        Interactions: interaction_service_1.default(_axios),
        Listings: listings_service_1.default(_axios),
        Locations: location_service_1.default(_axios),
        Places: places_service_1.default(_axios),
        Rankings: ranking_service_1.default(_axios),
        Tags: tags_service_1.default(_axios),
        Users: user_service_1.default(_axios),
        _axios,
    };
};
