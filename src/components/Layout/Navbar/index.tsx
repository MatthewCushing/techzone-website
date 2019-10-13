//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import { useSpring } from 'react-spring';

import { Ul, First, Last, Second, Third, Fourth } from './styles';

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

    const fadeIn = useSpring({
        from: {
            marginTop: -50,
            opacity: 0,
        },
        marginTop: 48,
        opacity: 1,
        delay: 300,
        config: {
            friction: 14,
            tension: 170,
        },
    });

    return (
        <>
            <Ul style={fadeIn}>
                <First>
                    <Link className="link" to="/">
                        <Img
                            fixed={data.placeholderImage.childImageSharp.fixed}
                        />
                    </Link>
                </First>
                <Second>
                    <Link className="link" to="/">
                        <span className="tech">TECH</span>
                        <span className="zone">ZONE</span>
                    </Link>
                </Second>
                <Third>
                    <Link className="link" activeClassName="home" to="/">
                        Home
                    </Link>
                </Third>
                <Fourth>
                    <Link className="link" activeClassName="about" to="/about">
                        About
                    </Link>
                </Fourth>
                <Last>
                    <Link
                        className="link"
                        activeClassName="contact"
                        to="/contact"
                    >
                        Contact
                    </Link>
                </Last>
            </Ul>
        </>
    );
};

export default Navbar;

//
// ────────────────────────────────────────────────────────────────────── END ─────
//
