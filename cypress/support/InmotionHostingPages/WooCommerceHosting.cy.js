export class WooCommerceHosting
{
    WordPressTab="#wordpressDropDown"
    PageHeadLine=".hero-title"
    FastWooCommerceHosting=".col-lg-6.col-md-6.col-xs-12.col-sm-12.col-md-pull-6 h3"
    FeaturesOnlineStore=".col-lg-4.col-md-4.col-sm-12.col-xs-12 h3"
    WooCommerceHostingPlans=".imh-rostrum-card"
    CompareHostingPlansHeaderandFuter=".bg-table.table.table-striped.table-responsive-xs.table-vertical-align-middle.table-bordered.table-responsive-sm tr th"
    CompareHostingPlans=".bg-table.table.table-striped.table-responsive-xs.table-vertical-align-middle.table-bordered.table-responsive-sm tr td"


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
}