export class ResellerHosting
{
    WebHosting="#webHostingDropDown"
    Headline=".hero-title"
    ResellerHostingPlans=".imh-rostrum-card"
    ResellerHostingFeatures=".col-md-4.col-xs-6.col-sm-6.col-lg-4 h3"
    ResellerHostingBenefits=".imh-accordion.rotate"
    ResellerHostingPlanComparisons=".col-lg-12.col-md-12.col-xs-12.col-sm-12 table tbody tr td"
    ResellerYearsOfPlans=".imh-term-selector-container.imh-term-selector"
    ResellerHostingBestValue=".imh-spec-table-container table thead tr th"
    ResellerHostingPrimaryFeatures=".imh-spec-table-container table tbody tr td"
    ResellerHostingIncludedInAllPlans=".imh-accordion-content.show ul span"
    ResellerHostingFAQs=".imh-faq-item.imh-faq"

    webHostingDropDown(){cy.get(this.WebHosting).invoke('show')}
    resellerHosting(){cy.contains('Reseller Hosting').click({force: true})}
    verifyURL(){cy.url().should('include','reseller-hosting')}
    verifyTitle(){cy.get(this.Headline).should('contain.text','Experience Top Tier Performance with Unlimited Earning Potential')}
    resellerHostingPlans(){cy.get(this.ResellerHostingPlans).should('contain.text','R-1000N')
        .and('have.length','4').each(($RSP, index, $list)=>{
            cy.log($RSP.text())
        })}
    verifyResellerHostingFeatures(){cy.get(this.ResellerHostingFeatures)
        .should('contain.text','Faster Website Speeds').and('have.length','9').each(($features, index, $list)=>{
            cy.log($features.text())
        })}
    verifyResellerHostingBenefits(){cy.get(this.ResellerHostingBenefits).should('contain.text','Low Barriers to Entry')
        .and('have.length','3').each(($befit, index, $list)=>{
            cy.log($befit.text())
        })}
    resellerHostingPlansComparisons(){cy.get(this.ResellerHostingPlanComparisons)
        .should('contain.text','Up to 300GB NVMe SSD').and('have.length','50').each(($RHPC , index, $list)=>{
            cy.log($RHPC.text())
        })}
    resellerYearsOfPlans(){cy.get(this.ResellerYearsOfPlans).should('contain.text','3 Year')
        .each(($year, index, $list)=>{
            cy.log($year.text())
        })}
    resellerHostingBestValue(){cy.get(this.ResellerHostingBestValue).should('contain.text','R-1000N')
        .each(($BV,index,$list)=>{
            cy.log($BV.text())
        })}
    resellerHostingPrimaryFeatures(){cy.get(this.ResellerHostingPrimaryFeatures).should('contain.text','cPanel')
        .each(($PF,index, $list)=>{
            cy.log($PF.text())
        })}
    resellerHostingIncludedInAllPlans(){cy.get(this.ResellerHostingIncludedInAllPlans).should('contain.text','For Your Added Convenience')
        .each(($AllPlans, index, $list)=>{
            cy.log($AllPlans.text())
        })}
    resellerHostingFAQs(){cy.get(this.ResellerHostingFAQs).should('contain.text','What is Reseller Hosting?')
        .and('have.length','8').each(($FAQs, index, $list)=>{
            cy.log($FAQs.text())
        })}

}