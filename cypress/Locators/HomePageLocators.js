export default class HomePageLocators {

    searchTextBox() {
        return cy.get('#twotabsearchtextbox')
    }

    cartBtn() {
        return cy.get('#nav-cart')
    }

    proceedToCheckoutBtn() {
        return cy.get('[data-feature-id="proceed-to-checkout-action"]')
    }
}