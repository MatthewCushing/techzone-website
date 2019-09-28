import React, { ReactNode, FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';

import Header from './Header';
import Footer from './Footer';
import './layout.css';

interface Props {
  children?: ReactNode;
}

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
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Layout;

const Wrapper = styled.div`
  margin: 0 25% auto;
  max-width: 960;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;
