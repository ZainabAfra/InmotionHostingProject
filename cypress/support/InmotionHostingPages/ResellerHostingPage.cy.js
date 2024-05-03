export class ResellerHosting
{
    WebHosting="#webHostingDropDown"
    Headline=".hero-title"
    ResellerHostingPlans=".imh-rostrum-card"
    ResellerHostingFeatures=".col-md-4.col-xs-6.col-sm-6.col-lg-4 h3"
    ResellerHostingBenefits=".imh-accordion.rotate"

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
}