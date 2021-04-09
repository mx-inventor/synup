const synup = require("../dist/index")(process.env.SYNUP_KEY);

const { user } = synup;

user.getAllUsersRoles()
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
