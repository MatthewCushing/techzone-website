//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import React, { ReactNode, FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import { Container } from './styles';

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
        <Container>
            <Navbar />
            <Header siteTitle={data.site.siteMetadata.title} />
            <main>{children}</main>
            <Footer />
        </Container>
    );
};

export default Layout;

//
// ────────────────────────────────────────────────────────────────────── END ─────
//
