/// <reference types='cypress' />

cy.Test1=
{

    maketest:(Země) =>
    {
        cy.visit('http://demo.automationtesting.in/Register.html')

        cy.get('[role=combobox]').click({force: true})
        cy.get('.select2-search__field').type(Země)
        cy.get('.select2-search__field').type('{enter}') //Tahle stihnu nějakou klávesu v poli
        
    }
}


