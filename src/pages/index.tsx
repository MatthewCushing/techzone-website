import React, { FC } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import Layout from '../components/Layout';
import Image from '../components/Image';
import SEO from '../components/Seo';

const Wrapper = styled.div`
  max-width: 300px;
  margin-bottom: 1.45rem;
`;

const IndexPage: FC = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Wrapper>
        <Image />
      </Wrapper>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export default IndexPage;
