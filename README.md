# Workflow Course Assignment
## Social Media Client
This assignment focuses on enhancing the quality of an existing application by implementing various development workflows and a robust testing strategy.

# Objective
The primary goal of this assignment is to elevate the quality of the Social Media Client application through systematic improvements in development workflows and testing methodologies.

# Table of Content
## Installations & Integrations
- ESlint
- Prettier
- Commit hooks
- Jest
- Cypress

## Tests 
### Unit test using Jest
  - A login test that verifies that the function correctly stores the token and profile information in local storage when provided with valid credentials.
  - A logout test verifies that the logout function correctly removes the token and profile information from local storage.

### End-to-End test using Cypress
  - Auth test checks if the user can log in with valid credentials using the form
  - Auth test ensures that an error message is displayed when invalid credentials are provided during login
  - Logout test checks if user can logout using the logout button

### Workflow Status Badges
[![Automated Unit Testing](https://github.com/aa096/social-media-client/actions/workflows/unit-test.yml/badge.svg)](https://github.com/aa096/social-media-client/actions/workflows/unit-test.yml) 
[![Automated E2E Testing](https://github.com/aa096/social-media-client/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/aa096/social-media-client/actions/workflows/e2e-test.yml)

### Live App
This project is deployed to [GitHub Pages](https://aa096.github.io/social-media-client/)

[![Deploy static content to Pages](https://github.com/aa096/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/aa096/social-media-client/actions/workflows/pages.yml)

## Getting Started

### Installing

1. Clone the repo:

```bash
git clone git https://github.com/aa096/social-media-client
```

2. Install the dependencies:

```
npm install
```
This will launch a live server for development:

```bash
npm  start
```

## Testing
```bash
npm run test
```
