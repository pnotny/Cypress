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


Cypress.Commands.add("makefirststep", (input) => { 
    cy.get('.form-control[id=user-message]').should('be.enabled').type(input)
    cy.get('#get-input > .btn').contains('Show Message').click()
    cy.get(':nth-child(4) > .panel-body > :nth-child(4)').contains('hello3')

 })
 Cypress.Commands.add("makesecondstep", (input1,input2) => { 
    cy.get('#sum1').should('be.enabled').type(input1)
    cy.get('#sum2').should('be.enabled').type(input2)
    cy.get('#gettotal > .btn').click().contains('Get Total')
    cy.get('#displayvalue').contains('3')
    

 })
 Cypress.Commands.add("checkbox1", () => { 
    cy.get('#treemenu > :nth-child(1) > :nth-child(3) > :nth-child(1)').click()
    cy.get(':nth-child(3) > :nth-child(1) > ul > :nth-child(2) > a').click()
    cy.get('#isAgeSelected').should('not.be.checked').check().should('be.checked')
    cy.get('#txtAge').contains('Success - Check box is checked')
    

 })
 Cypress.Commands.add("checkbox2", () => { 
    cy.get('#check1').click().should('have.value', 'Uncheck All')
    cy.get(':nth-child(3) > label > .cb1-element').should('be.checked').uncheck().should('not.be.checked')
    cy.get(':nth-child(4) > label > .cb1-element').should('be.checked').uncheck().should('not.be.checked')
    cy.get('#check1').should('have.value', 'Check All')
    

 })
  


 Cypress.Commands.add("changetoradiosite", () => { 
   cy.get(':nth-child(3) > :nth-child(1) > .tree-indicator').click()
   cy.get(':nth-child(3) > :nth-child(1) > ul > :nth-child(3) > a').click()
   cy.get('.panel-body > :nth-child(2) > input').should('not.be.checked').click().should('be.checked')
   
   

})

Cypress.Commands.add("firstradiobutton", () => { 
   cy.get('#buttoncheck').should('be.visible').click()
   cy.get('.radiobutton').contains('Male')
   

})

Cypress.Commands.add("ajaxform", () => { 
   cy.get('#check1').click().should('have.value', 'Uncheck All')
   cy.get(':nth-child(3) > label > .cb1-element').should('be.checked').uncheck().should('not.be.checked')
   cy.get(':nth-child(4) > label > .cb1-element').should('be.checked').uncheck().should('not.be.checked')
   cy.get('#check1').should('have.value', 'Check All')
   

})

 
 