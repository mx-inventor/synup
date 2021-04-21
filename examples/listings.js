const synup = require("../dist/index")(process.env.SYNUP_KEY);

const { Listings } = synup;
let locationId = "TG9jYXRpb246MTQwMjQ="; 

Listings.getPremium(locationId)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });

Listings.getAdittional(locationId)
.then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });