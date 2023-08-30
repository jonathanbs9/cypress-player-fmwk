import RegistroPage from "../../../pages/ResgitroPage"
import HomePage from "../../../pages/HomePage"
import HomeUserPage from "../../../pages/HomeUserPage"
const homePage = new HomePage()
const registroPage = new RegistroPage()
const homeUserPage = new HomeUserPage()

describe("Registro Test Suite", ()=> {
  
    beforeEach( () => {
            homePage.navigate()
            homePage.clickBotonRegistrate()
    })

    it("Usuario se registra de forma satisfactoria", () =>{
        const mensajeEsperado = "Claro video te recomienda"
        const randomSixDigitNumber = Math.floor(Math.random() * 900000) + 100000;
        const randomEmailGenerator  = "amcopruebas.aut.cypress_"+randomSixDigitNumber+"@gmail.com"
        
        registroPage.ingresarEmail(randomEmailGenerator);
        registroPage.clickAceptarTerminos();
        registroPage.clickSiguiente();
        registroPage.ingresarPassword("Validpass123");
        registroPage.clickSiguiente();

        homeUserPage.obtenerRecomendacionTexto.should("contain.text", mensajeEsperado)
    })

    it("Usuario no se registra de forma satisfactoria - Email ya registrado" ,()=> {
        const emailRegistrado = Cypress.env("username")
        const mensajeEsperado = "Este correo ya se encuentra registrado en Claro video"

        registroPage.ingresarEmail(emailRegistrado);
        registroPage.clickAceptarTerminos();
        registroPage.clickSiguiente();

        registroPage.obtenerMensajeRegistroEmail.should("contain.text", mensajeEsperado)     
    })

    it("Usuario no se registra de forma satisfactoria - Password no posee Mayúsculas, minusculas, ni al menos 8 caracteres ", () =>{
        // pass 123
        const randomSixDigitNumber = Math.floor(Math.random() * 900000) + 100000;
        const emailNotRegistrdo = "amcopruebas.aut.cypress_"+randomSixDigitNumber+"@gmail.com"

        registroPage.ingresarEmail(emailNotRegistrdo);
        registroPage.clickAceptarTerminos();
        registroPage.clickSiguiente();
        registroPage.ingresarPassword("123")
        registroPage.clickSiguiente()

        // Valido color verde
        registroPage.obtengoElementoAlMenosUnNumero.should("have.css", "color", "rgb(22, 99, 19)");
        registroPage.obtengoElementoSinCaracteresEsp.should("have.css", "color", "rgb(22, 99, 19)");

        // Valido color rojo
        registroPage.obtengoElementoMayusculasYMinusculas.should("have.css", "color", "rgb(193, 39, 45)")
        registroPage.obtengoElementoOchoMasCaracteres.should("have.css", "color", "rgb(193, 39, 45)")
    })

    it("Usuario no se registra de forma satisfactoria - Password no posee Mayúsculas, minusculas", () =>{
        // pass 12345678
        const randomSixDigitNumber = Math.floor(Math.random() * 900000) + 100000;
        const emailNotRegistrdo = "amcopruebas.aut.cypress_"+randomSixDigitNumber+"@gmail.com"

        registroPage.ingresarEmail(emailNotRegistrdo);
        registroPage.clickAceptarTerminos();
        registroPage.clickSiguiente();
        registroPage.ingresarPassword("12345678")
        registroPage.clickSiguiente()

        // Valido color rojo
        registroPage.obtengoElementoMayusculasYMinusculas.should("have.css", "color", "rgb(193, 39, 45)")

        // Valido color verde
         registroPage.obtengoElementoAlMenosUnNumero.should("have.css", "color", "rgb(22, 99, 19)");
         registroPage.obtengoElementoOchoMasCaracteres.should("have.css", "color", "rgb(22, 99, 19)");
         registroPage.obtengoElementoSinCaracteresEsp.should("have.css", "color", "rgb(22, 99, 19)"); 
    })

    it("Usuario no se registra de forma satisfactoria - Password no posee números", () => {
        // Passwordsinnumero
        const randomSixDigitNumber = Math.floor(Math.random() * 900000) + 100000;
        const emailNotRegistrdo = "amcopruebas.aut.cypress_"+randomSixDigitNumber+"@gmail.com"

        registroPage.ingresarEmail(emailNotRegistrdo);
        registroPage.clickAceptarTerminos();
        registroPage.clickSiguiente();
        registroPage.ingresarPassword("PasswordSinNumero")
        registroPage.clickSiguiente()

        // Valido color rojo
        registroPage.obtengoElementoAlMenosUnNumero.should("have.css", "color", "rgb(193, 39, 45)");
        
        // Valido color verde
        registroPage.obtengoElementoMayusculasYMinusculas.should("have.css", "color", "rgb(22, 99, 19)"); 
        registroPage.obtengoElementoOchoMasCaracteres.should("have.css", "color", "rgb(22, 99, 19)");
        registroPage.obtengoElementoSinCaracteresEsp.should("have.css", "color", "rgb(22, 99, 19)");

    })

    it("Usuario no se registra de forma satisfactoria - Password no posee al menos 8 caracteres", () => {
        // Pass123
        const randomSixDigitNumber = Math.floor(Math.random() * 900000) + 100000;
        const emailNotRegistrdo = "amcopruebas.aut.cypress_"+randomSixDigitNumber+"@gmail.com"

        registroPage.ingresarEmail(emailNotRegistrdo);
        registroPage.clickAceptarTerminos();
        registroPage.clickSiguiente();
        registroPage.ingresarPassword("Pass123")
        registroPage.clickSiguiente()

        // Valido color rojo
        registroPage.obtengoElementoOchoMasCaracteres.should("have.css", "color", "rgb(193, 39, 45)");
        
        // Valido color verde
        registroPage.obtengoElementoMayusculasYMinusculas.should("have.css", "color", "rgb(22, 99, 19)"); 
        registroPage.obtengoElementoAlMenosUnNumero.should("have.css", "color", "rgb(22, 99, 19)");
        registroPage.obtengoElementoSinCaracteresEsp.should("have.css", "color", "rgb(22, 99, 19)");

    })
    
    it("Usuario no se registra de forma satisfactoria - Password posee caracteres especiales", () => {
        // @Player123
        const randomSixDigitNumber = Math.floor(Math.random() * 900000) + 100000;
        const emailNotRegistrdo = "amcopruebas.aut.cypress_"+randomSixDigitNumber+"@gmail.com"

        registroPage.ingresarEmail(emailNotRegistrdo);
        registroPage.clickAceptarTerminos();
        registroPage.clickSiguiente();
        registroPage.ingresarPassword("@Player123")
        registroPage.clickSiguiente()

        // Valido color rojo
        registroPage.obtengoElementoSinCaracteresEsp.should("have.css", "color", "rgb(193, 39, 45)");
        
        // Valido color verde
        registroPage.obtengoElementoMayusculasYMinusculas.should("have.css", "color", "rgb(22, 99, 19)"); 
        registroPage.obtengoElementoAlMenosUnNumero.should("have.css", "color", "rgb(22, 99, 19)");
        registroPage.obtengoElementoOchoMasCaracteres.should("have.css", "color", "rgb(22, 99, 19)");
    })

    it("Usuario no se registra de forma satisfactoria - Password es un solo espacio", () => {
        // " "
        const randomSixDigitNumber = Math.floor(Math.random() * 900000) + 100000;
        const emailNotRegistrdo = "amcopruebas.aut.cypress_"+randomSixDigitNumber+"@gmail.com"

        registroPage.ingresarEmail(emailNotRegistrdo);
        registroPage.clickAceptarTerminos();
        registroPage.clickSiguiente();
        registroPage.ingresarPassword(" ");
        registroPage.clickSiguiente();

        // Valido color rojo
        registroPage.obtengoElementoSinCaracteresEsp.should("have.css", "color", "rgb(193, 39, 45)");
        registroPage.obtengoElementoMayusculasYMinusculas.should("have.css", "color", "rgb(193, 39, 45)"); 
        registroPage.obtengoElementoAlMenosUnNumero.should("have.css", "color", "rgb(193, 39, 45)");
        registroPage.obtengoElementoOchoMasCaracteres.should("have.css", "color", "rgb(193, 39, 45)");
    })

    it("Usuario no se registra de forma satisfactoria - Password vacío", () => {
        const randomSixDigitNumber = Math.floor(Math.random() * 900000) + 100000;
        const emailNotRegistrdo = "amcopruebas.aut.cypress_"+randomSixDigitNumber+"@gmail.com"

        registroPage.ingresarEmail(emailNotRegistrdo);
        registroPage.clickAceptarTerminos();
        registroPage.clickSiguiente();
        cy.wait(2000)
        registroPage.clickSiguiente();
        
        

        // Valido color rojo
        registroPage.obtengoDebesCompletarEsteCampo.should("have.css", "color", "rgb(193, 39, 45)").should("contain.text", "Debés completar este campo");
    })
})