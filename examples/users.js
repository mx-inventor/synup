const synup = require("../dist/index")(process.env.SYNUP_KEY);

const { Users } = synup;

//LIST USER ROLES
Users.getAllRoles()
  .then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });

//CREATE USER WITH ROLE
let userRole = {
      id: "VXNlcjozNTUyOQ==",
      email:"mk@orthopreneur.com",
      roleId:"Q3VzdG9tUm9sZTo3Mjc1NA==",
      firstName:"Mary Kay Miller",
      directCustomer:false,
      lastName: null,
      customRole: {
        id: "Q3VzdG9tUm9sZTo3Mjc1NA==",
        name: "Client"
      },
  }

Users.createWithRole(userRole)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });

//ADD LOCATION TO USER
Users.addLocations("VXNlcjoxMDAyOA==",["TG9jYXRpb246NDA5ODE=", "TG9jYXRpb246NDI1ODg="])
  .then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });

//ADD FOLDERS TO USER
Users.addFolders("VXNlcjoxMDAyOA==", ["c1d92c09-8ddd-469e-af96-0eb64a48d647","a5af4f5d-41b6-4a8a-b24f-98741b021b7b"])
  .then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });

//LIST USER
Users.getAll()
  .then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });

//LIST USER RESOURCES
let userId="AISKcjo2OTk9"; 

Users.listResources(userId)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });

//LIST USER DETAILS BY ID
let userIds = ["VXNlcjo5OTgx", "VXNlcjoxMDAyOA=="];

Users.listByIds(userIds)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });

//UPDATE A USER
let userUpdate = {
  input:{
      id:"VXNlcjo5OTY0",
      email:"pttqa1+4186@gmail.com",
      roleId:"Q3VzdG9tUm9sZToxNzc4Mw==",
      firstName:"pttqa1+4187",
      lastName:"",
      phone:"",
      archived:false,
      directCustomer:true
  }
}

Users.updateUser(userUpdate)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });

//REMOVE LOCATION FOR A USER
Users.removeLocations("VXNlcjoxMDAyOA==",["TG9jYXRpb246NDA5ODE=", "TG9jYXRpb246NDI1ODg="])
  .then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });

//REMOVE FOLDERS A USER
Users.removeFolders("VXNlcjoxMDAyOA==", ["c1d92c09-8ddd-469e-af96-0eb64a48d647","a5af4f5d-41b6-4a8a-b24f-98741b021b7b"])
  .then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });