import HomePage from "../../pages/homepage";
import HomeUserPage from "../../pages/HomeUserPage";

const dotenv = require("cypress-dotenv");
const homePage = new HomePage();
const homeUserPage = new HomeUserPage();

describe("Pruebas Home Page ", () => {
  it("Login de forma satisfactoria ", () => {
    homePage.navigate();
    homePage.clickIniciarSesion();

    const username = Cypress.env("USER_PROD");
    cy.log("USERNAME: " + username);
    const password = Cypress.env("PASSWORD_PROD");

    homePage.enterEmailLogin(username);
    homePage.clickSiguiente();
    homePage.enterPassword(password);
    homePage.clickSiguientePassword();

    cy.wait(5000);
    homeUserPage.clickearEnMenuDesplegable();
    homeUserPage.clickearEnMisDispositivos();
  });
});
