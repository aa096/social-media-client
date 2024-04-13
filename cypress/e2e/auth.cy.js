describe("Authentication", () => {
  beforeEach(() => {
    cy.visitHome();
  });

  it("displays a register form", () => {
    cy.get("#registerForm").should("be.visible");
  });

  it("displays a login form when the login button is pressed", () => {
    cy.showLoginForm();
  });

  it("allows a valid and registered user to login", () => {
    cy.showLoginForm();

    cy.loginWithTestUser();

    cy.isLoggedIn();
  });

  it("allows a valid user to log out", () => {
    cy.showLoginForm();

    cy.loginWithTestUser();

    cy.isLoggedIn();

    cy.logOut();

    cy.isLoggedOut();
  });
});
