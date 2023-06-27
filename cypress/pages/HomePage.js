/// <reference types="Cypress" />
require("cypress-xpath");

class HomePage {
  elements = {
    iniciarSesionButton: () =>
      cy.xpath("//button[contains(text(),'INICIAR SESION')]"),
  };
  navigate() {
    //cy.visit(Cypress.env("homepage_url"))
    cy.visit("https://www.clarovideo.com");
    cy.wait(10000);

    cy.intercept(
      "https://mfwkweb-api.clarovideo.net/services/nav/data",
      (req) => req.destroy()
    );
    //https://mfwkweb-api.clarovideo.net/services/nav/data?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=argentina&HKS=d6aidvvl7mo5rj8s1vhihhlmi4
    cy.intercept(
      "https://mfwkweb-api.clarovideo.net/services/user/isloggedin",
      (req) => req.destroy()
    );
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
