import { Before, After, Then } from "@badeball/cypress-cucumber-preprocessor";

// This hook will execute before scenarios tagged with @eyes
Before({ tags: '@eyes' }, () => {
  cy.eyesOpen(
    {
      browser: [
        { name: 'chrome', width: 1024, height: 768 },
        //{name: 'chrome', width: 800, height: 600},
        //{name: 'firefox', width: 1024, height: 768},
        //{deviceName: 'iPhone X'},
      ]
    }
  )
})

// This hook will execute after scenarios tagged with @eyes
After({ tags: '@eyes' }, () => {
  cy.eyesClose()
})

Then('Check the {string} screen with Eyes', (pageName) => {
  cy.eyesCheckWindow({
    tag: pageName
  })
})