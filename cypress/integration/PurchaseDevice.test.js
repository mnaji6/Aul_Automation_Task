/// <reference types="cypress" />

import LoginPageHelper from '../Common/LoginPage'
import HomePageHelper from '../Common/HomePage'
import ProductsPageLocators from '../Locators/ProductsPageLocators'
import ShippingPageLocators from '../Locators/ShippingPageLocators'

describe('Purchase a device from amazon with invalid/valid shipping address', () => {

    const loginHelper = new LoginPageHelper()
    const homePageHelper = new HomePageHelper()
    const productsPageLocators = new ProductsPageLocators()
    const shippingPageLocators = new ShippingPageLocators()
    const testData = Cypress.config("testData")

    beforeEach(() => {
        loginHelper.loginUsingEmail();
    })


    it("Purchase a device with invalid/valid shipping address", () => {

        Cypress.on('uncaught:exception', () => {
            return false
        })

        homePageHelper.searchItem(testData.searchQuery)
            .then(() => {

                productsPageLocators.productsItemsList()
                    .first()
                    .click({ force: true })
                    .then(() => {

                        productsPageLocators.addToCartBtn().click()

                        homePageHelper.proceedToCheckout()
                            .then(() => {
                                verifyEmptyShippingAddress()
                                verifyValidShippingAddress()
                            })
                    })
            })

    })

    /*
     * Test case of an empty shipping address
     */
    function verifyEmptyShippingAddress() {

        shippingPageLocators.nameTextBox().clear()
        shippingPageLocators.phoneNumberTextBox().clear()
        shippingPageLocators.addressLine1TextBox().clear()
        shippingPageLocators.cityTextBox().clear()
        shippingPageLocators.postalCodeTextBox().clear()
        shippingPageLocators.submitBtn()
            .click()
            .then(() => {

                shippingPageLocators.nameErrorMsg()
                    .should('be.visible')
                    .should('have.text', testData.nameErrorMsg)

                shippingPageLocators.phoneNumberErrorMsg()
                    .should('be.visible')
                    .should('have.text', testData.phoneNumberErrorMsg)

                shippingPageLocators.addressErrorMsg()
                    .should('be.visible')
                    .should('have.text', testData.addressErrorMsg)

                shippingPageLocators.cityErrorMsg()
                    .should('be.visible')
                    .should('have.text', testData.cityErrorMsg)

                shippingPageLocators.stateErrorMsg()
                    .should('be.visible')
                    .should('have.text', testData.stateErrorMsg)

                shippingPageLocators.postalCodeErrorMsg()
                    .should('be.visible')
                    .should('have.text', testData.postalCodeErrorMsg)

            })
    }

    /*
     * Test case of a valid shipping address
     */
    function verifyValidShippingAddress() {

        shippingPageLocators.nameTextBox()
            .clear()
            .type(testData.fullName)

        shippingPageLocators.phoneNumberTextBox()
            .clear()
            .type(testData.phoneNumber)

        shippingPageLocators.addressLine1TextBox()
            .clear().
            type(testData.addressLine1)

        shippingPageLocators.cityTextBox()
            .clear()
            .type(testData.city)

        shippingPageLocators.cityListBtn()
            .click().then(() => {
                shippingPageLocators.statesDropDownList()
                    .select(testData.state, { force: true })
            })

        shippingPageLocators.postalCodeTextBox()
            .clear()
            .type(testData.usPostalCode)

        shippingPageLocators.submitBtn()
            .click()
            .then(() => {
                cy.wait(5000)
                cy.url().should('include', '/buy/addressselect/handlers')
            })
    }

})
