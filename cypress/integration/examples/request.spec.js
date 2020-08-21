/// <reference types="cypress" />

describe('Homepage', function () {
    it('načti stránku a zkontroluj že jsi na stránce', function () {


        cy.visit('www.gogle.cz')
        cy.visit('www.seznam.cz')
        cy.visit('www.csob.cz')
    })
})