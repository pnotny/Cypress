/// <reference types="cypress" />

describe('Dialogova okna', function () {
    it('Alerts', function () {


        cy.visit("https://testautomationpractice.blogspot.com")
        cy.get('#HTML9 > .widget-content > button').click()

        cy.on('window:confirm',(str) =>
        {
            expect(str).to.equal('Press a button!')       


        })

    }
    )
}
)
