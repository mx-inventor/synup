const synup = require("../dist/index")(process.env.SYNUP_KEY);

const {Rankings} = synup;

//ADD KEYWORDS
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

//LIST KEYWORDS
Rankings.listKeywords()
.then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });

//GET KEYWORDS PERMORMANCE
Rankings.getKeywordsPerformance()
.then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });