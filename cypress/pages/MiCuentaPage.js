/// <reference types="Cypress" />
require("cypress-xpath");

class MiCuentaPage{

    clickearTodosLosBotonesParaSuscripcion(){
        cy.get("#btn_suscribir").each($botonSuscribir => {            
            cy.debug()
            cy.wrap($botonSuscribir).click()
            debugger
            cy.log("Hizo click en suscribir")
        })
    }

    clickearPrimerBotonSuscripcion(){
        cy.wait(7000)
        cy.xpath("//a[@id='btn_suscribir']").eq(0).scrollIntoView().click()
        //cy.get("#btn_suscribir").eq(1).click();
        
    }
}

export default MiCuentaPage