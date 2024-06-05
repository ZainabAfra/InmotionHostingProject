export class SharedHosting
{
    WebHosting="#webHostingDropDown"
    ShareHostingPlans=".imh-rostrum-container div h3"
    ShareHostingFeatures=".col-md-4.col-xs-6.col-sm-6.col-lg-4 h3"
    PageHeadLine=".hero-title.color-neutral-color"
    


    webHostingDropDown(){cy.get(this.WebHosting).invoke('show')}
    shareHosting(){cy.contains('Shared Hosting').click({force: true})}
    verifyURL(){cy.url().should('include','shared-hosting')}
    shareHostingPlans(){cy.get(this.ShareHostingPlans).should('contain.text','Core')
        .and('have.length','4').each(($SHP, index, $list)=>{
            cy.log($SHP.text())
    })}
    verifySharedHostingFeatures(){cy.get(this.ShareHostingFeatures).should('contain.text','Fast Website Speeds')
        .and('have.length','12').each(($features, index, $list)=>{
            cy.log($features.text())
    })}
    verifyPageHeadLine(){cy.get(this.PageHeadLine).should('contain.text','Affordable Hosting for Small Businesses and Indivi')}

}