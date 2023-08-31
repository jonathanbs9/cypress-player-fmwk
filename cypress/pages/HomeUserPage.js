/// <reference types="Cypress" />
require("cypress-xpath");

class HomeUserPage {
  clickearEnMenuDesplegable() {
    cy.get(
      '[style="float: left; width: 30px; height: 30px; padding-top: 3px;"] > .caret'
    ).trigger("mouseover");
  }

  clickearEnSuscripcion(){
    cy.get("ul.dropdown-menu.menu-user a[href='/argentina/home/user.php?micuentafull#micuentadevices']").click();
  }

  clickearEnMisDispositivos() {
    cy.wait(2000)
    cy.xpath("//ul[@class='dropdown-menu']//li//a[contains(text(),'Mis Dispositivos')]").click()    
    //cy.get("ul.dropdown-menu.menu-user a[href='/argentina/home/user.php?micuentafull#micuentadevices']").click();
  }

  get obtenerRecomendacionTexto(){
    return cy.xpath("//h4[contains(text(),'recomienda')]")
  }

  clickearEnMiPerfil() {
    cy.xpath("//a[contains(text(),'perfil')]").click()
  }

}

export default HomeUserPage;
