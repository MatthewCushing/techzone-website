//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import React, { ReactNode, FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Global, css } from '@emotion/core';

import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import * as style from './styles';

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
            <Global
                styles={css`
                    box-sizing: border-box;
                    overflow-x: hidden;
                `}
            />
            <div css={style.container}>
                <Header siteTitle={data.site.siteMetadata.title} />
                <Navbar />
            </div>
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;

//
// ────────────────────────────────────────────────────────────────────── END ─────
//
