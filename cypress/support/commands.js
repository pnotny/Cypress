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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add("check1", (input) => { 
    cy.get('.form-control[id=user-message]').should('be.enabled').type(input)
    cy.get('#get-input > .btn').contains('Show Message').click()
    cy.get(':nth-child(4) > .panel-body > :nth-child(4)').contains('hello3')

 })
 Cypress.Commands.add("check2", (input1,input2) => { 
    cy.get('#sum1').should('be.enabled').type(input1)
    cy.get('#sum2').should('be.enabled').type(input2)
    cy.get('#gettotal > .btn').click().contains('Get Total')
    cy.get('#displayvalue').contains('3')
    

 })
  


 