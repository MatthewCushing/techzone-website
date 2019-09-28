import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Footer: React.SFC = () => {
  return (
    <>
      <Grid>
        <Col1>
          <H1>Site Links</H1>
          <A to="/">HOME</A>
          <A to="/">ABOUT</A>
          <A to="/">BLOGS</A>
          <A to="/">TEAMS</A>
          <A to="/">CONTACT</A>
        </Col1>
        <Col2>
          <H1>Social Media</H1>
        </Col2>
        <Col3>
          <H1>Have A Question?</H1>
        </Col3>
      </Grid>
    </>
  );
};

export default Footer;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 20% 30% 50%;
  background-color: #51585e;
  color: #ced4d5;
  padding: 48px 140px 0 140px;
`;

const Col1 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Col2 = styled.div``;

const Col3 = styled.div``;

const H1 = styled.h1`
  font-size: 24px;
  text-shadow: 0px 3px 6px #00000029;
  font-family: Lato;
  font-weight: 400;
  margin-bottom: 30px;
`;

const A = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  color: #ced4d5;
  margin-bottom: 30px;
`;
