
let brokenLinks = 0
let activeLinks = 0

export class HomePage
{
    Headline=".hero-title.color-neutral-color"
    Deals=".imh-rostrum-card h3"
    WenHosting='#webHostingDropDown'
    SharedHostingComPlans='.imh-rostrum-card h3'
    AllServicess='.boldgrid-section.custom-block.features-v4 div ul li a'



    verifyTitile(){cy.get(this.Headline).should('contain.text','Fast, Scalable Solutions for Websites Globally')}
    verifyDeals(){cy.get(this.Deals).should('contain.text','Shared Hosting').and('have.length','9')}
    clickComparePlans(){cy.get(this.WenHosting).click({force: true})}
    verifyUrl(){cy.url().should('include','shared-hosting')}
    verifyHostingPlans(){cy.get(this.SharedHostingComPlans).should('contain.text','Core').and('have.length','4')}
    verifyAlltheLinks(){cy.get('a').each(($title, index)=>{
        const href = $title.attr('href')
        if(href){
            cy.request({url: href, failOnStatusCode: false}).then((response)=>{
                if(response.status>=400){
                    cy.log(`*****link${index + 1} is Broken link ******${href}`)
                    brokenLinks++
                }else
                {
                    cy.log(`*****link ${index + 1} is Active link *****`)
                    activeLinks++
                }
            })
        }
    }).then(($links)=>{
        const totalLinks = $links.length
        cy.log(`*****total links**** ${totalLinks}` )
        cy.log(`**** broken links ***** ${brokenLinks}`)
        cy.log(`***** active links***** ${activeLinks}`)
    })}
    globalPartner(){cy.get('.bg-box.ppb-clickable-card p a').should('contain.text','U.S. – Los Angeles, CA Data Center')
        .each(($global, index, $list)=>{
            cy.log($global.text())
    })}

    verifyAllTheSevicess(){cy.get(this.AllServicess).should('contain.text','cPanel Hosting')
    .and('have.length','8').each(($services, index, $list)=>{
        cy.log($services.text())
    })}
    domAndWebHosting(){cy.get('.imh-rostrum-card.imh-clickable-card')
        .should('contain.text', 'Shared Hosting').each(($DWHosing, index, $list)=>{
            cy.log($DWHosing.text())
    })}
    helpingLinks(){cy.get('.imh-4-col ul li').should('contain.text','Shared Hosting')
        .and('have.length','47').each(($help, index, $list)=>{
            cy.log($help.text())
    })
    /*cy.get('a').each(link =>{
        if(link.prop('href'))
        cy.request({
            url: link.prop('href'),
            failOnStatusCode : false,
            timeout: 5000,
        })
    cy.log(link.prop('href'))
    })*/
    }
    socialMediaLinks(){cy.get('.imh-social a span').should('have.length','6')
        .each(($media, index, $list)=>{
            cy.log($media.text())

    })}
    
    
}