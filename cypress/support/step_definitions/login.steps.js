import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";
import DashboardPage from "../../pages/DashboardPage";

Given("user is on the login page", () => {
  LoginPage.visit();
});

When("user logs in using {string} credentials from fixture", (userKey) => {
  cy.fixture("users").then((users) => {
    const { username, password } = users[userKey];
    LoginPage.login(username, password);
  });
});

Then("user should see the dashboard page", () => {
  DashboardPage.verifyDashboardDisplayed();
});

Then("user should see error message {string}", (message) => {
  LoginPage.verifyErrorMessage(message);
});