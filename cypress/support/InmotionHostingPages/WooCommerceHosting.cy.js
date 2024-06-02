export class WooCommerceHosting
{
    WordPressTab="#wordpressDropDown"
    PageHeadLine=".hero-title"
    FastWooCommerceHosting=".col-lg-6.col-md-6.col-xs-12.col-sm-12.col-md-pull-6 h3"
    FeaturesOnlineStore=".col-lg-4.col-md-4.col-sm-12.col-xs-12 h3"
    WooCommerceHostingPlans=".imh-rostrum-card"
    CompareHostingPlansHeaderandFuter=".bg-table.table.table-striped.table-responsive-xs.table-vertical-align-middle.table-bordered.table-responsive-sm tr th"
    CompareHostingPlans=".bg-table.table.table-striped.table-responsive-xs.table-vertical-align-middle.table-bordered.table-responsive-sm tr td"
    SharedWordPress="th[data-label='Shared WordPress'] a[class='ppb-button btn-primary']"
    SharedWordPressPageTitle=".hero-title"
    WordPressVPS="th[data-label='WordPress VPS'] a[class='ppb-button btn-primary']"
    WordPressVPSPageTitle=".hero-title"
    VPSHosting="th[data-label='Managed VPS'] a[class='ppb-button btn-primary']"
    VPSHostingPageTitle=".hero-title"
    DedicatedServers="th[data-label='Dedicated Servers'] a[class='ppb-button btn-primary']"
    DedicatedServersPageTitle=".hero-title"
    WooCommerceHostingArticles=".list-check-red li"
    AWordPressGuideToWooCommerceLink="a[href='https://www.inmotionhosting.com/support/edu/wordpress/woocommerce/what-is-woocommerce/']"
    BuildingAndBoostingWooCommerceLink="a[href='https://www.inmotionhosting.com/blog/woocommerce-store/']"
    WooCommerceVsMagento="a[href='https://www.inmotionhosting.com/blog/woocommerce-vs-magento/']"
    FooterProductsList=".container.imh-footer div ul li"
    








    wordPressDropdown(){cy.get(this.WordPressTab).invoke('show')}
    wooCommerceHosting(){cy.contains('WooCommerce Hosting').click({force: true})}
    verifyURL(){cy.url().should('include','wordpress-hosting/woocommerce')}
    verifyPageTitle(){cy.get(this.PageHeadLine).should('contain.text','WooCommerce Hosting')}
    fastWooCommerceHosting(){cy.get(this.FastWooCommerceHosting)
        .should('contain','Convenient WooCommerce Hosting').each(($FWC, index, $list)=>{
            cy.log($FWC.text())
    })}
    featuresOnlineStore(){cy.get(this.FastWooCommerceHosting)
        .each(($FOS, index, $list)=>{
            cy.log($FOS.text())
    })}
    wooCommerceHostingPlans(){cy.get(this.WooCommerceHostingPlans)
        .should('contain','UltraStack 3GB RAM').and('have.length','8')
            .each(($HP, index,$list)=>{
                cy.log($HP.text())

    })}
    compareHostingPlansHeaderandFuter(){cy.get(this.CompareHostingPlansHeaderandFuter)
        .should('contains.text','Shared WordPress').each(($HFP, index, $list)=>{
            cy.log($HFP.text())
        })}
    compareHostingPlans(){cy.get(this.CompareHostingPlans)
        .should('contains.text','Websites Supported per Plan')
            .each(($CHP, index, $list)=>{
                cy.log($CHP.text())
    })}
    sharedWordPressBtn(){cy.get(this.SharedWordPress).click()}
    verifyShareWordPressPageTitle(){cy.get(this.SharedWordPressPageTitle)
        .should('contain','WordPress Hosting').go('back')
    }
    wordPressVPSBtn(){cy.get(this.WordPressVPS).click()}
    verifyWordPressVPSPageTitle(){cy.get(this.WordPressVPSPageTitle)
        .should('contain','WordPress VPS Hosting').go('back')
    }
    vpsHosting(){cy.get(this.VPSHosting).should('not.be.disabled').click()}
    verifyVpsHostingPageTitle(){cy.get(this.VPSHostingPageTitle)
        .should('contain','Scale Your Business Without Slowing Down').go('back')
    }
    dedicatedServers(){cy.get(this.DedicatedServers).should('not.be.disabled').click()}
    verifyDedicatedServersPageTitle(){cy.get(this.DedicatedServersPageTitle)
        .should('contain','Dedicated WordPress Hosting').go('back')
    }
    wooCommerceHostingArticlesList(){cy.get(this.WooCommerceHostingArticles)
        .should('contain','A WordPress Guide to WooCommerce').each(($Art, index, $list)=>{
            cy.log($Art.text())
    })}
    clickAwordPressGuideToWooCommerce(){cy.get(this.AWordPressGuideToWooCommerceLink)
        .invoke('removeAttr','target').click()
        cy.contains('WooCommerce Setup Guide').should('exist').go('back')
    }
    clickBuildingAndBoostingWooCommerce(){cy.get(this.BuildingAndBoostingWooCommerceLink)
        .invoke('removeAttr','target').click().should('contain','Building and Boosting Your WooCommerce Store').go('back')
    }
    clickWooCommerceVsMagento(){cy.get(this.WooCommerceVsMagento).invoke('removeAttr','target')
        .click().should('contain','WooCommerce vs Magento').go('back')
    }
    verityFooterProductsList(){cy.get(this.FooterProductsList).should('contain','Shared Hosting').and('have.length','46')
        .each(($FPL, index,$list)=>{
            cy.log($FPL.text())
    })}

}