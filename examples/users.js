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

  addLocationUser = {
    input:{
        userId:"VXNlcjoxMDAyOA==",
        locationIds:["TG9jYXRpb246NDA5ODE=", "TG9jYXRpb246NDI1ODg="]
    }
}

//ADD LOCATION TO USER
User.addLocationUser(addLocationUser)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });




