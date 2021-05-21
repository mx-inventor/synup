const synup = require("../dist/index")(process.env.SYNUP_KEY);

const { Listings } = synup;
let locationId = "TG9jYXRpb246MTQwMjQ=";

Listings.getPremium(locationId)
  .then((response) => {
    console.log("SUCCESS getPremium", response);
  })
  .catch((error) => {
    console.log("FAILURE getPremium", error);
  });

Listings.getAdittional(locationId)
  .then((response) => {
    console.log("SUCCESS getAdittional", response);
  })
  .catch((error) => {
    console.log("FAILURE getAdittional", error);
  });
