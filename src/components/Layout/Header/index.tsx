//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';

import * as style from './styles';

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
        <header css={style.container}>
            <Img css={style.image} fluid={data.image.childImageSharp.fluid} />
            <h1 css={style.heading}>Code For Fun</h1>
            <h2 css={style.subheading}>Join The Fun</h2>
        </header>
    );
};

export default Header;

//
// ────────────────────────────────────────────────────────────────────── END ─────
//
