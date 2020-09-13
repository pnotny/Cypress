/// <reference types='cypress' />

describe('UI elementy', () => {
    it('verify input box', () =>
    {
        cy.visit('http://demo.automationtesting.in/Register.html')

        cy.get('#checkbox1').check().should('be.checked').and('have.value', 'Cricket')
        cy.get('#checkbox2').check().should('be.checked').and('have.value', 'Movies')
        cy.get('#checkbox3').check().should('be.checked').and('have.value', 'Hockey')

        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')
//takhle vybírám a kontroluji jeden checkbox po druhém

        cy.get('input[type=checkbox]').check(['Cricket','Hockey']) //here we have the Jquery
//takhle vybírám všechny checkboxy, protože všechny mají stejný type, jenom měním obsah .check(['value1','value2'])

    })

    it('Skills dropdown', () =>
    {
        cy.get('#Skills').select('Android').should('have.value', 'Android') // Selectnu value a zkontroluji, jestli je to správné




    })
    it('Language multiselect dropdown', () =>
    {
        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Japanese').click()
        cy.get('.ui-corner-all').contains('Czech').click()
        cy.get('.ui-corner-all').contains('Arabic').click()
//takhle vybírám všechny checkboxy, protože všechny mají stejnou class, jenom měním obsah .contains('').click()
    })

    it('Select counstries serchable dropdown', () =>
    {
     
        cy.get('[role=combobox]').click({force: true})
        cy.get('.select2-search__field').type('Ind')
        cy.get('.select2-search__field').type('{enter}') //Tahle stihnu nějakou klávesu v poli
        
    })


})