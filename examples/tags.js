const synup = require("../dist/index")(process.env.SYNUP_KEY);

const { Tags } = synup;

Tags.addLocation("TG9jYXRpb246MTY4NjA=", "New")
.then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });

  Tags.removeLocation("TG9jYXRpb246MTY4NjA=", "New")
  .then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });