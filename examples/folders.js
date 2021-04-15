const synup = require("../dist/index")(process.env.SYNUP_KEY);

const { Folders } = synup;

let addLocations ={ 

    "input":{  
      "name":"Acme",
      "locationIds":[  
         "TG9jYXRpb246MTY4NjE=",
         "TG9jYXRpb246MTY4NjA=",
         "TG9jYXRpb246MTY4NDY="
      ]
   }
 }

Folders.addLocations(addLocations)
.then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });