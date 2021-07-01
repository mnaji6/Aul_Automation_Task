export default class LoginPageLocators {

    emailTextBox() {
        return cy.get('#ap_email')
    }

    continueBtn() {
        return cy.get('#continue')
    }

    passwordTextBox() {
        return cy.get('#ap_password')
    }

    signInBtn() {
        return cy.get('#nav-link-accountList')
    }

    signInSubmitBtn() {
        return cy.get('#signInSubmit')
    }
}