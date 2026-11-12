import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";
import DashboardPage from "../../pages/DashboardPage";
import AdminPage from "../../pages/AdminPage";

let createdUsername = "";
let createdRole = "";

Given("user is logged in as {string} from fixture", (userKey) => {
  cy.fixture("users").then((users) => {
    LoginPage.visit();
    LoginPage.login(users[userKey].username, users[userKey].password);
    DashboardPage.verifyDashboardDisplayed();
  });
});

Given("user navigates to Admin page", () => {
  DashboardPage.goToAdmin();
  AdminPage.verifyAdminPage();
});

When("user adds a new admin {string} with role {string}", (newUsername, role) => {
  // suffix unik supaya tidak bentrok saat test dijalankan berulang kali
  createdUsername = `${newUsername}${Date.now().toString().slice(-5)}`;
  createdRole = role;

  cy.fixture("users").then(({ newUser }) => {
    AdminPage.addUser({
      role,
      status: newUser.status,
      employeeHint: newUser.employeeHint,
      username: createdUsername,
      password: newUser.password,
    });
  });
});

Then("the admin {string} should appear in the user list", () => {
  AdminPage.searchUser(createdUsername);
  AdminPage.verifyUserInList(createdUsername, createdRole);
});