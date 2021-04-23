const synup = require("../dist/index")(process.env.SYNUP_KEY);

const { Folders } = synup;

let folderName = "myFolder";
let locationIds = [  
  "TG9jYXRpb246MTY4NjE=",
  "TG9jYXRpb246MTY4NjA=",
  "TG9jYXRpb246MTY4NDY="
];
let ids = [
  "TG9jYXRpb246MTY4NjE=",
  "TG9jYXRpb246MTY4NjA=",
]

Folders.addLocations(folderName, locationIds)
.then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });

Folders.rename(folderName,ids)
.then((response) => {
  console.log(JSON.stringify(response.data));
  console.log("SUCCESS");
})
.catch((error) => {
  console.log(error);
  console.log("FAILURE");
});

Folders.removeLocation(ids)
.then((response) =>{
  console.log(JSON.stringify(response.data));
  console.log("SUCCESS");
})
.catch((error) => {
  console.log(error);
  console.log("FAILURE");
}); 

Folders.deleteFolder(folderName)
.then((response) => {
  console.log(JSON.stringify(response.data));
  console.log("SUCCESS");
})
.catch((error) => {
  console.log(error);
  console.log("FAILURE");
});