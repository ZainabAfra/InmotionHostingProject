import { ResellerHosting } from "../support/InmotionHostingPages/ResellerHostingPage.cy";

describe('Reseller Hosting Page',()=>{

    Cypress.on('uncaught:exception', (err, runnable) => {
        console.error('Uncaught exception occurred:', err);
        return false;
    });
    before(function(){
        cy.visit('https://www.inmotionhosting.com/')
    })

    it('Reseller Hosting page details', ()=>{

        let resellerHosting = new ResellerHosting()
        resellerHosting.webHostingDropDown()
        resellerHosting.resellerHosting()
        resellerHosting.verifyURL()
        resellerHosting.verifyTitle()
        resellerHosting.resellerHostingPlans()
        resellerHosting.verifyResellerHostingFeatures()
        resellerHosting.verifyResellerHostingBenefits()
        resellerHosting.resellerHostingPlansComparisons()
        resellerHosting.resellerYearsOfPlans()
        resellerHosting.resellerHostingBestValue()
        resellerHosting.resellerHostingPrimaryFeatures()
        resellerHosting.resellerHostingIncludedInAllPlans()
        resellerHosting.resellerHostingFAQs()
        
    })
})