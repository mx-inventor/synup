const synup = require("../dist/index")(process.env.SYNUP_KEY);

const { Tags } = synup;

Tags.addLocation("TG9jYXRpb246MTY4NjA=", "New")
  .then((response) => {
    console.log("SUCCESS addLocation", response);
  })
  .catch((error) => {
    console.log("FAILURE addLocation", error);
  });

Tags.removeLocation("TG9jYXRpb246MTY4NjA=", "New")
  .then((response) => {
    console.log("SUCCESS removeLocation", response);
  })
  .catch((error) => {
    console.log("FAILURE removeLocation", error);
  });
