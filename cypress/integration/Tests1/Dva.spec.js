/// <reference types='cypress' />


describe('Test dva',() => {
    it('první krok',() => {
      //  beforeEach(function () {
cy.visit('https://www.nopcommerce.com/en/demo')
cy.contains('Commerce')
cy.get("body > div.master-wrapper-page > header > div > div.header-menu > div.menu-toggle > span").click()
cy.wait(2000)
cy.get(":nth-child(1) > .default > :nth-child(1)").click({ force: true })
cy.wait(2000)
cy.get("body > div.master-wrapper-page > header > div > div.header-menu > div.menu-toggle > span").click()
    })
})

