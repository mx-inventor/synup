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

Campaigns.create(create)
.then((response) => {
    console.log(JSON.stringify(response.data));
    console.log("SUCCESS");
  })
  .catch((error) => {
    console.log(error);
    console.log("FAILURE");
  });
