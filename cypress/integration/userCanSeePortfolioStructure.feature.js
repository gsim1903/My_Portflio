describe("Portfolio interface",() => {
    it("sucessfully renders", () =>{
        cy.visit("http://localhost:3000");
        cy.get("#header").should("contain", "My Portfolio");
        cy.get("#footer").should("contain", "Made with React");
        cy.get("#Hello").should("contain", "Good Evening");
    });
});
