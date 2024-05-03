/// <reference types = 'cypress'/>
import { HomePage } from "../support/InmotionHostingPages/HomePage.cy"

describe('Home page', ()=>{

    Cypress.on('uncaught:exception', (err, runnable) => {
        console.error('Uncaught exception occurred:', err);
        return false;
    });
    before(function(){
        cy.visit('https://www.inmotionhosting.com/')
    })
    

    it('Verify Homme page sucessfully landed',function(){
        

        let HP = new HomePage()
        HP.verifyTitile()
        HP.verifyDeals()
        HP.globalPartner()
        //HP.clickComparePlans()
        //HP.verifyUrl()
        //HP.verifyHostingPlans()
        //HP.verifyAlltheLinks()
        HP.verifyAllTheSevicess()
        HP.domAndWebHosting()
        //HP.helpingLinks()
        HP.socialMediaLinks()
    

    })
})