//
// ────────────────────────────────────────────────────── I ──────────
//   :::::: I M P O R T S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//

import React, { ReactNode, FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';

import Header from './Header';
import Footer from './Footer';

//
// ──────────────────────────────────────────────────── II ──────────
//   :::::: S T Y L E S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────
//

const Wrapper = styled.div`
    margin: 0 25% auto;
    max-width: 960;
    padding: 0px 1.0875rem 1.45rem;
    padding-top: 0;
`;

//
// ────────────────────────────────────────────────── III ──────────
//   :::::: T Y P E S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────
//

interface Props {
    children: ReactNode;
}

//
// ────────────────────────────────────────────────────────── IV ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
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
