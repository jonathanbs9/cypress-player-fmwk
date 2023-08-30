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
        cy.xpath("//button[contains(text(),'SIGUIENTE')]").click({force: true})
    }

    get obtenerMensajeRegistroEmail() {
        return cy.xpath("//div[contains(text(),'Este correo ya se encuentra')]")
    }

    ingresarPassword(password){
        cy.xpath("//input[@id='password']").type(password)
    }

    get obtengoElementoAlMenosUnNumero(){
        return cy.xpath("//div[contains(text(),'Al menos un número')]")
    }

    get obtengoElementoSinCaracteresEsp(){
        return cy.xpath("//div[contains(text(),'Sin caracteres')]")
    }

    get obtengoElementoMayusculasYMinusculas(){
        return cy.xpath("//div[contains(text(),'Mayúsculas y minúsculas')]")
    }

    get obtengoElementoOchoMasCaracteres(){
        return cy.xpath("//div[contains(text(),'8 o más caracteres')]")
    }

    get obtengoDebesCompletarEsteCampo(){
        return cy.xpath("//div[contains(text(),'Debés completar este campo')]")
    }

}

export default RegistroPage