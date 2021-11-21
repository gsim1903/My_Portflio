describe('User can navigate the CV element of the app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    describe('to CV tab and it works', () => {
        beforeEach(() => {
        cy.get("#cv-tab").click();
        });
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
        cy.get('#about-tab').should('not.exist')
    });
    });
})

describe("User can see the appropriate elements of the CV section", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
        
        cy.get("#cv-tab").click();
        cy.get(".image").should("exist");
        cy.get(".headerone").should("contain", "Education")
        cy.get(".headertwo").should("contain", "Experience")
        cy.get(".headerthree").should("contain", "Extras")

    });
});


