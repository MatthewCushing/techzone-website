//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import { css } from '@emotion/core';

import { colors, fonts } from '../../../../global/Theme';

//
// ─── STYLES ─────────────────────────────────────────────────────────────────────
//

export const container = css`
    background-color: ${colors.lightBlue};
    width: 100vw;
    display: grid;
    grid-template-columns: 25% 25% 50%;
    height: 350px;
    padding: 48px 140px;
    width: 100%;
`;

export const image = css`
    border-radius: 5px;
    grid-column: 1 / 2;
    margin-right: 112px;
    vertical-align: top;
`;

export const article = css`
    grid-column: 2 / 3;
    margin-left: 30px;
`;

export const heading = css`
    color: ${colors.darkBlue};
    font-family: ${fonts.primary};
    font-size: 24px;
    margin-bottom: 30px;
`;

export const p = css`
    font-family: ${fonts.secondary};
`;
