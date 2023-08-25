import HomePage from "../../../pages/homepage";
import HomeUserPage from "../../../pages/HomeUserPage";
import MiCuentaPage from "../../../pages/MiCuentaPage";
import PaymentConfirmationPage from "../../../pages/PaymentConfirmationPage";

const homePage = new HomePage();
const homeUserPage = new HomeUserPage();
const miCuentaPage = new MiCuentaPage();
const paymentConfirmationPage =  new PaymentConfirmationPage();

describe("Pruebas Suscripciones ", () => {
  it("Usuario se suscribe al primer contenido disponible", () => {
    const username = Cypress.env("username");
    const password = Cypress.env("password");

    homePage.navigate();
    homePage.clickIniciarSesion();
    homePage.enterEmailLogin(username);
    homePage.clickSiguiente();
    homePage.enterPassword(password);
    homePage.clickSiguientePassword();
    cy.wait(5000);
    homeUserPage.clickearEnMenuDesplegable();
    homeUserPage.clickearEnSuscripcion();

    miCuentaPage.clickearPrimerBotonSuscripcion();

    paymentConfirmationPage.clickConfirmarPago();
    cy.wait(5000)
    
    // Assertions
    paymentConfirmationPage.devuelveYaTenesTexto.should("contain.text", "Ya tenés:").should('be.visible')
    paymentConfirmationPage.devuelveMedioDePagoTexto.should("contain.text", "Medio de pago:").should('be.visible')
    
  });
});
