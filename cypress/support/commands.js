// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { USER_PASSWORD } from "../support/example.js";

Cypress.Commands.add("visitHome", () => {
  cy.visit("/");
  cy.wait(500);
});

Cypress.Commands.add("showLoginForm", () => {
  cy.get("#registerForm").find("button[data-auth=login]").click();
  cy.get("#loginForm").should("be.visible");
  cy.wait(500);
});

Cypress.Commands.add("login", (email, password) => {
  cy.get("#loginForm").find("input[name=email]").type(email);
  cy.get("#loginForm").find("input[name=password]").type(password);
  cy.wait(1500);
  cy.get("#loginForm").find("button[type=submit]").click();
  cy.wait(1500);
});

Cypress.Commands.add("loginWithTestUser", () => {
  cy.fixture("example").then((user) => {
    cy.login(user.email, USER_PASSWORD);
  });
});

Cypress.Commands.add("logOut", () => {
  cy.get("button[data-auth=logout]").click();
  cy.wait(500);
});

Cypress.Commands.add("isLoggedIn", () => {
  cy.window().then((win) => {
    expect(win.localStorage.getItem("token")).be.a("string");
  });
});

Cypress.Commands.add("isLoggedOut", () => {
  cy.window().then((win) => {
    expect(win.localStorage.getItem("token")).to.be.null;
  });
});

Cypress.Commands.add("invalidLogin", () => {
  cy.fixture("example").then((user) => {
    cy.login(user.email, "invalidPassword");
  });
});

Cypress.Commands.add("alertIfInvalid", () => {
  cy.on("window:alert", (text) => {
    expect(text).to.contain(
      "Either your username was not found or your password is incorrect",
    );
  });
});

Cypress.Commands.add("viewFeedPage", () => {
  cy.visitHome();
  cy.showLoginForm();
  cy.loginWithTestUser();
  cy.visitHome();
  cy.wait(500);
});
