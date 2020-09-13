/// <reference types='cypress' />

describe('My First Test', () => {

    it('Visits the Kitchen Sink', () => {
      cy.visit('https://example.cypress.io')
      cy.contains('type').click()

      cy.url().should('include', 'io/commands/actions')
    })
{
    it('type in email', () => {
        cy.get('.action-email')
        .type('něco')
        .should('have.value','pornhub@senam.cz') 
    })
    it('click na submit', () => {
        cy.get('.action-form')
        .submit()
        
        cy.get('.action-form').click()
    })
     
}
  })