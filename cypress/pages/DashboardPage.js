class DashboardPage {
  elements = {
    header: () => cy.get(".oxd-topbar-header-breadcrumb h6"),
    adminMenu: () => cy.contains(".oxd-main-menu-item", "Admin"),
  };

  verifyDashboardDisplayed() {
    cy.url().should("include", "/dashboard/index");
    this.elements.header().should("have.text", "Dashboard");
  }

  goToAdmin() {
    this.elements.adminMenu().click();
  }
}
export default new DashboardPage();