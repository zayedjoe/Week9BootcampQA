class AdminPage {
  group = (label) =>
    cy.contains("label", label).parents(".oxd-input-group");

  verifyAdminPage() {
    cy.url().should("include", "/admin/viewSystemUsers");
    cy.get(".oxd-topbar-header-breadcrumb h6").should("contain", "Admin");
  }

  clickAdd() {
    cy.contains("button", "Add").click();
    cy.url().should("include", "/admin/saveSystemUser");
  }

  selectDropdown(label, option) {
    this.group(label).find(".oxd-select-text").click();
    cy.get(".oxd-select-dropdown").contains(option).click();
  }

  selectEmployee(hint) {
    this.group("Employee Name").find("input").type(hint);
    cy.get(".oxd-autocomplete-option", { timeout: 15000 })
      .first()
      .should("not.contain.text", "Searching")
      .click();
  }

  addUser({ role, status, employeeHint, username, password }) {
    this.clickAdd();
    this.selectDropdown("User Role", role);
    this.selectEmployee(employeeHint);
    this.selectDropdown("Status", status);
    this.group("Username").find("input").type(username);
    cy.get('input[type="password"]').eq(0).type(password, { log: false });
    cy.get('input[type="password"]').eq(1).type(password, { log: false });
    cy.get('button[type="submit"]').click();
    cy.url({ timeout: 15000 }).should("include", "/admin/viewSystemUsers");
  }

  searchUser(username) {
    this.group("Username").find("input").clear().type(username);
    cy.contains("button", "Search").click();
  }

  verifyUserInList(username, role) {
    cy.get(".oxd-table-body").should("contain", username);
    if (role) cy.get(".oxd-table-body").should("contain", role);
  }
}
export default new AdminPage();