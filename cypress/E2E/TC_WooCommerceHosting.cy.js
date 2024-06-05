import { WooCommerceHosting } from "../support/InmotionHostingPages/WooCommerceHosting.cy";

describe("Woo Commerce Hosting",()=>{

    before(function(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            console.error('Uncaught exception occurred:', err);
            return false;
        });
        
        cy.visit('https://www.inmotionhosting.com/', { failOnStatusCode: false })  
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
        wooCommerce.compareHostingPlans()
        wooCommerce.compareHostingPlansHeaderandFuter()
        wooCommerce.sharedWordPressBtn()
        wooCommerce.verifyShareWordPressPageTitle()
        wooCommerce.wordPressVPSBtn()
        wooCommerce.verifyWordPressVPSPageTitle()
        wooCommerce.vpsHosting()
        wooCommerce.verifyVpsHostingPageTitle()
        wooCommerce.dedicatedServers()
        wooCommerce.verifyDedicatedServersPageTitle()
        wooCommerce.wooCommerceHostingArticlesList()
        wooCommerce.clickAwordPressGuideToWooCommerce()
        wooCommerce.clickBuildingAndBoostingWooCommerce()
        wooCommerce.clickWooCommerceVsMagento()
        wooCommerce.verityFooterProductsList()
        

})
})