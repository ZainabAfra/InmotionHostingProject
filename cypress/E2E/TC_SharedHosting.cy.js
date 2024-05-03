import { SharedHosting } from "../support/InmotionHostingPages/SharedHostingPage.cy";

describe('Shared Hosting Page',()=>{

    Cypress.on('uncaught:exception', (err, runnable) => {
        console.error('Uncaught exception occurred:', err);
        return false;
    });
    before(function(){
        cy.visit('https://www.inmotionhosting.com/')
    })

    it('Shared Hosting page details',()=>{

        let sharedHosing = new SharedHosting()
        sharedHosing.webHostingDropDown()
        sharedHosing.shareHosting()
        sharedHosing.verifyURL()
        sharedHosing.shareHostingPlans()
        sharedHosing.verifySharedHostingFeatures()
        sharedHosing.verifyShareWebHosting()
    })
})