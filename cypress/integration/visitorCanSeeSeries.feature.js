describe("Visitor can see cards with series", () => {
  beforeEach("xxx", () => {
    cy.server();
    cy.route({
      method: "GET",
      url:
        "https://cors-anywhere.herokuapp.com/https://content.viaplay.se/pc-se/serier/samtliga",
      response: "fixture:series.json",
    });
    cy.visit("http://localhost:3000");
  });

  it("user can see basic interface", () => {
    cy.get("[data-cy='header']").should("be.visible");
    cy.get("#display-show").should("have.length", 10);
  });
});
