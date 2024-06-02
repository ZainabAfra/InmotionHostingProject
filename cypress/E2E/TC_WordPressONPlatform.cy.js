import { WordPressPlatform } from "../support/InmotionHostingPages/WordPressOnPlatform.cy";

describe('Word Press Platform',()=>{
    
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

    it.skip('Word Press on Platform',()=>{

        let wordPressPlan = new WordPressPlatform()
        
        wordPressPlan.wordPressDropdown()
        wordPressPlan.wordPressOnPlatform()
        wordPressPlan.verifyURL()
        wordPressPlan.verifyTitle()
        wordPressPlan.verifyPageTabText()
        wordPressPlan.manageWordPressHostingPlans()
        wordPressPlan.businessReadyWPHosting()
        wordPressPlan.forAgencies()
        wordPressPlan.verifyAgenciesURL()
        wordPressPlan.wordPresssHostingAgencies()
        //wordPressPlan.entFirstName(data.AgencyProgram.firstName)
        wordPressPlan.firstNameAgencyFrom()
        wordPressPlan.lastNameAgencyFrom()
        wordPressPlan.bustinessEmail()
        

        
    })
})