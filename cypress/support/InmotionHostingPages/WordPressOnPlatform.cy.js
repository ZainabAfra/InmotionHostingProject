export class WordPressPlatform
{
    WordPressTab="#wordpressDropDown"
    PageHeadLine=".hero-title"
    PageTabText=".imh-sub-nav.dark div ul li a"
    ManagedWordPressHostingPlans=".imh-rostrum-card"
    BusinessReadyWPHosting=".col-lg-4.col-md-6.col-xs-12.col-sm-12 div"
    ForAgencies="//a[normalize-space()='WordPress for Agencies']"
    WordPressHostingAgencies=".col-lg-6.col-md-6.col-xs-12.col-sm-12 h3"
    FirstName='#firstname-3f5b8de3-605a-4864-b115-edbaff4e86a4'
    LastName="#lastname-3f5b8de3-605a-4864-b115-edbaff4e86a4"
    BusinessEmail="#email-3f5b8de3-605a-4864-b115-edbaff4e86a4"
    
    

    wordPressDropdown(){cy.get(this.WordPressTab).invoke('show')}
    wordPressOnPlatform(){cy.contains('WordPress on Platform').click({force:true})}
    verifyURL(){cy.url().should('include','wordpress-hosting/platform-i')}
    verifyTitle(){cy.get(this.PageHeadLine).should('contain.text','Managed WordPress Hosting')}
    verifyPageTabText(){cy.get(this.PageTabText).should('contain','Platform i').each(($PTT, index,$list)=>{
        cy.log($PTT.text())
    })}
    manageWordPressHostingPlans(){cy.get(this.ManagedWordPressHostingPlans)
        .should('contain','UltraStack 3GB RAM').and('have.length','11')
            .each(($MWPHP, index, $list)=>{
                cy.log($MWPHP.text())
           
    })}
    businessReadyWPHosting(){cy.get(this.BusinessReadyWPHosting)
        .should('contain','For Agencies').and('have.length','3')
            .each(($BWH, index, $list)=>{
                cy.log($BWH.text())

    })}
    forAgencies(){cy.xpath(this.ForAgencies).click()}
    verifyAgenciesURL(){cy.url().should('include','wordpress-hosting/agency')}
    wordPresssHostingAgencies(){cy.get(this.WordPressHostingAgencies)
        .should('contain','All-In-One Platform').each(($WPHA,index, $list)=>{
            cy.log($WPHA.text())
    })}
    firstNameAgencyFrom(){cy.getIframe('.hs-form-iframe')
            .find(this.FirstName).type('Muhammed')    
    }
    lastNameAgencyFrom(){cy.getIframe('.hs-form-iframe')
            .find(this.LastName).type('Hassan')
    }
    bustinessEmail(){cy.getIframe('.hs-form-iframe')
            .find(this.BusinessEmail).type('ALKJAL@gamil.com')
    }
    
    
    
}