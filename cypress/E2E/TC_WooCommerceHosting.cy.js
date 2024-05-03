import { WooCommerceHosting } from "../support/InmotionHostingPages/WooCommerceHosting.cy";

describe("Woo Commerce Hosting",()=>{

    before(function(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            console.error('Uncaught exception occurred:', err);
            return false;
        });
        cy.visit('https://www.inmotionhosting.com/')
        cy.fixture('InmotionHosting').then(function(data){
            globalThis.data=data
        })
    })

    it('Woo Commerce Hosting',()=>{

        let wooCommerce = new WooCommerceHosting()
        wooCommerce.wordPressDropdown()
        wooCommerce.wooCommerceHosting()
        wooCommerce.verifyURL()
        wooCommerce.verifyPageTitle()
        wooCommerce.fastWooCommerceHosting()
        wooCommerce.featuresOnlineStore()
        wooCommerce.wooCommerceHostingPlans()

})
})