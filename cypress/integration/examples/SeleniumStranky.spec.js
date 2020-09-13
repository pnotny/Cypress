/// <reference types="cypress" />

describe('Homepage', function () {

    

    })
    it('načti stránku a zkontroluj že jsi na homepage', function () {


        cy.visit("https://seleniumeasy.com/test/")
        cy.get('#at-cv-lightbox-close').click().title('eq', 'Selenium easy - Best demo website to practice Selenium Webdriver Online')
    }
    )
    it('Vyber něco první test s formuláři', function ()
    {
        cy.get('#btn_basic_example').should('be.visible').click()

    })
    it('První formulář', function () //Vybere první formulář
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
    it('první formulář + vyplnění hodnot', function () // vybere první formulář a vloží hodnotu a ověří jí
    {
        cy.makefirststep('hello3') // tady jsem to udělal krok 4 jako comand/objekt s proměnou husty  
    })
    it('Druhý formulář a vyplnění hodnoty', function () // stejné jako krok 4, ale u druhého formuláře
    {
        cy.makesecondstep("1","2") // tady jsem to udělal znovu, ale se dvěmi promněnými 
        cy.get('#at-cv-lightbox-close').click()
        
    })
    
    it('Překlik na checkbox stránju a ověření prvního checkboxu', function () // překliknu na stránku s checkboxy a rovnou ověřím první checkbox
    {
        cy.checkbox1() // zde jsem checkoval check box
    })
    
    it('ověření druhého checkboxu', function () // ověřím druhý checkbox na stránce
    {
       cy.checkbox2() //
    })
    
    it('změň na stránku s radiobuttony', function ()
    {
       cy.changetoradiosite() // přepne na stránku s radio buttony
    })
    it('zaškrtní první radiobutton', function ()
    {
       cy.firstradiobutton() // zaškrtne první várku radio buttonů
    })

    it('zkouška ddt', function ()
    {
        before(function(){

            cy.fixture('selenium').then(function(data){
    
                this.data=data
            })

            cy.get(':nth-child(3) > :nth-child(1) > .tree-indicator').click()
            cy.get(':nth-child(3) > :nth-child(1) > ul > :nth-child(6) > a').click()
        cy.get('#title').type(this.data.name)
    })

    



})



