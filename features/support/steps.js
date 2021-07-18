const { Given, Then, BeforeAll, AfterAll } = require("@cucumber/cucumber");

const chai = require("chai");
const expect = chai.expect;
const schema = chai.use(require("chai-json-schema"));

const { generateRandomUsername, generateRandomScore } = require("../../utils/utils");
const { usersListJsonSchema } = require("../../data/schema");

const userAPI = require("../../rest-client/userAPI");

let response;
const username = generateRandomUsername();
const defaultScore = 0;

BeforeAll(() => {
  console.log("***** BEGINNING OF TESTS *****");
});

AfterAll(() => {
  console.log("***** END OF TESTS *****");
});

Given("I have the user API", async () => {
  await expect(userAPI.baseURL).to.be.not.null;
  await expect(userAPI.path).to.be.not.null;
});

Then(/^I can create a User$/, async () => {
  response = await userAPI.createUser(username, defaultScore);

  // Assertions
  expect(response.status).to.equal(201);
  expect(response.body.status).to.equal("success");
  expect(response.body.message).to.equal("User added.");
});

Then(/^I can view the User$/, async () => {
  response = await userAPI.viewUser();

  // Assertions
  expect(response.status).to.equal(200);
  expect(typeof response.body).to.equal("object");
  expect(response.body).to.be.jsonSchema(usersListJsonSchema);
  expect(response.body.length).to.not.equal(0);
});

Then(/^I can update the User$/, async () => {
  response = await userAPI.updateUser(username, generateRandomScore());
});

Then(/^I can delete the User$/, async () => {
  response = await userAPI.deleteUser(username);
});
