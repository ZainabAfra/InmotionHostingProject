export class SharedHosting
{
    WebHosting="#webHostingDropDown"
    ShareHostingPlans=".imh-rostrum-container div h3"
    ShareHostingFeatures=".col-md-4.col-xs-6.col-sm-6.col-lg-4 h3"
    SharedWebHosting = "//h2[.='Shared Web Hosting Trusted by Thousands']"


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
    verifyShareWebHosting(){cy.get(this.SharedWebHosting).should('contain.text','Shared Web Hosting Trusted by Thousands')}

}