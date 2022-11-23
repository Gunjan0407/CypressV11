describe("Verify Search option on Amazon",()=>{

it('Verify Search option is available ',()=>{
    cy.visit('')
    cy.get('#twotabsearchtextbox').should('not.be.visible')
})
})