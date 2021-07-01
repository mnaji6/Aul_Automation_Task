
export default class ProductsPageLocators {

    productsItemsList() {
        return cy.get('.s-main-slot.s-result-list.s-search-results.sg-row div.a-section.a-spacing-none h2 :nth-child(1)')
    }

    addToCartBtn() {
        return cy.get('#add-to-cart-button')
    }

}