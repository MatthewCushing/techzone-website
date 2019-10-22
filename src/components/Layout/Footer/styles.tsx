//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { colors, fonts } from '../../global/Theme';

//
// ─── STYLES ─────────────────────────────────────────────────────────────────────
//

export const container = css`
    display: grid;
    padding-right: 140px;
    grid-template-columns: 20% 30% 50%;
    font-family: ${fonts.primary};
    grid-template-rows: 1fr auto;
    background-color: ${colors.darkGray};
    color: ${colors.lightGray};
    padding: 48px 140px 0 140px;
`;

export const copyright = css`
    grid-row: 2 / 3;
    grid-column: 1 / -1;
    font-size: 14px;
    font-family: ${fonts.primary};
    justify-self: center;
`;

export const heading = css`
    font-size: 1.5em;
    text-shadow: 0px 3px 6px #00000029;
    font-weight: 400;
    margin-bottom: 30px;
`;

export const center = css`
    text-align: center;
`;

//
// ────────────────────────────────────────────────────────────────────── END ─────
//
