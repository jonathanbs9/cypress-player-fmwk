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

    clickearEnModificarDatos(){
        cy.xpath("//section[@id='micuentamodifyuser']//button[contains(text(),'Modificar')]")
      }
    
      ingresarNombreInput(nombre){
        cy.xpath("//input[@name='firstname']").should("be.be.visible").type(nombre)
      }
    
      ingresarApellidoInput(apellido){
        cy.xpath("//input[@name='lastname']").should("be.visible").type(apellido)
      }
}

export default MiCuentaPage