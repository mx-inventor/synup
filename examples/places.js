const synup = require("../dist/index")(process.env.SYNUP_KEY);

const { Places } = synup;

Places.getPlaces()
  .then((response) => {
    console.log("SUCCESS", response);
  })
  .catch((error) => {
    console.log("FAILURE", error);
  });
