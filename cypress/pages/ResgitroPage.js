/// <reference types="Cypress" />
require("cypress-xpath");

class RegistroPage {
    ingresarEmail(emailRegistrado){
        cy.xpath("//input[@id='emailRegister']").type(emailRegistrado)
    }
    
    clickAceptarTerminos(){
        cy.xpath("//input[@id='termsConditions']").click({ force: true })
    }
    
    clickSiguiente(){
        cy.xpath("//button[contains(text(),'SIGUIENTE')]").click()
    }

    get obtenerMensajeRegistroEmail() {
        return cy.xpath("//div[contains(text(),'Este correo ya se encuentra')]")
    }

    ingresarPassword(password){
        cy.xpath("//input[@id='password']").type(password)
    }
}

export default RegistroPage