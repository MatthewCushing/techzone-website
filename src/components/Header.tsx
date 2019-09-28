import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';

interface Props {
  siteTitle: string;
}

const Header: React.SFC<Props> = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: { eq: "landing-header-crop.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <GImg fluid={data.image.childImageSharp.fluid} />
      <H1>Code For Fun</H1>
      <H2>Join The Fun</H2>
    </Wrapper>
  );
};

export default Header;

const GImg = styled(Img)`
  height: 70vh;
`;

const Wrapper = styled.div`
  position: relative;
  color: #fff;
`;

const H1 = styled.h1`
  position: absolute;
  font-size: 90px;
  font-family: Lato;
  left: 240px;
  top: 200px;
`;

const H2 = styled.h2`
  position: absolute;
  font-family: Lato;
  font-size: 50px;
  left: 240px;
  top: 312px;
`;
