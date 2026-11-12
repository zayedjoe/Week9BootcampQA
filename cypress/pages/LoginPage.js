class LoginPage {
  elements = {
    username: () => cy.get('input[name="username"]'),
    password: () => cy.get('input[name="password"]'),
    loginButton: () => cy.get('button[type="submit"]'),
    errorMessage: () => cy.get(".oxd-alert-content-text"),
  };

  visit() {
    cy.visit("/web/index.php/auth/login");
    this.elements.username().should("be.visible");
  }

  login(username, password) {
    this.elements.username().clear().type(username);
    this.elements.password().clear().type(password, { log: false });
    this.elements.loginButton().click();
  }

  verifyErrorMessage(message) {
    this.elements.errorMessage().should("be.visible").and("contain", message);
  }
}
export default new LoginPage();