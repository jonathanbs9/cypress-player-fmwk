/// <reference types="Cypress" />
require("cypress-xpath");

class HomePage {
  navigate() {
    cy.visit("https://www.clarovideo.com");
  }

  clickIniciarSesion() {
    cy.xpath("//button[contains(text(),'INICIAR SESIÓN')]").click();
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

  clickBotonRegistrate() {
    cy.xpath("//button[contains(text(),'REGISTRATE')]").click()
  }
  
  clickRegistrate(){
    cy.xpath("//a[contains(text(),'Registrate')]").click();
  }

  get obtenerMensajeLogin(){
    return cy.xpath("//div[contains(text(),'La contraseña')]")
  }

  get obtenerMensajeEmail(){
    return cy.xpath("//div[contains(text(),'Debés completar este campo')]")
  }

  get obtenerMensajeEmailFormato(){
    return cy.xpath("//div[contains(text(), 'Ingresá un')]")
  }
}

export default HomePage;
