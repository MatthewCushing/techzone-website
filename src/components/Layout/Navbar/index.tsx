//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import { animated, useSpring } from 'react-spring';

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
            <li>
                <Link to="/">
                    <div css={style.logoAlign}>
                        <Img
                            fixed={data.placeholderImage.childImageSharp.fixed}
                        />
                        <span css={style.tech}>TECH</span>
                        <span css={style.zone}>ZONE</span>
                    </div>
                </Link>
            </li>
            <div aria-hidden="true" />
            <li css={style.verticalAlign}>
                <Link activeClassName="home" to="/">
                    Home
                </Link>
            </li>
            <li css={[style.spacing, style.verticalAlign]}>
                <Link activeClassName="about" to="/about">
                    About
                </Link>
            </li>
            <li css={[style.spacing, style.verticalAlign]}>
                <Link activeClassName="contact" to="/contact">
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
