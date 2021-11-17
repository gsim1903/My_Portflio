describe('User can navigate the app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

        describe('to About tab and it', () => {
            
            beforeEach(() => {
            cy.get('#about-tab').click()
            });

            it('to About tab', () => {
                
                cy.get('#about-tab').click();

                cy.get('#about-header').should('contain', 'About Me');

                cy.get('#projects-header').should('not.exist');

                
                cy.get('#hello').should('not.exist');
            });
        });

    });
  
    it('to My projects tab', () => {
      beforeEach(() => {
        cy.get('#projects-tab').click();
        cy.get('#projects-header').should('contain', 'My Projects');
        cy.get('#about-header').should('not.exist');
        cy.get('#hello-header').should('not.exist');
    });
  
    it('back to My Portfolio/Hello tab and it', () => {
        cy.get('#about-tab').click()
        cy.get('#header').click()
      
        cy.get('#hello').should('contain', 'Hello')

        cy.get('##projects-header').should('not.exist')
        cy.get('##about-header').should('not.exist')
    
    });
  });
