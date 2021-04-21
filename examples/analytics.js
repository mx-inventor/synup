const synup = require("../dist/index")(process.env.SYNUP_KEY);

const { Analytics } = synup;

let locationId = "kjhgafskjfga"

Analytics.bing(locationId)
.then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });


