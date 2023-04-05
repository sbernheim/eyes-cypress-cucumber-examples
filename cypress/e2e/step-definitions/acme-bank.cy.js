import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('I am on the ACME Bank Login page', () => {
  const url = Cypress.env('ADD_DIFFS') ? '/index_v2.html' : '/'
  cy.log(`visiting '${url}'`)
  cy.visit({
    url: url,
    log: true
  })
});

When('I log in with a valid username and password', () => {
  cy.get('#username').type('valid-username')
  cy.get('#password').type('valid-password')
  cy.get('#log-in').click()
});


Then('I should see the ACME Bank Main page', () => {
  const path = cy.location('pathname')
  cy.log(`pathname '${path}'`)
  cy.location('pathname').should('equal',Cypress.env("ADD_DIFFS") ? '/app_v2.html' : '/app.html')
});