/// <reference types="cypress" />

describe('Homepage', function () {
    it('načti stránku a zkontroluj že jsi na stránce', function () {


        cy.visit("https://seleniumeasy.com/test/")
        cy.get('#at-cv-lightbox-close').click().title('eq', 'Selenium easy - Best demo website to practice Selenium Webdriver Online')
    }
    )
    it('Vyber něco na homepage', function ()
    {
        cy.get('#btn_basic_example').should('be.visible').click()

    })
    it('krok3', function ()
    {
        cy.get('#basic > div > a:nth-child(1)').contains('Simple Form Demo').click()
        cy.contains('Enter message')
    })
    /*it('krok4', function ()
    {
        cy.get('.form-control[id=user-message]').should('be.enabled').type('hello')
        cy.get('#get-input > .btn').contains('Show Message').click()
        cy.get(':nth-child(4) > .panel-body > :nth-child(4)').contains('hello')
    })
cy.should('')
*/
    it('krok4', function ()
    {
        cy.check1('hello3') // tady jsem to udělal krok 4 jako comand/objekt s proměnou husty  
    })
    it('krok5', function ()
    {
        cy.check2("1","2") // tady jsem to udělal znovu, ale se dvěmi promněnými 
        cy.get('#at-cv-lightbox-close').click()
        
    })
    /*
    it('krok6', function ()
    {
        cy.check3() // zde jsem checkoval check box
    })
    
    it.only('krok7', function ()
    {
       cy.check4() //
    })
    it('krok8', function ()
    {
       cy.check5() //
    })

*/


})



