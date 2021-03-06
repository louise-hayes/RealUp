describe('RealUp Test App: Thoughts3', function(){
    it('Test cypress Works!', function(){
        expect(true).to.equal(true)
    })
    it('Visits Thoughts Page 3', function(){
        cy.visit('/thoughts3')
    })
    it("Clicks The START button", function(){
        cy.visit('/thoughts3')
        cy.contains("START").click();
    })
    it("Clicks The Next button", function(){
        cy.visit('/thoughts3')
        cy.contains("Next").click();
    })
    it("The Next button leads to results1", function(){
        cy.visit('/thoughts3')
        cy.contains("Next").click()
        cy.url().should('eq', 'http://localhost:3000/results1')
    })
    it("Clicks The Back button", function(){
        cy.visit('/thoughts3')
        cy.get('#backbutton').click()
    })
})


