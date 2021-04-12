const synup = require("../dist/index")(process.env.SYNUP_KEY);

const { Interactions } = synup;
let locationId; 


Interactions.getInteractions(locationId)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });

Interactions.getInteractionById()
  .then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });

/*Interactions.respondToAnInteraction()
.then((response) => {
  console.log(JSON.stringify(response.data));
  console.log("SUCCESS");
})
.catch((error) => {
  console.log(error);
  console.log("FAILURE");
});
*/
Interactions.getListOfInteractionSources(locationId)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });

/*Interactions.addInteractionSource()
.then((response) => {
  console.log(JSON.stringify(response.data));
  console.log("SUCCESS");
})
.catch((error) => {
  console.log(error);
  console.log("FAILURE");
}); */