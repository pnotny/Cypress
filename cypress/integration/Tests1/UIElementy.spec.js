/// <reference types='cypress' />

describe('UI elementy', () => {
    it('verify input box', () =>
    {
        cy.visit("http://demo.guru99.com/test/newtours/") //visit URL
        cy.url().should('include','newtours') // verify URL should include 'newtours'
        cy.get('input[name=userName]').should('be.visible').should('be.enabled').type("mercury")
        cy.get('input[name=password]').should('be.visible').should('be.enabled').type("mercury")

        cy.get('input[name=submit]').should('be.visible').click() //sing-in button

        
        cy.title().should('eq', 'Login: Mercury Tours') //title verification
        cy.get('body > div:nth-child(5) > table > tbody > tr > td:nth-child(1) > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td:nth-child(2) > a').click()
        cy.title().should('eq', 'Find a Flight: Mercury Tours:')

        cy.get('input[value=roundtrip]').should('be.visible').should('be.checked') // Vissibility chcecked radio button
        cy.get('input[value=oneway]').should('be.visible').should('not.be.checked').click() // Vissibility chcecked radio button
    
        cy.get('input[name=findFlights]').should('be.visible').should('be.enabled').click()
        cy.title().should('eq', 'Find a Flight: Mercury Tours:')
    })
    })