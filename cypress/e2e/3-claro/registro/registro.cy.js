import RegistroPage from "../../../pages/ResgitroPage"
import HomePage from "../../../pages/HomePage"
const homePage = new HomePage()
const registroPage = new RegistroPage()

describe("Registro Test Suite", ()=> {
    beforeEach( () => {
            homePage.navigate()
    })

    it.skip("Usuario se registra de forma satisfactoria", () =>{
        const randomSixDigitNumber = Math.floor(Math.random() * 900000) + 100000;
        randomEmailGenerator = "amcopruebas.aut.cypress_"+randomSixDigitNumber+"@gmail.com"

        homePage.clickIniciarSesion();
        homePage.clickRegistrate();

        registroPage.ingresarEmail(randomEmailGenerator);
        registroPage.clickAceptarTerminos();
        registroPage.clickSiguiente();


    })

    it("Usuario no se registra de forma satisfactoria - Email ya registrado" ,()=> {
        const emailRegistrado = "amcopruebas.aut.arply+amco_119@gmail.com"
        const mensajeEsperado = "Este correo ya se encuentra registrado en Claro video"
        
        homePage.clickIniciarSesion()
        homePage.clickRegistrate()

        registroPage.ingresarEmail(emailRegistrado);
        registroPage.clickAceptarTerminos();
        registroPage.clickSiguiente();

        registroPage.obtenerMensajeRegistroEmail.should("contain.text", mensajeEsperado)     
    })

    it("Usuario no se registra de forma satisfactoria - Password no posee Mayúsculas, minusculas, ni al menos 8 caracteres ", () =>{
        // pass 123
    })

    it("Usuario no se registra de forma satisfactoria - Password no posee Mayúsculas, minusculas", () =>{
        // pass 12345678
    })
    
})