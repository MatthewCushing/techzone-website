import { Link } from 'gatsby';
import React, { FC } from 'react';
import styled from '@emotion/styled';

interface Props {
  siteTitle: string;
}

const Header: FC<Props> = ({ siteTitle }) => (
  <HeaderTag>
    <Wrapper>
      <H1>
        <A to="/">{siteTitle}</A>
      </H1>
    </Wrapper>
  </HeaderTag>
);

export default Header;

const HeaderTag = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`;

const Wrapper = styled.div`
  margin: 0 25% auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`;

const H1 = styled.h1`
  margin: 0;
`;

const A = styled(Link)`
  color: white;
  text-decoration: none;
`;
