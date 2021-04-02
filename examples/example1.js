const synup = require("../dist/index")("api key from synup");

const { Location } = synup;

(async () => {
  try {
    Location.create({});
  } catch (error) {
    console.log(error);
  }
})();
