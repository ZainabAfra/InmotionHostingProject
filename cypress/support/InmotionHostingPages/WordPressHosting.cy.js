export class WordPressHosting
{
    WordPressTab="#wordpressDropDown"
    WordPressHostingPlans=".imh-rostrum-card"
    WPCore='//*[@id="wordpress-hosting-rostrum"]/div/div[2]/div[1]/div/div[2]/button'
    DataCenter1="//input[@value='1']"
    DataCenter2="//input[@value='2']"
    DataCenter3="//input[@value='3']"
    continusBtn = "#sidebar-next-step"
    DomainName=":nth-child(3) > .required"
    continueBtn2="#sidebar-next-step"
    WPLaunch='//*[@id="wordpress-hosting-rostrum"]/div/div[2]/div[2]/div/div[2]/button'
    DataCenterWPLaunch="//input[@value='1']"
    DataCenterWPLaunch2="//input[@value='2']"
    DataCenterWPLaunch3="//input[@value='3']"
    WPLaunchContinueBtn="(//input[@id='sidebar-next-step'])[1]"
    DomainName="(//label[@class='required radio new_domain'])[3]"
    WPLaunchContinueBtn2="//input[@id='sidebar-next-step']"
    WPPower='//*[@id="wordpress-hosting-rostrum"]/div/div[2]/div[2]/div/div[2]/button'
    DataCenterWPPower="//input[@value='1']"
    DataCenterWPPower2="//input[@value='2']"
    DataCenterWPPower3="//input[@value='3']"
    WPPowerContinueBtn="#sidebar-next-step"
    DomainName=":nth-child(3) > .required"
    WPPowerContinueBtn2="#sidebar-next-step"
    WPHostingFeatures=".col-md-4.col-xs-6.col-sm-6.col-lg-4"









    wordPressDropdown(){cy.get(this.WordPressTab).invoke('show')}
    wordPressOncPanel(){cy.contains('WordPress on cPanel').click({force: true})}
    verifyURL(){cy.url().should('include','wordpress-hosting')}
    wordPressHostingPlans(){cy.get(this.WordPressHostingPlans).should('contain.text','WP Core')
        .and('have.length','4').each(($WPH, index, $list)=>{
            cy.log($WPH.text())
    })}

    // WP Core
    selectWPCore(){cy.xpath(this.WPCore).click()
        cy.wait(3000)
    }
    verifyDataCenter1(){cy.xpath(this.DataCenter1).should('be.checked')}
    verifyDataCenter2(){cy.xpath(this.DataCenter2).should('not.be.checked')}
    verifyDataCenter3(){cy.xpath(this.DataCenter3).should('not.be.checked')}
    clickContinusBtn(){cy.get(this.continusBtn).click()}
    clickDomainName(){cy.get(this.DomainName).should('contain','I will decide later').click()}
    clickContinusBtn2(){cy.get(this.continueBtn2).click({force: true}).go(-3)}

    //WP Launch
    selectWPLaunch(){cy.xpath(this.WPLaunch).click()
        cy.wait(3000)
    }
    verifyDataCenterWPLaunch(){cy.xpath(this.DataCenterWPLaunch).should('be.checked')}
    verifyDataCenterWPLaunch2(){cy.xpath(this.DataCenterWPLaunch2).should('not.be.checked')}
    verifyDataCenterWPLaunch3(){cy.xpath(this.DataCenterWPLaunch3).should('not.be.checked')}
    clickWPLaunchContiunueBtn(){cy.xpath(this.WPLaunchContinueBtn).should('be.enabled').click({ force: true })}
    clickDomainName(){cy.xpath(this.DomainName).click({force: true})}
    clickWPLaunchContiunueBtn2(){cy.xpath(this.WPLaunchContinueBtn2).click({force: true}).go(-3)}

    //WP Power
    selectWPPower(){cy.xpath(this.WPPower).click()
        cy.wait(3000)
    }
    verifyDataCenterWPPower(){cy.xpath(this.DataCenterWPPower).should('be.checked')}
    verifyDataCenterWPPower2(){cy.xpath(this.DataCenterWPPower2).should('not.be.checked')}
    verifyDataCenterWPPower3(){cy.xpath(this.DataCenterWPPower3).should('not.be.checked')}
    clickWPPowerContiunueBtn(){cy.get(this.WPPowerContinueBtn).should('be.enabled').click({force: true})}
    clickDomainName(){cy.get(this.DomainName).click({force: true})}
    clickWPPowerContiunueBtn2(){cy.get(this.WPPowerContinueBtn2).should('be.enabled').click({force: true}).go(-3)}
    verifyWPHostingFeatures(){cy.get(this.WPHostingFeatures).should('contain.text','WordPress Made Easy')
        .and('have.length','9').each(($WPHF , index, $list)=>{
            cy.log($WPHF.text())
    })}
}