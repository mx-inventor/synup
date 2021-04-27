const synup = require("../dist/index")(process.env.SYNUP_KEY);

const { Locations } = synup;

let locationId = "TG9jYXRpb246NTIxMzI0"

let photoIds = ["TWVkaWFGaWxlOjg4MjY5Nw==", "TWVkaWFGaWxlOjg4MjY5OA=="]

let starred = true

let id = "TG9jYXRpb246MTM2OTc="

let phone = "9910991111"

let photos = [
  {
    "photo": "https://via.placeholder.com/250.jpg",
    "type": "ADDITIONAL"
  }
]


Locations.listLocations()
.then((response) => {
  /*console.log(JSON.stringify(response.data));*/
  console.log("SUCCESS listLocations");
})
.catch((error) => {
  /*console.log(error);*/
  console.log("FAILURE listLocations");
});

Locations.getAll()
  .then((response) => {
    /*console.log(JSON.stringify(response.data));*/
    console.log("SUCCESS getAll");
  })
  .catch((error) => {
    /*console.log(error);*/
    console.log("FAILURE getALL");
  });

Locations.getByIds(["TG9jYXRpb246MTY4MDg=", "TG9jYXRpb246MTY3NDk="])
  .then((response) => {
    /*console.log(JSON.stringify(response.data));*/
    console.log("SUCCESS getByIds");
  })
  .catch((error) => {
    /*console.log(error);*/
    console.log("FAILURE getByIds");
  });

Locations.search("two")
  .then((response) => {
   /* console.log(JSON.stringify(response.data));*/
    console.log("SUCCESS search");
  })
  .catch((error) => {
    /*console.log(error);*/
    console.log("FAILURE search");
  });

Locations.addPhotos(locationId,photos)
.then((response) => {
  /*console.log(JSON.stringify(response.data));*/
  console.log("SUCCESS addPhoto");
})
.catch((error) => {
  /*console.log(error);*/
  console.log("FAILURE addPhoto");
  });

Locations.deletePhotos("mild",['locationId','photoIds'])
.then((response) => {
  /*console.log(JSON.stringify(response.data));*/
  console.log("SUCCESS deletePhoto");
})
.catch((error) => {
  console.log(error);
  console.log("FAILURE deletePhoto");
});

Locations.updateLocation(id,{phone})
.then((response) => {
  /*console.log(JSON.stringify(response.data));*/
  console.log("SUCCESS updateLocation");
})
.catch((error) => {
  console.log(error);
  console.log("FAILURE updateLocation");
  });

Locations.starPhotos(locationId, photoIds, starred)
.then((response) => {
  console.log(JSON.stringify(response.data));
  console.log("SUCCESS startPhoto");
})
.catch((error) => {
  console.log(error);
  console.log("FAILURE startPhoto");
  });

Locations.archiveLocation()
.then((response) => {
  /*console.log(JSON.stringify(response.data));*/
  console.log("SUCCESS archiveLocation");
})
.catch((error) => {
  /*console.log(error);*/
  console.log("FAILURE archiveLocation");
  });

Locations.activateLocation()
.then((response) => {
  /*console.log(JSON.stringify(response.data));*/
  console.log("SUCCESS activateLocation");
})
.catch((error) => {
  /*console.log(error);*/
  console.log("FAILURE activateLocation");
  });

Locations.subscriptions()
.then((response) => {
  /*console.log(JSON.stringify(response.data));*/
  console.log("SUCCESS subscriptions");
})
.catch((error) => {
  /*console.log(error);*/
  console.log("FAILURE subscriptions");
  });
