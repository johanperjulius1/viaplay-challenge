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
    cy.get("[data-cy='display-show']").should("have.length", 10);
    cy.get("[data-cy='footer']").should("be.visible");
  });
});
