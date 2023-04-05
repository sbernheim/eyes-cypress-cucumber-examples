import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Then('Check the Login page with Eyes and coded regions', () => {
  cy.eyesCheckWindow({
    tag: 'Login page',
    layout: { selector: '#log-in', padding: 5 },
    ignore: [
      { selector: 'div.logo-w img', padding: { top: 30, right: 5, bottom: 5, left: 10 } },
    ],
    floating: {
      selector: 'label.form-check-label',
      maxUpOffset: 5,
      maxDownOffset: 5,
      maxLeftOffset: 10,
      maxRightOffset: 30
    }
  })
})

Then('Check the Main page with Eyes and coded regions', () => {
  cy.eyesCheckWindow({
    tag: 'Main page',
    scriptHooks: {
      beforeCaptureScreenshot: "addBtn = document.querySelector('.element-actions a:nth-child(1)'); addBtn.style.backgroundColor='red'; addBtn.style.borderColor='red';"
      //beforeCaptureScreenshot: "document.querySelector('.element-actions a:nth-child(1)').style.display='none';"
      //beforeCaptureScreenshot: "document.querySelector('.element-actions a:nth-child(1)').style.display='none'; document.querySelector('.top-bar').style.backgroundColor='red';"
    },
    ignore: [
      { selector: 'div.element-actions', padding: 5 },
    ],
    layout: [
      { selector: '#time', padding: { top: 5, bottom: 5, left: -120, right: -300 } },
      //{ selector: 'div.element-actions', padding: 5 },
    ]

  })
})

Then('Check the Main page transaction table with Eyes', () => {
  cy.eyesCheckWindow({
    tag: 'Transaction table',
    target: 'region',
    selector: 'div.table-responsive'
  })
})

Then('Check the Main page action buttons with Eyes', () => {
  cy.get('div.element-actions')
    .should('be.visible')
    .then($el => {
      cy.eyesCheckWindow({
        tag: 'Action Buttons',
        target: 'region',
        element: $el
      })
    })
})
