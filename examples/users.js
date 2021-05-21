const synup = require("../dist/index")(process.env.SYNUP_KEY);

const { Users } = synup;

//LIST USER ROLES
Users.getAllRoles()
  .then((response) => {
    console.log("SUCCESS getUserRoles", response);
  })
  .catch((error) => {
    console.log("FAILURE getAllRoles", error);
  });

//CREATE USER WITH ROLE
let userRole = {
  email: "pttqa1+2984@gmail.com",
  roleId: "Q3VzdG9tUm9sZToyMDgzMQ==",
  firstName: "pttqa1+2984",
  directCustomer: true,
};

Users.createWithRole(userRole)
  .then((response) => {
    console.log("SUCCESS createWithRole", response);
  })
  .catch((error) => {
    console.log("FAILURE createWithRole", error);
  });

//ADD LOCATION TO USER
Users.addLocations("VXNlcjoxMDAyOA==", [
  "TG9jYXRpb246NDA5ODE=",
  "TG9jYXRpb246NDI1ODg=",
])
  .then((response) => {
    console.log("SUCCESS addLocations", response);
  })
  .catch((error) => {
    console.log("FAILURE addLocations", error);
  });

//ADD FOLDERS TO USER
Users.addFolders("VXNlcjoxMDAyOA==", [
  "c1d92c09-8ddd-469e-af96-0eb64a48d647",
  "a5af4f5d-41b6-4a8a-b24f-98741b021b7b",
])
  .then((response) => {
    console.log("SUCCESS addFolders", response);
  })
  .catch((error) => {
    console.log("FAILURE addFolders", error);
  });

//LIST USER
Users.getAll()
  .then((response) => {
    console.log("SUCCESS getAll", response);
  })
  .catch((error) => {
    console.log("FAILURE getAll", error);
  });

//LIST USER RESOURCES
let userId = "AISKcjo2OTk9";

Users.listResources(userId)
  .then((response) => {
    console.log("SUCCESS listResources", response);
  })
  .catch((error) => {
    console.log("FAILURE listResources", error);
  });

//LIST USER DETAILS BY ID
let userIds = ["VXNlcjo5OTgx", "VXNlcjoxMDAyOA=="];

Users.listByIds(userIds)
  .then((response) => {
    console.log("SUCCESS listByIds", response);
  })
  .catch((error) => {
    console.log("FAILURE listByIds", error);
  });

//UPDATE A USER
let user = {
  id: "VXNlcjo5OTY0",
  email: "pttqa1+4186@gmail.com",
  roleId: "Q3VzdG9tUm9sZToxNzc4Mw==",
  firstName: "pttqa1+4187",
  lastName: "",
  phone: "",
  archived: false,
  directCustomer: true,
};

Users.update("VXNlcjoxMDAyOA==", user)
  .then((response) => {
    console.log("SUCCESS update", response);
  })
  .catch((error) => {
    console.log("FAILURE update", error);
  });

//REMOVE LOCATION FOR A USER
Users.removeLocations("VXNlcjoxMDAyOA==", [
  "TG9jYXRpb246NDA5ODE=",
  "TG9jYXRpb246NDI1ODg=",
])
  .then((response) => {
    console.log("SUCCESS removeLocations", response);
  })
  .catch((error) => {
    console.log("FAILURE removeLocations", error);
  });

//REMOVE FOLDERS A USER
Users.removeFolders("VXNlcjoxMDAyOA==", [
  "c1d92c09-8ddd-469e-af96-0eb64a48d647",
  "a5af4f5d-41b6-4a8a-b24f-98741b021b7b",
])
  .then((response) => {
    console.log("SUCCESS removeFolders", response);
  })
  .catch((error) => {
    console.log("FAILURE removeFolders", error);
  });
