//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';

import { Ul, First, Last, Second, Third, Fourth } from '.';

//
// ─── TYPES ──────────────────────────────────────────────────────────────────────
//

//
// ─── COMPONENT ──────────────────────────────────────────────────────────────────
//

const Navbar: React.FC = () => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "logo.png" }) {
                childImageSharp {
                    fixed(width: 35) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    return (
        <Ul>
            <First>
                <Link className="link" to="/">
                    <Img fixed={data.placeholderImage.childImageSharp.fixed} />
                </Link>
            </First>
            <Second>
                <Link className="link" to="/">
                    <span className="tech">TECH</span>
                    <span className="zone">ZONE</span>
                </Link>
            </Second>
            <Third>
                <Link className="link home" to="/">
                    Home
                </Link>
            </Third>
            <Fourth>
                <Link className="link" to="/about">
                    About
                </Link>
            </Fourth>
            <Last>
                <Link className="link" to="/contact">
                    Contact
                </Link>
            </Last>
        </Ul>
    );
};

export default Navbar;

//
// ────────────────────────────────────────────────────────────────────── END ─────
//
