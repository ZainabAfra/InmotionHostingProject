import { DedicatedServer } from "../support/InmotionHostingPages/DedicatedServers.cy";

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

it('Dedicated Server',()=>{

    let dedicatedSev = new DedicatedServer()
    dedicatedSev.dedicatedServerTab()
    dedicatedSev.verifyURL()
    dedicatedSev.verifyPageHeadLine()
    dedicatedSev.dedicatedServerPlans()
    dedicatedSev.featuresOfDedicatedServer()
    dedicatedSev.dedicatedServerSpecifications()
    dedicatedSev.footerHeadingLink()
    dedicatedSev.boostBusinessDedicatedServer()
    dedicatedSev.webPanelOptions()
    dedicatedSev.dedicatedServerFAQs()
    dedicatedSev.dedicatedServerArtandGuides()
    dedicatedSev.dedicatedHostingProductGuide()
    dedicatedSev.cPanelGuides()
    dedicatedSev.footerProductMenuList()
    
})