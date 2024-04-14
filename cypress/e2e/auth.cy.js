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

  it("allows a valid and registered user to login and saves token", () => {
    cy.showLoginForm();
    cy.loginWithTestUser();
    cy.isLoggedIn();
  });
});

describe("Invalid Credentials", () => {
  beforeEach(() => {
    cy.visitHome();
  });

  it("displays an error message if invalid credentials are given", () => {
    cy.showLoginForm();
    cy.invalidLogin();
    cy.alertIfInvalid();
  });
});
