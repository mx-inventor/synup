const synup = require("../dist/index")(process.env.SYNUP_KEY);

const { Tags } = synup;

let addLocation={
    "input":{
        "locationId":"TG9jYXRpb246MTY4NjA=",
        "tag":"New"
    }
}

Tags.addLocations(addLocation)
.then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });