import HomePage from "../../pages/homepage";
//import { HomePage } from "../pages/HomePage";

const homePage = new HomePage();

describe("Pruebas Home Page ", () => {
  it("Login de forma satisfactoria ", () => {
    homePage.navigate();
    homePage.clickIniciarSesion();
    homePage.enterEmailLogin("amcopruebas.aut.arply+amco_50@gmail.com");
    homePage.clickSiguiente();
    homePage.enterPassword("Player123");
    homePage.clickSiguientePassword();
  });
});
