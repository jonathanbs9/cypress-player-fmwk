import HomePage from "../../pages/homepage";
//import { HomePage } from "../pages/HomePage";

const homePage = new HomePage();

describe("Pruebas Home Page ", () => {
  it("Login de forma satisfactoria ", () => {
    homePage.navigate();
    homePage.clickIniciarSesion();
    homePage.enterEmailLogin("amcopruebas.aut.arply+amco_50@********");
    homePage.clickSiguiente();
    homePage.enterPassword("*******");
    homePage.clickSiguientePassword();
  });
});
