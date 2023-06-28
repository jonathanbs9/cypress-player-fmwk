/// <reference types="Cypress" />
require("cypress-xpath");

class HomePage {
  navigate() {
    //cy.visit(Cypress.env("homepage_url"))
    cy.visit("https://www.clarovideo.com");
    //cy.wait(10000);

    /*cy.intercept(
      "https://mfwkweb-api.clarovideo.net/services/nav/data",
      (req) => req.destroy()
    );
    
    cy.intercept(
      "https://mfwkweb-api.clarovideo.net/services/user/isloggedin",
      (req) => req.destroy()
    );*/
  }

  clickIniciarSesion() {
    cy.xpath("//button[contains(text(),'INICIAR SESIÓN')]").click();
    //iniciarSesionButton.click();
  }

  enterEmailLogin(email) {
    cy.xpath("//input[@id='emailLogin']").type(email);
  }

  clickSiguiente() {
    cy.xpath("//button[@id='submitEmail']").click();
  }

  enterPassword(password) {
    cy.xpath("//input[@id='password']").type(password);
  }

  clickSiguientePassword() {
    cy.xpath("//button[@id='submitPassword']").click();
  }
}

export default HomePage;
