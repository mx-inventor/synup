const synup = require("../dist/index")(process.env.SYNUP_KEY);

const { Locations } = synup;

let locationId = "TG9jYXRpb246NTIxMzI0";

let photoIds = ["TWVkaWFGaWxlOjg4MjY5Nw==", "TWVkaWFGaWxlOjg4MjY5OA=="];

let starred = true;

let id = "TG9jYXRpb246MTM2OTc=";

let photos = [
  {
    photo: "https://via.placeholder.com/250.jpg",
    type: "ADDITIONAL",
  },
];

Locations.create({})
  .then((response) => {
    console.log("SUCCESS create", response);
  })
  .catch((error) => {
    /*console.log(error);*/
    console.log("FAILURE create", error);
  });

Locations.list()
  .then((response) => {
    console.log("SUCCESS listLocations", response);
  })
  .catch((error) => {
    console.log("FAILURE listLocations", error);
  });

Locations.getByIds(["TG9jYXRpb246MTY4MDg=", "TG9jYXRpb246MTY3NDk="])
  .then((response) => {
    console.log("SUCCESS getByIds", response);
  })
  .catch((error) => {
    console.log("FAILURE getByIds", error);
  });

Locations.search("two")
  .then((response) => {
    console.log("SUCCESS search", response);
  })
  .catch((error) => {
    console.log("FAILURE search", error);
  });

Locations.addPhotos(locationId, photos)
  .then((response) => {
    console.log("SUCCESS addPhoto", response);
  })
  .catch((error) => {
    console.log("FAILURE addPhoto", error);
  });

Locations.deletePhotos("mild", ["locationId", "photoIds"])
  .then((response) => {
    console.log("SUCCESS deletePhoto", response);
  })
  .catch((error) => {
    console.log("FAILURE deletePhoto", error);
  });

Locations.updateLocation(id)
  .then((response) => {
    console.log("SUCCESS updateLocation", response);
  })
  .catch((error) => {
    console.log("FAILURE updateLocation", error);
  });

Locations.starPhotos(locationId, photoIds, starred)
  .then((response) => {
    console.log("SUCCESS startPhoto", response);
  })
  .catch((error) => {
    console.log("FAILURE startPhoto", error);
  });

Locations.archiveLocation()
  .then((response) => {
    console.log("SUCCESS archiveLocation", response);
  })
  .catch((error) => {
    console.log("FAILURE archiveLocation", error);
  });

Locations.activateLocation()
  .then((response) => {
    console.log("SUCCESS activateLocation", response);
  })
  .catch((error) => {
    console.log("FAILURE activateLocation", error);
  });

Locations.subscriptions()
  .then((response) => {
    console.log("SUCCESS subscriptions", response);
  })
  .catch((error) => {
    console.log("FAILURE subscriptions", error);
  });
