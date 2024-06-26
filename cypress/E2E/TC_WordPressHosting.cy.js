import { WordPressHosting } from "../support/InmotionHostingPages/WordPressHosting.cy";

describe('Word Press Hosting',()=>{

    Cypress.on('uncaught:exception', (err, runnable) => {
        console.error('Uncaught exception occurred:', err);
        return false;
    });
    before(function(){
        cy.visit('https://www.inmotionhosting.com/')
    })

    it('Word Press Page details',()=>{

        let wordPress = new WordPressHosting()
        wordPress.wordPressDropdown()
        wordPress.wordPressOncPanel()
        wordPress.verifyURL()
        wordPress.wordPressHostingPlans()
        wordPress.selectWPCore()
        wordPress.verifyDataCenter1()
        wordPress.verifyDataCenter2()
        wordPress.verifyDataCenter3()
        wordPress.clickContinusBtn()
        wordPress.clickDomainName()
        wordPress.clickContinusBtn2()
        wordPress.selectWPLaunch()
        wordPress.verifyDataCenterWPLaunch()
        wordPress.verifyDataCenterWPLaunch2()
        wordPress.verifyDataCenterWPLaunch3()
        wordPress.clickWPLaunchContiunueBtn()
        wordPress.clickDomainName()
        wordPress.clickWPLaunchContiunueBtn2()
        wordPress.selectWPPower()
        wordPress.verifyDataCenterWPPower()
        wordPress.verifyDataCenterWPPower2()
        wordPress.verifyDataCenterWPPower3()
        wordPress.clickWPPowerContiunueBtn()
        wordPress.clickDomainName()
        wordPress.clickWPPowerContiunueBtn2()
        wordPress.verifyWPHostingFeatures()
    })
})