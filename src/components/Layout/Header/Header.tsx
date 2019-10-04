//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import { GImg, H1, H2, Wrapper } from '.';

//
// ─── TYPES ──────────────────────────────────────────────────────────────────────
//

interface Props {
    siteTitle: string;
}

//
// ─── COMPONENT ──────────────────────────────────────────────────────────────────
//

const Header: React.SFC<Props> = ({ siteTitle }) => {
    const data = useStaticQuery(graphql`
        query Images {
            image: file(relativePath: { eq: "landing-header-crop.jpg" }) {
                childImageSharp {
                    fluid(maxHeight: 1000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <Wrapper>
            <GImg fluid={data.image.childImageSharp.fluid} />
            <H1>Code For Fun</H1>
            <H2>Join The Fun</H2>
        </Wrapper>
    );
};

export default Header;

//
// ────────────────────────────────────────────────────────────────────── END ─────
//
