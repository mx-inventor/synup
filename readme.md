# Synup Module

Synup API client library, connected to [https://developer.synup.com/docs/#/](https://developer.synup.com/docs/#/)

## How to use

Install the module

    npm install @mx-inventor/synup

or

    yarn add @mx-inventor/synup

Then import module

    const synup = require('@mx-inventor/synup')('SYNUP_API_KEY');

    const {
        Analytics,
        Campaigns,
        Folders,
        Interactions,
        Listings,
        Locations,
        Places,
        Rankings,
        Tags,
        Users
    } = synup;

    Locations.getAll().then(locations=>{
        // logic with locations
    });
