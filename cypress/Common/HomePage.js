import HomePageLocators from "../Locators/HomePageLocators";

export default class HomePageHelper {

    homePageLocators = new HomePageLocators()

    /**
     * @param {target product name} query 
     */
    searchItem(query) {

        return this.homePageLocators.searchTextBox()
            .clear()
            .type(query + '{enter}')

    }

    /**
     * Open shopping cart and proceed for checkout.
     */
    proceedToCheckout() {

        return this.homePageLocators.cartBtn()
            .click()
            .then(() => {

                this.homePageLocators.proceedToCheckoutBtn()
                    .click()

            })
    }
}
