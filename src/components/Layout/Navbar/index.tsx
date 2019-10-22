//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import { animated, useSpring } from 'react-spring';

import { Ul, First, Last, Second, Third, Fourth } from './styles';
import * as style from './styles';

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
        <animated.ul css={style.ul} style={fadeIn}>
            <li css={style.first}>
                <Link className="link" to="/">
                    <Img fixed={data.placeholderImage.childImageSharp.fixed} />
                </Link>
            </li>
            <li css={style.second}>
                <Link className="link" to="/">
                    <span className="tech">TECH</span>
                    <span className="zone">ZONE</span>
                </Link>
            </li>
            <li css={style.third}>
                <Link className="link" activeClassName="home" to="/">
                    Home
                </Link>
            </li>
            <li css={style.fourth}>
                <Link className="link" activeClassName="about" to="/about">
                    About
                </Link>
            </li>
            <li css={style.last}>
                <Link className="link" activeClassName="contact" to="/contact">
                    Contact
                </Link>
            </li>
        </animated.ul>
    );
};

export default Navbar;

//
// ────────────────────────────────────────────────────────────────────── END ─────
//
