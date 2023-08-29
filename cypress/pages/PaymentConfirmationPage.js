/// <reference types="Cypress" />
require("cypress-xpath");

class PaymentConfirmationPage{

    clickConfirmarPago(){
        cy.xpath("//button[@type='button'][contains(text(),'CONFIRMAR')]").click()
    }

    clickCancelarPago(){
        cy.xpath("//button[@type='button'][contains(text(),'Cancelar')]").click()
    }

    clickAceptarPago(){
        cy.xpath("//button[@type='button'][contains(text(),'ACEPTAR')] ").click()
    }

    get devuelveYaTenesTexto(){
        return cy.xpath("//span[contains(text(),'Ya tenés')]")
    }

    get devuelveMedioDePagoTexto(){
        return cy.xpath("//div[@class='ticket--info'][contains(text(),'Medio de pago')]")
    }
}

export default PaymentConfirmationPage;