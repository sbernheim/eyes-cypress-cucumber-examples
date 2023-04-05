import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the Heroku Internet Shifting Image page', () => {
    cy.visit('https://the-internet.herokuapp.com/shifting_content/image?mode=random&pixel_shift=30')
})

Given('I am on the Heroku Internet Shifting List page', () => {
    cy.visit('https://the-internet.herokuapp.com/shifting_content/list')
})
