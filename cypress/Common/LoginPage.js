import LoginPageLocators from '../Locators/LoginPageLocators'

export default class LoginPageHelper {

    loginUsingEmail() {

        const loginPage = new LoginPageLocators()
        const configData = Cypress.config('login');

        Cypress.on('uncaught:exception', () => {
            return false
        })

        //Clear Coockies 
        cy.clearCookies().then(() => {
            cy.getCookies().should('be.empty')
        })

        cy.visit('.')

        loginPage.signInBtn().click().then(() => {
            //Find email input element, focus an a DOM element, type valid email into element
            loginPage.emailTextBox()
                .focus()
                .type(configData.email)

            //Find continue button element, click it, then is that element not in the DOM after click
            loginPage.continueBtn()
                .click()
                .and('not.exist')

            //Find password input element, focus an a DOM element, type "YOUR VALID PASSWORD" into element
            loginPage.passwordTextBox()
                .focus()
                .type(configData.password)

            //Find sign in button element, click it, then is that element not in the DOM after click
            loginPage.signInSubmitBtn()
                .click()
                .and('not.exist')

        })
    }
}