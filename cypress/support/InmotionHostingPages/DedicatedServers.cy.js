export class DedicatedServer
{
    DedicatedServerTab="a[title='Dedicated Servers']"
    PageHeadLine=".hero-title.color-neutral-color"
    DedicatedServerPlans=".imh-rostrum-card"
    FeaturesOfDedicatedServer=".col-md-4.col-xs-6.col-sm-6.col-lg-4 h3"
    DedicatedServerSpecifications=".imh-spec-table-container table tr"
    FooterHeadingLink=".imh-4-col a"
    BoostBusinessDedicatedServer=".col-lg-4.col-md-4.col-xs-12.col-sm-12"
    WebPanelOptions=".bg-box.ppb-clickable-card"
    DedicatedServerFAQs=".imh-faq-item.imh-faq h3"
    DedicatedServerArtandGuides=".col-md-6.col-xs-12.col-sm-12 div ul li a"
    DedicatedHostingProductGuideLink="a[href='https://www.inmotionhosting.com/support/product-guides/dedicated-hosting/']"
    CPanelGuidesLink="a[href='https://www.inmotionhosting.com/support/edu/cpanel/']"
    ControlWebPanelGuides="a[href='https://www.inmotionhosting.com/support/edu/control-web-panel/']"
    WHMServerManagement="a[href='https://www.inmotionhosting.com/support/edu/whm/']"
    MigratingWebsiteToInMotionHosting="a[href='https://www.inmotionhosting.com/blog/ebooks/migrating-your-website/']"
    FooterProductMenuList=".imh-4-col ul li a"
    SocialMedia=".imh-social span"

    dedicatedServerTab(){cy.get(this.DedicatedServerTab).click({force: true})}
    verifyURL(){cy.url().should('include','dedicated-servers')}
    verifyPageHeadLine(){cy.get(this.PageHeadLine).should('contain','Where High-Performance Comes Standard')}
    dedicatedServerPlans(){cy.get(this.DedicatedServerPlans).should('contain.text','Aspire')
        .and('have.length','7').each(($DSP, index, $list)=>{
            cy.log($DSP.text())
    })}
    featuresOfDedicatedServer(){cy.get(this.FeaturesOfDedicatedServer).should('contain.text','Dedicated Managed Hosting')
        .and('have.length','12').each(($FDS, index, $list)=>{
            cy.log($FDS.text())
    })}
    dedicatedServerSpecifications(){cy.get(this.DedicatedServerSpecifications).should('contain.text','Intel® CPU Specs')
        .each(($DSD, index, $list)=>{
            cy.log($DSD.text())
    })}
    footerHeadingLink(){cy.get(this.FooterHeadingLink).should('contain.text','Shared Hosting')
        .each(($FHL, index, $list)=>{
            cy.log($FHL.text())
    })}
    boostBusinessDedicatedServer(){cy.get(this.BoostBusinessDedicatedServer).should("contain.text",'Dedicated Resources')
        .each((($BBDS, index, $list)=>{
            cy.log($BBDS.text())
    }))}
    webPanelOptions(){cy.get(this.WebPanelOptions).should('contain.text','cPanel')
        .each(($WPO, index, $list)=>{
            cy.log($WPO.text())
    })}
    dedicatedServerFAQs(){cy.get(this.DedicatedServerFAQs).should('contain.text','What is a Dedicated Server?')
        .and('have.length','12').each(($FAQs, index, $list)=>{
            cy.log($FAQs.text())
    })}
    dedicatedServerArtandGuides(){cy.get(this.DedicatedServerArtandGuides).should('contain.text','Dedicated Hosting Product Guide')
        .and('have.length','10').each(($ArtandGuides, index, $list)=>{
            cy.log($ArtandGuides.text())
    })}
    dedicatedHostingProductGuide(){cy.get(this.DedicatedHostingProductGuideLink)
        .invoke('removeAttr','target').click({force: true})
            cy.contains('Dedicated Hosting Product Guide').should('exist')
                cy.url().should('include','/dedicated-hosting/').go('back')
    }
    cPanelGuides(){cy.get(this.CPanelGuidesLink).invoke('removeAttr','target')
        .click({force: true})
            cy.contains('cPanel').should('exist')
                cy.url().should('include','/cpanel/').go('back')
    }
    controlWebPanelGuides(){cy.get(this.ControlWebPanelGuides).invoke('removeAttr','target')
        .click({force: true})
            cy.contains('Control Web Panel (CWP)').should('exist')
                cy.url('include','/control-web-panel/').go('back')
    }
    whmServerManagement(){cy.get(this.WHMServerManagement).invoke('removeAttr','target')
        .click({force: true})
            cy.contains('WebHost Manager (WHM)').should('exist')
                cy.url('include','/whm/').go('back')
    }
    migratingWebsiteToInMotionHosting(){cy.get(this.MigratingWebsiteToInMotionHosting).invoke('removeAttr','target')
        .click({force: true})
            cy.contains('InMotion Hosting Blog').should('exist')
                cy.url('include','migrating-your-website/').go('back')
    }
    footerProductMenuList(){cy.get(this.FooterProductMenuList).should('contain.text','Shared Hosting')
        .and('have.length','51').each(($FPML , index, $list)=>{
            cy.log($FPML.text())
    })}
   
            
}