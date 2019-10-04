//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import React, { ReactNode, FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './Header';
import Footer from './Footer';
import { Wrapper } from '.';

//
// ─── TYPES ──────────────────────────────────────────────────────────────────────
//

interface Props {
    children: ReactNode;
}

//
// ─── COMPONENT ──────────────────────────────────────────────────────────────────
//

const Layout: FC<Props> = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <Wrapper>
                <main>{children}</main>
                <footer>
                    &copy; {new Date().getFullYear()}, Built with{' '}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
            </Wrapper>
            <Footer />
        </>
    );
};

export default Layout;

//
// ────────────────────────────────────────────────────────────────────── END ─────
//
