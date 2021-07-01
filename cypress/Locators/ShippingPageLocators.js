export default class ShippingPageLocators {

    postalCodeTextBox() {
        return cy.get('#address-ui-widgets-enterAddressPostalCode')
    }

    submitBtn() {
        return cy.get('#address-ui-widgets-form-submit-button')
    }

    postalCodeErrorMsg() {
        return cy.get('.a-span3 > .adddress-ui-widgets-form-field-container > .a-spacing-none > :nth-child(1) > .a-box-inner > .a-alert-content > .a-section')
    }

    nameErrorMsg() {
        return cy.get(':nth-child(4) > .a-spacing-none > .a-box > .a-box-inner > .a-alert-content > .a-section')
    }

    phoneNumberErrorMsg() {
        return cy.get(':nth-child(6) > .a-spacing-none > .a-box > .a-box-inner > .a-alert-content > .a-section')
    }

    addressErrorMsg() {
        return cy.get(':nth-child(10) > .a-spacing-none > .a-box > .a-box-inner > .a-alert-content > .a-section')
    }

    cityErrorMsg() {
        return cy.get('.a-span5 > .adddress-ui-widgets-form-field-container > .a-spacing-none > :nth-child(1) > .a-box-inner > .a-alert-content > .a-section')
    }

    stateErrorMsg() {
        return cy.get('.a-span4 > .adddress-ui-widgets-form-field-container > .a-spacing-top-micro > :nth-child(1) > .a-box-inner > .a-alert-content > .a-section')
    }
    nameTextBox() {
        return cy.get('#address-ui-widgets-enterAddressFullName')
    }

    phoneNumberTextBox() {
        return cy.get('#address-ui-widgets-enterAddressPhoneNumber')
    }

    addressLine1TextBox() {
        return cy.get('#address-ui-widgets-enterAddressLine1')
    }

    addressLine2TextBox() {
        return cy.get('#address-ui-widgets-enterAddressLine2')

    }

    cityTextBox() {
        return cy.get('#address-ui-widgets-enterAddressCity')
    }

    statesDropDownList() {
        return cy.get('select#address-ui-widgets-enterAddressStateOrRegion-dropdown-nativeId')
    }

    countryDropDownList() {
        return cy.get('#address-ui-widgets-countryCode')
    }

    addPaymenthMethodLabel() {
        return cy.get('[data-pmts-component-id="pp-9PjX6g-7"]')
    }

    cityListBtn() {
        return cy.get('#address-ui-widgets-enterAddressStateOrRegion')
    }
    removeAddressBtn() {
        return cy.get('[data-action="checkout-delete-address"]')
    }



}
