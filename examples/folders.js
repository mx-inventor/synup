const synup = require("../dist/index")(process.env.SYNUP_KEY);

const { Folders } = synup;

let folderName = "myFolder";
let locationIds = [
  "TG9jYXRpb246MTY4NjE=",
  "TG9jYXRpb246MTY4NjA=",
  "TG9jYXRpb246MTY4NDY=",
];
let ids = ["TG9jYXRpb246MTY4NjE=", "TG9jYXRpb246MTY4NjA="];

Folders.addLocations(folderName, locationIds)
  .then((response) => {
    console.log("SUCCESS addLocation", response);
  })
  .catch((error) => {
    console.log("FAILURE addLocation", error);
  });

Folders.rename(folderName, ids)
  .then((response) => {
    console.log("SUCCESS rename", response);
  })
  .catch((error) => {
    console.log("FAILURE rename", error);
  });

Folders.removeLocation(ids)
  .then((response) => {
    console.log("SUCCESS removeLocation", response);
  })
  .catch((error) => {
    console.log("FAILURE removeLocation", error);
  });

Folders.deleteFolder(folderName)
  .then((response) => {
    console.log("SUCCESS deleteFolder", response);
  })
  .catch((error) => {
    console.log("FAILURE deleteFolder", error);
  });
