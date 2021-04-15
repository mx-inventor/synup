const synup = require("../dist/index")(process.env.SYNUP_KEY);

const { User } = synup;

//LIST USER ROLES
 User.getAllUsersRoles()
   .then((response) => {
     console.log(JSON.stringify(response.data));
     console.log("SUCCESS");
   })
   .catch((error) => {
     console.log(error);
     console.log("FAILURE");
   });

//CREATE USER WITH ROLE
let UserRole = {
  input:{
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
}

User.createUserWithRole(UserRole)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });

  //ADD LOCATION TO USER
  addLocationUser = {
    input:{
        userId:"VXNlcjoxMDAyOA==",
        locationIds:["TG9jYXRpb246NDA5ODE=", "TG9jYXRpb246NDI1ODg="]
    }
 }

User.addLocationUser(addLocationUser)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });

  //ADD FOLDERS TO USER
  addFolderUser = {
    input:{
        userId:"VXNlcjoxMDAyOA==",
        folderIds:["c1d92c09-8ddd-469e-af96-0eb64a48d647","a5af4f5d-41b6-4a8a-b24f-98741b021b7b"]
    }
}

User.addFoldersUser(addFolderUser)
.then((response) => {
  console.log(JSON.stringify(response.data));
  console.log("SUCCESS");
})
.catch((error) => {
  console.log(error);
  console.log("FAILURE");
});

//LIST USER
User.getAllUsers()
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

  User.listUserResources(userId)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });









