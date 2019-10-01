//
// ────────────────────────────────────────────────────── I ──────────
//   :::::: I M P O R T S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//

import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

//
// ────────────────────────────────────────────────────────── II ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

const Image: FC = () => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(
                relativePath: { eq: "gatsby-astronaut.png" }
            ) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return <Img fluid={data.placeholderImage.childImageSharp.fluid} />;
};

export default Image;

//
// ────────────────────────────────────────────────────────────────────── END ─────
//
