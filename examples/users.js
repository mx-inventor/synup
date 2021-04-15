const synup = require("../dist/index")(process.env.SYNUP_KEY);

const { User } = synup;

 User.getAllUsersRoles()
   .then((response) => {
     console.log(JSON.stringify(response.data));
     console.log("SUCCESS");
   })
   .catch((error) => {
     console.log(error);
     console.log("FAILURE");
   });

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



