/// <reference types='cypress' />


describe('Kup macbook',() => {
    it('první test',() => {
      //  beforeEach(function () {
cy.visit('https://www.google.cz')

cy.url().should('include', 'google.cz')
cy.get('.gLFyf').click().type('macbook').should('have.value','macbook') 
//})
})
})
//cy.get('.hNuT7').click()
describe('Kup macbook',() => {
    it('druhý test',() => {
        cy.get('.hNuT7').click()
        cy.contains('Hledat Googlem').click({ force: true })
        cy.url().should('include','=macbook')

})
})
describe('Kup macbook',() => {
    it('třetí test',() => {
      //  cy.wait(3000)
       cy.get("#tads > div > ol > li:nth-child(1) > div > div > div > div.d5oMvf > a > div").should('be.visible')
     //  cy.wait(3000)
      //  cy.url().should('include','/cz/mac/')
     cy.get("#hdtb-msb-vis > div:nth-child(2) > a").click()
     cy.url().should('include','')
})
})