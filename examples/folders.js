const synup = require("../dist/index")(process.env.SYNUP_KEY);

const { Folders } = synup;

let addLocations ={ 
  "input":{
    "name": "MyFolder1",
    "locationIds": ["TG9jYXRpb246NTYyNjgy"]
  }
}

 let rename={
  "input":{  
    "name":"MyFolderNew",
    "id":[  
       "0e4cc56e-45f8-4058-a713-ead264fa9318"
    ]
  }
 }

let removeLocation={
  "input":{
    "locationIds":["TG9jYXRpb246MTY4NDY="]
  }
}

let deleteFolder ={
  "input":{  
    "name":"MyFolder1"
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

Folders.rename(rename)
.then((response) => {
  console.log(JSON.stringify(response.data));
  console.log("SUCCESS");
})
.catch((error) => {
  console.log(error);
  console.log("FAILURE");
});

Folders.removeLocation(removeLocation)
.then((response) =>{
  console.log(JSON.stringify(response.data));
  console.log("SUCCESS");
})
.catch((error) => {
  console.log(error);
  console.log("FAILURE");
}); 

Folders.deleteFolder(deleteFolder)
.then((response) => {
  console.log(JSON.stringify(response.data));
  console.log("SUCCESS");
})
.catch((error) => {
  console.log(error);
  console.log("FAILURE");
});