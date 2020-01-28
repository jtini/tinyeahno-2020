import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import StickyText, { StickyColumn, StaticColumn } from '../StickyText/StickyText'

export const SpruceLabsWordsSection = () => {
    return (
        <StickyText reverse>
            <>
                <StickyColumn>
                    <>
                        <h2 className="case-study__text case-study__body-heading bold">Four Words</h2>
                        <p className="case-study__text">I worked with the Engineering team to create a set of lettering pieces to reflect their values. They had chosen four words and chose one to focus on every week.</p>
                    </>
                </StickyColumn>
                <StaticColumn maxWidth={570}>
                    <>
                        <StaticQuery
                            query={graphql`
                                query WordsSectionImageQuery {
                                    wordsCol: file(relativePath: { eq: "spruce-labs/Words-Col@2x.png" }) {
                                        childImageSharp {
                                            fluid(maxWidth: 570, quality: 80) {
                                            ...GatsbyImageSharpFluid_noBase64
                                            }
                                        }
                                    }
                                }
                            `}
                            render={data => {
                                return <Img fluid={data.wordsCol.childImageSharp.fluid} alt="Custom lettering of the words Beautiful, Fast, Scalable, and Intuitive" />
                            }}
                        />
                    </>
                </StaticColumn>
            </>
        </StickyText>
    )
}

export default SpruceLabsWordsSection