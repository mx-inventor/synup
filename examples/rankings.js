const synup = require("../dist/index")(process.env.SYNUP_KEY);

const {Rankings} = synup;

  let addKeywords = {
      locationId: "TG9jYXRpb246MTM5OTg=",
      inputKeywords: ["road paving", "road building"]
     }

 Rankings.addKeywordsLocation(addKeywords)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      console.log("SUCCESS");
    })
    .catch((error) => {
      console.log(error);
      console.log("FAILURE");
  });

 Rankings.listKeywords()
 .then((response) => {
     console.log(JSON.stringify(response.data));
     console.log("SUCCESS");
   })
   .catch((error) => {
     console.log(error);
     console.log("FAILURE");
  });

let locationId = "TG9jYXRpb246MjE5MjMx";

Rankings.getKeywordsPerformance(locationId)
.then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });

 let archiveKeyword = {
     id: "S2V5d29yZDo3NjQzMTE="
 }

 Rankings.archiveKeyword(archiveKeyword)
 .then((response) => {
     console.log(JSON.stringify(response.data));
     console.log("SUCCESS");
   })
   .catch((error) => {
     console.log(error);
     console.log("FAILURE");
   });
