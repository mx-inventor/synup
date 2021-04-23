const synup = require("../dist/index")(process.env.SYNUP_KEY);

const { Locations } = synup;

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

Locations.addPhoto()
.then((response) => {
  /*console.log(JSON.stringify(response.data));*/
  console.log("SUCCESS addPhoto");
})
.catch((error) => {
  /*console.log(error);*/
  console.log("FAILURE addPhoto");
  });

Locations.deletePhoto("mild",['locationId','photoIds'])
.then((response) => {
  /*console.log(JSON.stringify(response.data));*/
  console.log("SUCCESS deletePhoto");
})
.catch((error) => {
  console.log(error);
  console.log("FAILURE deletePhoto");
});

Locations.updateLocation()
.then((response) => {
  /*console.log(JSON.stringify(response.data));*/
  console.log("SUCCESS updateLocation");
})
.catch((error) => {
  console.log(error);
  console.log("FAILURE updateLocation");
  });

Locations.startPhoto()
.then((response) => {
  /*console.log(JSON.stringify(response.data));*/
  console.log("SUCCESS startPhoto");
})
.catch((error) => {
  /*console.log(error);*/
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
