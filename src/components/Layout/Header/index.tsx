//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import { Image, H1, H2, Wrapper } from './styles';

//
// ─── TYPES ──────────────────────────────────────────────────────────────────────
//

interface Props {
    siteTitle: string;
}

//
// ─── COMPONENT ──────────────────────────────────────────────────────────────────
//

const Header: React.FC<Props> = ({ siteTitle }) => {
    const data = useStaticQuery(graphql`
        query {
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
            <Image fluid={data.image.childImageSharp.fluid} />
            <H1>Code For Fun</H1>
            <H2>Join The Fun</H2>
        </Wrapper>
    );
};

export default Header;

//
// ────────────────────────────────────────────────────────────────────── END ─────
//
