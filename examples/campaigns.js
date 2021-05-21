const synup = require("../dist/index")(process.env.SYNUP_KEY);

const { Campaigns } = synup;

let customers = [
  {
    name: "John Doe",
    email: "john@example.com",
    phone: "1234123412",
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    phone: "1234123413",
  },
];

let reviewCampaignId = "794be682-a321-4eac-953c-37dcac0a55a2";
let locationId = "TG9jYXRpb246MTQwMjQ=";

Campaigns.create("TG9jYXRpb246MTQwMjQ=", "myName", customers)
  .then((response) => {
    console.log("SUCCESS create", response);
  })
  .catch((error) => {
    console.log("FAILURE create", error);
  });

Campaigns.addCustomers(reviewCampaignId, customers)
  .then((response) => {
    console.log("SUCCESS addCustomers", response);
  })
  .catch((error) => {
    console.log("FAILURE addCustomers", error);
  });

Campaigns.list(locationId)
  .then((response) => {
    console.log("SUCCESS list", response);
  })
  .catch((error) => {
    console.log("FAILURE list", error);
  });
