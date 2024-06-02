export class VPSHosting
{
    VPSHostingTab="a[title='VPS Hosting']"
    PageHeadLine=".hero-title.color-neutral-color"
    VPSHostingHeaderText=".col-md-8.col-xs-12.col-sm-12.col-lg-7.hero-content-width-left"
    VPSHostingPlans=".imh-rostrum-card"
    VPSHostingFeatures=".col-md-4.col-xs-6.col-sm-6.col-lg-4"
    VPSHostingPlanComp=".bg-table.table.table-borderless tr td"
    VPSHostingArticlesAndGuides=".col-md-5.col-xs-12.col-sm-6.col-lg-5 ul li"
    VPSHostingFAQs=".col-lg-12.col-md-12.col-xs-12.col-sm-12 div h3"


    vpsHostingTab(){cy.get(this.VPSHostingTab).click({force: true})}
    verifyURL(){cy.url().should('include','vps-hosting')}
    verifyPageHeadLine(){cy.get(this.PageHeadLine).should('contain.text','Scale Your Business Without Slowing Down')}
    vpsHostingHeaderText(){cy.get(this.VPSHostingHeaderText).each(($VHT,index, $list)=>{
        cy.log($VHT.text())
    })}
    vpsHostingPlans(){cy.get(this.VPSHostingPlans).should('contain.text','VPS 4 vCPU')
        .each(($VPS,index,$list)=>{
            cy.log($VPS.text())
    })}
    vpsHostingFeatures(){cy.get(this.VPSHostingFeatures)
        .should('contain.text','Free Website Transfers').and('have.length','6')
            .each(($VPSFeat, index, $list)=>{
                cy.log($VPSFeat.text())
    })}
    vpsHostingPlanComp(){cy.get(this.VPSHostingPlanComp).should('contain.text','NVMe SSD Storage')
        .each(($VPSComp, index,$list)=>{
            cy.log($VPSComp.text())

    })}
    vpsHostingArticlesAndGuides(){cy.get(this.VPSHostingArticlesAndGuides)
        .should('contain.text','What is High-Availability?').each(($VPSAG , index, $list)=>{
            cy.log($VPSAG.text())
    })}
    vpsHostingFAQs(){cy.get(this.VPSHostingFAQs).should('contain.text','What is VPS Hosting?')
        .and('have.length','8').each(($FAQs, index, $list)=>{
            cy.log($FAQs.text())
    })}
}