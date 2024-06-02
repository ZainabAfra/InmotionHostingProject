import { VPSHosting } from "../support/InmotionHostingPages/VPSHosting.cy";


describe('VPS Hosting',()=>{

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

    it('VPS Hosting Page',()=>{

        let VPS = new VPSHosting()

        VPS.vpsHostingTab()
        VPS.verifyURL()
        VPS.verifyPageHeadLine()
        VPS.vpsHostingHeaderText()
        VPS.vpsHostingPlans()
        VPS.vpsHostingFeatures()
        VPS.vpsHostingPlanComp()
        VPS.vpsHostingArticlesAndGuides()
        VPS.vpsHostingFAQs()
    })
})