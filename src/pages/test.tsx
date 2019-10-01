import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

//
// ────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: T H I S   I S   A   C O M M E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────
//

//
// ─── TEST COMPONENT ─────────────────────────────────────────────────────────────
//

const Test: React.FC = () => (
  <Parent>
    <Child>Hello World</Child>
    <Link to="/">Link</Link>
    <a href="/">Link2</a>
  </Parent>
);

export default Test;

const Parent = styled.div`
  color: red;
`;

const Child = styled('a')`
  font-size: 16px;
`;
