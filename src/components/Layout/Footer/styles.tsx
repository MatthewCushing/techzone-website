//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import styled from '@emotion/styled';

import { colors, fonts } from '../../global/Theme';

//
// ─── STYLES ─────────────────────────────────────────────────────────────────────
//

export const Grid = styled.div`
    display: grid;
    max-height: 500px;
    min-height: 500px;
    padding-right: 140px;
    grid-template-columns: 20% 30% 50%;
    font-family: ${fonts.primary};
    grid-template-rows: 1fr auto;
    background-color: ${colors.darkGray};
    color: ${colors.lightGray};
    padding: 48px 140px 0 140px;
`;

export const Row2 = styled.div`
    grid-row: 2 / 3;
    grid-column: 1 / -1;
    font-size: 14px;
    font-family: ${fonts.primary};
    justify-self: center;
`;

export const H1 = styled.h1`
    font-size: 1.5em;
    text-shadow: 0px 3px 6px #00000029;
    font-weight: 400;
    margin-bottom: 30px;

    &.center {
        text-align: center;
    }
`;

//
// ────────────────────────────────────────────────────────────────────── END ─────
//
