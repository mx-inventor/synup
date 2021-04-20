const synup = require("../dist/index")(process.env.SYNUP_KEY);

const { Campaigns } = synup;

let create= { 
    "input": {
      "locationId": "TG9jYXRpb246MTQwMjQ=",
      "name": "Christmas Sale Feedback",
      "locationCustomers": [
        {
          "name": "John",
          "email": "xyz@gmail.com",
          "phone": "3863443131"
        }
      ]
    }
}

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

// TG9jYXRpb246NTYyNjgy delete this

/*Campaigns.create(create)
.then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });*/

Campaigns.addCustomers(add)
.then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });

/*Campaigns.list(locationId)
.then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });*/