const synup = require("../dist/index")(process.env.SYNUP_KEY);

const { Campaigns } = synup;

let customers= [
    {
    "name":"John Doe",
    "email":"john@example.com",
    "phone":"1234123412"
    },
    {
    "name":"Jane Doe",
    "email":"jane@example.com",
    "phone":"1234123413"
    }
]

let add ={
    "input":{
      "reviewCampaignId":"794be682-a321-4eac-953c-37dcac0a55a2",
      "locationCustomers":[
          {
          "name":"John Doe",
          "email":"john@example.com",
          "phone":"1234123412"
          },
          {
          "name":"Jane Doe",
          "email":"jane@example.com",
          "phone":"1234123413"
          }
      ]
    }
  }

let locationId = "TG9jYXRpb246MTQwMjQ="



Campaigns.create("TG9jYXRpb246MTQwMjQ=","myName", customers)
.then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });

/*Campaigns.addCustomers(add)
.then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });

Campaigns.list(locationId)
.then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });*/