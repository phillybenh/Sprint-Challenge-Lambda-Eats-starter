/// <reference types="Cypress" />


describe("Test form inputs and submittal", function () {
    beforeEach(function () {
        cy.visit("http://localhost:3000/pizza");
    });
    it("Add Tests to test form", function () {
        cy.get('input[name="name"]')
            .type("Jean-Luc Picard")
            .should("have.value", "Jean-Luc Picard");
        cy.get('[type="checkbox"]')
            .check()
            .should("be.checked");
        cy.get('button')
            .click()
    })
    

});




