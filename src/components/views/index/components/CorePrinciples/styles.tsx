import { css } from '@emotion/core';

import { colors, fonts } from 'global/Theme';

export const iconAlignment = css`
    text-align: center;
    margin-bottom: 2rem;
`;

export const container = css`
    background-color: ${colors.darkGreen};
    font-family: ${fonts.primary};
    font-weight: 300;
    font-size: 24px;
    padding-top: 105px;
    color: white;
`;

export const grid = css`
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    margin: 0 140px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto;
    justify-content: space-between;
`;

export const p = css`
    font-family: ${fonts.primary};
    color: #dadada;
    font-weight: 400;
    font-style: normal;
    font-size: 24px;
    line-height: 1.5rem;
    padding: 0 20px;
`;

export const col1 = css`
    grid-row: 1 / 2;
    grid-column: 1 / 2;
`;

export const col2 = css`
    grid-row: 1 / 2;
    grid-column: 2 / 3;
`;

export const col3 = css`
    grid-row: 1 / 2;
    grid-column: 3 / 4;
`;

export const buttonStyles = css`
    grid-row: 2 / 3;
    grid-column: 3 / 4;
    justify-self: end;
    margin-bottom: 4rem;
    margin-top: 2rem;
`;
