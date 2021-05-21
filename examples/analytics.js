const synup = require("../dist/index")(process.env.SYNUP_KEY);

const { Analytics } = synup;

let locationId = "TG9jYXRpb246MTI5Njkw";

Analytics.bing(locationId)
  .then((response) => {
    console.log("SUCCESS bing", response);
  })
  .catch((error) => {
    console.log("FAILURE bing", error);
  });

Analytics.google(locationId)
  .then((response) => {
    console.log("SUCCESS google", response);
  })
  .catch((error) => {
    console.log("FAILURE google", error);
  });

Analytics.facebook(locationId)
  .then((response) => {
    console.log("SUCCESS facebook", response);
  })
  .catch((error) => {
    console.log("FAILURE facebook", error);
  });
