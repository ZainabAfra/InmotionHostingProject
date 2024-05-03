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
    

    wordPressDropdown(){cy.get(this.WordPressTab).invoke('show')}
    wordPressOncPanel(){cy.contains('WordPress on cPanel').click({force: true})}
    verifyURL(){cy.url().should('include','wordpress-hosting')}
    wordPressHostingPlans(){cy.get(this.WordPressHostingPlans).should('contain.text','WP Core')
        .and('have.length','4').each(($WPH, index, $list)=>{
            cy.log($WPH.text())
    })}
    selectWPCore(){cy.xpath(this.WPCore).click()
        cy.wait(3000)
    }
    verifyDataCenter1(){cy.xpath(this.DataCenter1).should('be.checked')}
    verifyDataCenter2(){cy.xpath(this.DataCenter2).should('not.be.checked')}
    verifyDataCenter3(){cy.xpath(this.DataCenter3).should('not.be.checked')}
    clickContinusBtn(){cy.get(this.continusBtn).click()}
    clickDomainName(){cy.get(this.DomainName).should('contain','I will decide later').click()}
    clickContinusBtn2(){cy.get(this.continueBtn2).click()}
    
    
}