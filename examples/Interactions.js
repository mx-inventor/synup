const synup = require("../dist/index")(process.env.SYNUP_KEY);

const { Interactions } = synup;
let locationId = "TWVkaWFGaWxlOjEzMDMzMg=="; 
let respondInteraction ={
  interactionId: "2090753a-ece6-4837-8336-8494ad308523",
  responseContent:"This is a sample response"
};

let interactionById= ['b2fa765e-c62b-4e0b-b1d6-1c67c855f5e0'];

let addInteraction ={  
  locationId:"TG9jYXRpb246MTY4MDU=",
  siteUrls:[  
     {  
        name:"trulia.com",
        url:"test.com"
     }
  ]
};

let editInteraction ={  
  "locationId":"TG9jYXRpb246MTY4MDU=",
  "siteUrls":[  
     {  
        "name":"yelloyello.com",
        "url":"https://www.yelloyello.com/places/tryvexan..."
     },
     {  
        "name":"google.com",
        "url":"https://www.google.com/search?ei=6vwBXZn..."
     },
     {  
        "name":"facebook.com",
        "url":"https://www.facebook.com/pg/thekitchenrestaurant/reviews/?ref=page_internal"
     },
     {  
        "name":"maps.google.com",
        "url":"https://www.google.com/maps/place/Foxy's+Landing..."
     }
  ]
}; 


Interactions.getInteractions(locationId)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });

Interactions.getInteractionById(interactionById)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });

Interactions.respondToAnInteraction(respondInteraction)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });

Interactions.getListOfInteractionSources(locationId)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });

Interactions.addInteractionSource(addInteraction)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  }); 

Interactions.editInteractionSource(editInteraction)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });