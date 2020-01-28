import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import StickyText, { StickyColumn, StaticColumn } from '../StickyText/StickyText'

const SpruceLabsColorSection = () => {
    return (
        <StickyText>
            <>
                <StickyColumn>
                    <>
                        <h2 className="case-study__text case-study__body-heading bold">A More Expansive Color Palette</h2>
                        <p className="case-study__text">The old color palette was a bit spare when it came to expressiveness. We devised an approach that would focus on how we create contrast, rather than on specific colors. This enabled our creative team to try lots of ideas and push the envelope. At the same time, we had enough parameters to avoid visual chaos.</p>
                    </>
                </StickyColumn>
                <StaticColumn maxWidth={400}>
                    <>
                        <StaticQuery
                            query={graphql`
                                query ColorSectionImageQuery {
                                    colorCol: file(relativePath: { eq: "spruce-labs/Color-Col@2x.png" }) {
                                        childImageSharp {
                                            fluid(maxWidth: 400, quality: 80) {
                                            ...GatsbyImageSharpFluid_noBase64
                                            }
                                        }
                                    }
                                }
                            `}
                            render={data => {
                                return <Img fluid={data.colorCol.childImageSharp.fluid} alt="Early color explorations" />
                            }}
                        />
                    </>
                </StaticColumn>
            </>
        </StickyText>
    )
}


export default SpruceLabsColorSection