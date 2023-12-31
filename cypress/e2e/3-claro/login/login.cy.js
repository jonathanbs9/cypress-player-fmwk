import HomeUserPage from "../../../pages/HomeUserPage"
import HomePage from "../../../pages/HomePage"

const homePage = new HomePage()
const homeUserPage = new HomeUserPage()

describe("Login Test Suite", () => {
    beforeEach( () => {        
        homePage.navigate()
    })

    it("Usuario se loguea de forma satisfactoria con credenciales válidas", () => {
        const claroRecomiendaTexto = "Claro video te recomienda"
        const email = Cypress.env("username");
        const password = Cypress.env("password");

        homePage.clickIniciarSesion();
        homePage.enterEmailLogin(email);
        homePage.clickSiguiente();
        homePage.enterPassword(password);
        homePage.clickSiguientePassword();
        
        homeUserPage.obtenerRecomendacionTexto.should("contain.text", claroRecomiendaTexto)
    })

    it("Usuario no se loguea de forma satisfactoria - password inválido", () =>{
        const mensajeEsperado = "La contraseña no es válida, verifícala."
        const email = Cypress.env("username");

        homePage.clickIniciarSesion();
        homePage.enterEmailLogin(email);
        homePage.clickSiguiente();
        homePage.enterPassword("Play222222");
        homePage.clickSiguientePassword();
        
        homePage.obtenerMensajeLogin.should("contain.text", mensajeEsperado).should("be.visible")
    })

    it("Usuario no se loguea de forma satisfactoria - email vacío", () => {
        const mensajeEsperado = "Debés completar este campo"

        homePage.clickIniciarSesion();
        homePage.clickSiguiente();
        
        homePage.obtenerMensajeEmail.should("contain.text", mensajeEsperado)
    })

    it("Usuario no se loguea de forma satisfactoria - email sin formato", () => {
        const mensajeEsperado = "Ingresá un correo electrónico válido."

        homePage.clickIniciarSesion();
        homePage.enterEmailLogin("someInvalidFormat")
        homePage.clickSiguiente();

        homePage.obtenerMensajeEmailFormato.should("contain.text", mensajeEsperado)
    })
})