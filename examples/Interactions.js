const synup = require("../dist/index")(process.env.SYNUP_KEY);

const { Interactions } = synup;
let id; 

Interactions.getInteractions(id)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });