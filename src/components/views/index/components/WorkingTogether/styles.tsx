//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import styled from '@emotion/styled';
import Img from 'gatsby-image';

import { colors, fonts } from '../../../../global/Theme';

//
// ─── STYLES ─────────────────────────────────────────────────────────────────────
//

export const Container = styled.div`
    background-color: ${colors.lightBlue};
    width: 100vw;
    display: grid;
    grid-template-columns: 25% 25% 50%;
    height: 350px;
    padding: 48px 140px;
    width: 100%;
`;

export const Image = styled(Img)`
    border-radius: 5px;
    grid-column: 1 / 2;
    margin-right: 112px;
    vertical-align: top;
`;

export const Article = styled.article`
    grid-column: 2 / 3;
    margin-left: 30px;
`;

export const H3 = styled.h3`
    color: ${colors.darkBlue};
    font-family: ${fonts.primary};
    font-size: 24px;
    margin-bottom: 30px;
    /* margin-top: 32px; */
`;

export const P = styled.p`
    font-family: ${fonts.secondary};
`;
