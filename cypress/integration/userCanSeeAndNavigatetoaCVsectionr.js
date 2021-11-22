describe('User can navigate the CV element of the app', () => {
    
    beforeEach(() => {
        cy.visit('http://localhost:3000');
        cy.get("#cv-tab").click();
    });

    describe('to CV tab and it works', () => {
        it('displays CV header', () => {
        cy.get("#cv-header").should("contain", "CV");
        });
        
        it('displays component name in url', () => {
        cy.url().should('contain', 'cv')
        })
        
        it('does not display My Projects', () => {
        cy.get('#projects-header').should('not.exist')
        })
        
        it('does not display Good evening', () => {
        cy.get('#hello').should('not.exist')
        })
        
        it('does not display about me', () => {
        cy.get('#about-header').should('not.exist')
        })
    });
    
    describe("User can see the appropriate elements of the CV section", () => {
        it ("is expected to display the education", () => {
        cy.get(".header").should("contain", "job")
        //             cy.get(".image").should("exist"); 
         })
        
        it ("is expected to display the experience", () => {
        cy.get(".header").should("contain", "experience")
        //             cy.get(".image").should("exist");
        })

        it ("is expected to display the extras", () => {
            cy.get(".header").should("contain", "activities")
        })
        
    })
    //             it ("is expected to display the experience", () => {
    //             cy.get(".image").should("exist");
    //            cy.get(".header").should("contain", "Experience")            
    //            
})
