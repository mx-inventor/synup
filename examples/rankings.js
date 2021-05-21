const synup = require("../dist/index")(process.env.SYNUP_KEY);

const { Rankings } = synup;

Rankings.addKeywords("TG9jYXRpb246MTM5OTg=", ["road paving", "road building"])
  .then((response) => {
    console.log("SUCCESS addKeywords", response);
  })
  .catch((error) => {
    console.log("FAILURE addKeywords", error);
  });

Rankings.listKeywords()
  .then((response) => {
    console.log("SUCCESS listKeywords", response);
  })
  .catch((error) => {
    console.log("FAILURE listKeywords", error);
  });

let locationId = "TG9jYXRpb246MjE5MjMx";

Rankings.getKeywordsPerformance(locationId)
  .then((response) => {
    console.log("SUCCESS getKeywordsPerformance", response);
  })
  .catch((error) => {
    console.log("FAILURE getKeywordsPerformance", error);
  });

let archiveKeyword = {
  id: "S2V5d29yZDo3NjQzMTE=",
};

Rankings.archiveKeyword(archiveKeyword)
  .then((response) => {
    console.log("SUCCESS archiveKeyword", response);
  })
  .catch((error) => {
    console.log("FAILURE archiveKeyword", error);
  });
